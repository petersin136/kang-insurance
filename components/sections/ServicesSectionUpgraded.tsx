'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    title: '생명보험',
    subtitle: 'LIFE',
    description: '가족을 위한 평생 보장',
    bgColor: '#1a1a1a',
    textColor: '#e8e3d9',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80',
    link: '/insurance/life'
  },
  {
    title: '건강보험',
    subtitle: 'HEALTH',
    description: '질병과 사고 대비',
    bgColor: '#f5f1ea',
    textColor: '#2b2825',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
    link: '#'
  },
  {
    title: '연금보험',
    subtitle: 'PENSION',
    description: '안정적인 노후 설계',
    bgColor: '#e8d5b7',
    textColor: '#2b2825',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    link: '#'
  },
  {
    title: '저축보험',
    subtitle: 'SAVINGS',
    description: '체계적인 자산 형성',
    bgColor: '#1a1a1a',
    textColor: '#e8e3d9',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    link: '#'
  },
  {
    title: '화재보험',
    subtitle: 'FIRE',
    description: '소중한 재산 보호',
    bgColor: '#f5f1ea',
    textColor: '#2b2825',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    link: '#'
  },
  {
    title: '자동차보험',
    subtitle: 'CAR',
    description: '안전한 운전 보장',
    bgColor: '#e8d5b7',
    textColor: '#2b2825',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    link: '#'
  }
];

export default function ServicesSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ 
      backgroundColor: '#2b2825', 
      width: '100%',
      overflow: 'hidden',
      paddingTop: '60px',
      paddingBottom: '60px'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px'
      }} className="md:px-8">
        {/* 헤딩 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '50px' }}
          className="text-center"
        >
          <h2 style={{ 
            fontWeight: '900', 
            color: '#e8e3d9',
            letterSpacing: '-2px',
            lineHeight: '1.1'
          }} className="text-3xl md:text-6xl lg:text-7xl">
            Insurance Plans
          </h2>
        </motion.div>

        {/* 카드 그리드 */}
        <div style={{ 
          display: 'grid', 
          gap: '20px',
          marginBottom: '40px',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto'
        }} className="grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <Link href={service.link || '#'} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                style={{
                  aspectRatio: '3/4',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#ffffff',
                  padding: '16px',
                  borderRadius: '8px'
                }}
              >
              
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* 이미지 영역 */}
              <div style={{
                flex: 1,
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                borderRadius: '4px',
                marginBottom: '0'
              }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              
              {/* 텍스트 영역 */}
              <div style={{ marginTop: '12px' }}>
                <div className="flex items-baseline gap-2 md:gap-3 mb-1 md:mb-2">
                  <span className="text-[8px] md:text-[11px]" style={{ fontWeight: '400', letterSpacing: '0.5px', opacity: 0.6, color: '#2b2825' }}>
                    insurance
                  </span>
                  <span className="text-[9px] md:text-[13px]" style={{ fontWeight: '700', letterSpacing: '1px', color: '#2b2825' }}>
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="text-xs md:text-xl mb-1" style={{ fontWeight: '700', color: '#2b2825' }}>
                  {service.title}
                </h3>
                <p className="text-[9px] md:text-[12px]" style={{ opacity: 0.7, lineHeight: '1.4', fontWeight: '300', color: '#2b2825' }}>
                  {service.description}
                </p>
              </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
