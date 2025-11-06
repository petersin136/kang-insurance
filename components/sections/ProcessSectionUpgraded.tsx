'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: '상담 신청',
    description: '24시간 내 전화 연락',
    details: '홈페이지나 전화로 간편하게 상담 신청하시면, 24시간 내에 전담 설계사가 직접 연락드립니다. 간단한 정보 동의만 해주시면 바로 분석이 시작됩니다.'
  },
  {
    number: '02',
    title: '무료 보장분석',
    description: '현재 가입된 모든 보험 꼼꼼히 체크',
    details: '본인도 모르고 있었던 보험까지 빠짐없이 확인합니다. 중복된 보장, 부족한 보장, 불필요한 특약을 꼼꼼하게 체크하여 현재 상황을 명확하게 파악해드립니다. 완전 무료입니다!'
  },
  {
    number: '03',
    title: '맞춤 보고서 제공',
    description: '무료 분석 보고서 제공',
    details: '현재 보장 내역을 한눈에 볼 수 있는 분석 보고서를 무료로 드립니다. 어떤 보장을 얼마나 받는지 명확히 알 수 있고, 더 좋은 방향이 있다면 부담 없는 개선 제안서도 함께 드립니다.'
  },
  {
    number: '04',
    title: '최적화 실행',
    description: '보험료는 줄이고 보장은 늘리고',
    details: '불필요한 부분은 정리하고, 나이와 상황에 맞는 필요한 보장은 늘립니다. 매달 내는 보험료는 오히려 줄어들고, 정리 시 발생하는 환급금도 돌려받으실 수 있습니다. 평생 관리해드립니다!'
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
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            padding: 'clamp(10px, 1.8vw, 16px) clamp(18px, 3.5vw, 36px)',
            borderRadius: '50px',
            marginBottom: 'clamp(12px, 2vw, 16px)',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)',
            transform: 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <p style={{ 
              fontSize: 'clamp(16px, 3.5vw, 32px)', 
              fontWeight: '800',
              color: '#ffffff',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(8px, 1.5vw, 12px)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <span>내 보험 종합검진</span>
              <span style={{
                background: '#fbbf24',
                color: '#78350f',
                padding: 'clamp(3px, 0.8vw, 4px) clamp(12px, 2.5vw, 16px)',
                borderRadius: '20px',
                fontSize: 'clamp(12px, 2.2vw, 20px)',
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
                  borderRadius: '20px',
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
                  fontSize: 'clamp(13px, 2.2vw, 17px)',
                  color: '#4b5563',
                  lineHeight: '1.7',
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
            padding: 'clamp(24px, 4vw, 45px) clamp(20px, 4vw, 70px)',
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            borderRadius: '20px',
            border: '2px solid #3b82f6',
            boxShadow: '0 8px 30px rgba(59, 130, 246, 0.15)'
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{
              fontSize: 'clamp(18px, 3.5vw, 30px)',
              fontWeight: '800',
              color: '#1e40af',
              marginBottom: 'clamp(18px, 3vw, 26px)',
              lineHeight: '1.5',
              textAlign: 'center'
            }}>
              ✨ 부담 없이 신청하세요!
            </p>
            <p style={{
              fontSize: 'clamp(14px, 2.8vw, 22px)',
              color: '#2563eb',
              fontWeight: '600',
              lineHeight: '1.7',
              marginBottom: 'clamp(16px, 2.5vw, 22px)',
              textAlign: 'left'
            }}>
              홈페이지나 전화로 간편하게 상담 신청하시면, <span style={{ color: '#ef4444', fontWeight: '800' }}>24시간 내에 전화 연락</span> 드립니다. 단 한 번의 통화만으로 바로 분석이 시작됩니다.
            </p>
            <p style={{
              fontSize: 'clamp(14px, 2.8vw, 20px)',
              color: '#1e40af',
              fontWeight: '600',
              marginBottom: 'clamp(16px, 2.5vw, 22px)',
              lineHeight: '1.7',
              textAlign: 'left'
            }}>
              본인도 모르고 있었던 보험까지 꼼꼼하게 체크하여 현재 상황에 맞는 <span style={{ fontWeight: '800', color: '#ef4444' }}>최고의 보장 내역을 분석</span>해드립니다.
            </p>
            <p style={{
              fontSize: 'clamp(14px, 2.8vw, 20px)',
              color: '#3b82f6',
              fontWeight: '600',
              margin: 0,
              lineHeight: '1.7',
              textAlign: 'left'
            }}>
              📧 맞춤 보고서 제공 후, <span style={{ fontWeight: '800' }}>대면 미팅 또는 서면(메일)</span> 중 원하시는 방식으로 편하게 받아보실 수 있습니다.
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





