import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2b2825] text-[#d4c5b0]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-[#faf8f3] text-2xl font-light mb-6 tracking-wider">
              kang
            </h3>
            <p className="text-sm font-light leading-relaxed mb-6">
              25년 경력의 전문 보험설계사가<br />
              제공하는 맞춤형 솔루션
            </p>
            <div className="space-y-3 text-sm font-light">
              <p>010-XXXX-XXXX</p>
              <p>info@kang-insurance.com</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-[#faf8f3] text-xs font-light tracking-[0.2em] uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/#about" className="hover:text-[#faf8f3] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#faf8f3] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#faf8f3] transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#faf8f3] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 보험 상품 */}
          <div>
            <h3 className="text-[#faf8f3] text-xs font-light tracking-[0.2em] uppercase mb-6">Products</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>생명보험</li>
              <li>건강보험</li>
              <li>연금보험</li>
              <li>저축보험</li>
              <li>자동차보험</li>
            </ul>
          </div>

          {/* 상담 시간 */}
          <div>
            <h3 className="text-[#faf8f3] text-xs font-light tracking-[0.2em] uppercase mb-6">Business Hours</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>평일 09:00 - 18:00</li>
              <li>토요일 09:00 - 13:00</li>
              <li>일요일/공휴일 휴무</li>
            </ul>
            <Link
              href="#contact"
              className="inline-block mt-6 px-8 py-3 text-[10px] font-light tracking-[0.3em] uppercase border border-[#faf8f3] text-[#faf8f3] hover:bg-[#faf8f3] hover:text-[#2b2825] transition-all duration-400"
            >
              상담 신청
            </Link>
          </div>
        </div>

        <div className="border-t border-[#5a534e] mt-12 pt-8 text-center text-xs font-light">
          <p className="text-[#a68a64]">
            &copy; {currentYear} Kang Insurance. All rights reserved.
          </p>
          <div className="mt-4 space-x-6 text-[#a68a64]">
            <Link href="/privacy" className="hover:text-[#faf8f3] transition-colors">
              개인정보처리방침
            </Link>
            <span className="opacity-50">·</span>
            <Link href="/terms" className="hover:text-[#faf8f3] transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

