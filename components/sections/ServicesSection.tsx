import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: '생명보험',
      description: '가족의 미래를 보호하는 종신보험, 정기보험',
      icon: '❤️',
      items: ['종신보험', '정기보험', '유니버셜보험', '변액보험'],
      color: 'from-red-500 to-pink-500',
    },
    {
      title: '건강보험',
      description: '질병과 상해로부터 보호하는 건강보험',
      icon: '🏥',
      items: ['실손보험', '암보험', '치아보험', '통합보험'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: '연금보험',
      description: '안정적인 노후를 위한 연금 설계',
      icon: '💰',
      items: ['개인연금', '퇴직연금', 'IRP', '변액연금'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: '손해보험',
      description: '재산과 책임을 보호하는 손해보험',
      icon: '🚗',
      items: ['자동차보험', '화재보험', '배상책임보험', '여행자보험'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '저축성보험',
      description: '목돈 마련과 세제 혜택을 위한 저축보험',
      icon: '🏦',
      items: ['저축보험', '교육보험', '연금저축보험'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: '어린이보험',
      description: '우리 아이의 미래를 지키는 어린이보험',
      icon: '👶',
      items: ['어린이보험', '태아보험', '학자금보험'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            보험 상품 안내
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 보험 상품으로 고객님의 필요에 맞는 최적의 보장을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* 헤더 */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>

              {/* 콘텐츠 */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/insurance-products?category=${service.title}`}
                  className="block w-full py-3 text-center bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/consultation"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </div>
    </section>
  );
}

