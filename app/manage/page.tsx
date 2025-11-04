'use client';

import Link from 'next/link';

export default function ManagePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header */}
      <header style={{ 
        background: '#1a1a1a', 
        color: 'white', 
        padding: '16px 20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <h1 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>관리자 페이지</h1>
              <Link href="/" style={{ 
                color: '#ffffff', 
                textDecoration: 'none', 
                padding: '8px 16px', 
                background: '#333', 
                borderRadius: '6px',
                fontSize: '14px',
                whiteSpace: 'nowrap'
              }}>
                사이트로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {/* 상담 신청 목록 */}
          <Link href="/manage/consultations" style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '28px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              border: '2px solid transparent',
              height: '100%',
              minHeight: '200px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>
                상담 신청 목록
              </h2>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                고객이 신청한 상담 요청을 확인하고 관리합니다.
              </p>
            </div>
          </Link>

          {/* 추천 보험상품 */}
          <Link href="/manage/products" style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '28px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              border: '2px solid transparent',
              height: '100%',
              minHeight: '200px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📦</div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>
                추천 보험상품
              </h2>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                보험 상품 페이지에 표시될 추천 상품을 추가하고 관리합니다.
              </p>
            </div>
          </Link>

          {/* 텍스트 편집 */}
          <Link href="/manage/content" style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '28px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              border: '2px solid transparent',
              height: '100%',
              minHeight: '200px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✏️</div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>
                텍스트 편집
              </h2>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                각 섹션의 텍스트 내용을 수정합니다.
              </p>
            </div>
          </Link>
        </div>

        {/* Instructions */}
        <div style={{ 
          marginTop: '32px',
          background: 'white', 
          borderRadius: '12px', 
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#1a1a1a' }}>
            ⚙️ Supabase 설정 안내
          </h3>
          <div style={{ color: '#666', fontSize: '14px', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>
              관리자 기능을 사용하려면 다음 단계를 완료해주세요:
            </p>
            <ol style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Supabase 프로젝트 생성:</strong> <a href="https://supabase.com" target="_blank" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>supabase.com</a>에서 새 프로젝트 생성
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>SQL 실행:</strong> SQL Editor에서 <code style={{ background: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>supabase-setup.sql</code> 파일의 내용 실행
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>환경변수 설정:</strong> <code style={{ background: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>.env.local</code> 파일에 Supabase URL과 ANON KEY 추가
              </li>
              <li>
                <strong>서버 재시작:</strong> 개발 서버를 재시작하여 변경사항 적용
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
