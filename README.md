# 보험설계사 강재구 홈페이지

Next.js + TypeScript + Tailwind CSS + Supabase로 구축된 보험설계사 전문 홈페이지

## 🚀 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **데이터베이스**: Supabase (PostgreSQL)
- **인증**: Supabase Auth
- **스토리지**: Supabase Storage
- **배포**: Vercel

## 📦 프로젝트 구조

```
kang-insurance/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # 메인 레이아웃
│   ├── page.tsx               # 홈페이지
│   ├── globals.css            # 전역 스타일
│   ├── admin/                 # 관리자 페이지
│   │   ├── layout.tsx
│   │   └── dashboard/
│   ├── insurance-products/    # 보험 상품 페이지
│   ├── consultation/          # 상담 신청 페이지
│   ├── cases/                 # 성공 사례 페이지
│   └── blog/                  # 블로그 페이지
├── components/                # React 컴포넌트
│   ├── Navigation.tsx         # 네비게이션
│   ├── Footer.tsx             # 푸터
│   ├── admin/                 # 관리자 컴포넌트
│   └── sections/              # 페이지 섹션
├── lib/                       # 유틸리티 함수
│   └── supabase.ts           # Supabase 클라이언트
├── types/                     # TypeScript 타입
│   └── index.ts
├── supabase/                  # Supabase 설정
│   ├── README.md
│   └── migrations/            # SQL 마이그레이션
└── .env.local                 # 환경 변수 (git ignore)
```

## 🛠️ 설치 및 실행

### 1. 저장소 클론 및 의존성 설치

```bash
cd kang-insurance
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일이 이미 설정되어 있습니다:

```env
NEXT_PUBLIC_SUPABASE_URL=https://bfvrunxorsxgmeykvfru.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Supabase 데이터베이스 설정

#### 방법 1: Supabase Dashboard 사용 (추천)

1. https://app.supabase.com 접속
2. 프로젝트 선택 (bfvrunxorsxgmeykvfru)
3. SQL Editor 메뉴 이동
4. 다음 파일들을 순서대로 실행:
   - `supabase/migrations/20241030_initial_schema.sql`
   - `supabase/migrations/20241030_seed_data.sql`

#### 방법 2: Supabase CLI 사용

```bash
# Supabase CLI 설치
npm install -g supabase

# 프로젝트 링크
supabase link --project-ref bfvrunxorsxgmeykvfru

# 마이그레이션 적용
supabase db push
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 열기

## 🎯 주요 페이지

### 공개 페이지
- **홈페이지** (`/`): Hero, About, Services, Process, Testimonials, Stats, Contact 섹션
- **보험 상품** (`/insurance-products`): 보험 상품 카탈로그
- **상담 신청** (`/consultation`): 온라인 상담 신청 폼
- **성공 사례** (`/cases`): 고객 성공 사례
- **블로그** (`/blog`): 보험 정보 블로그
- **소개** (`/about`): 상세 소개 페이지

### 관리자 페이지 (`/admin`)
- **대시보드** (`/admin/dashboard`): 통계 및 최근 상담 신청
- **페이지 관리** (`/admin/pages`): 페이지 생성/수정
- **섹션 관리** (`/admin/sections`): 드래그앤드롭 섹션 편집
- **미디어 관리** (`/admin/media`): 이미지 업로드/관리
- **보험 상품** (`/admin/products`): 보험 상품 관리
- **고객 후기** (`/admin/testimonials`): 고객 후기 관리
- **성공 사례** (`/admin/cases`): 성공 사례 관리
- **블로그 글** (`/admin/posts`): 블로그 포스트 작성/관리
- **상담 신청** (`/admin/consultations`): 상담 신청 관리
- **사이트 설정** (`/admin/settings`): 전역 사이트 설정

## 📊 데이터베이스 구조

### 주요 테이블

1. **profiles** - 사용자 프로필 (관리자/에디터/일반 사용자)
2. **insurance_products** - 보험 상품
3. **testimonials** - 고객 후기
4. **cases** - 성공 사례
5. **consultations** - 상담 신청
6. **blog_posts** - 블로그 포스트
7. **sections** - 페이지 섹션 (동적 편집)
8. **pages** - 페이지
9. **site_settings** - 사이트 전역 설정

### Storage Buckets

- **public-media**: 공개 이미지 및 미디어 파일
  - 누구나 조회 가능
  - 인증된 사용자만 업로드
  - 관리자만 삭제

## 🔒 보안 (Row Level Security)

모든 테이블에 RLS 정책이 적용되어 있습니다:

- **공개 데이터**: 활성화된 데이터만 조회 가능
- **상담 신청**: 누구나 신청 가능, 관리자만 조회/관리
- **관리 기능**: admin/editor 역할만 수정 가능

## 🎨 스타일 가이드

### 색상 테마
- Primary: `#1e40af` (파란색)
- Secondary: `#3b82f6`
- Accent: `#60a5fa`

### 폰트
- 본문: Noto Sans KR (300, 400, 500, 700)

### 반응형 브레이크포인트
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚢 배포 (Vercel)

### 자동 배포 설정

1. Vercel에 프로젝트 연결
2. 환경 변수 설정:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. 브랜치 배포:
   - `main` → Production
   - `develop` → Preview

### 수동 배포

```bash
npm run build
vercel --prod
```

## 📝 개발 가이드

### 새 페이지 추가

```bash
# 1. 페이지 파일 생성
mkdir -p app/new-page
touch app/new-page/page.tsx

# 2. 컴포넌트 작성
# 3. Navigation.tsx에 링크 추가
```

### 새 API 라우트 추가

```bash
# API 라우트 생성
mkdir -p app/api/my-endpoint
touch app/api/my-endpoint/route.ts
```

### TypeScript 타입 업데이트

데이터베이스 스키마 변경 후:

```bash
npx supabase gen types typescript --project-id bfvrunxorsxgmeykvfru > types/database.ts
```

## 🧪 테스트

```bash
# 린트 검사
npm run lint

# 타입 체크
npx tsc --noEmit

# 빌드 테스트
npm run build
```

## 📚 참고 문서

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Supabase 공식 문서](https://supabase.com/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [TypeScript 문서](https://www.typescriptlang.org/docs)

## 🤝 기여 가이드

1. 새 브랜치 생성: `git checkout -b feature/my-feature`
2. 변경사항 커밋: `git commit -m 'feat: 새 기능 추가'`
3. 브랜치 푸시: `git push origin feature/my-feature`
4. Pull Request 생성

### 커밋 메시지 컨벤션

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `chore`: 빌드/설정 변경
- `docs`: 문서 수정
- `style`: 코드 포맷팅
- `refactor`: 코드 리팩토링

## 📞 문의

- 이메일: info@kang-insurance.com
- 전화: 010-XXXX-XXXX

## 📄 라이센스

MIT License
