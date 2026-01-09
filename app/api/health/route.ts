import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const checks = {
    supabase: { status: 'unknown', message: '' },
    openrouter: { status: 'unknown', message: '' },
    database: { status: 'unknown', message: '' },
  }

  // Check Supabase connection
  try {
    const supabase = await createClient()
    const { error } = await supabase.from('profiles').select('count').limit(1).single()

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned (OK)
      checks.supabase = { status: 'error', message: error.message }
    } else {
      checks.supabase = { status: 'ok', message: 'Connected successfully' }
    }
  } catch (error) {
    checks.supabase = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }

  // Check OpenRouter API key
  if (process.env.OPENROUTER_API_KEY) {
    if (process.env.OPENROUTER_API_KEY.startsWith('sk-or-v1-')) {
      checks.openrouter = { status: 'ok', message: 'API key configured' }
    } else {
      checks.openrouter = { status: 'warning', message: 'API key format invalid' }
    }
  } else {
    checks.openrouter = { status: 'error', message: 'API key not configured' }
  }

  // Check database tables
  try {
    const supabase = await createClient()
    const tables = [
      'profiles',
      'schools',
      'products',
      'product_categories',
      'material_lists',
      'list_items',
      'blog_posts',
      'pages',
      'sql_import_logs'
    ]

    const results = await Promise.all(
      tables.map(async (table) => {
        const { error } = await supabase.from(table).select('count').limit(1)
        return { table, exists: !error }
      })
    )

    const allTablesExist = results.every(r => r.exists)
    const existingTables = results.filter(r => r.exists).map(r => r.table)

    checks.database = {
      status: allTablesExist ? 'ok' : 'warning',
      message: allTablesExist
        ? `All ${tables.length} tables exist`
        : `Missing tables: ${results.filter(r => !r.exists).map(r => r.table).join(', ')}`
    }
  } catch (error) {
    checks.database = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }

  const allOk = Object.values(checks).every(check => check.status === 'ok')

  return NextResponse.json(
    {
      status: allOk ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      checks,
      environment: {
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? '✓ Configured' : '✗ Missing',
        supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✓ Configured' : '✗ Missing',
        openrouterKey: process.env.OPENROUTER_API_KEY ? '✓ Configured' : '✗ Missing',
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'Not configured',
      },
    },
    { status: allOk ? 200 : 503 }
  )
}
