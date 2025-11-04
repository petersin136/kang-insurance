'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: '김민수',
    age: 45,
    occupation: '회사원',
    rating: 5,
    content: '25년 경력의 전문성이 느껴졌습니다. 복잡한 보험 상품을 쉽게 설명해주셔서 이해하기 쉬웠고, 제 상황에 딱 맞는 보험을 추천해주셨습니다.',
    insurance: '생명보험'
  },
  {
    name: '이지은',
    age: 38,
    occupation: '자영업',
    rating: 5,
    content: '다른 설계사들과 달리 강요하지 않고 필요한 것만 권유해주셨어요. 보험금 청구 과정도 친절하게 도와주셔서 정말 감사했습니다.',
    insurance: '건강보험'
  },
  {
    name: '박준호',
    age: 52,
    occupation: '사업가',
    rating: 5,
    content: '노후 준비를 위한 연금보험을 찾다가 상담받았습니다. 여러 상품을 비교 분석해주시고, 장단점을 명확히 설명해주셔서 확신을 가지고 가입했습니다.',
    insurance: '연금보험'
  }
];

export default function TestimonialsSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} style={{ padding: 'clamp(40px, 10vw, 96px) 0', background: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 60px)', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            고객 후기
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4b5563' }}>
            실제 고객님들의 생생한 후기를 확인하세요
          </p>
        </motion.div>

        <div style={{ maxWidth: '896px', margin: '0 auto', position: 'relative', width: '100%' }}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: 'white', borderRadius: '24px', padding: 'clamp(24px, 6vw, 48px)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
          >
            {/* 인용부호 */}
            <Quote style={{ width: 'clamp(32px, 8vw, 48px)', height: 'clamp(32px, 8vw, 48px)', color: '#3b82f6', marginBottom: '24px' }} />

            {/* 별점 */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} style={{ width: 'clamp(20px, 5vw, 24px)', height: 'clamp(20px, 5vw, 24px)', fill: '#fbbf24', color: '#fbbf24' }} />
              ))}
            </div>

            {/* 후기 내용 */}
            <p style={{ fontSize: 'clamp(14px, 3.5vw, 20px)', color: '#374151', lineHeight: '1.6', marginBottom: '32px' }}>
              &ldquo;{testimonials[current].content}&rdquo;
            </p>

            {/* 고객 정보 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '18px', marginBottom: '4px' }}>
                  {testimonials[current].name}
                </div>
                <div style={{ color: '#6b7280', fontSize: '14px' }}>
                  {testimonials[current].age}세 · {testimonials[current].occupation}
                </div>
              </div>
              <div style={{ padding: '8px 16px', background: '#dbeafe', color: '#1d4ed8', borderRadius: '50px', fontWeight: '500', fontSize: '14px' }}>
                {testimonials[current].insurance}
              </div>
            </div>
          </motion.div>

          {/* 네비게이션 */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
            <button
              onClick={prev}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #e5e7eb',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
            >
              <ChevronLeft style={{ width: '20px', height: '20px' }} />
            </button>

            {/* 인디케이터 */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  style={{
                    width: index === current ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: index === current ? '#2563eb' : '#93c5fd',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #e5e7eb',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
            >
              <ChevronRight style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}





