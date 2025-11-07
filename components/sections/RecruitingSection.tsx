'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Heart,
  TrendingUp,
  Shield,
  GraduationCap,
  Phone,
  Mail,
  ArrowRight,
  Check,
  Award,
  Send,
  Handshake
} from 'lucide-react';

const easeBezier = [0.4, 0, 0.2, 1] as const; // 더 부드러운 Material Design easing

type BenefitItem = {
  id: string;
  title: string;
  description: string;
  highlight: string;
  icon: any;
  color: string;
  image: string;
  details: string[];
};

const BENEFITS: BenefitItem[] = [
  {
    id: 'guarantee',
    title: '1년간 월 300만원 최소 보장',
    description: '업계 최고 수준의 신입 보장 제도. 안정적인 출발을 약속합니다.',
    highlight: '업계 최고',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
    details: [
      '신입 설계사도 안정적인 수입 보장',
      '1년간 최소 월 300만원 보장',
      '업계 최고 수준의 보장 제도',
      '성과에 따른 추가 수익 가능'
    ]
  },
  {
    id: 'no-friends',
    title: '지인 영업 절대 NO',
    description: '최고 품질의 DB를 제공합니다. 지인 관계를 지키며 일하세요.',
    highlight: '차별화',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
    details: [
      '검증된 고품질 고객 DB 제공',
      '지인 관계를 지키며 전문적 영업',
      '전문 영업 기법 교육',
      '고객 만족도 기반 성장'
    ]
  },
  {
    id: 'education',
    title: '체계적인 교육 시스템',
    description: '영업의 기본부터 고급 전략까지. 제대로 배우고 성장하세요.',
    highlight: '전문성',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    details: [
      '1:1 멘토링 시스템',
      '기초부터 고급까지 단계별 교육',
      '실전 영업 기법 습득',
      '지속적인 성장 지원'
    ]
  },
  {
    id: 'family',
    title: '가족 같은 조직 문화',
    description: '서로 끌어주고 밀어주는 진짜 팀워크. 혼자가 아닙니다.',
    highlight: '신뢰',
    icon: Heart,
    color: 'from-red-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    details: [
      '서로를 응원하는 팀 문화',
      '24시간 지원 시스템',
      '정기적인 팀 미팅 및 워크샵',
      '평생 함께할 동료와의 만남'
    ]
  }
];

export default function RecruitingSection() {
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    birthDate: '',
    email: '',
    message: '',
    agreed: false
  });
  const [showPrivacy, setShowPrivacy] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    alert('상담 신청이 접수되었습니다! 곧 연락드리겠습니다.');
    setFormData({ name: '', phone: '', gender: '', birthDate: '', email: '', message: '', agreed: false });
    setShowPrivacy(false);
  };

  return (
    <div style={{ width: '100%', background: '#000', color: '#fff' }}>
      {/* 도입 섹션: 프라임에셋에서 당신의 비전을 완성하세요 */}
      <section style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden', 
        background: '#000',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '2px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* 배경 이미지 - 희망찬 이미지 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.25
        }} />
        
        {/* 그라데이션 오버레이 - 더 밝고 따뜻하게 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,200,100,0.1), rgba(0,0,0,0.2))'
        }} />

        {/* 콘텐츠 */}
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 clamp(20px, 4vw, 40px)',
          width: '100%',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(36px, 7vw, 80px)',
              fontWeight: '900',
              textAlign: 'center',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              lineHeight: '1.3',
              color: '#ffffff',
              letterSpacing: '-1px'
            }}>
              프라임에셋에서
            </h1>
            <h2 style={{
              fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(36px, 7vw, 80px)',
              fontWeight: '900',
              textAlign: 'center',
              lineHeight: '1.3',
              color: '#ffffff',
              letterSpacing: '-1px'
            }}>
              당신의 비전을 완성하세요
            </h2>
          </motion.div>
        </div>

        {/* SCROLL 인디케이터 - 하단 중앙 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(40px, 6vw, 60px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            color: '#ffffff'
          }}
        >
          <motion.span
            animate={{ 
              scale: [1, 1.1, 1],
              y: [0, 8, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              fontSize: 'clamp(10px, 1.5vw, 12px)',
              fontWeight: '600',
              letterSpacing: '0.2em',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed'
            }}
          >
            SCROLL
          </motion.span>
          <motion.div
            animate={{ 
              scaleY: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '1px',
              height: 'clamp(40px, 6vw, 60px)',
              background: 'linear-gradient(to bottom, #ffffff, transparent)'
            }}
          />
        </motion.div>
      </section>

      {/* Section 1: 당신의 첫 시작이, 최고의 시작이 되도록 */}
      <section style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden', 
        background: '#000', 
        padding: 'clamp(60px, 10vw, 120px) 0' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 72px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            lineHeight: '1.1',
            color: '#fff'
          }}>
            당신의 첫 시작이,
            <br />
            <span style={{
              background: 'linear-gradient(to right, #10b981, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              최고의 시작이 되도록
            </span>
          </h2>

          {/* Benefits Strips */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '16px',
            alignItems: 'stretch',
            minHeight: isMobile ? 'auto' : '700px',
            height: isMobile ? 'auto' : '700px',
            width: '100%'
          }}>
            {BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isExpanded = activeBenefit === idx;
              return (
                <motion.div
                  key={benefit.id}
                  layout
                  initial={false}
                  animate={{
                    flex: isExpanded ? (isMobile ? 1 : 3) : 1,
                    minWidth: isExpanded ? (isMobile ? '100%' : '400px') : (isMobile ? '100%' : '180px'),
                    width: isMobile ? '100%' : undefined
                  }}
                  transition={{ 
                    duration: 1,
                    ease: easeBezier,
                    layout: { duration: 1, ease: easeBezier }
                  }}
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundImage: `url(${benefit.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#1a1a1a',
                    border: isExpanded ? '2px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
                    minHeight: isMobile ? (isExpanded ? '500px' : '200px') : '700px',
                    height: isMobile ? (isExpanded ? '500px' : '200px') : '700px',
                    width: isMobile ? '100%' : undefined
                  }}
                  onClick={() => setActiveBenefit(isExpanded ? null : idx)}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: isExpanded 
                      ? 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95))'
                      : 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                    transition: 'background 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1,
                    willChange: 'background'
                  }} />
                  
                  <AnimatePresence>
                    {isExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.7 }}
                        style={{
                          position: 'relative',
                          zIndex: 10,
                          padding: 'clamp(32px, 5vw, 48px)',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: `linear-gradient(to bottom right, ${benefit.color.includes('green') ? '#10b981, #059669' : benefit.color.includes('blue') ? '#3b82f6, #06b6d4' : benefit.color.includes('purple') ? '#a855f7, #ec4899' : '#ef4444, #f97316'})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px'
                          }}>
                            <Icon style={{ width: '28px', height: '28px', color: 'white' }} />
                          </div>
                          
                          <div style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff',
                            fontSize: 'clamp(10px, 1.2vw, 12px)',
                            fontWeight: '700',
                            padding: '6px 14px',
                            borderRadius: '50px',
                            marginBottom: '16px'
                          }}>
                            {benefit.highlight}
                          </div>
                          
                          <h3 style={{
                            fontSize: 'clamp(24px, 3.5vw, 36px)',
                            fontWeight: '800',
                            color: '#fff',
                            marginBottom: '16px',
                            lineHeight: '1.2'
                          }}>
                            {benefit.title}
                          </h3>
                          
                          <p style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: 'clamp(16px, 2.2vw, 20px)',
                            marginBottom: '32px',
                            lineHeight: '1.6'
                          }}>
                            {benefit.description}
                          </p>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {benefit.details.map((detail, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <Check style={{ width: '24px', height: '24px', color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(18px, 2.5vw, 24px)', lineHeight: '1.6' }}>
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          position: 'absolute',
                          bottom: '24px',
                          left: '24px',
                          right: '24px',
                          zIndex: 10
                        }}
                      >
                        <div style={{
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          color: '#fff',
                          fontSize: 'clamp(10px, 1.2vw, 12px)',
                          fontWeight: '700',
                          padding: '6px 14px',
                          borderRadius: '50px',
                          marginBottom: '8px'
                        }}>
                          {benefit.highlight}
                        </div>
                        <h3 style={{
                          fontSize: 'clamp(14px, 2vw, 18px)',
                          fontWeight: '700',
                          color: '#fff',
                          lineHeight: '1.3'
                        }}>
                          {benefit.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: 상담 신청 */}
      <section style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
        padding: 'clamp(30px, 5vw, 60px) 0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          {/* 상담 신청 양식 */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
                marginBottom: 'clamp(16px, 2.5vw, 24px)',
            lineHeight: '1.2',
            color: '#fff'
          }}>
            함께하기 신청
          </h2>

          <form onSubmit={handleSubmit} style={{
            background: '#fff',
            borderRadius: '28px',
                padding: 'clamp(20px, 3vw, 32px)',
                color: '#000',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  fontWeight: '600',
                  marginBottom: '6px',
                  color: '#111827'
                }}>
                  이름 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  fontWeight: '600',
                  marginBottom: '6px',
                  color: '#111827'
                }}>
                  전화번호 *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  placeholder="010-1234-5678"
                />
              </div>

              {/* 성별과 생년월일 - 같은 행에 배치 */}
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '16px' }}>
                <div style={{ flex: isMobile ? '1' : '0 0 40%' }}>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#111827'
                }}>
                    성별 *
                  </label>
                  <select
                    required
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: 'clamp(13px, 1.8vw, 15px)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      boxSizing: 'border-box',
                      background: '#fff',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  >
                    <option value="">선택하세요</option>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                  </select>
                </div>

                <div style={{ flex: isMobile ? '1' : '0 0 calc(60% - 16px)' }}>
                  <label style={{
                    display: 'block',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#111827'
                  }}>
                    생년월일 *
                </label>
                <input
                    type="date"
                    required
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  fontWeight: '600',
                  marginBottom: '6px',
                  color: '#111827'
                }}>
                  이메일
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(13px, 1.8vw, 15px)',
                  fontWeight: '600',
                  marginBottom: '6px',
                  color: '#111827'
                }}>
                  문의 내용
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  placeholder="궁금한 점이나 문의사항을 입력하세요"
                />
              </div>

              <div style={{
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '14px',
                marginTop: '4px'
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    style={{
                      width: '18px',
                      height: '18px',
                      marginTop: '2px',
                      flexShrink: 0
                    }}
                  />
                  <span style={{ fontSize: 'clamp(12px, 1.6vw, 14px)', color: '#1f2937', lineHeight: '1.6', flex: 1 }}>
                    <strong>개인정보 수집 및 이용에 동의합니다.</strong> (필수)
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(!showPrivacy)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#2563eb',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontSize: 'clamp(12px, 1.6vw, 14px)',
                        marginLeft: '8px',
                        padding: 0
                      }}
                    >
                      {showPrivacy ? '닫기' : '내용 보기'}
                    </button>
                  </span>
                </label>

                {showPrivacy && (
                  <div style={{
                    marginTop: '12px',
                    padding: '12px',
                    background: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    maxHeight: '240px',
                    overflowY: 'auto',
                    fontSize: 'clamp(11px, 1.5vw, 13px)',
                    color: '#4b5563',
                    lineHeight: '1.7'
                  }}>
                    <p style={{ marginBottom: '10px', fontWeight: '700', color: '#1f2937' }}>개인정보 수집 및 이용에 대한 안내</p>
                    <ul style={{ paddingLeft: '16px', marginBottom: '8px' }}><li>수집 목적: 상담, 견적 안내, 계약 진행 및 고객 응대</li><li>수집 항목: 이름, 연락처, 성별, 생년월일, 이메일, 문의 내용</li><li>보유 기간: 상담 완료일로부터 최대 3년 (관련 법령에 따른 보존기간 포함)</li></ul>
                    <p style={{ marginBottom: '6px' }}>※ 동의를 거부할 권리가 있으며, 거부 시 상담 서비스 제공이 제한될 수 있습니다.</p>
                    <p style={{ fontSize: '11px', color: '#9ca3af' }}>문의: 033-763-9785 / kangsh6917@naver.com</p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px 28px',
                  background: '#000',
                  color: '#fff',
                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                  fontWeight: '700',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s',
                  marginTop: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1f2937';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#000';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Send style={{ width: '20px', height: '20px' }} />
                상담 신청하기
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>
    </div>
  );
}
