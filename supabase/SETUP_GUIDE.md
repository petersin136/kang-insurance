# Supabase 데이터베이스 설정 가이드

## 📋 개요

이 가이드는 보험설계사 홈페이지에 필요한 Supabase 데이터베이스 스키마를 적용하는 방법을 안내합니다.

## 🎯 Supabase 프로젝트 정보

- **Project URL**: https://bfvrunxorsxgmeykvfru.supabase.co
- **Project ID**: bfvrunxorsxgmeykvfru
- **Region**: 설정된 리전 사용

## 📝 스키마 적용 단계

### 방법 1: Supabase Dashboard (추천) 👍

가장 간단하고 안전한 방법입니다.

#### 1단계: Supabase Dashboard 접속

1. 브라우저에서 https://app.supabase.com 열기
2. 로그인 (MCP 토큰 사용: `sbp_aafe32822590653c79b1b1aa869a2f7d000fa8db`)
3. 프로젝트 목록에서 **bfvrunxorsxgmeykvfru** 선택

#### 2단계: SQL Editor 열기

1. 왼쪽 메뉴에서 **SQL Editor** 클릭
2. **New Query** 버튼 클릭

#### 3단계: 초기 스키마 적용

1. `supabase/migrations/20241030_initial_schema.sql` 파일 열기
2. 전체 내용 복사 (Cmd/Ctrl + A → Cmd/Ctrl + C)
3. SQL Editor에 붙여넣기 (Cmd/Ctrl + V)
4. **RUN** 버튼 클릭 또는 (Cmd/Ctrl + Enter)
5. 성공 메시지 확인:
   ```
   데이터베이스 스키마가 성공적으로 생성되었습니다!
   - 9개 테이블 생성 완료
   - Storage 버킷 및 정책 설정 완료
   - RLS 정책 적용 완료
   - 인덱스 및 트리거 생성 완료
   ```

#### 4단계: 샘플 데이터 삽입 (선택사항)

1. **New Query** 버튼으로 새 쿼리 창 열기
2. `supabase/migrations/20241030_seed_data.sql` 파일 열기
3. 전체 내용 복사하여 붙여넣기
4. **RUN** 버튼 클릭
5. 성공 메시지 확인:
   ```
   샘플 데이터가 성공적으로 삽입되었습니다!
   - 보험 상품: 8개
   - 고객 후기: 6개
   - 성공 사례: 3개
   - 블로그 포스트: 3개
   ```

#### 5단계: 데이터 확인

1. 왼쪽 메뉴에서 **Table Editor** 클릭
2. 생성된 테이블 목록 확인:
   - `app_public.profiles`
   - `app_public.insurance_products`
   - `app_public.testimonials`
   - `app_public.cases`
   - `app_public.consultations`
   - `app_public.blog_posts`
   - `app_public.pages`
   - `app_public.sections`
   - `app_public.site_settings`

3. 각 테이블을 클릭하여 데이터 확인

#### 6단계: Storage 버킷 확인

1. 왼쪽 메뉴에서 **Storage** 클릭
2. `public-media` 버킷이 생성되었는지 확인
3. 버킷을 클릭하여 정책 확인

---

### 방법 2: Supabase CLI 사용

개발자용 방법입니다.

#### 1단계: Supabase CLI 설치

```bash
npm install -g supabase
```

#### 2단계: 프로젝트 링크

```bash
cd /Users/seung-yongmaegbug/kang-insurance
supabase link --project-ref bfvrunxorsxgmeykvfru
```

프롬프트가 나타나면 액세스 토큰 입력: `sbp_aafe32822590653c79b1b1aa869a2f7d000fa8db`

#### 3단계: 마이그레이션 적용

```bash
# 모든 마이그레이션 파일 적용
supabase db push

# 또는 특정 파일만 적용
supabase db execute --file supabase/migrations/20241030_initial_schema.sql
supabase db execute --file supabase/migrations/20241030_seed_data.sql
```

#### 4단계: 마이그레이션 상태 확인

```bash
supabase migration list
```

---

## ✅ 스키마 적용 확인

### 1. 테이블 생성 확인

다음 SQL을 실행하여 모든 테이블이 생성되었는지 확인:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'app_public'
ORDER BY table_name;
```

예상 결과 (9개 테이블):
- blog_posts
- cases
- consultations
- insurance_products
- pages
- profiles
- sections
- site_settings
- testimonials

### 2. Storage 버킷 확인

```sql
SELECT * FROM storage.buckets;
```

예상 결과:
- id: `public-media`
- name: `public-media`
- public: `true`

### 3. RLS 정책 확인

```sql
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE schemaname = 'app_public'
ORDER BY tablename, policyname;
```

각 테이블에 2-3개의 정책이 설정되어 있어야 합니다.

### 4. 샘플 데이터 확인

```sql
-- 보험 상품 수
SELECT COUNT(*) FROM app_public.insurance_products;
-- 결과: 8

-- 고객 후기 수
SELECT COUNT(*) FROM app_public.testimonials;
-- 결과: 6

-- 성공 사례 수
SELECT COUNT(*) FROM app_public.cases;
-- 결과: 3

-- 블로그 포스트 수
SELECT COUNT(*) FROM app_public.blog_posts;
-- 결과: 3
```

---

## 🔧 트러블슈팅

### 문제 1: "relation already exists" 오류

**원인**: 테이블이 이미 존재함

**해결책**: 
```sql
-- 기존 테이블 삭제 (주의: 데이터도 삭제됨)
DROP SCHEMA IF EXISTS app_public CASCADE;

-- 다시 스키마 실행
-- 20241030_initial_schema.sql 다시 실행
```

### 문제 2: "permission denied" 오류

**원인**: RLS 정책으로 인한 권한 부족

**해결책**:
1. Supabase Dashboard에서 SQL Editor 사용 (서비스 롤 권한)
2. 또는 `SUPABASE_SERVICE_ROLE_KEY` 사용하여 API 호출

### 문제 3: Storage 정책이 적용되지 않음

**원인**: 버킷이 먼저 생성되지 않음

**해결책**:
```sql
-- 버킷 먼저 확인
SELECT * FROM storage.buckets WHERE id = 'public-media';

-- 없으면 수동 생성
INSERT INTO storage.buckets (id, name, public)
VALUES ('public-media', 'public-media', true)
ON CONFLICT DO NOTHING;

-- 정책 다시 적용
-- Storage 정책 SQL 다시 실행
```

### 문제 4: 프로필 테이블에 데이터가 없음

**원인**: auth.users 테이블에 사용자가 없음

**해결책**:
1. Supabase Dashboard → Authentication 메뉴
2. 테스트 사용자 생성 (관리자 계정)
3. SQL로 role 업데이트:
```sql
UPDATE app_public.profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

---

## 🎯 다음 단계

스키마 적용이 완료되면:

1. ✅ 개발 서버 재시작: `npm run dev`
2. ✅ 홈페이지 접속: http://localhost:3000
3. ✅ 샘플 데이터 확인:
   - 보험 상품 섹션
   - 고객 후기 섹션
   - 블로그 페이지
4. ✅ 관리자 페이지 접속: http://localhost:3000/admin/dashboard

---

## 📚 추가 리소스

- [Supabase RLS 가이드](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Storage 가이드](https://supabase.com/docs/guides/storage)
- [PostgreSQL 공식 문서](https://www.postgresql.org/docs/)

---

## 💡 팁

### 개발 중 데이터 초기화

데이터를 초기화하고 싶을 때:

```sql
-- 모든 데이터 삭제 (테이블 구조는 유지)
TRUNCATE TABLE app_public.insurance_products RESTART IDENTITY CASCADE;
TRUNCATE TABLE app_public.testimonials RESTART IDENTITY CASCADE;
TRUNCATE TABLE app_public.cases RESTART IDENTITY CASCADE;
TRUNCATE TABLE app_public.consultations RESTART IDENTITY CASCADE;
TRUNCATE TABLE app_public.blog_posts RESTART IDENTITY CASCADE;

-- 샘플 데이터 다시 삽입
-- 20241030_seed_data.sql 다시 실행
```

### TypeScript 타입 자동 생성

스키마 변경 후 TypeScript 타입 업데이트:

```bash
npx supabase gen types typescript --project-id bfvrunxorsxgmeykvfru > types/database.ts
```

---

문제가 발생하면 [Supabase Discord](https://discord.supabase.com)나 프로젝트 담당자에게 문의하세요!

