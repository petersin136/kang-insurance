'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: '홈' },
    { href: '/insurance-products', label: '보험 상품' },
    { href: '/cases', label: '성공 사례' },
    { href: '/blog', label: '보험 정보' },
    { href: '/about', label: '소개' },
    { href: '/consultation', label: '상담 신청' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-700">
              보험설계사 강재구
            </div>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <div className="space-y-2">
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

