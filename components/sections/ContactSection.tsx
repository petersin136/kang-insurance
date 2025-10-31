import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            상담 신청
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            언제든지 편하게 연락주세요. 최선을 다해 상담해드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* 연락처 정보 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                연락처
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">전화</h4>
                    <a
                      href="tel:010-0000-0000"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      010-XXXX-XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">이메일</h4>
                    <a
                      href="mailto:info@kang-insurance.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      info@kang-insurance.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">상담 시간</h4>
                    <p className="text-gray-600">
                      평일 09:00 - 18:00<br />
                      토요일 09:00 - 13:00<br />
                      일요일/공휴일 휴무
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">주소</h4>
                    <p className="text-gray-600">
                      서울특별시 강남구<br />
                      테헤란로 123
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SNS */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                SNS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 p-4 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <span className="text-2xl">💬</span>
                  <span className="font-semibold">카카오톡</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span className="text-2xl">📘</span>
                  <span className="font-semibold">페이스북</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <span className="text-2xl">📷</span>
                  <span className="font-semibold">인스타그램</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span className="text-2xl">📝</span>
                  <span className="font-semibold">블로그</span>
                </a>
              </div>
            </div>
          </div>

          {/* 상담 신청 폼 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              빠른 상담 신청
            </h3>
            <p className="text-gray-600 mb-6">
              간단한 정보를 입력하시면 빠르게 상담해드립니다
            </p>
            
            <Link
              href="/consultation"
              className="block w-full py-4 bg-blue-600 text-white text-center rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              상담 신청 페이지로 이동
            </Link>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">
                빠른 문의
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:010-0000-0000"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-700">전화 상담</span>
                  <span className="text-blue-600 font-semibold">010-XXXX-XXXX</span>
                </a>
                <a
                  href="mailto:info@kang-insurance.com"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-700">이메일 문의</span>
                  <span className="text-blue-600 font-semibold">이메일 보내기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

