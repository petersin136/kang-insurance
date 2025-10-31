-- ============================================
-- 보험설계사 홈페이지 초기 스키마
-- 작성일: 2024-10-30
-- ============================================

-- 스키마 생성
CREATE SCHEMA IF NOT EXISTS app_public;

-- ============================================
-- 1. 사용자 프로필 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'editor', 'admin')),
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 프로필 RLS 활성화
ALTER TABLE app_public.profiles ENABLE ROW LEVEL SECURITY;

-- 프로필 정책: 자신의 프로필만 조회
CREATE POLICY "사용자는 자신의 프로필만 조회"
ON app_public.profiles FOR SELECT
USING (auth.uid() = id);

-- 프로필 정책: 자신의 프로필만 수정
CREATE POLICY "사용자는 자신의 프로필만 수정"
ON app_public.profiles FOR UPDATE
USING (auth.uid() = id);

-- ============================================
-- 2. 보험 상품 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.insurance_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  features JSONB DEFAULT '[]'::JSONB,
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 보험 상품 RLS 활성화
ALTER TABLE app_public.insurance_products ENABLE ROW LEVEL SECURITY;

-- 보험 상품 정책: 누구나 활성 상품 조회
CREATE POLICY "누구나 활성 보험 상품 조회"
ON app_public.insurance_products FOR SELECT
USING (is_active = true);

-- 보험 상품 정책: 관리자만 수정
CREATE POLICY "관리자만 보험 상품 수정"
ON app_public.insurance_products FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'editor')
  )
);

-- ============================================
-- 3. 고객 후기 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  insurance_type TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 고객 후기 RLS 활성화
ALTER TABLE app_public.testimonials ENABLE ROW LEVEL SECURITY;

-- 고객 후기 정책: 누구나 활성 후기 조회
CREATE POLICY "누구나 활성 고객 후기 조회"
ON app_public.testimonials FOR SELECT
USING (is_active = true);

-- 고객 후기 정책: 관리자만 수정
CREATE POLICY "관리자만 고객 후기 수정"
ON app_public.testimonials FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'editor')
  )
);

-- ============================================
-- 4. 성공 사례 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  client_name TEXT,
  insurance_type TEXT NOT NULL,
  image_url TEXT,
  result TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 성공 사례 RLS 활성화
ALTER TABLE app_public.cases ENABLE ROW LEVEL SECURITY;

-- 성공 사례 정책: 누구나 활성 사례 조회
CREATE POLICY "누구나 활성 성공 사례 조회"
ON app_public.cases FOR SELECT
USING (is_active = true);

-- 성공 사례 정책: 관리자만 수정
CREATE POLICY "관리자만 성공 사례 수정"
ON app_public.cases FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'editor')
  )
);

-- ============================================
-- 5. 상담 신청 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  consultation_type TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 상담 신청 RLS 활성화
ALTER TABLE app_public.consultations ENABLE ROW LEVEL SECURITY;

-- 상담 신청 정책: 누구나 신청 가능
CREATE POLICY "누구나 상담 신청 가능"
ON app_public.consultations FOR INSERT
WITH CHECK (true);

-- 상담 신청 정책: 관리자만 조회/수정
CREATE POLICY "관리자만 상담 신청 관리"
ON app_public.consultations FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'editor')
  )
);

-- ============================================
-- 6. 블로그 포스트 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  category TEXT NOT NULL,
  author_id UUID REFERENCES app_public.profiles(id),
  is_published BOOLEAN NOT NULL DEFAULT false,
  views INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 블로그 포스트 RLS 활성화
ALTER TABLE app_public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 블로그 포스트 정책: 누구나 발행된 글 조회
CREATE POLICY "누구나 발행된 블로그 조회"
ON app_public.blog_posts FOR SELECT
USING (is_published = true);

-- 블로그 포스트 정책: 관리자만 수정
CREATE POLICY "관리자만 블로그 관리"
ON app_public.blog_posts FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'editor')
  )
);

-- ============================================
-- 7. 페이지 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  meta_description TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 페이지 RLS 활성화
ALTER TABLE app_public.pages ENABLE ROW LEVEL SECURITY;

-- 페이지 정책: 누구나 발행된 페이지 조회
CREATE POLICY "누구나 발행된 페이지 조회"
ON app_public.pages FOR SELECT
USING (is_published = true);

-- 페이지 정책: 관리자만 수정
CREATE POLICY "관리자만 페이지 관리"
ON app_public.pages FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'editor')
  )
);

-- ============================================
-- 8. 섹션 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES app_public.pages(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL,
  title TEXT,
  content TEXT,
  image_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  settings JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 섹션 RLS 활성화
ALTER TABLE app_public.sections ENABLE ROW LEVEL SECURITY;

-- 섹션 정책: 누구나 활성 섹션 조회
CREATE POLICY "누구나 활성 섹션 조회"
ON app_public.sections FOR SELECT
USING (is_active = true);

-- 섹션 정책: 관리자만 수정
CREATE POLICY "관리자만 섹션 관리"
ON app_public.sections FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'editor')
  )
);

-- ============================================
-- 9. 사이트 설정 테이블
-- ============================================
CREATE TABLE IF NOT EXISTS app_public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_name TEXT NOT NULL DEFAULT '보험설계사 강재구',
  site_description TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  address TEXT,
  logo_url TEXT,
  social_links JSONB DEFAULT '{}'::JSONB,
  business_hours TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 사이트 설정 RLS 활성화
ALTER TABLE app_public.site_settings ENABLE ROW LEVEL SECURITY;

-- 사이트 설정 정책: 누구나 조회
CREATE POLICY "누구나 사이트 설정 조회"
ON app_public.site_settings FOR SELECT
USING (true);

-- 사이트 설정 정책: 관리자만 수정
CREATE POLICY "관리자만 사이트 설정 수정"
ON app_public.site_settings FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- 기본 사이트 설정 삽입
INSERT INTO app_public.site_settings (
  site_name,
  site_description,
  contact_email,
  contact_phone,
  address,
  social_links,
  business_hours
) VALUES (
  '보험설계사 강재구',
  '고객 맞춤형 보험 설계로 안전한 미래를 준비하세요',
  'info@kang-insurance.com',
  '010-XXXX-XXXX',
  '서울특별시 강남구 테헤란로 123',
  '{"facebook": "", "instagram": "", "kakao": "", "blog": ""}'::JSONB,
  '평일 09:00-18:00, 토요일 09:00-13:00, 일요일/공휴일 휴무'
) ON CONFLICT DO NOTHING;

-- ============================================
-- Storage: public-media 버킷 생성
-- ============================================

-- public-media 버킷 생성 (이미 있다면 Skip)
INSERT INTO storage.buckets (id, name, public)
VALUES ('public-media', 'public-media', true)
ON CONFLICT DO NOTHING;

-- Storage 정책: 누구나 읽기 가능
CREATE POLICY "누구나 미디어 조회 가능"
ON storage.objects FOR SELECT
USING (bucket_id = 'public-media');

-- Storage 정책: 인증된 사용자만 업로드
CREATE POLICY "인증된 사용자만 업로드"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'public-media' AND
  auth.role() = 'authenticated'
);

-- Storage 정책: 관리자만 삭제
CREATE POLICY "관리자만 삭제"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'public-media' AND
  EXISTS (
    SELECT 1 FROM app_public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'editor')
  )
);

-- ============================================
-- 인덱스 생성 (성능 최적화)
-- ============================================

-- 보험 상품 인덱스
CREATE INDEX IF NOT EXISTS idx_insurance_products_category ON app_public.insurance_products(category);
CREATE INDEX IF NOT EXISTS idx_insurance_products_is_active ON app_public.insurance_products(is_active);
CREATE INDEX IF NOT EXISTS idx_insurance_products_order_index ON app_public.insurance_products(order_index);

-- 고객 후기 인덱스
CREATE INDEX IF NOT EXISTS idx_testimonials_is_active ON app_public.testimonials(is_active);
CREATE INDEX IF NOT EXISTS idx_testimonials_order_index ON app_public.testimonials(order_index);

-- 성공 사례 인덱스
CREATE INDEX IF NOT EXISTS idx_cases_insurance_type ON app_public.cases(insurance_type);
CREATE INDEX IF NOT EXISTS idx_cases_is_active ON app_public.cases(is_active);

-- 상담 신청 인덱스
CREATE INDEX IF NOT EXISTS idx_consultations_status ON app_public.consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON app_public.consultations(created_at DESC);

-- 블로그 포스트 인덱스
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON app_public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON app_public.blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_published ON app_public.blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON app_public.blog_posts(created_at DESC);

-- 페이지 인덱스
CREATE INDEX IF NOT EXISTS idx_pages_slug ON app_public.pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_is_published ON app_public.pages(is_published);

-- 섹션 인덱스
CREATE INDEX IF NOT EXISTS idx_sections_page_id ON app_public.sections(page_id);
CREATE INDEX IF NOT EXISTS idx_sections_order_index ON app_public.sections(order_index);

-- ============================================
-- 트리거 함수: updated_at 자동 업데이트
-- ============================================
CREATE OR REPLACE FUNCTION app_public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- updated_at 트리거 적용
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON app_public.profiles
  FOR EACH ROW EXECUTE FUNCTION app_public.update_updated_at_column();

CREATE TRIGGER update_insurance_products_updated_at
  BEFORE UPDATE ON app_public.insurance_products
  FOR EACH ROW EXECUTE FUNCTION app_public.update_updated_at_column();

CREATE TRIGGER update_consultations_updated_at
  BEFORE UPDATE ON app_public.consultations
  FOR EACH ROW EXECUTE FUNCTION app_public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON app_public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION app_public.update_updated_at_column();

CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON app_public.pages
  FOR EACH ROW EXECUTE FUNCTION app_public.update_updated_at_column();

CREATE TRIGGER update_sections_updated_at
  BEFORE UPDATE ON app_public.sections
  FOR EACH ROW EXECUTE FUNCTION app_public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON app_public.site_settings
  FOR EACH ROW EXECUTE FUNCTION app_public.update_updated_at_column();

-- ============================================
-- 완료 메시지
-- ============================================
DO $$
BEGIN
  RAISE NOTICE '데이터베이스 스키마가 성공적으로 생성되었습니다!';
  RAISE NOTICE '- 9개 테이블 생성 완료';
  RAISE NOTICE '- Storage 버킷 및 정책 설정 완료';
  RAISE NOTICE '- RLS 정책 적용 완료';
  RAISE NOTICE '- 인덱스 및 트리거 생성 완료';
END $$;

