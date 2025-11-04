import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf8f3] border-t border-[#e8e3d9] hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-2xl font-bold text-[#2b2825] mb-4 tracking-tight">
              PRIME ASSET
            </h3>
            <p className="text-sm text-[#5a534e] leading-relaxed mb-4">
              손해 생명보험 총괄대리인<br />
              보험보장분석 보무민모델링
            </p>
            <div className="text-sm text-[#5a534e] space-y-2">
              <p>T. 033-763-9785</p>
              <p>M. 010-4111-5552</p>
              <p>kangsh6917@naver.com</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-[11px] font-light tracking-[0.35em] uppercase text-[#a68a64] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-[#5a534e]">
              <li>
                <Link href="/#about" className="hover:text-[#2b2825] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#2b2825] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#2b2825] transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#2b2825] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 보험 상품 */}
          <div>
            <h3 className="text-[11px] font-light tracking-[0.35em] uppercase text-[#a68a64] mb-6">
              Products
            </h3>
            <ul className="space-y-3 text-sm text-[#5a534e]">
              <li>생명보험</li>
              <li>건강보험</li>
              <li>연금보험</li>
              <li>저축보험</li>
              <li>자동차보험</li>
            </ul>
          </div>

          {/* 주소 */}
          <div>
            <h3 className="text-[11px] font-light tracking-[0.35em] uppercase text-[#a68a64] mb-6">
              Office
            </h3>
            <p className="text-sm text-[#5a534e] leading-relaxed mb-6">
              강원특별자치도 원주시<br />
              능라동길65, 803호<br />
              (유포타워 8층)
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 text-[11px] font-light tracking-[0.35em] uppercase border border-[#2b2825] text-[#2b2825] hover:bg-[#2b2825] hover:text-[#faf8f3] transition-all duration-500"
            >
              상담 신청
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e8e3d9] text-center">
          <p className="text-xs text-[#5a534e] mb-4">
            &copy; {currentYear} Prime Asset. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-[#5a534e]">
            <Link href="/privacy" className="hover:text-[#2b2825] transition-colors">
              개인정보처리방침
            </Link>
            <span className="opacity-40">·</span>
            <Link href="/terms" className="hover:text-[#2b2825] transition-colors">
              이용약관
            </Link>
            <span className="opacity-40">·</span>
            <Link 
              href="/manage" 
              className="hover:text-[#2b2825] transition-colors flex items-center gap-1"
              title="관리자"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span className="opacity-0 hover:opacity-100 transition-opacity">관리자</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

