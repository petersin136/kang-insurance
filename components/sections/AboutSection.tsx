export default function AboutSection() {
  const features = [
    {
      icon: '🎯',
      title: '맞춤형 설계',
      description: '고객님의 상황과 니즈에 맞는 최적의 보험 상품을 제안합니다',
    },
    {
      icon: '💼',
      title: '20년 경력',
      description: '풍부한 경험과 전문성으로 신뢰할 수 있는 상담을 제공합니다',
    },
    {
      icon: '🤝',
      title: '평생 파트너',
      description: '가입 후에도 지속적인 관리와 서비스를 제공합니다',
    },
    {
      icon: '⚡',
      title: '빠른 응대',
      description: '신속하고 정확한 상담으로 고객님의 시간을 아껴드립니다',
    },
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            보험설계사 강재구를<br />선택해야 하는 이유
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            고객 중심의 전문적인 보험 설계로 안전한 미래를 만들어갑니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                강성현 보험설계사
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  보험설계사 경력 25년
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  우수설계사 표창 5회
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  고객 만족도 98%
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  상담 건수 1,500건 이상
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                전문 분야
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 생명보험 (종신보험, 정기보험)</li>
                <li>• 건강보험 (실손보험, 암보험)</li>
                <li>• 연금보험 (개인연금, 퇴직연금)</li>
                <li>• 손해보험 (자동차보험, 화재보험)</li>
                <li>• 저축성 보험</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

