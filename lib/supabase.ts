import { createClient } from '@supabase/supabase-js'

// 환경변수에서 가져오기
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 타입 정의
export interface ContactSubmission {
  id?: string
  name: string
  phone: string
  email?: string
  message?: string
  agreed: boolean
  created_at?: string
}

export interface RecommendedProduct {
  id?: string
  insurance_type: string
  title: string
  description?: string
  image_url?: string
  content?: string
  order_index?: number
  created_at?: string
}

export interface ContentEdit {
  id?: string
  section_name: string
  field_name: string
  content: string
  updated_at?: string
}
