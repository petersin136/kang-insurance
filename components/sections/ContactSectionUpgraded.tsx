'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSectionUpgraded() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 서버 액션으로 처리
    console.log('Form submitted:', formData);
    alert('상담 신청이 접수되었습니다! 24시간 이내 연락드리겠습니다.');
    // 폼 초기화
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section ref={ref} style={{ padding: 'clamp(40px, 10vw, 96px) 0', backgroundColor: 'white', width: '100%', overflow: 'hidden' }} id="contact">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 16px)', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 60px)', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            무료 상담 신청
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4b5563' }}>
            지금 바로 상담을 신청하세요. 24시간 이내 연락드리겠습니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                연락처 정보
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">전화</div>
                    <div className="text-gray-600">010-XXXX-XXXX</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">이메일</div>
                    <div className="text-gray-600">info@kang-insurance.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">주소</div>
                    <div className="text-gray-600">서울특별시 강남구 테헤란로 123</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">운영 시간</h4>
              <p className="text-gray-600">평일 09:00 - 18:00</p>
              <p className="text-gray-600">토요일 09:00 - 13:00</p>
              <p className="text-gray-600">일요일 및 공휴일 휴무</p>
            </div>
          </motion.div>

          {/* 상담 신청 폼 */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름 *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="홍길동"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처 *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="010-1234-5678"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="hong@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                상담 내용
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={8}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-base"
                placeholder="상담받고 싶은 보험 종류나 문의사항을 작성해주세요"
              />
              
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
              size="lg"
            >
              <Send className="w-5 h-5 mr-2" />
              상담 신청하기
            </Button>

            <p className="text-sm text-gray-500 text-center">
              * 표시는 필수 입력 항목입니다
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}





