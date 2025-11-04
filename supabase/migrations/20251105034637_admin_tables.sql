-- ============================================
-- Kang Insurance 관리자 모드 Supabase 테이블
-- ============================================

-- 1. 상담 신청 테이블
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  message TEXT,
  agreed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. 추천 보험상품 테이블
CREATE TABLE IF NOT EXISTS recommended_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  insurance_type VARCHAR(50) NOT NULL, -- 'life', 'health', 'pension', etc.
  title VARCHAR(200) NOT NULL,
  description TEXT,
  image_url TEXT,
  content TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. 컨텐츠 편집 테이블 (각 섹션의 텍스트 관리)
CREATE TABLE IF NOT EXISTS content_edits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_name VARCHAR(100) NOT NULL, -- 'hero', 'promise', 'contact', etc.
  field_name VARCHAR(100) NOT NULL, -- 'title', 'subtitle', 'description', etc.
  content TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(section_name, field_name)
);

-- 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_recommended_products_insurance_type ON recommended_products(insurance_type);
CREATE INDEX IF NOT EXISTS idx_recommended_products_order ON recommended_products(order_index);
CREATE INDEX IF NOT EXISTS idx_content_edits_section ON content_edits(section_name);

-- Row Level Security (RLS) 활성화
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE recommended_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_edits ENABLE ROW LEVEL SECURITY;

-- Public 읽기 정책 (모든 사용자가 읽을 수 있음)
CREATE POLICY "Public can read contact_submissions" ON contact_submissions FOR SELECT USING (true);
CREATE POLICY "Public can read recommended_products" ON recommended_products FOR SELECT USING (true);
CREATE POLICY "Public can read content_edits" ON content_edits FOR SELECT USING (true);

-- Public 쓰기 정책 (상담 신청은 누구나 가능)
CREATE POLICY "Public can insert contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);

-- 관리자 전체 권한 정책 (authenticated 사용자만)
CREATE POLICY "Authenticated users can do everything on recommended_products" ON recommended_products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can do everything on content_edits" ON content_edits FOR ALL USING (auth.role() = 'authenticated');

-- Storage 버킷 생성 (보험 상품 이미지용)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('insurance-products', 'insurance-products', true)
ON CONFLICT (id) DO NOTHING;

-- Storage 정책 (누구나 읽을 수 있음)
CREATE POLICY "Public can read insurance-products" ON storage.objects FOR SELECT USING (bucket_id = 'insurance-products');

-- Storage 정책 (인증된 사용자만 업로드)
CREATE POLICY "Authenticated can upload insurance-products" ON storage.objects FOR INSERT WITH CHECK (
  bucket_id = 'insurance-products' AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated can update insurance-products" ON storage.objects FOR UPDATE USING (
  bucket_id = 'insurance-products' AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated can delete insurance-products" ON storage.objects FOR DELETE USING (
  bucket_id = 'insurance-products' AND auth.role() = 'authenticated'
);

