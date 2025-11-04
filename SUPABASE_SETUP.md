# Supabase 설정 가이드

## 1. Supabase 프로젝트 생성

1. https://supabase.com 접속
2. "New Project" 클릭
3. 프로젝트 이름, 데이터베이스 비밀번호, 리전 선택
4. 프로젝트 생성 완료 (약 2분 소요)

## 2. 데이터베이스 설정

1. 좌측 메뉴에서 **SQL Editor** 클릭
2. "New query" 클릭
3. `supabase-setup.sql` 파일의 내용을 복사해서 붙여넣기
4. "Run" 버튼 클릭하여 실행

## 3. API 키 가져오기

1. 좌측 메뉴에서 **Settings** → **API** 클릭
2. 다음 값들을 복사:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public** 키: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 4. 환경변수 설정

터미널에서 다음 명령어 실행:

```bash
cd /Users/seung-yongmaegbug/kang-insurance
cat > .env.local << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=여기에_Project_URL_붙여넣기
NEXT_PUBLIC_SUPABASE_ANON_KEY=여기에_anon_public_키_붙여넣기
EOF
```

또는 직접 `.env.local` 파일을 만들고 아래 내용 입력:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 5. 개발 서버 재시작

```bash
npm run dev
```

## 6. 관리자 페이지 접속

브라우저에서 http://localhost:3000/manage 접속

---

## 🎉 완료!

이제 다음 기능을 사용할 수 있습니다:

- **상담 신청 관리**: http://localhost:3000/manage/consultations
- **추천 보험상품 관리**: http://localhost:3000/manage/products
- **텍스트 편집**: http://localhost:3000/manage/content

---

## 문제 해결

### "Supabase URL is required" 오류
→ `.env.local` 파일이 제대로 생성되었는지 확인

### 테이블이 없다는 오류
→ `supabase-setup.sql`을 SQL Editor에서 실행했는지 확인

### 데이터가 표시되지 않음
→ Supabase 대시보드의 Table Editor에서 데이터 확인

