export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          id: string
          created_at: string
          title: string | null
          content: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string | null
          content?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string | null
          content?: string | null
        }
      }
      news: {
        Row: {
          id: string
          created_at: string
          title: string | null
          content: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string | null
          content?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string | null
          content?: string | null
        }
      }
      notes: {
        Row: {
          id: string
          created_at: string
          title: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string | null
        }
      }
      todos: {
        Row: {
          id: string
          created_at: string
          title: string | null
          completed: boolean
          user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string | null
          completed?: boolean
          user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string | null
          completed?: boolean
          user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
