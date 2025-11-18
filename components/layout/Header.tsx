'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // 헤더 높이 고정 (모바일에서는 더 얇게)
  const headerHeight = 'clamp(3rem, 8vw, 4rem)';
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.8)']
  );
  
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.3)']
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
    { label: '상담 프로세스', href: '#process' },
    { label: '고객 후기', href: '#testimonials' },
    { label: '상담 신청', href: '#contact' },
    { label: '함께하기', href: '#recruiting' },
  ];

  // 스크롤 이동 핸들러
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // 헤더 높이 고려
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      style={{ 
        backgroundColor: headerBg,
        height: headerHeight,
        borderBottom: `1px solid ${headerBorder}`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md"
    >
      <div className="h-full max-w-screen-2xl mx-auto" style={{ paddingLeft: 'clamp(32px, 8vw, 48px)', paddingRight: 'clamp(32px, 8vw, 48px)' }}>
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
              className="h-8 md:h-10 w-auto object-contain drop-shadow-lg"
              onError={(e) => {
                console.error('로고 이미지 로딩 실패:', e.currentTarget.src);
                // 대체 텍스트 표시
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.logo-fallback')) {
                  const fallback = document.createElement('span');
                  fallback.className = 'logo-fallback';
                  fallback.textContent = 'Prime Asset';
                  fallback.style.color = '#2b2825';
                  fallback.style.fontWeight = '700';
                  fallback.style.fontSize = '18px';
                  parent.appendChild(fallback);
                }
              }}
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
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[16px] font-semibold tracking-wide text-[#2b2825] hover:text-[#5a534e] transition-colors duration-300 drop-shadow-lg whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>

          {/* 모바일: 로고(왼쪽) + 햄버거(오른쪽) */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link
              href="https://primeasset.kr/" 
              target="_blank"
              rel="noopener noreferrer"
              className="z-50"
              style={{ marginLeft: 0 }}
            >
              <img 
                src="https://bfvrunxorsxgmeykvfru.supabase.co/storage/v1/object/public/public-media/log%20(1).png"
                alt="Prime Asset"
                className="h-7 w-auto object-contain drop-shadow-lg"
                onError={(e) => {
                  console.error('로고 이미지 로딩 실패:', e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('span');
                    fallback.className = 'logo-fallback';
                    fallback.textContent = 'Prime Asset';
                    fallback.style.color = '#2b2825';
                    fallback.style.fontWeight = '700';
                    fallback.style.fontSize = '16px';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2b2825] drop-shadow-lg"
            aria-label="메뉴"
            style={{ marginRight: 0, transform: 'translateX(2px)' }}
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
            className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-xl"
          >
            <nav className="flex flex-col py-6 px-6">
              {/* 모바일 메뉴 로고 */}
              <div className="flex justify-center mb-6 pb-4 border-b border-gray-200">
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
                    onError={(e) => {
                      console.error('로고 이미지 로딩 실패:', e.currentTarget.src);
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent && !parent.querySelector('.logo-fallback')) {
                        const fallback = document.createElement('span');
                        fallback.className = 'logo-fallback';
                        fallback.textContent = 'Prime Asset';
                        fallback.style.color = '#2b2825';
                        fallback.style.fontWeight = '700';
                        fallback.style.fontSize = '20px';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </Link>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-4 text-lg font-semibold tracking-wide text-center text-[#2b2825] hover:text-[#5a534e] transition-colors border-b border-gray-200 last:border-0 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

