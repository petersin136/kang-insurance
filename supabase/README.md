# Supabase 데이터베이스 설정

이 폴더는 Supabase 데이터베이스 스키마와 마이그레이션 파일을 관리합니다.

## 설정 방법

### 1. Supabase 프로젝트 정보
- Project URL: https://bfvrunxorsxgmeykvfru.supabase.co
- Anon Key: 환경 변수 파일에 설정됨
- Service Role Key: 환경 변수 파일에 설정됨

### 2. 데이터베이스 스키마 적용

SQL 스키마 파일을 `migrations/` 폴더에 추가한 후, Supabase Dashboard에서 SQL Editor를 통해 실행하거나, Supabase CLI를 사용하여 적용할 수 있습니다.

#### Supabase Dashboard 사용
1. https://app.supabase.com 접속
2. 프로젝트 선택
3. SQL Editor 메뉴 이동
4. SQL 스크립트 붙여넣기 및 실행

#### Supabase CLI 사용
```bash
# Supabase CLI 설치 (미설치 시)
npm install -g supabase

# 프로젝트 링크
supabase link --project-ref bfvrunxorsxgmeykvfru

# 마이그레이션 적용
supabase db push
```

### 3. 필요한 테이블

프로젝트에 필요한 주요 테이블:
- `insurance_products` - 보험 상품
- `testimonials` - 고객 후기
- `cases` - 성공 사례
- `consultations` - 상담 신청
- `blog_posts` - 블로그 포스트
- `sections` - 페이지 섹션
- `pages` - 페이지
- `site_settings` - 사이트 설정

### 4. Storage Buckets

필요한 스토리지 버킷:
- `images` - 이미지 파일
- `documents` - 문서 파일

각 버킷은 Public 또는 Private 설정에 따라 접근 제어가 필요합니다.

### 5. Row Level Security (RLS)

보안을 위해 각 테이블에 RLS 정책을 설정해야 합니다:
- 공개 데이터: 읽기 권한만 허용
- 관리자 데이터: 인증된 사용자만 수정 가능

## TypeScript 타입 생성

데이터베이스 스키마가 변경되면 TypeScript 타입을 업데이트해야 합니다:

```bash
npx supabase gen types typescript --project-id bfvrunxorsxgmeykvfru > types/database.ts
```

