'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { ContentEdit } from '@/lib/supabase';
import Link from 'next/link';
import AuthGuard from '@/components/admin/AuthGuard';

function ContentPageContent() {
  const [contents, setContents] = useState<ContentEdit[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<ContentEdit | null>(null);

  const defaultContents = [
    // Hero Section
    { section_name: 'hero', field_name: 'title_mobile', content: '소중한 사람을 위한\n확실한 약속' },
    { section_name: 'hero', field_name: 'title_desktop', content: '사랑하는 사람들을 위한\n가장 확실한 약속' },
    { section_name: 'hero', field_name: 'subtitle_mobile', content: '삶은 예측 불가, 준비는 가능\n미래를 함께 설계합니다' },
    { section_name: 'hero', field_name: 'subtitle_desktop', content: '삶은 예측할 수 없지만, 준비는 할 수 있습니다.\n당신의 미래를 함께 설계합니다.' },
    { section_name: 'hero', field_name: 'cta_text', content: '상담 신청하기' },
    
    // Promise Section
    { section_name: 'promise', field_name: 'text1', content: '솔직히 말하면 그렇습니다. 우린 매달 피 같은 돈을 냅니다.' },
    { section_name: 'promise', field_name: 'text2', content: '그런데 내 보험이 지금 뭘 보장하고, 언제까지 유지되고,' },
    { section_name: 'promise', field_name: 'text3', content: '정말 필요한 보장에 잘 들어가 있는지… 정확히 알고 계신가요?' },
    { section_name: 'promise', field_name: 'text4', content: '대부분은 그저 서랍 속에 쌓여 있는 보험증권, 핸드폰 어딘가에 저장된 보험 파일, 언제 가입했는지도 가물가물한 계약들.' },
    { section_name: 'promise', field_name: 'text5', content: '"아마 잘 되어 있겠지" "괜찮겠지" 하고 지나치기엔 가족의 안심이 달린 일입니다.' },
    
    // Contact Section
    { section_name: 'contact', field_name: 'title', content: '무료 상담 신청' },
    { section_name: 'contact', field_name: 'subtitle', content: '보험 전문가가 24시간 이내 연락드립니다' },
  ];

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const { data, error } = await supabase
        .from('content_edits')
        .select('*')
        .order('section_name', { ascending: true });

      if (error) {
        console.error('Error fetching contents:', error);
        return;
      }

      setContents(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (section_name: string, field_name: string, content: string) => {
    if (!content.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      const { error } = await supabase
        .from('content_edits')
        .upsert(
          {
            section_name,
            field_name,
            content: content.trim()
          },
          {
            onConflict: 'section_name,field_name'
          }
        );

      if (error) {
        alert('저장 중 오류가 발생했습니다.');
        console.error(error);
        return;
      }

      alert('저장되었습니다!\n\n⚠️ 변경사항을 적용하려면:\n1. 개발 서버를 재시작하거나\n2. 페이지를 새로고침해주세요.');
      setEditingItem(null);
      fetchContents();
    } catch (error) {
      console.error('Error:', error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  const getContent = (section_name: string, field_name: string) => {
    const item = contents.find(
      (c) => c.section_name === section_name && c.field_name === field_name
    );
    
    if (item) return item.content;
    
    // 기본값 반환
    const defaultItem = defaultContents.find(
      (c) => c.section_name === section_name && c.field_name === field_name
    );
    return defaultItem?.content || '';
  };

  const sections = [
    {
      name: 'hero',
      label: '🎯 히어로 섹션 (메인 배너)',
      fields: [
        { name: 'title_mobile', label: '메인 제목 (모바일)', multiline: true },
        { name: 'title_desktop', label: '메인 제목 (데스크톱)', multiline: true },
        { name: 'subtitle_mobile', label: '부제목 (모바일)', multiline: true },
        { name: 'subtitle_desktop', label: '부제목 (데스크톱)', multiline: true },
        { name: 'cta_text', label: '버튼 텍스트', multiline: false },
      ]
    },
    {
      name: 'promise',
      label: '💡 약속 섹션 (중간 텍스트)',
      fields: [
        { name: 'text1', label: '첫 번째 문장', multiline: false },
        { name: 'text2', label: '두 번째 문장', multiline: false },
        { name: 'text3', label: '세 번째 문장', multiline: false },
        { name: 'text4', label: '네 번째 문장', multiline: false },
        { name: 'text5', label: '강조 문장', multiline: false },
      ]
    },
    {
      name: 'contact',
      label: '📞 상담 섹션 (하단 폼)',
      fields: [
        { name: 'title', label: '제목', multiline: false },
        { name: 'subtitle', label: '부제목', multiline: false },
      ]
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f3' }}>
      {/* Header */}
      <header style={{ 
        background: '#2b2825', 
        color: '#faf8f3', 
        padding: 'clamp(16px, 3vw, 24px) clamp(20px, 4vw, 32px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)', color: '#faf8f3' }}>✏️ 텍스트 편집</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 1.5vw, 12px)' }}>
            <Link href="/manage" style={{ 
              color: '#2b2825', 
              textDecoration: 'none', 
              padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)', 
              background: '#faf8f3', 
              borderRadius: '8px',
              fontSize: 'clamp(13px, 1.8vw, 15px)',
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
        {/* Info Banner */}
        <div style={{
          background: '#fff3cd',
          border: '1px solid #ffc107',
          borderRadius: '12px',
          padding: 'clamp(16px, 2.5vw, 20px) clamp(20px, 3vw, 24px)',
          marginBottom: 'clamp(24px, 4vw, 32px)',
          fontSize: 'clamp(13px, 1.8vw, 15px)',
          color: '#856404'
        }}>
          <strong>ℹ️ 안내:</strong> 텍스트를 수정한 후에는 페이지를 새로고침하면 변경사항이 적용됩니다. 줄바꿈은 실제로 엔터(\n)로 입력해주세요.
        </div>

        <div style={{ 
          background: '#ffffff', 
          borderRadius: '20px', 
          padding: 'clamp(32px, 5vw, 48px)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
        }}>
          {loading ? (
            <p style={{ textAlign: 'center', color: '#5a534e', padding: 'clamp(40px, 6vw, 60px)', fontSize: 'clamp(14px, 2vw, 16px)' }}>로딩 중...</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 4vw, 40px)' }}>
              {sections.map((section) => (
                <div key={section.name} style={{ 
                  border: '2px solid #e8e3d9', 
                  borderRadius: '16px', 
                  padding: 'clamp(24px, 4vw, 32px)',
                  background: '#faf8f3'
                }}>
                  <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: 'clamp(20px, 3vw, 24px)', color: '#2b2825' }}>
                    {section.label}
                  </h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2.5vw, 20px)' }}>
                    {section.fields.map((field) => {
                      const currentContent = getContent(section.name, field.name);
                      const isEditing = editingItem?.section_name === section.name && editingItem?.field_name === field.name;
                      
                      return (
                        <div key={field.name} style={{ 
                          background: '#ffffff', 
                          padding: 'clamp(16px, 2.5vw, 20px)', 
                          borderRadius: '12px',
                          border: '2px solid #e8e3d9'
                        }}>
                          <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            marginBottom: 'clamp(12px, 2vw, 16px)',
                            flexWrap: 'wrap',
                            gap: '8px'
                          }}>
                            <label style={{ fontWeight: '600', color: '#2b2825', fontSize: 'clamp(14px, 2vw, 16px)' }}>
                              {field.label}
                            </label>
                            {!isEditing && (
                              <button
                                onClick={() => setEditingItem({ section_name: section.name, field_name: field.name, content: currentContent })}
                                style={{
                                  padding: 'clamp(8px, 1.5vw, 10px) clamp(16px, 2.5vw, 20px)',
                                  background: '#2b2825',
                                  color: '#faf8f3',
                                  border: 'none',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  fontSize: 'clamp(12px, 1.8vw, 14px)',
                                  fontWeight: '600',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#1a1715';
                                  e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#2b2825';
                                  e.currentTarget.style.transform = 'translateY(0)';
                                }}
                              >
                                ✏️ 수정
                              </button>
                            )}
                          </div>
                          
                          {isEditing ? (
                            <div>
                              {field.multiline ? (
                                <textarea
                                  value={editingItem.content}
                                  onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                                  rows={4}
                                  style={{
                                    width: '100%',
                                    padding: 'clamp(12px, 2vw, 16px)',
                                    border: '2px solid #2b2825',
                                    borderRadius: '8px',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    marginBottom: 'clamp(12px, 2vw, 16px)',
                                    resize: 'vertical',
                                    fontFamily: 'inherit',
                                    color: '#2b2825'
                                  }}
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={editingItem.content}
                                  onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                                  style={{
                                    width: '100%',
                                    padding: 'clamp(12px, 2vw, 16px)',
                                    border: '2px solid #2b2825',
                                    borderRadius: '8px',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    marginBottom: 'clamp(12px, 2vw, 16px)',
                                    fontFamily: 'inherit',
                                    color: '#2b2825'
                                  }}
                                />
                              )}
                              <div style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 12px)', flexWrap: 'wrap' }}>
                                <button
                                  onClick={() => handleSave(section.name, field.name, editingItem.content)}
                                  style={{
                                    padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
                                    background: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                                    fontWeight: '600',
                                    transition: 'all 0.3s'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#218838';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#28a745';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                  }}
                                >
                                  💾 저장
                                </button>
                                <button
                                  onClick={() => setEditingItem(null)}
                                  style={{
                                    padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px)',
                                    background: '#5a534e',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                                    fontWeight: '600',
                                    transition: 'all 0.3s'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#2b2825';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#5a534e';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                  }}
                                >
                                  ❌ 취소
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div style={{ 
                              padding: 'clamp(12px, 2vw, 16px)', 
                              background: '#faf8f3', 
                              borderRadius: '8px',
                              color: '#5a534e',
                              fontSize: 'clamp(14px, 2vw, 16px)',
                              lineHeight: '1.7',
                              minHeight: '50px',
                              whiteSpace: 'pre-wrap',
                              fontFamily: 'inherit'
                            }}>
                              {currentContent || '(내용 없음 - 기본값 사용)'}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContentPage() {
  return <AuthGuard><ContentPageContent /></AuthGuard>;
}
