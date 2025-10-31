'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSectionUpgraded() {
  const { scrollY } = useScroll();
  
  // 부드러운 페이드 효과 - 기존 텍스트
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  
  // 새로운 텍스트 페이드인 효과 - 기존 텍스트가 흐려진 후
  const newTextOpacity = useTransform(scrollY, [300, 500], [0, 1]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#faf8f3]" style={{ width: '100%', maxWidth: '100vw' }}>
      {/* 배너 이미지 - 최상단 (원본 비율 유지) */}
      <motion.div 
        style={{ opacity: opacity }}
        className="relative w-full overflow-hidden bg-gray-900"
      >
        <img 
          src="https://bfvrunxorsxgmeykvfru.supabase.co/storage/v1/object/public/public-media/Black%20and%20Gray%20Minimalist%20Shapes%20Personal%20Profile%20LinkedIn%20Banner%20(1).png"
          alt="프라임에셋 배너"
          className="w-full h-auto"
          style={{ display: 'block', width: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#faf8f3]/20" />
      </motion.div>

      {/* 콘텐츠 */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 px-6 md:px-12 py-20 md:py-32 text-center flex-1 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* 작은 레이블 - 크기 더 키움 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] md:text-[18px] font-light tracking-[0.35em] uppercase text-[#a68a64] mb-16"
          >
            Insurance Designed For You
          </motion.div>

          {/* 메인 타이포그래피 - 줄간격 개선 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#2b2825] mb-12 leading-[1.4] tracking-[-0.01em]"
          >
            <span className="md:hidden">
              소중한 사람을 위한
              <br />
              확실한 약속
            </span>
            <span className="hidden md:inline">
              사랑하는 사람들을 위한
              <br />
              가장 확실한 약속
            </span>
          </motion.h1>

          {/* 서브 텍스트 - 줄간격 개선 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center"
          >
            <p className="text-lg md:text-xl text-[#5a534e] font-light leading-[1.8] text-center">
              <span className="md:hidden">
                삶은 예측 불가, 준비는 가능
                <br />
                미래를 함께 설계합니다
              </span>
              <span className="hidden md:inline">
                삶은 예측할 수 없지만, 준비는 할 수 있습니다.
                <br />
                당신의 미래를 함께 설계합니다.
              </span>
            </p>
          </motion.div>

          {/* CTA 버튼 - Modern & Bold */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-16"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-4 px-14 py-7 text-lg md:text-xl font-bold tracking-tight text-[#faf8f3] bg-[#a68a64] rounded-full shadow-xl hover:shadow-2xl hover:bg-[#8b7355] transform hover:scale-105 transition-all duration-300 ease-out"
            >
              <span className="relative">상담 신청하기</span>
              <svg 
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* 새로운 텍스트 - 스크롤 시 나타남 (모바일 짧게) */}
      <motion.div
        style={{ opacity: newTextOpacity }}
        className="absolute inset-x-0 bottom-32 md:bottom-40 lg:bottom-48 flex flex-col items-center justify-center z-20 pointer-events-none"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#2b2825] tracking-[-0.01em] drop-shadow-lg">
          <span className="md:hidden">지금 약속하세요</span>
          <span className="hidden md:inline">지금 약속해 주세요</span>
        </h2>
        <div style={{ marginTop: '35px' }}>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#8b7355] tracking-wide drop-shadow-lg">
            <span className="md:hidden">Make a promise today</span>
            <span className="hidden md:inline">Make a promise for your family today</span>
          </p>
        </div>
      </motion.div>

      {/* 스크롤 인디케이터 - Minimal */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-[#a68a64] hover:text-[#2b2825] transition-colors"
        aria-label="스크롤"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" strokeWidth={1} />
        </motion.div>
      </motion.button>

      {/* 데코 요소 */}
      <div className="absolute bottom-1/3 right-[10%] w-96 h-96 bg-[#e8e3d9] rounded-full opacity-20 blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-[#d4c5b0] rounded-full opacity-15 blur-3xl pointer-events-none z-[1]" />
    </section>
  );
}

