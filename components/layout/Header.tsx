'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // 헤더 높이 고정 (크기 변화 없음)
  const headerHeight = '4rem';
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(40, 40, 40, 0.3)', 'rgba(30, 30, 30, 0.5)']
  );
  
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(80, 80, 80, 0.1)', 'rgba(80, 80, 80, 0.2)']
  );

  // 스크롤 시 네비게이션을 중앙에서 오른쪽 끝으로 부드럽게 이동
  const navTranslateX = useTransform(
    scrollY,
    [0, 300],
    [0, 600]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '회사소개', href: '#about' },
    { label: '보험상품', href: '#services' },
    { label: '가입절차', href: '#process' },
    { label: '고객후기', href: '#testimonials' },
    { label: '상담문의', href: '#contact' },
  ];

  return (
    <motion.header
      style={{ 
        backgroundColor: headerBg,
        height: headerHeight,
        borderBottom: `1px solid ${headerBorder}`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md"
    >
      <div className="h-full px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center h-full w-full relative">
          {/* 로고 - 왼쪽 고정 */}
          <Link 
            href="https://primeasset.kr/" 
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-24 md:left-32 z-50 hidden md:block"
          >
            <img 
              src="https://bfvrunxorsxgmeykvfru.supabase.co/storage/v1/object/public/public-media/log%20(1).png"
              alt="Prime Asset"
              className="h-10 md:h-12 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* 데스크톱 네비게이션 - 스크롤 시 오른쪽으로 이동 */}
          <motion.nav 
            style={{ 
              x: navTranslateX
            }}
            className="hidden md:flex items-center gap-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[16px] font-semibold tracking-wide text-white hover:text-gray-300 transition-colors duration-300 drop-shadow-lg whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>

          {/* 모바일: 로고(왼쪽) + 햄버거(오른쪽) */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link 
              href="https://primeasset.kr/" 
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 ml-6"
            >
              <img 
                src="https://bfvrunxorsxgmeykvfru.supabase.co/storage/v1/object/public/public-media/log%20(1).png"
                alt="Prime Asset"
                className="h-8 w-auto object-contain drop-shadow-lg"
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white drop-shadow-lg"
              aria-label="메뉴"
            >
              {isMobileMenuOpen ? (
                <X className="w-9 h-9" strokeWidth={2.5} />
              ) : (
                <Menu className="w-9 h-9" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 햄버거 메뉴 */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-md border-b border-gray-700 shadow-xl"
          >
            <nav className="flex flex-col py-6 px-6">
              {/* 모바일 메뉴 로고 */}
              <div className="flex justify-center mb-6 pb-4 border-b border-gray-700">
                <Link
                  href="https://primeasset.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img 
                    src="https://bfvrunxorsxgmeykvfru.supabase.co/storage/v1/object/public/public-media/log%20(1).png" 
                    alt="프라임에셋"
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 text-lg font-semibold tracking-wide text-center text-white hover:text-gray-300 transition-colors border-b border-gray-700/50 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

