import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { findBestMatch, getMatchStatus } from '@/lib/matching/algorithm'

export const maxDuration = 300 // 5 minutes for API route

export async function POST(request: NextRequest) {
  try {
    const { listId } = await request.json()

    if (!listId) {
      return NextResponse.json(
        { error: 'Missing listId' },
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

    // Get all pending items from the list
    const { data: items } = await supabase
      .from('list_items')
      .select('id, raw_text')
      .eq('list_id', listId)
      .eq('status', 'pending')

    if (!items || items.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No items to match',
      })
    }

    let matchedCount = 0
    let reviewCount = 0
    let notFoundCount = 0

    // Process each item
    for (const item of items) {
      try {
        const match = await findBestMatch(item.raw_text)

        if (match) {
          const status = getMatchStatus(match.similarity)

          await supabase
            .from('list_items')
            .update({
              matched_product_id: match.productId,
              confidence_score: match.similarity,
              status,
            })
            .eq('id', item.id)

          if (status === 'matched') matchedCount++
          else if (status === 'manual_review') reviewCount++
          else notFoundCount++
        } else {
          await supabase
            .from('list_items')
            .update({ status: 'not_found' })
            .eq('id', item.id)

          notFoundCount++
        }
      } catch (error) {
        console.error(`Error matching item ${item.id}:`, error)
        // Continue with next item
      }
    }

    return NextResponse.json({
      success: true,
      stats: {
        total: items.length,
        matched: matchedCount,
        review: reviewCount,
        notFound: notFoundCount,
      },
    })
  } catch (error: any) {
    console.error('Match error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to match items' },
      { status: 500 }
    )
  }
}
