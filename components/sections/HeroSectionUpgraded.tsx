'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function HeroSectionUpgraded() {
  const { scrollY } = useScroll();
  
  // 텍스트 상태 관리
  const [content, setContent] = useState({
    title_mobile: '소중한 사람을 위한\n확실한 약속',
    title_desktop: '사랑하는 사람들을 위한\n가장 확실한 약속',
    subtitle_mobile: '삶은 예측 불가, 준비는 가능\n미래를 함께 설계합니다',
    subtitle_desktop: '삶은 예측할 수 없지만, 준비는 할 수 있습니다.\n당신의 미래를 함께 설계합니다.',
    cta_text: '상담 신청하기'
  });
  
  // 스크롤 효과 제거 - 항상 보이게
  const opacity = useTransform(scrollY, [0, 400], [1, 1]);
  const scale = useTransform(scrollY, [0, 400], [1, 1]);
  
  // Supabase에서 텍스트 가져오기
  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await supabase
        .from('content_edits')
        .select('*')
        .eq('section_name', 'hero');
      
      if (data && data.length > 0) {
        const newContent = { ...content };
        data.forEach((item) => {
          if (item.field_name in newContent) {
            newContent[item.field_name as keyof typeof content] = item.content;
          }
        });
        setContent(newContent);
      }
    };
    
    fetchContent();
  }, []);

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
        style={{ opacity: opacity, paddingTop: 'clamp(3rem, 8vw, 4rem)' }}
        className="relative w-full overflow-hidden bg-gray-900"
      >
        {/* 모바일 전용 이미지 */}
        <img 
          src="https://bfvrunxorsxgmeykvfru.supabase.co/storage/v1/object/public/public-media/333.jpg"
          alt="프라임에셋 배너"
          className="block w-full h-auto md:hidden"
        />
        {/* 데스크톱 전용 이미지 */}
        <img 
          src="https://bfvrunxorsxgmeykvfru.supabase.co/storage/v1/object/public/public-media/Black%20and%20Gray%20Minimalist%20Shapes%20Personal%20Profile%20LinkedIn%20Banner%20(1).png"
          alt="프라임에셋 배너"
          className="hidden w-full h-auto md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#faf8f3]/20" />
      </motion.div>

      {/* 콘텐츠 */}
      <motion.div
        style={{ opacity, scale, marginTop: '-40px' }}
        className="relative z-10 px-6 md:px-12 py-36 md:py-44 text-center flex-1 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* 작은 레이블 - 크기 더 키움 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[16px] md:text-[19px] font-light tracking-[0.15em] md:tracking-[0.35em] uppercase text-[#a68a64] mb-12 leading-[1.8] md:leading-normal"
          >
            Insurance Designed For You
          </motion.div>

          {/* 메인 타이포그래피 - 줄간격 개선 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2b2825] mb-8 leading-[1.4] tracking-[-0.01em]"
          >
            <span className="md:hidden">
              {content.title_mobile.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < content.title_mobile.split('\n').length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="hidden md:inline">
              {content.title_desktop.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < content.title_desktop.split('\n').length - 1 && <br />}
                </span>
              ))}
            </span>
          </motion.h1>

          {/* 서브 텍스트 - 줄간격 개선 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center"
            style={{ marginTop: '28px' }}
          >
            <p className="text-[18px] md:text-[22px] text-[#5a534e] font-light leading-[1.8] text-center">
              <span className="md:hidden">
                {content.subtitle_mobile.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < content.subtitle_mobile.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </span>
              <span className="hidden md:inline">
                {content.subtitle_desktop.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < content.subtitle_desktop.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </span>
            </p>
          </motion.div>

          {/* CTA 버튼 - Large & Beautiful */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12"
            style={{ marginTop: '28px' }}
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-4 text-base md:text-lg font-bold tracking-tight text-[#faf8f3] bg-[#a68a64] rounded-full shadow-2xl hover:shadow-[0_20px_60px_rgba(166,138,100,0.4)] hover:bg-[#8b7355] transform hover:scale-110 transition-all duration-500 ease-out"
              style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '18px', paddingBottom: '18px' }}
            >
              <span className="relative">{content.cta_text}</span>
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-2 transition-transform duration-500" 
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

