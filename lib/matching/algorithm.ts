import { createClient } from '@/lib/supabase/server'
import { generateEmbedding } from '@/lib/ai/openrouter'

interface MatchResult {
  productId: string
  similarity: number
}

export async function findBestMatch(
  itemText: string
): Promise<MatchResult | null> {
  const supabase = await createClient()

  // Generate embedding for the item
  const embedding = await generateEmbedding(itemText)

  // Search for similar products using pgvector
  const { data: matches, error } = await supabase.rpc(
    'search_products_by_embedding',
    {
      query_embedding: embedding,
      match_threshold: 0.5,
      match_count: 5,
    }
  )

  if (error || !matches || matches.length === 0) {
    return null
  }

  // Return best match
  const bestMatch = matches[0]

  return {
    productId: bestMatch.id,
    similarity: bestMatch.similarity,
  }
}

export function getMatchStatus(similarity: number): 'matched' | 'manual_review' | 'not_found' {
  if (similarity >= 0.75) {
    return 'matched'
  } else if (similarity >= 0.5) {
    return 'manual_review'
  } else {
    return 'not_found'
  }
}
