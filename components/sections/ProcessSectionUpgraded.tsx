'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: '상담 신청',
    description: '온라인 또는 전화로 간편하게 상담을 신청하세요'
  },
  {
    number: '02',
    title: '맞춤 분석',
    description: '고객님의 상황과 니즈를 꼼꼼히 분석합니다'
  },
  {
    number: '03',
    title: '상품 제안',
    description: '최적의 보험 상품을 비교하여 제안합니다'
  },
  {
    number: '04',
    title: '가입 후 관리',
    description: '가입 후에도 지속적인 사후 관리 서비스를 제공합니다'
  }
];

export default function ProcessSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ padding: 'clamp(40px, 10vw, 96px) 0', backgroundColor: 'white', width: '100%', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 16px)', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 60px)', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            상담 프로세스
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4b5563' }}>
            체계적이고 투명한 4단계 프로세스
          </p>
        </motion.div>

        <div className="relative">
          {/* 연결선 (데스크톱) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* 번호 원 */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>

                {/* 내용 */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





