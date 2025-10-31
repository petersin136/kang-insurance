# 🚀 빠른 시작 가이드

보험설계사 홈페이지를 5분 안에 실행하는 방법

## ✅ 1단계: 환경 확인

프로젝트 폴더에 다음이 있는지 확인:
- ✅ `.env.local` (Supabase 키 설정됨)
- ✅ `node_modules/` 폴더 (의존성 설치됨)

## ✅ 2단계: Supabase 데이터베이스 설정 (처음 1회만)

### 간단한 방법 (추천)

1. **Supabase Dashboard 열기**
   - https://app.supabase.com 접속
   - 로그인 후 프로젝트 `bfvrunxorsxgmeykvfru` 선택

2. **SQL Editor 열기**
   - 왼쪽 메뉴 → **SQL Editor** → **New Query**

3. **초기 스키마 실행**
   - `supabase/migrations/20241030_initial_schema.sql` 파일 열기
   - 전체 내용 복사 (Cmd/Ctrl + A → Cmd/Ctrl + C)
   - SQL Editor에 붙여넣기 (Cmd/Ctrl + V)
   - **RUN** 버튼 클릭
   - ✅ 성공 메시지 확인

4. **샘플 데이터 삽입 (선택사항)**
   - **New Query** 버튼 클릭
   - `supabase/migrations/20241030_seed_data.sql` 파일 열기
   - 전체 내용 복사 → 붙여넣기 → **RUN**
   - ✅ 성공 메시지 확인

⏱️ **소요 시간**: 약 3분

---

## ✅ 3단계: 개발 서버 실행

```bash
npm run dev
```

서버가 시작되면:
- 🌐 **메인 홈페이지**: http://localhost:3000
- 🔧 **관리자 페이지**: http://localhost:3000/admin/dashboard

---

## 🎯 페이지 확인하기

### 메인 홈페이지 (`/`)

홈페이지 섹션:
- ✅ **Hero Section** - 메인 비주얼
- ✅ **About Section** - 소개 및 특징
- ✅ **Services Section** - 보험 상품 (8개)
- ✅ **Process Section** - 상담 프로세스
- ✅ **Testimonials Section** - 고객 후기 (6개)
- ✅ **Stats Section** - 통계 (애니메이션)
- ✅ **Contact Section** - 연락처 및 상담 신청

### 관리자 대시보드 (`/admin/dashboard`)

관리 기능:
- 📊 실시간 통계
- 💬 최근 상담 신청
- 🏥 보험 상품 관리
- ⭐ 고객 후기 관리
- ✍️ 블로그 글 관리

---

## 🔥 주요 기능 테스트

### 1. 반응형 디자인 확인
- 브라우저 개발자 도구 열기 (F12 또는 Cmd/Ctrl + Shift + I)
- 모바일 뷰 전환 (Cmd/Ctrl + Shift + M)
- 다양한 화면 크기 테스트

### 2. 네비게이션 테스트
- 스크롤 시 네비게이션 바 색상 변경 확인
- 모바일 메뉴 (햄버거 버튼) 테스트
- 모든 링크 클릭 테스트

### 3. 애니메이션 확인
- 페이지 스크롤 → Stats 섹션 숫자 카운트 애니메이션
- Hero 섹션 스크롤 다운 아이콘 bounce 애니메이션
- 카드 hover 효과

### 4. 고객 후기 슬라이더 (모바일)
- 모바일 뷰에서 고객 후기 좌우 버튼 테스트
- 6개 후기 모두 순환 확인

---

## 📝 다음 할 일

### 콘텐츠 업데이트

1. **연락처 정보 변경**
   - `components/Footer.tsx`
   - `components/sections/ContactSection.tsx`
   - 전화번호 `010-XXXX-XXXX` → 실제 번호
   - 이메일 `info@kang-insurance.com` → 실제 이메일

2. **사이트 이름 변경**
   - `app/layout.tsx` - 메타데이터
   - `components/Navigation.tsx` - 로고
   - Supabase `site_settings` 테이블

3. **이미지 추가**
   - Hero 섹션 배경 이미지
   - About 섹션 프로필 사진
   - 보험 상품 이미지
   - 고객 후기 프로필 사진

### 데이터 관리

Supabase Dashboard에서 직접 데이터 관리:
1. https://app.supabase.com 접속
2. Table Editor 메뉴
3. 테이블 선택하여 직접 편집

또는 관리자 페이지에서 관리 (개발 예정)

---

## ⚠️ 문제 해결

### 문제: 페이지가 로드되지 않음

**확인사항**:
```bash
# 1. 개발 서버가 실행 중인지 확인
# 터미널에서 "Ready in Xms" 메시지 확인

# 2. 포트 충돌 확인
# 3000 포트가 다른 앱에서 사용 중이면:
npm run dev -- -p 3001

# 3. 캐시 삭제 후 재시작
rm -rf .next
npm run dev
```

### 문제: Supabase 연결 오류

**확인사항**:
```bash
# 1. .env.local 파일 확인
cat .env.local

# 2. 환경 변수가 올바른지 확인
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY

# 3. 서버 재시작
# Ctrl+C로 중지 후 다시 npm run dev
```

### 문제: 데이터가 표시되지 않음

**확인사항**:
1. Supabase Dashboard → Table Editor
2. 테이블에 데이터가 있는지 확인
3. `is_active = true` 설정 확인
4. 샘플 데이터 SQL 다시 실행

---

## 📚 더 알아보기

- **전체 문서**: `README.md`
- **Supabase 설정**: `supabase/SETUP_GUIDE.md`
- **데이터베이스 구조**: `supabase/migrations/`

---

## ✅ 체크리스트

프로젝트 준비 완료:
- [ ] Supabase 스키마 적용 완료
- [ ] 샘플 데이터 삽입 완료
- [ ] 개발 서버 실행 확인
- [ ] 홈페이지 접속 확인
- [ ] 관리자 페이지 접속 확인
- [ ] 반응형 디자인 확인
- [ ] 모든 섹션 정상 작동 확인

모두 완료되면 개발 시작! 🎉

---

## 💡 팁

### 빠른 개발을 위한 팁

1. **VS Code 추천 확장**
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Prettier - Code formatter

2. **유용한 단축키**
   - `Ctrl + C` → 개발 서버 중지
   - `Cmd/Ctrl + Shift + R` → 브라우저 하드 리프레시
   - `Cmd/Ctrl + K, Cmd/Ctrl + F` → 코드 자동 포맷

3. **Hot Reload**
   - 파일 저장 시 자동으로 브라우저 새로고침
   - 실시간 변경사항 확인 가능

---

문제가 있으면 `supabase/SETUP_GUIDE.md`의 트러블슈팅 섹션을 확인하세요!

