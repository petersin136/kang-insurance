'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  { number: 500, label: '상담 고객', suffix: '+' },
  { number: 5, label: '경력 (년)', suffix: '년+' },
  { number: 98, label: '고객 만족도', suffix: '%' },
  { number: 200, label: '보험금 청구 성공', suffix: '+' }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
        ease: 'easeOut'
      });
      return animation.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref}>
      <motion.span style={{ fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: 'bold', color: 'white' }}>
        {rounded}
      </motion.span>
      <span style={{ fontSize: 'clamp(24px, 6vw, 48px)', fontWeight: 'bold', color: 'white' }}>{suffix}</span>
    </div>
  );
}

export default function StatsSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ padding: 'clamp(40px, 10vw, 96px) 0', background: 'linear-gradient(to right, #2563eb, #1e40af)', color: 'white', width: '100%', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 16px)', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 60px)', fontWeight: 'bold', marginBottom: '16px' }}>
            신뢰할 수 있는 파트너
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#bfdbfe' }}>
            숫자로 증명하는 전문성과 신뢰
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <Counter value={stat.number} suffix={stat.suffix} />
              <div className="text-xl text-blue-100 mt-4 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





