'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: '김서연',
    company: '삼성전자 마케팅팀',
    title: '월 42만원에서 28만원으로 줄이면서 보장은 2배 늘었습니다',
    content: '강수호 설계사님께 보장 분석을 받기 전까지는 제가 매달 42만원씩 내는 보험이 정말 제대로 된 건지 몰랐습니다. 10년 전 회사 선배 소개로 가입한 보험들을 그냥 유지하고 있었는데, 분석 결과를 보고 정말 놀랐습니다. 암 진단비는 3천만원인데 실손의료비는 5천만원 한도로 2개나 중복 가입되어 있었고, 사망보장은 1억밖에 안 되는데 월 납입료만 엄청 나가고 있었어요. 강 설계사님이 제안해주신 포트폴리오로 재구성한 결과, 암 진단비 5천만원, 2대 질병 진단비 각 3천만원, 사망보장 3억으로 늘었고 실손은 하나로 정리했는데도 월 28만원으로 14만원이나 절약되었습니다. 보험료 아낀 돈으로 매달 적금도 들고 있어요.',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    name: '박준혁',
    company: '자영업 (카페 운영)',
    title: '불필요한 특약 정리하고 실속있는 보장으로 바꿨습니다',
    content: '제가 가입한 보험이 6개나 되더라고요. 종신보험 2개, 건강보험 3개, 암보험 1개. 보험증권을 꺼내서 하나하나 확인해보니 어떤 게 어떤 보장인지도 헷갈렸습니다. 강수호 설계사님이 전체 보장 분석표를 만들어주셨는데, 같은 보장이 3중으로 중복된 것도 있고, 정작 중요한 뇌출혈이나 심근경색 보장은 하나도 없었습니다. 월 납입액은 총 47만원이었는데, 재설계 후 32만원으로 줄었고, 3대 질병 진단비는 각 5천만원씩, 입원비는 일당 10만원, 수술비도 최대 1천만원까지 보장받게 되었습니다. 무엇보다 이제는 제 보험이 뭘 보장하는지 명확하게 알고 있다는 게 가장 큰 변화입니다.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    name: '이미경',
    company: 'LG화학 연구원',
    title: '40대 후반, 늦었다고 생각했는데 최적의 플랜을 찾았습니다',
    content: '48세에 보험을 새로 가입하려니 보험료가 너무 비싸서 포기하려고 했습니다. 그런데 강수호 설계사님이 제 기존 보험 3개를 분석해보시더니, "해지하지 마시고 부족한 부분만 보완하면 됩니다"라고 하시더라고요. 15년 전 가입한 종신보험은 예정이율이 높아서 유지하는 게 유리하고, 10년 전 암보험은 구형이지만 갱신 없이 보장이 평생 가는 장점이 있다며, 새로 가입할 보험은 실손의료비와 진단비 위주로 최소화해서 제안해주셨습니다. 결과적으로 기존 월 23만원에서 34만원으로 11만원만 더 내고, 실손의료비는 최신형으로 확보하고, 3대 질병 진단비는 각 3천만원씩 추가되었습니다. 나이 때문에 망설였는데, 지금이라도 제대로 된 분석을 받아서 정말 다행입니다.',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    name: '정태양',
    company: '현대자동차 생산직',
    title: '20년 묵은 보험, 이제야 의미를 알게 되었습니다',
    content: '2004년에 가입한 보험을 20년째 유지하고 있었습니다. 월 18만원씩 내고 있었는데, 솔직히 뭘 보장받는지도 모르고 그냥 내고 있었어요. 강수호 설계사님께 보장 분석을 요청했더니, "이 보험은 절대 해지하시면 안 됩니다"라고 하시더라고요. 예정이율 5.5%에 종신까지 보장되는 상품이라, 지금은 이런 조건으로 가입이 불가능하다고 하셨습니다. 다만 의료비 보장이 약해서, 실손의료비와 3대 질병 진단비를 추가로 가입하고, 기존 보험의 불필요한 특약 4개는 해지해서 월 15만원으로 줄였습니다. 그리고 추가 보험 월 12만원을 더해서 총 27만원으로, 사망보장 2억 + 암 5천만원 + 뇌출혈/심근경색 각 3천만원 + 실손의료비 완벽하게 구성했습니다. 20년 만에 제 보험을 제대로 이해하게 되었습니다.',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    name: '최은정',
    company: '교사 (초등학교)',
    title: '자녀 보험까지 함께 분석받고 가족 전체 플랜 완성',
    content: '저와 남편, 아이 둘까지 총 4명의 보험을 관리하다 보니 매달 나가는 돈만 80만원이 넘었습니다. 강수호 설계사님께 가족 전체 보장 분석을 받았는데, 3시간 동안 보험증권 12개를 하나하나 다 뜯어보시더라고요. 남편은 사망보장이 과도하게 5억이나 되는데 정작 암 진단비는 없었고, 제 보험은 만기가 60세라 노후 보장이 전혀 안 되고 있었습니다. 아이들 보험도 비슷한 보장이 중복되어 있었고요. 재설계 결과, 가족 전체 보험료는 월 58만원으로 22만원 절약되었고, 부족했던 보장은 다 채웠습니다. 남편 사망보장은 3억으로 적정화하고 3대 질병 진단비를 추가했고, 제 보험은 80세 만기로 변경했으며, 아이들 보험은 중복 제거하고 성인 전환 시 유리한 상품으로 바꿨습니다. 이제 안심하고 우리 가족 미래를 준비할 수 있게 되었습니다.',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
  }
];

// 추가 후기 데이터 (4개 카드 그리드용)
const additionalReviews = [
  {
    title: '정말 쉽고 빠른 프로세스',
    content: '보험 설계사님과의 상담 경험이 매우 좋았습니다. 복잡한 보험 내용을 쉽게 설명해주셔서 이해하기 편했고, 제 상황에 딱 맞는 보험을 추천해주셨습니다. 계약 과정도 간단했고, 중간 중간 상황을 알려주셔서 안심할 수 있었습니다. 100% 추천합니다.',
    author: '이준호',
    date: '12월 14일'
  },
  {
    title: '보험 상담이 이렇게 쉬울 줄 몰랐어요',
    content: '보험 가입 절차가 정말 간단했습니다. 담당자분이 친절하게 질문에 답변해주셨고, 제게 필요한 최적의 상품을 찾을 수 있도록 도와주셨습니다. 보험 대리인과 연결해주신 후 신청 과정도 빠르고 쉬웠어요. 누구에게나 추천하고 싶습니다.',
    author: '김민지',
    date: '2월 2일'
  },
  {
    title: '간단하고 스트레스 없는 상담',
    content: '상담 과정이 정말 간단하고 편안했습니다. 전혀 스트레스를 받지 않았어요. 모든 궁금한 점에 대해 답변을 받았고, 과정 내내 세심하게 배려해주셨습니다. 보험 가입을 고민 중이라면 망설이지 마세요. 후회하지 않으실 겁니다.',
    author: '박서연',
    date: '4월 13일'
  },
  {
    title: '전문적이고 신속한 응대',
    content: '팀에서 제 니즈를 빠르게 파악해주셨고, 상품에 대해 잘 알고 계셨으며, 가장 적합한 추천을 해주셨습니다. 신청 과정이 간단했고, 각 단계마다 진행 상황을 확인할 수 있었습니다. 정말 훌륭한 경험이었습니다!',
    author: '최현우',
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
              background: '#000000',
              borderRadius: '20px',
              padding: 'clamp(24px, 4.5vw, 40px)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25), 0 15px 30px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              transform: 'translateZ(0)',
              minHeight: '320px'
            }}
          >
            {/* 상단 프로필 영역 */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: 'clamp(24px, 4vw, 36px)',
              paddingBottom: 'clamp(20px, 3.5vw, 28px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 1.8vw, 16px)' }}>
                <div style={{
                  width: 'clamp(44px, 7vw, 60px)',
                  height: 'clamp(44px, 7vw, 60px)',
                  borderRadius: '50%',
                  background: `url(${testimonials[current].profileImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '2.5px solid rgba(255, 255, 255, 0.2)',
                  flexShrink: 0
                }} />
                <div>
                  <div style={{ 
                    fontSize: 'clamp(16px, 2.8vw, 20px)', 
                    fontWeight: '700', 
                    color: '#ffffff',
                    marginBottom: '3px',
                    letterSpacing: '-0.01em'
                  }}>
                    {testimonials[current].name}
                  </div>
                  <div style={{ 
                    fontSize: 'clamp(12px, 1.8vw, 14px)', 
                    color: '#9ca3af',
                    fontWeight: '400'
                  }}>
                    {testimonials[current].company}
                  </div>
                </div>
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
              gridTemplateColumns: 'clamp(240px, 42%, 400px) 1fr',
              gap: 'clamp(20px, 4vw, 36px)',
              alignItems: 'start'
            }}
            className="testimonial-grid"
            >
              {/* 왼쪽 큰 제목 */}
              <div>
                <h3 style={{
                  fontSize: 'clamp(20px, 3.5vw, 34px)',
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
                  fontSize: 'clamp(13px, 2vw, 15px)',
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
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.borderColor = '#000000';
                e.currentTarget.style.transform = 'scale(1.1)';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) (svg as HTMLElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1)';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) (svg as HTMLElement).style.color = '#1a1a1a';
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
                    background: index === current ? '#1a1a1a' : '#d1d5db',
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
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.borderColor = '#000000';
                e.currentTarget.style.transform = 'scale(1.1)';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) (svg as HTMLElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1)';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) (svg as HTMLElement).style.color = '#1a1a1a';
              }}
            >
              <ChevronRight style={{ width: '20px', height: '20px', color: '#1a1a1a', transition: 'color 0.3s' }} />
            </button>
          </div>
        </div>

        {/* 4개 카드 그리드 섹션 추가 */}
        <div style={{ 
          maxWidth: '1300px', 
          margin: 'clamp(60px, 10vw, 100px) auto 0',
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





