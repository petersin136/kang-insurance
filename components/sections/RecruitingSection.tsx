'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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

const easeBezier = [0.25, 1, 0.5, 1] as const;

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

const PROCESS_STEPS = [
  {
    step: '01',
    title: '간단한 상담',
    desc: '전화 또는 카톡으로 편하게 문의하세요',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop',
    details: [
      '전화 또는 카카오톡으로 간편하게 문의',
      '부담 없는 상담 진행',
      '24시간 내 답변 보장',
      '궁금한 점 자유롭게 질문'
    ]
  },
  {
    step: '02',
    title: '1:1 미팅',
    desc: '강성현 지점장과 커피 한잔 나누며 이야기해요',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',
    details: [
      '강성현 지점장과 직접 만남',
      '편안한 분위기에서 대화',
      '조직 문화와 비전 공유',
      '서로를 알아가는 시간'
    ]
  },
  {
    step: '03',
    title: '교육 시작',
    desc: '기초부터 탄탄하게 영업의 A to Z를 배웁니다',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop',
    details: [
      '체계적인 교육 커리큘럼',
      '1:1 멘토링 시작',
      '실전 영업 기법 학습',
      '지속적인 피드백과 개선'
    ]
  },
  {
    step: '04',
    title: '함께 성장',
    desc: '평생 함께할 동료이자 가족으로 성장합니다',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    details: [
      '팀원으로서의 정식 합류',
      '지속적인 성장 지원',
      '평생 함께할 동료와의 만남',
      '함께 만들어가는 미래'
    ]
  }
];

export default function RecruitingSection() {
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다! 곧 연락드리겠습니다.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div style={{ width: '100%', background: '#000', color: '#fff' }}>
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
            gap: '16px',
            alignItems: 'flex-start',
            minHeight: '600px'
          }}>
            {BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isExpanded = activeBenefit === idx;
              return (
                <motion.div
                  key={benefit.id}
                  initial={false}
                  animate={{
                    flex: isExpanded ? 3 : 1,
                    minWidth: isExpanded ? '400px' : '180px'
                  }}
                  transition={{ duration: 0.8, ease: easeBezier }}
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundImage: `url(${benefit.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: isExpanded ? '2px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)'
                  }}
                  onClick={() => setActiveBenefit(isExpanded ? null : idx)}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: isExpanded 
                      ? 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))'
                      : 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0), rgba(0,0,0,0.3))',
                    transition: 'background 0.3s'
                  }} />
                  
                  <AnimatePresence>
                    {isExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
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
                                <Check style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(14px, 1.8vw, 18px)', lineHeight: '1.6' }}>
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

      {/* Section 2: 업계 최고 수준의 신입 지원 시스템 */}
      <section style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
        padding: 'clamp(60px, 10vw, 120px) 0'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            lineHeight: '1.2',
            color: '#fff'
          }}>
            업계 최고 수준의 <span style={{ color: '#10b981' }}>신입 지원 시스템</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(20px, 3vw, 24px)'
          }}>
            {BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    minHeight: '400px',
                    backgroundImage: `url(${benefit.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))'
                  }} />
                  <div style={{
                    position: 'relative',
                    zIndex: 10,
                    padding: 'clamp(24px, 4vw, 32px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: `linear-gradient(to bottom right, ${benefit.color.includes('green') ? '#10b981, #059669' : benefit.color.includes('blue') ? '#3b82f6, #06b6d4' : benefit.color.includes('purple') ? '#a855f7, #ec4899' : '#ef4444, #f97316'})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
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
                      padding: '4px 12px',
                      borderRadius: '50px',
                      marginBottom: '12px'
                    }}>
                      {benefit.highlight}
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontWeight: '800',
                      color: '#fff',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: '1.7',
                      fontSize: 'clamp(13px, 1.8vw, 16px)'
                    }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: 시작하기, 정말 간단합니다 */}
      <section style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
        padding: 'clamp(60px, 10vw, 120px) 0'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px',
            lineHeight: '1.2',
            color: '#fff'
          }}>
            시작하기, 정말 간단합니다
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            marginBottom: 'clamp(40px, 6vw, 60px)'
          }}>
            부담 없이 상담부터 시작하세요
          </p>

          {/* Process Strips */}
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
            minHeight: '600px'
          }}>
            {PROCESS_STEPS.map((step, idx) => {
              const isExpanded = activeProcess === idx;
              return (
                <motion.div
                  key={step.step}
                  initial={false}
                  animate={{
                    flex: isExpanded ? 3 : 1,
                    minWidth: isExpanded ? '400px' : '180px'
                  }}
                  transition={{ duration: 0.8, ease: easeBezier }}
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundImage: `url(${step.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: isExpanded ? '2px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)'
                  }}
                  onClick={() => setActiveProcess(isExpanded ? null : idx)}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: isExpanded 
                      ? 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))'
                      : 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0), rgba(0,0,0,0.3))',
                    transition: 'background 0.3s'
                  }} />
                  
                  <AnimatePresence>
                    {isExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
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
                            fontSize: 'clamp(12px, 1.5vw, 14px)',
                            fontWeight: '600',
                            letterSpacing: '0.14em',
                            color: '#3b82f6',
                            marginBottom: '16px'
                          }}>
                            STEP {step.step}
                          </div>
                          
                          <h3 style={{
                            fontSize: 'clamp(24px, 3.5vw, 36px)',
                            fontWeight: '800',
                            color: '#fff',
                            marginBottom: '16px',
                            lineHeight: '1.2'
                          }}>
                            {step.title}
                          </h3>
                          
                          <p style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: 'clamp(16px, 2.2vw, 20px)',
                            marginBottom: '32px',
                            lineHeight: '1.6'
                          }}>
                            {step.desc}
                          </p>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {step.details.map((detail, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <Check style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(14px, 1.8vw, 18px)', lineHeight: '1.6' }}>
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
                          fontSize: 'clamp(10px, 1.2vw, 12px)',
                          fontWeight: '600',
                          letterSpacing: '0.14em',
                          color: '#3b82f6',
                          marginBottom: '8px'
                        }}>
                          STEP {step.step}
                        </div>
                        <h3 style={{
                          fontSize: 'clamp(14px, 2vw, 18px)',
                          fontWeight: '700',
                          color: '#fff',
                          lineHeight: '1.3'
                        }}>
                          {step.title}
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

      {/* Section 4: 지점장 소개 */}
      <section style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
        padding: 'clamp(60px, 10vw, 120px) 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            lineHeight: '1.2',
            color: '#fff'
          }}>
            지점장 소개
          </h2>

          <div style={{
            background: 'linear-gradient(to right, #1e293b, #1e40af)',
            borderRadius: '24px',
            padding: 'clamp(32px, 5vw, 48px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(32px, 5vw, 48px)',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                padding: '8px 16px',
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                fontWeight: '700',
                marginBottom: '24px'
              }}>
                <Award style={{ width: '16px', height: '16px' }} />
                <span>Your Leader</span>
              </div>
              
              <h3 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: '800',
                marginBottom: '16px',
                color: '#fff'
              }}>
                강성현 지점장
              </h3>
              
              <p style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                color: '#bfdbfe',
                marginBottom: '24px',
                fontStyle: 'italic'
              }}>
                "함께 성장하는 것이 진짜 리더십입니다"
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#d1d5db' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check style={{ width: '24px', height: '24px', color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ lineHeight: '1.7', fontSize: 'clamp(14px, 2vw, 18px)' }}>10년 이상 보험 업계 경력, 검증된 노하우</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check style={{ width: '24px', height: '24px', color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ lineHeight: '1.7', fontSize: 'clamp(14px, 2vw, 18px)' }}>500명 이상의 고객 관리 경험</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check style={{ width: '24px', height: '24px', color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ lineHeight: '1.7', fontSize: 'clamp(14px, 2vw, 18px)' }}>신입부터 팀장까지, 검증된 교육 시스템</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check style={{ width: '24px', height: '24px', color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ lineHeight: '1.7', fontSize: 'clamp(14px, 2vw, 18px)' }}>지인 영업 탈피, 전문적 영업 추구</span>
                </div>
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{
                aspectRatio: '1',
                background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '128px',
                    height: '128px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px'
                  }}>
                    👔
                  </div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 'clamp(14px, 2vw, 18px)' }}>강성현 지점장</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 상담 신청 양식 */}
      <section style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
        padding: 'clamp(60px, 10vw, 120px) 0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            lineHeight: '1.2',
            color: '#fff'
          }}>
            상담 신청
          </h2>

          <form onSubmit={handleSubmit} style={{
            background: '#fff',
            borderRadius: '28px',
            padding: 'clamp(32px, 5vw, 48px)',
            color: '#000'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '600',
                  marginBottom: '8px',
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
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '600',
                  marginBottom: '8px',
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
                  placeholder="010-1234-5678"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '600',
                  marginBottom: '8px',
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
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#111827'
                }}>
                  문의 내용
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
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

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  background: '#000',
                  color: '#fff',
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
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
      </section>
    </div>
  );
}
