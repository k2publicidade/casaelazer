import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generatePDF } from '@/lib/pdf/generator'
import { generateExcel } from '@/lib/excel/generator'

export async function POST(request: NextRequest) {
  try {
    const { listId, format } = await request.json()

    if (!listId || !format) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!['pdf', 'excel'].includes(format)) {
      return NextResponse.json(
        { error: 'Invalid format. Use pdf or excel' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Get list with items
    const { data: list } = await supabase
      .from('material_lists')
      .select(`
        *,
        school:schools(name),
        items:list_items(
          *,
          product:products(*)
        )
      `)
      .eq('id', listId)
      .single()

    if (!list) {
      return NextResponse.json({ error: 'List not found' }, { status: 404 })
    }

    // Verify user owns this list
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || user.id !== list.user_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Separate matched and not found items
    const matchedItems = list.items.filter(
      (item: any) => item.status === 'matched' && item.product
    )
    const notFoundItems = list.items.filter(
      (item: any) => item.status === 'not_found' || !item.product
    )

    // Calculate total
    const total = matchedItems.reduce(
      (sum: number, item: any) => sum + item.quantity * item.product.price,
      0
    )

    const data = {
      list: {
        title: list.title,
        school: list.school,
      },
      matchedItems,
      notFoundItems,
      total,
    }

    if (format === 'pdf') {
      // Generate PDF
      const pdfBuffer = await generatePDF(data)

      return new NextResponse(pdfBuffer.buffer as any, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="orcamento-${listId}.pdf"`,
        },
      })
    } else {
      // Generate Excel
      const excelBuffer = await generateExcel(data)

      return new NextResponse(Buffer.from(excelBuffer), {
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'Content-Disposition': `attachment; filename="orcamento-${listId}.xlsx"`,
        },
      })
    }
  } catch (error: any) {
    console.error('Export error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to export' },
      { status: 500 }
    )
  }
}
