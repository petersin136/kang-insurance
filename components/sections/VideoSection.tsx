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
        
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

