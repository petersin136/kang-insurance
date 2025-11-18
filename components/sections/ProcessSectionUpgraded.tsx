'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: '상담 신청',
    description: '24시간 내 전화 연락',
    details: '신청 후 24시간 안에 담당 설계사가 바로 전화를 드립니다.'
  },
  {
    number: '02',
    title: '무료 보장분석',
    description: '현재 가입된 모든 보험 꼼꼼히 체크',
    details: '중복·부족 보장을 한 번에 점검해 현재 상황을 명확히 알려드립니다.'
  },
  {
    number: '03',
    title: '맞춤 보고서 제공',
    description: '무료 분석 보고서 제공',
    details: '맞춤 분석 보고서를 무료로 전달해 드리고 개선 방향까지 제안합니다.'
  },
  {
    number: '04',
    title: '최적화 실행',
    description: '보험료는 줄이고 보장은 늘리고',
    details: '보험료는 줄이고 필요한 보장은 키워 평생 관리까지 이어드립니다.'
  }
];

export default function ProcessSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      style={{ 
        padding: 'clamp(60px, 10vw, 100px) 0', 
        background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
        width: '100%', 
        overflow: 'hidden' 
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)', width: '100%' }}>
        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 'clamp(20px, 2.5vw, 35px)' }}
        >
          {/* 눈길 끄는 메인 카피 */}
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%)',
            padding: 'clamp(18px, 3vw, 32px) clamp(32px, 5.5vw, 72px)',
            borderRadius: '64px',
            marginBottom: 'clamp(16px, 2.5vw, 22px)',
            boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
            border: '1px solid #88d8a3',
            transform: 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <p style={{ 
              fontSize: 'clamp(20px, 4.8vw, 42px)', 
              fontWeight: '800',
              color: '#1a5d3a',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(10px, 2vw, 16px)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <span>내 보험 종합검진</span>
              <span style={{
                background: '#fbbf24',
                color: '#78350f',
                padding: 'clamp(6px, 1.4vw, 8px) clamp(16px, 3vw, 22px)',
                borderRadius: '999px',
                fontSize: 'clamp(16px, 3.2vw, 24px)',
                fontWeight: '900'
              }}>
                100% 무료
              </span>
            </p>
          </div>
          
          <p style={{ 
            fontSize: 'clamp(14px, 2.8vw, 22px)', 
            color: '#ef4444',
            fontWeight: '700',
            marginBottom: 'clamp(6px, 1.2vw, 8px)'
          }}>
            나도 모르는 보험 낭비, 지금 확인하세요!
          </p>
          <p style={{ 
            fontSize: 'clamp(13px, 2.3vw, 18px)', 
            color: '#6b7280',
            fontWeight: '500',
            marginBottom: 'clamp(18px, 3vw, 24px)'
          }}>
            보험료는 줄이고 ↓ 보장은 늘리는 ↑ 똑똑한 분석
          </p>
          
          <h2 style={{ 
            fontSize: 'clamp(22px, 4.5vw, 56px)', 
            fontWeight: '800', 
            color: '#111827', 
            marginTop: 'clamp(20px, 3vw, 32px)',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap'
          }}>
            상담 프로세스
          </h2>
        </motion.div>

        {/* 세로 프로세스 */}
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* 세로 연결선 */}
          <div 
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '60px',
              top: '45px',
              bottom: '45px',
              width: '2px',
              background: 'linear-gradient(to bottom, #3b82f6, #60a5fa, #93c5fd)',
              zIndex: 0
            }}
          />

            {steps.map((step, index) => (
              <motion.div
                key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                display: 'flex',
                gap: 'clamp(16px, 3vw, 48px)',
                marginBottom: index === steps.length - 1 ? 0 : 'clamp(28px, 4vw, 60px)',
                position: 'relative',
                alignItems: 'flex-start'
              }}
              className="process-step"
            >
              {/* 왼쪽: 번호 + 제목 */}
              <div style={{ 
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '120px'
              }}>
                {/* 번호 원 */}
                <div style={{
                  position: 'relative',
                  zIndex: 10,
                  width: 'clamp(60px, 10vw, 90px)',
                  height: 'clamp(60px, 10vw, 90px)',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                  marginBottom: 'clamp(12px, 2vw, 16px)',
                  flexShrink: 0
                }}>
                  <span style={{
                    fontSize: 'clamp(20px, 3.5vw, 36px)',
                    fontWeight: '800',
                    color: '#ffffff',
                    lineHeight: '1'
                  }}>
                    {step.number}
                  </span>
                </div>

                {/* 제목 */}
                <h3 style={{
                  fontSize: 'clamp(15px, 2.5vw, 22px)',
                  fontWeight: '700',
                  color: '#111827',
                  textAlign: 'center',
                  lineHeight: '1.3',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  zIndex: 10,
                  background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
                  padding: '0 4px'
                }}>
                  {step.title}
                </h3>
              </div>

              {/* 오른쪽: 상세 설명 카드 */}
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
                style={{
                  flex: 1,
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: 'clamp(18px, 3vw, 32px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e5e7eb',
                  alignSelf: 'flex-start'
                }}
              >
                {/* 부제목 */}
                <div style={{
                  display: 'inline-block',
                  padding: 'clamp(5px, 1vw, 6px) clamp(10px, 2vw, 14px)',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  borderRadius: '16px',
                  marginBottom: 'clamp(10px, 1.5vw, 12px)'
                }}>
                  <p style={{
                    fontSize: 'clamp(11px, 1.8vw, 15px)',
                    fontWeight: '600',
                    color: '#1e40af',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>

                {/* 상세 내용 */}
                <p style={{
                  fontSize: 'clamp(16px, 2.8vw, 22px)',
                  color: '#1f2937',
                  lineHeight: '1.5',
                  fontWeight: 600,
                  margin: 0
                }}>
                  {step.details}
                </p>
              </motion.div>
              </motion.div>
            ))}
        </div>

        {/* 하단 강조 문구 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: 'clamp(30px, 5vw, 70px)',
            padding: 'clamp(18px, 3vw, 32px) clamp(16px, 3vw, 48px)',
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{
              fontSize: 'clamp(15px, 2.6vw, 22px)',
              fontWeight: '800',
              color: '#111827',
              marginBottom: 'clamp(16px, 2.5vw, 22px)',
              lineHeight: '1.4',
              textAlign: 'center'
            }}>
              ✨ 부담 없이 신청하세요!
            </p>
            <p style={{
              fontSize: 'clamp(15px, 2.6vw, 22px)',
              color: '#111827',
              fontWeight: 600,
              lineHeight: '1.5',
              marginBottom: 'clamp(14px, 2.2vw, 18px)',
              textAlign: 'center'
            }}>
              신청만 남기면 <span style={{ color: '#ef4444', fontWeight: '800' }}>24시간 내 바로 연락</span> 드리고 한 통화로 분석을 시작합니다.
            </p>
            <p style={{
              fontSize: 'clamp(15px, 2.6vw, 22px)',
              color: '#111827',
              fontWeight: 600,
              lineHeight: '1.5',
              marginBottom: 'clamp(14px, 2.2vw, 18px)',
              textAlign: 'center'
            }}>
              숨은 보험까지 정리해 <span style={{ fontWeight: '800', color: '#ef4444' }}>최적 보장 플랜</span>만 남겨드립니다.
            </p>
            <p style={{
              fontSize: 'clamp(15px, 2.6vw, 22px)',
              color: '#1f2937',
              fontWeight: 600,
              lineHeight: '1.5',
              margin: 0,
              textAlign: 'center'
            }}>
              📧 보고서는 <span style={{ fontWeight: '800', color: '#3b82f6' }}>대면·메일</span> 중 편한 방식으로 전달드립니다.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 모바일 반응형 스타일 */}
      <style jsx>{`
        @media (max-width: 768px) {
          .process-step {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}





