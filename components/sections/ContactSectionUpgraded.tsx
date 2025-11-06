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
        background: 'linear-gradient(180deg, #faf8f3 0%, #f5f1ea 100%)',
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
            color: '#2b2825', 
            marginBottom: '20px',
            letterSpacing: '-1px',
            lineHeight: '1.2'
          }}>
            {content.title}
          </h2>
          <p style={{ 
            fontSize: 'clamp(16px, 2.5vw, 20px)', 
            color: '#5a534e',
            lineHeight: '1.6'
          }}>
            {content.subtitle}
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* 상단: 연락처 정보 (왼쪽) + 이름/연락처/이메일 (오른쪽) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '60px', 
            marginBottom: '40px'
          }} className="lg:grid-cols-2">
            {/* 연락처 정보 - 왼쪽 */}
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
                  color: '#2b2825', 
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
                      background: '#e8e3d9', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Phone style={{ width: '24px', height: '24px', color: '#2b2825' }} />
                  </div>
                  <div>
                      <div style={{ fontWeight: '600', color: '#2b2825', fontSize: '16px', marginBottom: '6px' }}>전화</div>
                      <div style={{ color: '#5a534e', fontSize: '15px', lineHeight: '1.6' }}>T. 033-763-9785</div>
                      <div style={{ color: '#5a534e', fontSize: '15px', lineHeight: '1.6' }}>M. 010-4111-5552</div>
                  </div>
                </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      background: '#e8e3d9', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Mail style={{ width: '24px', height: '24px', color: '#2b2825' }} />
                  </div>
                  <div>
                      <div style={{ fontWeight: '600', color: '#2b2825', fontSize: '16px', marginBottom: '6px' }}>이메일</div>
                      <div style={{ color: '#5a534e', fontSize: '15px', lineHeight: '1.6' }}>kangsh6917@naver.com</div>
                  </div>
                </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      background: '#e8e3d9', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin style={{ width: '24px', height: '24px', color: '#2b2825' }} />
                  </div>
                  <div>
                      <div style={{ fontWeight: '600', color: '#2b2825', fontSize: '16px', marginBottom: '6px' }}>주소</div>
                      <div style={{ color: '#5a534e', fontSize: '15px', lineHeight: '1.6' }}>강원특별자치도 원주시 능라동길65, 803호<br />(유포타워 8층)</div>
                    </div>
                  </div>
                </div>
            </div>
          </motion.div>

            {/* 이름, 연락처, 이메일 입력 - 오른쪽 */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '15px', 
                  fontWeight: '600', 
                  color: '#2b2825', 
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
                    background: '#ffffff',
                    border: '1px solid #d4c5b0',
                    borderRadius: '12px',
                    fontSize: '15px',
                    color: '#111827',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                placeholder="홍길동"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a68a64';
                    e.target.style.boxShadow = '0 0 0 3px rgba(166, 138, 100, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d4c5b0';
                    e.target.style.boxShadow = 'none';
                  }}
              />
            </div>

            <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '15px', 
                  fontWeight: '600', 
                  color: '#2b2825', 
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
                    background: '#ffffff',
                    border: '1px solid #d4c5b0',
                    borderRadius: '12px',
                    fontSize: '15px',
                    color: '#111827',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                placeholder="010-1234-5678"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a68a64';
                    e.target.style.boxShadow = '0 0 0 3px rgba(166, 138, 100, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d4c5b0';
                    e.target.style.boxShadow = 'none';
                  }}
              />
            </div>

            <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '15px', 
                  fontWeight: '600', 
                  color: '#2b2825', 
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
                    background: '#ffffff',
                    border: '1px solid #d4c5b0',
                    borderRadius: '12px',
                    fontSize: '15px',
                    color: '#111827',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                placeholder="hong@example.com"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a68a64';
                    e.target.style.boxShadow = '0 0 0 3px rgba(166, 138, 100, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d4c5b0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </motion.div>
            </div>

          {/* 하단: 상담 내용 (전체 너비) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginBottom: '24px' }}
          >
            <label style={{ 
              display: 'block', 
              fontSize: '15px', 
              fontWeight: '600', 
              color: '#2b2825', 
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
                background: '#ffffff',
                border: '1px solid #d4c5b0',
                borderRadius: '12px',
                fontSize: '15px',
                color: '#111827',
                outline: 'none',
                resize: 'none',
                lineHeight: '1.6',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
                placeholder="상담받고 싶은 보험 종류나 문의사항을 작성해주세요"
              onFocus={(e) => {
                e.target.style.borderColor = '#a68a64';
                e.target.style.boxShadow = '0 0 0 3px rgba(166, 138, 100, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d4c5b0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </motion.div>

          {/* 개인정보 동의 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ 
              background: '#f5f1ea',
              border: '1px solid #d4c5b0',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}
          >
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
                  color: '#2b2825', 
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
                  padding: '20px',
                  background: '#ffffff',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: '#5a534e',
                  lineHeight: '1.9',
                  maxHeight: '400px',
                  overflowY: 'auto',
                  border: '1px solid #d4c5b0'
                }}>
                  <p style={{ marginBottom: '16px', fontWeight: '700', color: '#2b2825', fontSize: '15px', borderBottom: '1px solid #d4c5b0', paddingBottom: '12px' }}>
                    개인정보 수집 및 이용에 대한 안내
                  </p>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>1. 개인정보의 수집 및 이용 목적</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 보험 상담 및 컨설팅 서비스 제공</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 보험 상품 안내 및 가입 권유</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 고객 문의사항 처리 및 민원 해결</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 보험계약 체결 및 유지 관리</p>
                    <p style={{ paddingLeft: '12px' }}>• 법령상 의무 이행 (금융실명거래 및 비밀보장에 관한 법률 등)</p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>2. 수집하는 개인정보 항목</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• <strong>필수항목:</strong> 성명, 휴대전화번호, 이메일 주소, 상담 내용</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• <strong>자동수집:</strong> IP 주소, 쿠키, 접속 로그, 방문 일시</p>
                    <p style={{ paddingLeft: '12px', fontSize: '12px', color: '#999' }}>
                      ※ 보험계약 체결 시 생년월일, 주소, 직업 등 추가 정보가 필요할 수 있습니다.
                    </p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>3. 개인정보의 보유 및 이용기간</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 상담 신청 시로부터 <strong>3년</strong> (금융 관련 법령에 따른 최소 보존기간)</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 보험계약 체결 시: 계약 종료 후 5년 (상법, 전자금융거래법)</p>
                    <p style={{ paddingLeft: '12px' }}>• 동의 철회 요청 시 지체없이 파기 (단, 법령에 따라 보존이 필요한 경우 예외)</p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>4. 개인정보의 제3자 제공</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 원칙적으로 고객의 개인정보를 제3자에게 제공하지 않습니다.</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 다만, 보험계약 체결을 위해 <strong>보험회사</strong>에 필요 최소한의 정보를 제공할 수 있으며, 이 경우 사전에 별도 동의를 받습니다.</p>
                    <p style={{ paddingLeft: '12px', fontSize: '12px', color: '#999' }}>
                      (제공받는 자: 각 보험회사 / 제공 항목: 성명, 생년월일, 연락처 등 / 이용 목적: 보험계약 심사 및 체결)
                    </p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>5. 개인정보 처리위탁</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 업무 효율화를 위해 개인정보 처리업무를 외부에 위탁할 수 있습니다.</p>
                    <p style={{ paddingLeft: '12px' }}>• 위탁 시 개인정보보호 관련 법규 준수를 위해 위탁계약서 등을 통해 엄격히 관리합니다.</p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>6. 정보주체의 권리·의무 및 행사방법</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>귀하는 개인정보 주체로서 다음과 같은 권리를 행사할 수 있습니다:</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 개인정보 열람, 정정, 삭제 요구</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 개인정보 처리정지 요구</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 동의 철회 (회원 탈퇴)</p>
                    <p style={{ paddingLeft: '12px', fontSize: '12px', color: '#999' }}>
                      ※ 권리 행사는 서면, 전화, 이메일 등을 통해 가능하며, 대리인을 통한 요구도 가능합니다.
                    </p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>7. 개인정보의 파기 절차 및 방법</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• <strong>파기절차:</strong> 보유기간 경과 시 내부 방침에 따라 지체없이 파기</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• <strong>파기방법:</strong> 전자적 파일은 복구 불가능하도록 영구 삭제, 종이 문서는 분쇄 또는 소각</p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>8. 개인정보 보호책임자</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 성명: 강성현</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 연락처: 010-4111-5552</p>
                    <p style={{ paddingLeft: '12px' }}>• 이메일: kangsh6917@naver.com</p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>9. 개인정보의 안전성 확보조치</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 개인정보 암호화 및 접근권한 관리</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 해킹 등에 대비한 기술적 대책</p>
                    <p style={{ paddingLeft: '12px' }}>• 개인정보 취급 직원의 최소화 및 교육</p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2b2825' }}>10. 동의 거부권 및 불이익</p>
                    <p style={{ marginBottom: '4px', paddingLeft: '12px' }}>• 귀하는 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다.</p>
                    <p style={{ paddingLeft: '12px' }}>• 다만, 필수항목 동의를 거부하실 경우 보험 상담 및 계약 체결이 제한될 수 있습니다.</p>
            </div>

                  <div style={{ 
                    marginTop: '20px', 
                    paddingTop: '16px', 
                    borderTop: '1px solid #d4c5b0',
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    <p style={{ marginBottom: '4px' }}>본 동의는 상담 신청일로부터 효력이 발생하며, 동의 이후에라도 언제든지 철회 가능합니다.</p>
                    <p>개인정보보호법, 신용정보의 이용 및 보호에 관한 법률, 금융실명거래 및 비밀보장에 관한 법률 등 관련 법령에 따라 처리됩니다.</p>
                  </div>
                </div>
              )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
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
                marginBottom: '12px'
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
              color: '#5a534e', 
              textAlign: 'center',
              lineHeight: '1.5'
            }}>
              * 표시는 필수 입력 항목입니다
            </p>
          </motion.div>
        </form>

        {/* 모바일 전용 관리자 페이지 버튼 */}
        <div className="block md:hidden" style={{ marginTop: '40px', textAlign: 'center' }}>
          <a
            href="/manage"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: '#e8e3d9',
              border: '1px solid #d4c5b0',
              borderRadius: '8px',
              color: '#2b2825',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#d4c5b0';
              e.currentTarget.style.borderColor = '#a68a64';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#e8e3d9';
              e.currentTarget.style.borderColor = '#d4c5b0';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            관리자 모드
          </a>
        </div>
      </div>
    </section>
  );
}





