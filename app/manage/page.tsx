'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function ManagePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/manage/login');
        return;
      }

      setIsAuthenticated(true);
      setIsLoading(false);
    };

    checkAuth();

    // 인증 상태 변경 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.push('/manage/login');
      } else {
        setIsAuthenticated(true);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  const handleLogout = async () => {
    try {
      // 세션 정리
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('로그아웃 오류:', error);
      }
      
      // 강제로 로그인 페이지로 이동
      window.location.href = '/manage/login';
    } catch (err) {
      console.error('로그아웃 중 오류:', err);
      // 오류가 발생해도 로그인 페이지로 이동
      window.location.href = '/manage/login';
    }
  };

  if (isLoading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', color: '#666' }}>로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f3' }}>
      {/* Header */}
      <header style={{ 
        background: '#2b2825', 
        color: '#faf8f3', 
        padding: 'clamp(16px, 3vw, 24px) clamp(20px, 4vw, 32px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'clamp(12px, 2vw, 16px)' }}>
            <h1 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '700', margin: 0, color: '#faf8f3' }}>관리자 페이지</h1>
            <div style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 12px)', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={handleLogout}
                style={{ 
                  color: '#ffffff', 
                  padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)', 
                  background: '#dc2626', 
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#b91c1c';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#dc2626';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                로그아웃
              </button>
              <Link href="/" style={{ 
                color: '#2b2825', 
                textDecoration: 'none', 
                padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)', 
                background: '#faf8f3', 
                borderRadius: '8px',
                fontSize: 'clamp(13px, 1.8vw, 15px)',
                whiteSpace: 'nowrap',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e8e3d9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#faf8f3';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                사이트로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: 'clamp(32px, 5vw, 60px) clamp(20px, 4vw, 40px)', width: '100%' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 400px), 1fr))',
          gap: 'clamp(24px, 4vw, 32px)',
          width: '100%'
        }}>
          {/* 상담 신청 목록 */}
          <Link href="/manage/consultations" style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: '#ffffff', 
              borderRadius: '20px', 
              padding: 'clamp(32px, 5vw, 48px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '2px solid transparent',
              height: '100%',
              minHeight: 'clamp(220px, 30vw, 280px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = '#a68a64';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: 'clamp(40px, 6vw, 56px)', marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>📋</div>
              <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)', color: '#2b2825' }}>
                상담 신청 목록
              </h2>
              <p style={{ color: '#5a534e', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7', margin: 0 }}>
                고객이 신청한 상담 요청을 확인하고 관리합니다.
              </p>
            </div>
          </Link>

          {/* 추천 보험상품 */}
          <Link href="/manage/products" style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: '#ffffff', 
              borderRadius: '20px', 
              padding: 'clamp(32px, 5vw, 48px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '2px solid transparent',
              height: '100%',
              minHeight: 'clamp(220px, 30vw, 280px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = '#a68a64';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: 'clamp(40px, 6vw, 56px)', marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>📦</div>
              <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)', color: '#2b2825' }}>
                추천 보험상품
              </h2>
              <p style={{ color: '#5a534e', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7', margin: 0 }}>
                보험 상품 페이지에 표시될 추천 상품을 추가하고 관리합니다.
              </p>
            </div>
          </Link>

          {/* 텍스트 편집 */}
          <Link href="/manage/content" style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: '#ffffff', 
              borderRadius: '20px', 
              padding: 'clamp(32px, 5vw, 48px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '2px solid transparent',
              height: '100%',
              minHeight: 'clamp(220px, 30vw, 280px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = '#a68a64';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: 'clamp(40px, 6vw, 56px)', marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>✏️</div>
              <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)', color: '#2b2825' }}>
                텍스트 편집
              </h2>
              <p style={{ color: '#5a534e', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7', margin: 0 }}>
                각 섹션의 텍스트 내용을 수정합니다.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
