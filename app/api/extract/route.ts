import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { extractItemsFromFile } from '@/lib/ai/openrouter'

export async function POST(request: NextRequest) {
  try {
    const { listId, fileUrl, fileName } = await request.json()

    if (!listId || !fileUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Verify user owns this list
    const { data: list } = await supabase
      .from('material_lists')
      .select('user_id')
      .eq('id', listId)
      .single()

    if (!list) {
      return NextResponse.json({ error: 'List not found' }, { status: 404 })
    }

    const { data: { user } } = await supabase.auth.getUser()
    if (!user || user.id !== list.user_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Download file content
    const fileResponse = await fetch(fileUrl)
    if (!fileResponse.ok) {
      throw new Error('Failed to download file')
    }

    const fileContent = await fileResponse.text()

    // Extract items using AI
    const items = await extractItemsFromFile(fileContent, fileName)

    if (!items || items.length === 0) {
      throw new Error('No items extracted from file')
    }

    // Save items to database
    const itemsToInsert = items.map((item: any) => ({
      list_id: listId,
      raw_text: item.item,
      quantity: item.quantity || 1,
      status: 'pending',
    }))

    const { error: insertError } = await supabase
      .from('list_items')
      .insert(itemsToInsert)

    if (insertError) throw insertError

    return NextResponse.json({
      success: true,
      itemsCount: items.length,
    })
  } catch (error: any) {
    console.error('Extract error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to extract items' },
      { status: 500 }
    )
  }
}
