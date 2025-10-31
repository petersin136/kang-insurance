'use client';

import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      number: 25,
      suffix: '년',
      label: '경력',
      icon: '📅',
    },
    {
      number: 1500,
      suffix: '+',
      label: '상담 건수',
      icon: '💬',
    },
    {
      number: 98,
      suffix: '%',
      label: '고객 만족도',
      icon: '⭐',
    },
    {
      number: 5,
      suffix: '회',
      label: '우수설계사 표창',
      icon: '🏆',
    },
  ];

  const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCurrent(Math.min(Math.floor(increment * step), target));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
      <span>
        {current.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="section bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            숫자로 보는 신뢰
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            오랜 경험과 높은 고객 만족도가 증명하는 전문성
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isVisible && (
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-lg md:text-xl text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">빠른 응대</h3>
            <p className="text-blue-100">
              평균 30분 이내<br />응답 시간
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">지속적 관리</h3>
            <p className="text-blue-100">
              가입 후에도<br />평생 파트너
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">전문 상담</h3>
            <p className="text-blue-100">
              20개 이상<br />보험사 상품 비교
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

