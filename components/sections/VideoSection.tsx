'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* 동영상 */}
      <div className="relative w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
          style={{ display: 'block', width: '100%' }}
        >
          <source src="https://bfvrunxorsxgmeykvfru.supabase.co/storage/v1/object/public/public-media/mo.mp4" type="video/mp4" />
        </video>
        
        {/* 텍스트 오버레이 - 모바일 최적화 */}
        <div className="absolute inset-0 flex items-center justify-start" style={{ 
          paddingLeft: 'clamp(20px, 8vw, 140px)',
          paddingRight: '20px'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left"
            style={{ maxWidth: '100%' }}
          >
            <h2 style={{
              fontSize: 'clamp(24px, 6vw, 84px)',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1.2',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
              인생의 속도는 내가,
              <br />
              <span style={{ color: '#ff9999' }}>안전은 보험이</span>
            </h2>
          </motion.div>
        </div>

        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

