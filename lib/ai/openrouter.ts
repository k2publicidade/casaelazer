import OpenAI from 'openai'

// OpenRouter is API-compatible with OpenAI
export const openrouter = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL,
    'X-Title': 'Casa e Lazer',
  },
})

// Extract items from uploaded file
export async function extractItemsFromFile(fileContent: string, fileName: string) {
  const response = await openrouter.chat.completions.create({
    model: 'openai/gpt-4o-mini', // Free tier model
    messages: [
      {
        role: 'system',
        content: `Você é um assistente especializado em extrair listas de materiais escolares de documentos.
Extraia TODOS os itens da lista fornecida e retorne um JSON array com o formato:
[{"item": "nome do item", "quantity": número}]

Regras:
- Identifique corretamente a quantidade de cada item
- Se não houver quantidade especificada, use 1
- Normalize os nomes (ex: "Caderno Univ." → "Caderno Universitário")
- Ignore cabeçalhos, rodapés e informações irrelevantes
- Retorne APENAS o JSON, sem texto adicional`,
      },
      {
        role: 'user',
        content: `Arquivo: ${fileName}\n\nConteúdo:\n${fileContent}`,
      },
    ],
    temperature: 0.3,
  })

  const content = response.choices[0]?.message?.content || '[]'

  try {
    return JSON.parse(content)
  } catch {
    // Try to extract JSON from markdown code block
    const match = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/)
    if (match) {
      return JSON.parse(match[1])
    }
    return []
  }
}

// Generate embeddings for semantic search
export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openrouter.embeddings.create({
    model: 'openai/text-embedding-3-small',
    input: text,
  })

  return response.data[0].embedding
}

// Generate embeddings for multiple texts (batch)
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const response = await openrouter.embeddings.create({
    model: 'openai/text-embedding-3-small',
    input: texts,
  })

  return response.data.map((d) => d.embedding)
}
