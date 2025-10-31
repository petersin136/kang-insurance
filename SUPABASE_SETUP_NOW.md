# 🚀 Supabase 스키마 적용 - 3분 가이드

## ✅ 1단계: Supabase Dashboard 열기

1. **브라우저 열기**: https://app.supabase.com
2. **로그인** (MCP 토큰 또는 계정)
3. **프로젝트 선택**: `bfvrunxorsxgmeykvfru` 클릭

---

## ✅ 2단계: SQL Editor 열기

1. 왼쪽 메뉴에서 **SQL Editor** 클릭
2. **New Query** 버튼 클릭

---

## ✅ 3단계: 초기 스키마 실행

1. **파일 열기**: `supabase/migrations/20241030_initial_schema.sql`
2. **전체 선택**: Cmd/Ctrl + A
3. **복사**: Cmd/Ctrl + C
4. **SQL Editor에 붙여넣기**: Cmd/Ctrl + V
5. **RUN 버튼 클릭** (또는 Cmd/Ctrl + Enter)

### ✅ 성공 메시지 확인:
```
데이터베이스 스키마가 성공적으로 생성되었습니다!
- 9개 테이블 생성 완료
- Storage 버킷 및 정책 설정 완료
- RLS 정책 적용 완료
- 인덱스 및 트리거 생성 완료
```

---

## ✅ 4단계: 샘플 데이터 삽입 (선택사항)

1. **New Query** 버튼 다시 클릭
2. **파일 열기**: `supabase/migrations/20241030_seed_data.sql`
3. **복사 → 붙여넣기 → RUN**

### ✅ 성공 메시지 확인:
```
샘플 데이터가 성공적으로 삽입되었습니다!
- 보험 상품: 8개
- 고객 후기: 6개
- 성공 사례: 3개
- 블로그 포스트: 3개
```

---

## ✅ 5단계: 테이블 확인

1. 왼쪽 메뉴 **Table Editor** 클릭
2. 생성된 테이블 확인:
   - ✅ app_public.profiles
   - ✅ app_public.insurance_products (8개 데이터)
   - ✅ app_public.testimonials (6개 데이터)
   - ✅ app_public.cases (3개 데이터)
   - ✅ app_public.consultations
   - ✅ app_public.blog_posts (3개 데이터)
   - ✅ app_public.pages
   - ✅ app_public.sections
   - ✅ app_public.site_settings (1개 데이터)

---

## ✅ 6단계: Storage 확인

1. 왼쪽 메뉴 **Storage** 클릭
2. `public-media` 버킷 확인
3. **Policies** 탭에서 3개 정책 확인:
   - ✅ "누구나 미디어 조회 가능"
   - ✅ "인증된 사용자만 업로드"
   - ✅ "관리자만 삭제"

---

## 🎉 완료!

스키마 적용이 완료되었습니다!

이제 터미널에서:
```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속하여 확인하세요!

---

## ❓ 문제 해결

### 문제: "relation already exists" 오류
**해결**: 테이블이 이미 존재함. 스키마 파일의 `CREATE TABLE IF NOT EXISTS`가 자동으로 처리합니다.

### 문제: Storage 정책 오류
**해결**: 
1. Storage 메뉴에서 `public-media` 버킷 확인
2. 없으면 버킷 먼저 생성
3. 정책 SQL만 다시 실행

### 문제: 권한 오류
**해결**: SQL Editor는 서비스 롤 권한으로 실행되므로 문제없습니다.

---

## 📸 완료 후 확인사항

스키마 적용 후 다음을 확인하고 알려주세요:

- [ ] 9개 테이블 모두 생성됨
- [ ] 샘플 데이터 삽입됨 (선택)
- [ ] Storage 버킷 `public-media` 생성됨
- [ ] 로컬 서버(`npm run dev`) 정상 작동
- [ ] 브라우저에서 홈페이지 확인

완료되면 **"스키마 적용 완료!"**라고 알려주세요! 🎊

