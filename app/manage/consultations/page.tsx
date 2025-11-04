'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { ContactSubmission } from '@/lib/supabase';
import Link from 'next/link';

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConsultations();
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
          <h1 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>📋 상담 신청 목록</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <Link href="/manage" style={{ 
              color: '#ffffff', 
              textDecoration: 'none', 
              padding: '8px 16px', 
              background: '#333', 
              borderRadius: '6px',
              fontSize: '14px',
              display: 'inline-block'
            }}>
              ← 관리자 홈
            </Link>
            <Link href="/" style={{ 
              color: '#ffffff', 
              textDecoration: 'none', 
              padding: '8px 16px', 
              background: '#333', 
              borderRadius: '6px',
              fontSize: '14px',
              display: 'inline-block'
            }}>
              사이트로 돌아가기
            </Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          overflowX: 'auto'
        }}>
          {loading ? (
            <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>로딩 중...</p>
          ) : consultations.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>아직 상담 신청이 없습니다.</p>
          ) : (
            <>
              {/* 모바일: 카드 형식 */}
              <div className="block md:hidden" style={{ display: 'block' }}>
                <style jsx>{`
                  @media (min-width: 768px) {
                    .block.md\\:hidden {
                      display: none !important;
                    }
                  }
                `}</style>
                {consultations.map((consultation, index) => (
                  <div key={consultation.id || index} style={{ 
                    padding: '16px 0',
                    borderBottom: index < consultations.length - 1 ? '1px solid #e0e0e0' : 'none'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                      <span style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a1a' }}>{consultation.name}</span>
                      <span style={{ fontSize: '12px', color: '#999', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                        {consultation.created_at ? formatDate(consultation.created_at).split(' ')[0] : '-'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ fontWeight: '600', color: '#666', minWidth: '60px' }}>연락처:</span>
                        <a href={`tel:${consultation.phone}`} style={{ color: '#1a66ff', textDecoration: 'none' }}>
                          {consultation.phone}
                        </a>
                      </div>
                      {consultation.email && (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <span style={{ fontWeight: '600', color: '#666', minWidth: '60px' }}>이메일:</span>
                          <a href={`mailto:${consultation.email}`} style={{ color: '#1a66ff', textDecoration: 'none', wordBreak: 'break-all' }}>
                            {consultation.email}
                          </a>
                        </div>
                      )}
                      {consultation.message && (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <span style={{ fontWeight: '600', color: '#666', minWidth: '60px' }}>내용:</span>
                          <p style={{ margin: 0, color: '#495057', lineHeight: '1.5' }}>{consultation.message}</p>
                        </div>
                      )}
                      <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                        {consultation.created_at ? formatDate(consultation.created_at) : '-'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 데스크톱: 테이블 형식 */}
              <div className="hidden md:block">
                <style jsx>{`
                  @media (max-width: 767px) {
                    .hidden.md\\:block {
                      display: none !important;
                    }
                  }
                `}</style>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#495057' }}>신청일시</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#495057' }}>이름</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#495057' }}>연락처</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#495057' }}>이메일</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#495057' }}>상담 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consultations.map((consultation, index) => (
                      <tr key={consultation.id || index} style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '16px', color: '#6c757d', fontSize: '14px' }}>
                          {consultation.created_at ? formatDate(consultation.created_at) : '-'}
                        </td>
                        <td style={{ padding: '16px', fontWeight: '500', color: '#212529' }}>
                          {consultation.name}
                        </td>
                        <td style={{ padding: '16px', color: '#495057' }}>
                          {consultation.phone}
                        </td>
                        <td style={{ padding: '16px', color: '#495057' }}>
                          {consultation.email || '-'}
                        </td>
                        <td style={{ padding: '16px', color: '#495057', maxWidth: '300px' }}>
                          {consultation.message || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
