'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: '김민수',
      age: 35,
      rating: 5,
      content: '보험에 대해 잘 몰랐는데, 강 설계사님께서 자세하고 친절하게 설명해주셔서 이해하기 쉬웠습니다. 제 상황에 딱 맞는 보험을 추천해주셔서 정말 감사합니다.',
      insurance: '종신보험',
      date: '2024.10',
    },
    {
      name: '이지은',
      age: 42,
      rating: 5,
      content: '여러 보험사 상품을 비교해주시고, 각각의 장단점을 명확하게 설명해주셔서 신뢰가 갔습니다. 가입 후에도 꾸준히 연락주셔서 든든합니다.',
      insurance: '실손보험',
      date: '2024.09',
    },
    {
      name: '박준호',
      age: 28,
      rating: 5,
      content: '처음 보험을 가입하는 거라 걱정이 많았는데, 강 설계사님이 차근차근 알려주셔서 좋았습니다. 합리적인 가격에 좋은 보장을 받게 되었어요.',
      insurance: '건강보험',
      date: '2024.08',
    },
    {
      name: '최수영',
      age: 45,
      rating: 5,
      content: '노후 준비를 위해 연금보험을 찾았는데, 세제 혜택까지 고려해서 최적의 상품을 추천해주셨습니다. 전문성이 느껴졌습니다.',
      insurance: '연금보험',
      date: '2024.07',
    },
    {
      name: '정현우',
      age: 38,
      rating: 5,
      content: '기존 보험을 정리하고 새로 가입하는 과정이 복잡했는데, 강 설계사님이 모든 절차를 도와주셔서 편하게 진행할 수 있었습니다.',
      insurance: '통합보험',
      date: '2024.06',
    },
    {
      name: '한서윤',
      age: 31,
      rating: 5,
      content: '아이가 태어나서 어린이보험을 알아보던 중 상담받았습니다. 태아보험부터 어린이보험까지 체계적으로 설명해주셔서 큰 도움이 되었어요.',
      insurance: '어린이보험',
      date: '2024.05',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            고객 후기
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            고객님들의 생생한 후기를 확인해보세요
          </p>
        </div>

        {/* 데스크톱 그리드 뷰 */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.age}세 · {testimonial.insurance}
                  </p>
                </div>
                <div className="text-yellow-400 text-xl">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        {/* 모바일 슬라이더 뷰 */}
        <div className="md:hidden">
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].age}세 · {testimonials[currentIndex].insurance}
                  </p>
                </div>
                <div className="text-yellow-400 text-2xl">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
            </div>

            {/* 네비게이션 버튼 */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="이전 후기"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              <div className="text-sm text-gray-600">
                {currentIndex + 1} / {testimonials.length}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="다음 후기"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

