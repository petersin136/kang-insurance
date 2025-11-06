'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 데스크톱 Footer */}
      <footer className="bg-[#faf8f3] border-t border-[#e8e3d9] hidden md:block">
      <div 
        style={{ 
          maxWidth: '1280px',
          padding: 'clamp(53px, 6.7vw, 107px) clamp(32px, 4vw, 43px)',
          width: '100%',
          margin: '0 auto'
        }}
      >
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(40px, 5.3vw, 64px)',
            marginBottom: 'clamp(40px, 5.3vw, 64px)',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            placeItems: 'center'
          }}
        >
          {/* 회사 정보 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vw, 21px)', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 'bold', color: '#2b2825', letterSpacing: '-0.02em' }}>
              PRIME ASSET
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(13px, 1.7vw, 16px)', fontSize: 'clamp(15px, 2vw, 17px)', color: '#5a534e', lineHeight: '1.8', alignItems: 'center' }}>
              <p style={{ fontWeight: '600', color: '#4a4540', fontSize: 'clamp(16px, 2.2vw, 18px)' }}>
                손해 생명보험 총괄대리인
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1vw, 11px)', alignItems: 'center' }}>
                <p>T. 033-763-9785</p>
                <p>M. 010-4111-5552</p>
                <p>kangsh6917@naver.com</p>
              </div>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vw, 21px)', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'clamp(11px, 1.5vw, 13px)', fontWeight: '300', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#a68a64', marginBottom: 'clamp(8px, 1vw, 11px)' }}>
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(11px, 1.3vw, 13px)', fontSize: 'clamp(15px, 2vw, 17px)', color: '#5a534e', listStyle: 'none', padding: 0, margin: 0, alignItems: 'center' }}>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => handleNavClick(e, '#process')}
                  style={{ color: '#5a534e', cursor: 'pointer', display: 'block', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2b2825'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5a534e'}
                >
                  상담 프로세스
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleNavClick(e, '#testimonials')}
                  style={{ color: '#5a534e', cursor: 'pointer', display: 'block', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2b2825'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5a534e'}
                >
                  고객 후기
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, '#services')}
                  style={{ color: '#5a534e', cursor: 'pointer', display: 'block', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2b2825'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5a534e'}
                >
                  보험 상품
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                  style={{ color: '#5a534e', cursor: 'pointer', display: 'block', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2b2825'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5a534e'}
                >
                  상담 신청
                </a>
              </li>
            </ul>
          </div>

          {/* 주소 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 2vw, 21px)', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'clamp(11px, 1.5vw, 13px)', fontWeight: '300', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#a68a64', marginBottom: 'clamp(8px, 1vw, 11px)' }}>
              Office
            </h3>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: '#5a534e', lineHeight: '1.8', marginBottom: 'clamp(13px, 1.7vw, 16px)', textAlign: 'center' }}>
              강원특별자치도 원주시<br />
              능라동길 70 2층
            </p>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              style={{
                display: 'inline-block',
                padding: 'clamp(12px, 1.5vw, 16px) clamp(27px, 3.3vw, 32px)',
                fontSize: 'clamp(11px, 1.5vw, 13px)',
                fontWeight: '300',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                border: '1px solid #2b2825',
                color: '#2b2825',
                cursor: 'pointer',
                transition: 'all 0.3s',
                textDecoration: 'none',
                textAlign: 'center',
                width: '100%',
                maxWidth: '200px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2b2825';
                e.currentTarget.style.color = '#faf8f3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#2b2825';
              }}
            >
              상담 신청
            </a>
          </div>
        </div>

        <div style={{ paddingTop: 'clamp(32px, 4vw, 43px)', borderTop: '1px solid #e8e3d9', textAlign: 'center', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(24px, 3vw, 32px)', flexWrap: 'wrap', width: '100%' }}>
            <p style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', color: '#5a534e', whiteSpace: 'nowrap' }}>
              &copy; {currentYear} Prime Asset. All rights reserved.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.5vw, 32px)', fontSize: 'clamp(12px, 1.5vw, 14px)', color: '#5a534e', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <Link href="/privacy" className="hover:text-[#2b2825] transition-colors duration-300">
                개인정보처리방침
              </Link>
              <span className="opacity-30">·</span>
              <Link href="/terms" className="hover:text-[#2b2825] transition-colors duration-300">
                이용약관
              </Link>
              <span className="opacity-30">·</span>
              <Link 
                href="/manage" 
                className="hover:text-[#2b2825] transition-colors duration-300 flex items-center gap-2"
                title="관리자"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">관리자</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

      {/* 모바일 Footer */}
      <footer className="bg-[#faf8f3] border-t border-[#e8e3d9] block md:hidden">
        <div style={{ 
          padding: 'clamp(24px, 4vw, 32px) clamp(20px, 4vw, 24px)',
          width: '100%'
        }}>
          <div style={{ 
            textAlign: 'center',
            marginBottom: 'clamp(20px, 3vw, 24px)'
          }}>
            <h3 style={{ 
              fontSize: 'clamp(24px, 4vw, 28px)', 
              fontWeight: 'bold', 
              color: '#2b2825', 
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(12px, 2vw, 16px)'
            }}>
              PRIME ASSET
            </h3>
            <p style={{ 
              fontSize: 'clamp(13px, 2vw, 15px)', 
              color: '#5a534e',
              marginBottom: 'clamp(8px, 1.5vw, 12px)'
            }}>
              손해 생명보험 총괄대리인
            </p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(6px, 1vw, 8px)',
              fontSize: 'clamp(13px, 2vw, 15px)',
              color: '#5a534e'
            }}>
              <p>T. 033-763-9785</p>
              <p>M. 010-4111-5552</p>
              <p>kangsh6917@naver.com</p>
            </div>
          </div>

          <div style={{ 
            paddingTop: 'clamp(20px, 3vw, 24px)',
            borderTop: '1px solid #e8e3d9',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: 'clamp(11px, 1.8vw, 13px)', 
              color: '#5a534e',
              marginBottom: 'clamp(16px, 2.5vw, 20px)'
            }}>
              &copy; {currentYear} Prime Asset. All rights reserved.
            </p>
            
            {/* 모바일 관리자 모드 버튼 */}
            <a
              href="/manage"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: '#eae5dd',
                border: '1px solid #d9d0c4',
                borderRadius: '8px',
                color: '#2b2825',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '200px',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#d9d0c4';
                e.currentTarget.style.borderColor = '#b09b7f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#eae5dd';
                e.currentTarget.style.borderColor = '#d9d0c4';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              관리자 모드
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

