export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          excerpt: string | null
          featured_image: string | null
          author_id: string | null
          published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      list_items: {
        Row: {
          id: string
          list_id: string
          raw_text: string
          quantity: number
          matched_product_id: string | null
          confidence_score: number | null
          status: 'matched' | 'not_found' | 'manual_review' | 'pending'
          created_at: string
        }
        Insert: {
          id?: string
          list_id: string
          raw_text: string
          quantity?: number
          matched_product_id?: string | null
          confidence_score?: number | null
          status?: 'matched' | 'not_found' | 'manual_review' | 'pending'
          created_at?: string
        }
        Update: {
          id?: string
          list_id?: string
          raw_text?: string
          quantity?: number
          matched_product_id?: string | null
          confidence_score?: number | null
          status?: 'matched' | 'not_found' | 'manual_review' | 'pending'
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "list_items_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "material_lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "list_items_matched_product_id_fkey"
            columns: ["matched_product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      material_lists: {
        Row: {
          id: string
          title: string
          school_id: string | null
          user_id: string
          year: number | null
          grade: string | null
          is_public: boolean
          original_file_url: string | null
          status: 'processing' | 'completed' | 'failed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          school_id?: string | null
          user_id: string
          year?: number | null
          grade?: string | null
          is_public?: boolean
          original_file_url?: string | null
          status?: 'processing' | 'completed' | 'failed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          school_id?: string | null
          user_id?: string
          year?: number | null
          grade?: string | null
          is_public?: boolean
          original_file_url?: string | null
          status?: 'processing' | 'completed' | 'failed'
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "material_lists_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "material_lists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      pages: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          metadata: Json
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          metadata?: Json
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          metadata?: Json
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      product_categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          parent_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          parent_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          parent_id?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          id: string
          sku: string
          name: string
          description: string | null
          category: string
          subcategory: string | null
          price: number
          stock_quantity: number
          image_url: string | null
          active: boolean
          embedding: number[] | null
          metadata: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          sku: string
          name: string
          description?: string | null
          category: string
          subcategory?: string | null
          price: number
          stock_quantity?: number
          image_url?: string | null
          active?: boolean
          embedding?: number[] | null
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          sku?: string
          name?: string
          description?: string | null
          category?: string
          subcategory?: string | null
          price?: number
          stock_quantity?: number
          image_url?: string | null
          active?: boolean
          embedding?: number[] | null
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          role: 'admin' | 'school' | 'parent'
          full_name: string | null
          phone: string | null
          school_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          role: 'admin' | 'school' | 'parent'
          full_name?: string | null
          phone?: string | null
          school_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          role?: 'admin' | 'school' | 'parent'
          full_name?: string | null
          phone?: string | null
          school_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          }
        ]
      }
      schools: {
        Row: {
          id: string
          name: string
          cnpj: string | null
          address: string | null
          city: string | null
          state: string | null
          phone: string | null
          email: string | null
          logo_url: string | null
          active: boolean
          user_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          cnpj?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          phone?: string | null
          email?: string | null
          logo_url?: string | null
          active?: boolean
          user_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          cnpj?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          phone?: string | null
          email?: string | null
          logo_url?: string | null
          active?: boolean
          user_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "schools_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      sql_import_logs: {
        Row: {
          id: string
          admin_id: string | null
          filename: string | null
          rows_affected: number
          status: 'success' | 'failed' | 'partial' | null
          error_log: string | null
          backup_file: string | null
          executed_at: string
        }
        Insert: {
          id?: string
          admin_id?: string | null
          filename?: string | null
          rows_affected?: number
          status?: 'success' | 'failed' | 'partial' | null
          error_log?: string | null
          backup_file?: string | null
          executed_at?: string
        }
        Update: {
          id?: string
          admin_id?: string | null
          filename?: string | null
          rows_affected?: number
          status?: 'success' | 'failed' | 'partial' | null
          error_log?: string | null
          backup_file?: string | null
          executed_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sql_import_logs_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {}
    Functions: {
      get_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_school: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      search_products_by_embedding: {
        Args: {
          query_embedding: number[]
          match_threshold?: number
          match_count?: number
        }
        Returns: {
          id: string
          sku: string
          name: string
          description: string | null
          price: number
          image_url: string | null
          similarity: number
        }[]
      }
    }
    Enums: {}
  }
}
