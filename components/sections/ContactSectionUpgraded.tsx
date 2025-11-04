'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ContactSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agreed: false
  });
  const [showPrivacy, setShowPrivacy] = useState(false);
  
  // 텍스트 상태 관리
  const [content, setContent] = useState({
    title: '무료 상담 신청',
    subtitle: '지금 바로 상담을 신청하세요. 24시간 이내 연락드리겠습니다'
  });

  // Supabase에서 텍스트 가져오기
  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await supabase
        .from('content_edits')
        .select('*')
        .eq('section_name', 'contact');
      
      if (data && data.length > 0) {
        const newContent = { ...content };
        data.forEach((item) => {
          if (item.field_name === 'title') {
            newContent.title = item.content;
          } else if (item.field_name === 'subtitle') {
            newContent.subtitle = item.content;
          }
        });
        setContent(newContent);
      }
    };
    
    fetchContent();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    try {
      // Supabase에 저장
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email || null,
            message: formData.message || null,
            agreed: formData.agreed
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
        return;
      }

      alert('상담 신청이 접수되었습니다! 24시간 이내 연락드리겠습니다.');
      setFormData({ name: '', phone: '', email: '', message: '', agreed: false });
    } catch (error) {
      console.error('Submit error:', error);
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <section 
      ref={ref} 
      style={{ 
        padding: '120px 0', 
        background: 'linear-gradient(180deg, #1a1a1a 0%, #2b2825 100%)',
        width: '100%', 
        overflow: 'hidden' 
      }} 
      id="contact"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(32px, 5vw, 56px)', 
            fontWeight: '700', 
            color: '#ffffff', 
            marginBottom: '20px',
            letterSpacing: '-1px',
            lineHeight: '1.2'
          }}>
            {content.title}
          </h2>
          <p style={{ 
            fontSize: 'clamp(16px, 2.5vw, 20px)', 
            color: '#c5c5c5',
            lineHeight: '1.6'
          }}>
            {content.subtitle}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', maxWidth: '1000px', margin: '0 auto' }} className="lg:grid-cols-2">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
          >
            <div>
              <h3 style={{ 
                fontSize: '28px', 
                fontWeight: '700', 
                color: '#ffffff', 
                marginBottom: '32px',
                letterSpacing: '-0.5px'
              }}>
                연락처 정보
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#ffffff', fontSize: '16px', marginBottom: '6px' }}>전화</div>
                    <div style={{ color: '#c5c5c5', fontSize: '15px', lineHeight: '1.6' }}>T. 033-763-9785</div>
                    <div style={{ color: '#c5c5c5', fontSize: '15px', lineHeight: '1.6' }}>M. 010-4111-5552</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#ffffff', fontSize: '16px', marginBottom: '6px' }}>이메일</div>
                    <div style={{ color: '#c5c5c5', fontSize: '15px', lineHeight: '1.6' }}>kangsh6917@naver.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#ffffff', fontSize: '16px', marginBottom: '6px' }}>주소</div>
                    <div style={{ color: '#c5c5c5', fontSize: '15px', lineHeight: '1.6' }}>강원특별자치도 원주시 능라동길65, 803호<br />(유포타워 8층)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 상담 신청 폼 */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '15px', 
                fontWeight: '600', 
                color: '#ffffff', 
                marginBottom: '10px',
                letterSpacing: '0.3px'
              }}>
                이름 *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#ffffff',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                placeholder="홍길동"
                onFocus={(e) => {
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '15px', 
                fontWeight: '600', 
                color: '#ffffff', 
                marginBottom: '10px',
                letterSpacing: '0.3px'
              }}>
                연락처 *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#ffffff',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                placeholder="010-1234-5678"
                onFocus={(e) => {
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '15px', 
                fontWeight: '600', 
                color: '#ffffff', 
                marginBottom: '10px',
                letterSpacing: '0.3px'
              }}>
                이메일
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#ffffff',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                placeholder="hong@example.com"
                onFocus={(e) => {
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '15px', 
                fontWeight: '600', 
                color: '#ffffff', 
                marginBottom: '10px',
                letterSpacing: '0.3px'
              }}>
                상담 내용
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#ffffff',
                  outline: 'none',
                  resize: 'none',
                  lineHeight: '1.6',
                  transition: 'all 0.3s ease'
                }}
                placeholder="상담받고 싶은 보험 종류나 문의사항을 작성해주세요"
                onFocus={(e) => {
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            </div>

            {/* 개인정보 동의 */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '20px',
              marginTop: '8px'
            }}>
              <label style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  style={{
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer',
                    marginTop: '2px',
                    flexShrink: 0
                  }}
                />
                <span style={{ 
                  fontSize: '14px', 
                  color: '#ffffff', 
                  lineHeight: '1.6',
                  flex: 1
                }}>
                  <strong>개인정보 수집 및 이용에 동의합니다.</strong> (필수)
                  <button
                    type="button"
                    onClick={() => setShowPrivacy(!showPrivacy)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#a68a64',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      fontSize: '14px',
                      marginLeft: '8px',
                      padding: 0
                    }}
                  >
                    {showPrivacy ? '닫기' : '내용 보기'}
                  </button>
                </span>
              </label>
              
              {showPrivacy && (
                <div style={{
                  marginTop: '16px',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: '#c5c5c5',
                  lineHeight: '1.8',
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}>
                  <p style={{ marginBottom: '12px', fontWeight: '600', color: '#ffffff' }}>개인정보 수집 및 이용 안내</p>
                  <p style={{ marginBottom: '8px' }}><strong>1. 수집 항목:</strong> 이름, 연락처, 이메일, 상담 내용</p>
                  <p style={{ marginBottom: '8px' }}><strong>2. 수집 목적:</strong> 보험 상담 및 서비스 제공</p>
                  <p style={{ marginBottom: '8px' }}><strong>3. 보유 기간:</strong> 상담 완료 후 3년 또는 동의 철회 시까지</p>
                  <p style={{ marginBottom: '8px' }}><strong>4. 거부 권리:</strong> 개인정보 수집 및 이용을 거부할 권리가 있으며, 거부 시 상담 서비스 제공이 제한될 수 있습니다.</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '18px 32px',
                background: '#a68a64',
                color: '#1a1a1a',
                fontSize: '17px',
                fontWeight: '700',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                marginTop: '16px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#8b7355';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(166, 138, 100, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#a68a64';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Send style={{ width: '20px', height: '20px' }} />
              상담 신청하기
            </button>

            <p style={{ 
              fontSize: '14px', 
              color: '#c5c5c5', 
              textAlign: 'center',
              lineHeight: '1.5',
              marginTop: '12px'
            }}>
              * 표시는 필수 입력 항목입니다
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}





