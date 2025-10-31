export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: '상담 신청',
      description: '온라인 또는 전화로 간편하게 상담을 신청하세요',
      icon: '📝',
    },
    {
      number: '02',
      title: '상황 분석',
      description: '고객님의 현재 상황과 필요를 면밀히 분석합니다',
      icon: '🔍',
    },
    {
      number: '03',
      title: '맞춤 설계',
      description: '최적의 보험 상품을 비교하고 맞춤 설계를 제안합니다',
      icon: '💡',
    },
    {
      number: '04',
      title: '가입 진행',
      description: '간편한 절차로 보험 가입을 도와드립니다',
      icon: '✅',
    },
    {
      number: '05',
      title: '사후 관리',
      description: '가입 후에도 지속적인 관리와 서비스를 제공합니다',
      icon: '🤝',
    },
  ];

  return (
    <section id="process" className="section bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            상담 프로세스
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            체계적이고 전문적인 5단계 프로세스로 최적의 보험 설계를 제공합니다
          </p>
        </div>

        {/* 데스크톱 뷰 */}
        <div className="hidden md:block">
          <div className="relative">
            {/* 연결선 */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-blue-200" />
            
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* 원형 아이콘 */}
                  <div className="w-48 h-48 mx-auto mb-6 bg-white rounded-full shadow-xl flex items-center justify-center relative z-10 border-4 border-blue-200 hover:border-blue-500 transition-all group">
                    <div className="text-center">
                      <div className="text-5xl mb-2">{step.icon}</div>
                      <div className="text-3xl font-bold text-blue-600">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  {/* 텍스트 */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 모바일 뷰 */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="text-3xl">{step.icon}</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            지금 바로 상담을 시작하세요!
          </h3>
          <p className="text-gray-600 mb-6">
            전화 또는 온라인으로 간편하게 무료 상담을 신청하실 수 있습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-0000-0000"
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📞 전화 상담하기
            </a>
            <a
              href="/consultation"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              💬 온라인 상담 신청
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

