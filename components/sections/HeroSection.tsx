import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-30" />
      
      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            안전한 미래를 위한<br />
            <span className="text-blue-300">맞춤형 보험 설계</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            20년 경력의 전문 보험설계사가<br />
            고객님의 상황에 맞는 최적의 보험 상품을 제안해드립니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/consultation"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/insurance-products"
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              보험 상품 보기
            </Link>
          </div>
        </div>
        
        {/* 스크롤 다운 아이콘 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

