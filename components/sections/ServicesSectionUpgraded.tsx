'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: '생명보험',
    subtitle: 'LIFE',
    description: '가족을 위한 평생 보장',
    bgColor: '#1a1a1a',
    textColor: '#e8e3d9',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80'
  },
  {
    title: '건강보험',
    subtitle: 'HEALTH',
    description: '질병과 사고 대비',
    bgColor: '#f5f1ea',
    textColor: '#2b2825',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80'
  },
  {
    title: '연금보험',
    subtitle: 'PENSION',
    description: '안정적인 노후 설계',
    bgColor: '#e8d5b7',
    textColor: '#2b2825',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
  },
  {
    title: '저축보험',
    subtitle: 'SAVINGS',
    description: '체계적인 자산 형성',
    bgColor: '#1a1a1a',
    textColor: '#e8e3d9',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'
  },
  {
    title: '화재보험',
    subtitle: 'FIRE',
    description: '소중한 재산 보호',
    bgColor: '#f5f1ea',
    textColor: '#2b2825',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
  },
  {
    title: '자동차보험',
    subtitle: 'CAR',
    description: '안전한 운전 보장',
    bgColor: '#e8d5b7',
    textColor: '#2b2825',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'
  }
];

export default function ServicesSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ 
      backgroundColor: '#2b2825', 
      padding: '60px 0',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 20px',
        width: '100%'
      }}>
        {/* 헤딩 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <p style={{ 
            fontSize: '12px', 
            color: '#a68a64', 
            letterSpacing: '2px', 
            marginBottom: '15px',
            fontWeight: '300'
          }}>
            고객님께 제안하는 최적의 선택
          </p>
          <h2 style={{ 
            fontSize: 'clamp(32px, 8vw, 72px)', 
            fontWeight: '900', 
            color: '#e8e3d9',
            letterSpacing: '-2px',
            lineHeight: '1.1'
          }}>
            CAREFULLY<br/>SELECTED
          </h2>
        </motion.div>

        {/* 카드 그리드 */}
        <div className="services-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px',
          marginBottom: '40px',
          width: '100%'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                backgroundColor: service.bgColor,
                padding: '30px 25px',
                aspectRatio: '3/4',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                width: '100%'
              }}
            >
              {/* 이미지 영역 */}
              <div style={{
                flex: 1,
                marginBottom: '20px',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
                width: '100%'
              }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(20%) contrast(1.1)',
                    display: 'block'
                  }}
                />
              </div>
              
              {/* 텍스트 영역 */}
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'baseline', 
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '400',
                    color: service.textColor,
                    letterSpacing: '1px',
                    opacity: 0.7
                  }}>
                    insurance
                  </span>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: service.textColor,
                    letterSpacing: '1.5px'
                  }}>
                    {service.subtitle}
                  </span>
                </div>
                <h3 style={{
                  fontSize: 'clamp(18px, 4vw, 24px)',
                  fontWeight: '700',
                  color: service.textColor,
                  marginBottom: '6px'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(11px, 2.5vw, 13px)',
                  color: service.textColor,
                  opacity: 0.7,
                  lineHeight: '1.6',
                  fontWeight: '300'
                }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





