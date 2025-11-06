'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: '김*철',
    company: '택배 기사',
    title: '월 18만원으로 가족 보장 제대로 받게 됐어요',
    content: '택배 일 하면서 보험 여유가 없어서 월 8만원짜리만 하나 들어놨었어요. 근데 분석해보니 암 진단비가 1천만원밖에 안 되고 사망보장도 5천만원이더라고요. 설계사님이 월 18만원으로 암 3천만원, 뇌출혈·심근경색 각 2천만원, 사망보장 1억으로 구성해주셨습니다. 10만원 더 내지만 가족 걱정은 덜었어요.'
  },
  {
    name: '박*순',
    company: '편의점 운영',
    title: '보험 3개 중복 정리하고 월 7만원 아꼈습니다',
    content: '편의점 운영하느라 바빠서 친구 소개로 보험 여러 개 들었는데, 알고 보니 비슷한 보장이 겹치더라고요. 월 25만원씩 내고 있었는데 재설계 받고 18만원으로 줄었어요. 암 2천만원, 뇌출혈 1천5백만원, 실손의료비 다 있고, 아낀 돈으로 가게 운영비에 보탭니다.'
  },
  {
    name: '이*희',
    company: '병원 간호조무사',
    title: '50대, 갱신형 보험료 폭탄 해결했어요',
    content: '병원에서 일하는데 10년 전에 가입한 갱신형 보험료가 매년 오르더라고요. 52세 되니까 월 16만원이 23만원까지 올라서 해지하려 했어요. 그런데 기존 보험은 유지하고 갱신 없는 암보험으로 추가해서 월 19만원에 정리했습니다. 이제 보험료 걱정 없이 70세까지 보장받아요!'
  },
  {
    name: '정*수',
    company: '지역 공장 생산직',
    title: '15년 된 보험, 제대로 활용하게 됐어요',
    content: '2009년에 가입한 보험 월 12만원씩 내고 있었는데 뭐가 보장되는지 모르고 있었어요. 분석해보니 예정이율 4.5%라 좋은 보험이라고 하시더라고요. 여기에 실손의료비랑 암 진단비 2천만원 추가하고 불필요한 특약 빼서 총 17만원으로 정리했어요. 평생 보험료 오르지 않아 마음 편합니다.'
  },
  {
    name: '최*영',
    company: '학교 급식 조리사',
    title: '부부 보험 정리하고 월 12만원 절약했어요',
    content: '남편이랑 저랑 각자 보험 들어서 월 35만원씩 나갔어요. 급식실 일하면서 버는 돈으로는 부담스러웠는데, 중복된 거 정리하고 필요한 보장만 남겼더니 23만원으로 줄었습니다. 암은 각자 2천만원씩, 실손도 하나로 통합하고, 사망보장은 남편 것만 유지했어요. 보험료 아낀 돈으로 애들 학원비 보탭니다!'
  }
];

// 추가 후기 데이터 (4개 카드 그리드용)
const additionalReviews = [
  {
    title: '월 14만원에서 9만원으로 줄었어요',
    content: '마트에서 캐셔로 일하는데 보험료 부담이 컸어요. 분석해보니 암 보장 1천만원에 월 14만원이나 내고 있었더라고요. 재구성해서 암 2천만원으로 높이고 실손도 추가했는데 월 9만원으로 줄었습니다. 5만원 아껴서 생활비에 보태요!',
    author: '이*호',
    date: '12월 14일'
  },
  {
    title: '20만원 내던 보험, 13만원으로 정리',
    content: '식당에서 일하면서 친구 소개로 가입한 보험이 월 20만원이었어요. 부담스러워서 상담받았더니 중복된 특약 많더라고요. 필요한 것만 남기고 정리했더니 13만원으로 줄고 보장은 그대로예요. 진작 받을걸 후회됩니다!',
    author: '김*지',
    date: '2월 2일'
  },
  {
    title: '갱신형 18만원, 비갱신형 15만원으로',
    content: '택시 운전하는데 갱신형 보험이 10년 지나니 18만원까지 올랐어요. 나이 들면 더 오른다고 해서 걱정했는데, 비갱신형으로 바꿔서 15만원에 평생 보장받게 됐습니다. 이제 보험료 걱정 없어요!',
    author: '박*연',
    date: '4월 13일'
  },
  {
    title: '부부 합쳐 30만원에서 19만원으로',
    content: '공장 다니는 남편이랑 저랑 각자 보험 들어서 합쳐서 30만원 나갔어요. 아이 둘 키우는데 부담됐는데, 중복 정리하고 19만원으로 줄었어요. 11만원 절약해서 애들 과외비 보탭니다. 정말 감사해요!',
    author: '최*우',
    date: '4월 17일'
  }
];

export default function TestimonialsSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section 
      ref={ref} 
      style={{ 
        padding: 'clamp(40px, 6vw, 60px) 0', 
        background: '#f5f5f5',
        width: '100%', 
        overflow: 'hidden', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 60px)', width: '100%' }}>
        {/* 최상단 제목 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="testimonials-title"
          style={{
            fontSize: 'clamp(20px, 4vw, 48px)',
            fontWeight: '800',
            color: '#111827',
            textAlign: 'center',
            marginBottom: 'clamp(20px, 3vw, 45px)',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            padding: '0 10px'
          }}
        >
          용기내어 상담 신청해 주신 고객님들
        </motion.h2>

        {/* 카드 영역 - 크기 축소 */}
        <div style={{ 
          maxWidth: '950px', 
          margin: '0 auto', 
          position: 'relative', 
          width: '100%',
          perspective: '2000px'
        }}>
          <motion.div
            key={current}
            initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 15, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ 
              background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
              borderRadius: '20px',
              padding: 'clamp(20px, 3.5vw, 40px)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25), 0 15px 30px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              transform: 'translateZ(0)',
              minHeight: 'clamp(280px, 50vw, 320px)'
            }}
          >
            {/* 상단 프로필 영역 */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: 'clamp(20px, 3.5vw, 30px)',
              paddingBottom: 'clamp(16px, 2.5vw, 22px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 1.5vw, 12px)'
              }}>
                <span style={{ 
                  fontSize: 'clamp(16px, 2.8vw, 20px)', 
                  fontWeight: '700', 
                  color: '#ffffff',
                  letterSpacing: '-0.01em'
                }}>
                  {testimonials[current].name}
                </span>
                <span style={{ 
                  fontSize: 'clamp(12px, 1.8vw, 14px)', 
                  color: '#9ca3af',
                  fontWeight: '400'
                }}>
                  {testimonials[current].company}
                </span>
              </div>
              
              {/* 로고 영역 */}
              <div style={{
                width: 'clamp(36px, 5.5vw, 48px)',
                height: 'clamp(36px, 5.5vw, 48px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3L10.5 3L10.5 10.5L3 10.5L3 3Z" fill="white" fillOpacity="0.9"/>
                  <path d="M13.5 3L21 3L21 10.5L13.5 10.5L13.5 3Z" fill="white" fillOpacity="0.6"/>
                  <path d="M3 13.5L10.5 13.5L10.5 21L3 21L3 13.5Z" fill="white" fillOpacity="0.6"/>
                  <path d="M13.5 13.5L21 13.5L21 21L13.5 21L13.5 13.5Z" fill="white" fillOpacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* 컨텐츠 영역 */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'clamp(200px, 35%, 340px) 1fr',
              gap: 'clamp(24px, 5vw, 48px)',
              alignItems: 'start'
            }}
            className="testimonial-grid"
            >
              {/* 왼쪽 큰 제목 */}
              <div>
                <h3 style={{
                  fontSize: 'clamp(18px, 3.5vw, 40px)',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: '1.3',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '-0.02em'
                }}>
                  {testimonials[current].title}
                </h3>
              </div>

              {/* 오른쪽 상세 내용 */}
              <div>
                <p style={{
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#9ca3af',
                  lineHeight: '1.7',
                  fontWeight: '400',
                  letterSpacing: '0.01em'
                }}>
                  {testimonials[current].content}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 네비게이션 */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 'clamp(14px, 2.5vw, 20px)', 
            marginTop: 'clamp(32px, 5vw, 48px)' 
          }}>
            {/* 왼쪽 화살표 */}
            <button
              onClick={prev}
              aria-label="이전 후기"
              style={{
                width: 'clamp(40px, 6vw, 46px)',
                height: 'clamp(40px, 6vw, 46px)',
                borderRadius: '50%',
                border: '2px solid #e5e7eb',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4a5568';
                e.currentTarget.style.borderColor = '#4a5568';
                e.currentTarget.style.transform = 'scale(1.1)';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) (svg as any).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1)';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) (svg as any).style.color = '#1a1a1a';
              }}
            >
              <ChevronLeft style={{ width: '20px', height: '20px', color: '#1a1a1a', transition: 'color 0.3s' }} />
            </button>

            {/* 페이지 인디케이터 */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`${index + 1}번째 후기로 이동`}
                  style={{
                    width: index === current ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: index === current ? '#4a5568' : '#d1d5db',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    padding: 0
                  }}
                />
              ))}
            </div>

            {/* 오른쪽 화살표 */}
            <button
              onClick={next}
              aria-label="다음 후기"
              style={{
                width: 'clamp(40px, 6vw, 46px)',
                height: 'clamp(40px, 6vw, 46px)',
                borderRadius: '50%',
                border: '2px solid #e5e7eb',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4a5568';
                e.currentTarget.style.borderColor = '#4a5568';
                e.currentTarget.style.transform = 'scale(1.1)';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) (svg as any).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1)';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) (svg as any).style.color = '#1a1a1a';
              }}
            >
              <ChevronRight style={{ width: '20px', height: '20px', color: '#1a1a1a', transition: 'color 0.3s' }} />
            </button>
          </div>
        </div>

        {/* 4개 카드 그리드 섹션 추가 */}
        <div style={{ 
          maxWidth: '1300px', 
          margin: 'clamp(20px, 2.5vw, 30px) auto 0',
          padding: '0'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(16px, 2.5vw, 24px)'
          }}
          className="review-cards-grid"
          >
            {additionalReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: 'clamp(20px, 3.5vw, 32px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {/* 별점 */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      style={{ 
                        width: '16px', 
                        height: '16px', 
                        fill: '#00b67a', 
                        color: '#00b67a' 
                      }} 
                    />
                  ))}
                </div>

                {/* 제목 */}
                <h3 style={{
                  fontSize: 'clamp(15px, 2vw, 18px)',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {review.title}
                </h3>

                {/* 내용 */}
                <p style={{
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  color: '#4a4a4a',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  {review.content}
                </p>

                {/* 작성자 정보 */}
                <div style={{ marginTop: 'auto' }}>
                  <div style={{
                    fontSize: 'clamp(13px, 1.8vw, 14px)',
                    fontWeight: '700',
                    color: '#1a1a1a',
                    marginBottom: '4px'
                  }}>
                    {review.author}
                  </div>
                  <div style={{
                    fontSize: 'clamp(12px, 1.6vw, 13px)',
                    color: '#9ca3af'
                  }}>
                    {review.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 모바일 반응형 스타일 */}
      <style jsx>{`
        @media (max-width: 768px) {
          .testimonials-title {
            white-space: normal !important;
            font-size: 20px !important;
            line-height: 1.3 !important;
            padding: 0 8px !important;
          }
          .testimonial-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .review-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .review-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}





