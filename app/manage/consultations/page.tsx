'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import type { ContactSubmission } from '@/lib/supabase';
import Link from 'next/link';
import AuthGuard from '@/components/admin/AuthGuard';

function ConsultationsPageContent() {
  const [consultations, setConsultations] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetchConsultations();
    
    // 화면 크기 감지
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fetchConsultations = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching consultations:', error);
        return;
      }

      setConsultations(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDelete = async (id: string) => {
    if (!id) {
      alert('삭제할 항목을 찾을 수 없습니다.');
      return;
    }

    if (!confirm('정말 이 상담 신청을 삭제하시겠습니까?')) return;

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id)
        .select();

      if (error) {
        console.error('Supabase delete error:', error);
        alert(`삭제 중 오류가 발생했습니다: ${error.message}`);
        return;
      }

      // 삭제 후 목록 업데이트
      setConsultations(prev => prev.filter(item => item.id !== id));
      alert('삭제되었습니다!');
    } catch (error: any) {
      console.error('Delete error:', error);
      alert(`삭제 중 오류가 발생했습니다: ${error?.message || '알 수 없는 오류'}`);
    }
  };

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
          <h1 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)', color: '#faf8f3' }}>📋 상담 신청 목록</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 1.5vw, 12px)' }}>
            <Link href="/manage" style={{ 
              color: '#2b2825', 
              textDecoration: 'none', 
              padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)', 
              background: '#faf8f3', 
              borderRadius: '8px',
              fontSize: 'clamp(13px, 1.8vw, 15px)',
              display: 'inline-block',
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
              ← 관리자 홈
            </Link>
            <Link href="/" style={{ 
              color: '#2b2825', 
              textDecoration: 'none', 
              padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)', 
              background: '#faf8f3', 
              borderRadius: '8px',
              fontSize: 'clamp(13px, 1.8vw, 15px)',
              display: 'inline-block',
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
      </header>

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: 'clamp(32px, 5vw, 60px) clamp(20px, 4vw, 40px)', width: '100%' }}>
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '20px', 
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          overflowX: 'auto'
        }}>
          {loading ? (
            <p style={{ textAlign: 'center', color: '#5a534e', padding: 'clamp(40px, 6vw, 60px)', fontSize: 'clamp(14px, 2vw, 16px)' }}>로딩 중...</p>
          ) : consultations.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#5a534e', padding: 'clamp(40px, 6vw, 60px)', fontSize: 'clamp(14px, 2vw, 16px)' }}>아직 상담 신청이 없습니다.</p>
          ) : (
            <>
              {/* 모바일: 카드 형식 */}
              {isMobile && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 20px)' }}>
                  {consultations.map((consultation, index) => (
                    <div 
                      key={consultation.id || index} 
                      style={{ 
                        background: '#faf8f3',
                        borderRadius: '12px',
                        padding: 'clamp(16px, 3vw, 20px)',
                        border: '1px solid #e8e3d9',
                        position: 'relative'
                      }}
                    >
                      {/* 삭제 버튼 - 오른쪽 상단 */}
                      {consultation.id && (
                        <button
                          onClick={() => handleDelete(consultation.id!)}
                          style={{
                            position: 'absolute',
                            top: 'clamp(12px, 2vw, 16px)',
                            right: 'clamp(12px, 2vw, 16px)',
                            width: '32px',
                            height: '32px',
                            padding: '0',
                            background: '#f5f5f5',
                            color: '#8e8e93',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                            zIndex: 10
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#e5e5ea';
                            e.currentTarget.style.color = '#dc2626';
                            e.currentTarget.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#f5f5f5';
                            e.currentTarget.style.color = '#8e8e93';
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                          title="삭제"
                        >
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </button>
                      )}

                      {/* 이름과 날짜 */}
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'start',
                        marginBottom: 'clamp(12px, 2vw, 16px)',
                        paddingRight: consultation.id ? '48px' : '0'
                      }}>
                        <h3 style={{ 
                          fontSize: 'clamp(16px, 2.5vw, 18px)', 
                          fontWeight: '700', 
                          color: '#2b2825',
                          margin: 0
                        }}>
                          {consultation.name}
                        </h3>
                        <span style={{ 
                          fontSize: 'clamp(11px, 1.5vw, 13px)', 
                          color: '#5a534e',
                          whiteSpace: 'nowrap',
                          marginLeft: '12px'
                        }}>
                          {consultation.created_at ? formatDate(consultation.created_at) : '-'}
                        </span>
                      </div>

                      {/* 정보 항목들 */}
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 'clamp(10px, 2vw, 12px)',
                        fontSize: 'clamp(14px, 2vw, 15px)'
                      }}>
                        {/* 연락처 */}
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <span style={{ 
                            fontWeight: '600', 
                            color: '#5a534e', 
                            minWidth: '60px',
                            flexShrink: 0
                          }}>
                            연락처:
                          </span>
                          <a 
                            href={`tel:${consultation.phone}`} 
                            style={{ 
                              color: '#a68a64', 
                              textDecoration: 'none',
                              wordBreak: 'break-all',
                              flex: 1
                            }}
                          >
                            {consultation.phone}
                          </a>
                        </div>

                        {/* 이메일 */}
                        {consultation.email && (
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <span style={{ 
                              fontWeight: '600', 
                              color: '#5a534e', 
                              minWidth: '60px',
                              flexShrink: 0
                            }}>
                              이메일:
                            </span>
                            <a 
                              href={`mailto:${consultation.email}`} 
                              style={{ 
                                color: '#a68a64', 
                                textDecoration: 'none',
                                wordBreak: 'break-all',
                                flex: 1
                              }}
                            >
                              {consultation.email}
                            </a>
                          </div>
                        )}

                        {/* 상담 내용 */}
                        {consultation.message && (
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '4px' }}>
                            <span style={{ 
                              fontWeight: '600', 
                              color: '#5a534e', 
                              minWidth: '60px',
                              flexShrink: 0
                            }}>
                              내용:
                            </span>
                            <p style={{ 
                              margin: 0, 
                              color: '#5a534e', 
                              lineHeight: '1.6',
                              flex: 1
                            }}>
                              {consultation.message}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 데스크톱: 테이블 형식 */}
              {!isMobile && (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#faf8f3', borderBottom: '2px solid #e8e3d9' }}>
                        <th style={{ padding: 'clamp(14px, 2vw, 18px)', textAlign: 'left', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>신청일시</th>
                        <th style={{ padding: 'clamp(14px, 2vw, 18px)', textAlign: 'left', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>이름</th>
                        <th style={{ padding: 'clamp(14px, 2vw, 18px)', textAlign: 'left', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>연락처</th>
                        <th style={{ padding: 'clamp(14px, 2vw, 18px)', textAlign: 'left', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>이메일</th>
                        <th style={{ padding: 'clamp(14px, 2vw, 18px)', textAlign: 'left', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>상담 내용</th>
                        <th style={{ padding: 'clamp(14px, 2vw, 18px)', textAlign: 'right', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(13px, 1.8vw, 15px)', width: '80px' }}>관리</th>
                      </tr>
                    </thead>
                    <tbody>
                      {consultations.map((consultation, index) => (
                        <tr key={consultation.id || index} style={{ borderBottom: '1px solid #e8e3d9' }}>
                          <td style={{ padding: 'clamp(14px, 2vw, 18px)', color: '#5a534e', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>
                            {consultation.created_at ? formatDate(consultation.created_at) : '-'}
                          </td>
                          <td style={{ padding: 'clamp(14px, 2vw, 18px)', fontWeight: '500', color: '#2b2825', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>
                            {consultation.name}
                          </td>
                          <td style={{ padding: 'clamp(14px, 2vw, 18px)', color: '#5a534e', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>
                            <a href={`tel:${consultation.phone}`} style={{ color: '#a68a64', textDecoration: 'none' }}>
                              {consultation.phone}
                            </a>
                          </td>
                          <td style={{ padding: 'clamp(14px, 2vw, 18px)', color: '#5a534e', fontSize: 'clamp(13px, 1.8vw, 15px)' }}>
                            {consultation.email ? (
                              <a href={`mailto:${consultation.email}`} style={{ color: '#a68a64', textDecoration: 'none', wordBreak: 'break-all' }}>
                                {consultation.email}
                              </a>
                            ) : '-'}
                          </td>
                          <td style={{ padding: 'clamp(14px, 2vw, 18px)', color: '#5a534e', maxWidth: '300px', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.6' }}>
                            {consultation.message || '-'}
                          </td>
                          <td style={{ padding: 'clamp(14px, 2vw, 18px)', textAlign: 'right' }}>
                            {consultation.id && (
                              <button
                                onClick={() => handleDelete(consultation.id!)}
                                style={{
                                  width: '32px',
                                  height: '32px',
                                  padding: '0',
                                  background: '#f5f5f5',
                                  color: '#8e8e93',
                                  border: 'none',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  transition: 'all 0.2s ease',
                                  fontSize: '16px',
                                  lineHeight: '1'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#e5e5ea';
                                  e.currentTarget.style.color = '#dc2626';
                                  e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#f5f5f5';
                                  e.currentTarget.style.color = '#8e8e93';
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                                title="삭제"
                              >
                                <svg 
                                  width="16" 
                                  height="16" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                  style={{ display: 'block' }}
                                >
                                  <path d="M3 6h18"></path>
                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                  <line x1="10" y1="11" x2="10" y2="17"></line>
                                  <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConsultationsPage() {
  return <AuthGuard><ConsultationsPageContent /></AuthGuard>;
}
