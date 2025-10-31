// 보험 상품 타입
export interface InsuranceProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image_url?: string;
  is_active: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

// 고객 후기 타입
export interface Testimonial {
  id: string;
  client_name: string;
  content: string;
  rating: number;
  image_url?: string;
  is_active: boolean;
  order_index: number;
  created_at: string;
}

// 성공 사례 타입
export interface Case {
  id: string;
  title: string;
  description: string;
  client_name?: string;
  insurance_type: string;
  image_url?: string;
  result: string;
  is_active: boolean;
  created_at: string;
}

// 상담 신청 타입
export interface Consultation {
  id: string;
  name: string;
  phone: string;
  email?: string;
  consultation_type: string;
  message?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

// 블로그 포스트 타입
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image_url?: string;
  category: string;
  is_published: boolean;
  views: number;
  created_at: string;
  updated_at: string;
}

// 섹션 타입
export interface Section {
  id: string;
  page_id: string;
  section_type: string;
  title?: string;
  content?: string;
  image_url?: string;
  order_index: number;
  is_active: boolean;
  settings?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

// 페이지 타입
export interface Page {
  id: string;
  slug: string;
  title: string;
  meta_description?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

// 사이트 설정 타입
export interface SiteSettings {
  id: string;
  site_name: string;
  site_description?: string;
  contact_email?: string;
  contact_phone?: string;
  address?: string;
  logo_url?: string;
  social_links?: {
    facebook?: string;
    instagram?: string;
    kakao?: string;
    blog?: string;
  };
  business_hours?: string;
  updated_at: string;
}

