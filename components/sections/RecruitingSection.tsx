'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
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
  Send
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
};

const BENEFITS: BenefitItem[] = [
  {
    id: 'guarantee',
    title: '1년간 월 300만원 최소 보장',
    description: '업계 최고 수준의 신입 보장 제도. 안정적인 출발을 약속합니다.',
    highlight: '업계 최고',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'no-friends',
    title: '지인 영업 절대 NO',
    description: '최고 품질의 DB를 제공합니다. 지인 관계를 지키며 일하세요.',
    highlight: '차별화',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'education',
    title: '체계적인 교육 시스템',
    description: '영업의 기본부터 고급 전략까지. 제대로 배우고 성장하세요.',
    highlight: '전문성',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'family',
    title: '가족 같은 조직 문화',
    description: '서로 끌어주고 밀어주는 진짜 팀워크. 혼자가 아닙니다.',
    highlight: '신뢰',
    icon: Heart,
    color: 'from-red-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop'
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: '간단한 상담',
    desc: '전화 또는 카톡으로 편하게 문의하세요',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop'
  },
  {
    step: '02',
    title: '1:1 미팅',
    desc: '강성현 지점장과 커피 한잔 나누며 이야기해요',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop'
  },
  {
    step: '03',
    title: '교육 시작',
    desc: '기초부터 탄탄하게 영업의 A to Z를 배웁니다',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    step: '04',
    title: '함께 성장',
    desc: '평생 함께할 동료이자 가족으로 성장합니다',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function RecruitingSection() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const benefitPanelKey = BENEFITS[activeBenefit].id;
  const processPanelKey = PROCESS_STEPS[activeProcess].step;

  // Keyboard navigation for benefits
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveBenefit((i) => Math.min(i + 1, BENEFITS.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setActiveBenefit((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert('상담 신청이 접수되었습니다! 곧 연락드리겠습니다.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div style={{ width: '100%', background: '#000' }}>
      {/* Section 1: 당신의 첫 시작이, 최고의 시작이 되도록 */}
      <section style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#000', color: '#fff', padding: 'clamp(60px, 10vw, 120px) 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 72px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            lineHeight: '1.1'
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

          {/* Benefits Carousel */}
          <div style={{ position: 'relative', marginTop: 'clamp(40px, 6vw, 60px)' }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              paddingBottom: '20px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }} className="hide-scrollbar">
              {BENEFITS.map((benefit, idx) => {
                const dist = idx - activeBenefit;
                const offset = Math.max(-1, Math.min(1, dist)) * 18;
                const Icon = benefit.icon;
                return (
                  <motion.button
                    key={benefit.id}
                    onClick={() => setActiveBenefit(idx)}
                    style={{
                      position: 'relative',
                      height: '72vh',
                      minWidth: '180px',
                      flex: 1,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: idx === activeBenefit ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
                      opacity: idx === activeBenefit ? 1 : 0.9,
                      cursor: 'pointer',
                      backgroundImage: `url(${benefit.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    animate={{ x: offset }}
                    transition={{ duration: 0.9, ease: easeBezier }}
                    onMouseEnter={(e) => {
                      if (idx !== activeBenefit) e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      if (idx !== activeBenefit) e.currentTarget.style.opacity = '0.9';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0), rgba(0,0,0,0.3))',
                      pointerEvents: 'none'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: '1px',
                      background: 'rgba(255,255,255,0.1)',
                      pointerEvents: 'none'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      right: 0,
                      width: '1px',
                      background: 'rgba(255,255,255,0.1)',
                      pointerEvents: 'none'
                    }} />
                  </motion.button>
                );
              })}
            </div>

            {/* Content Panel */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '600px',
              zIndex: 10,
              pointerEvents: 'none'
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={benefitPanelKey}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 1.1, ease: easeBezier }}
                  style={{
                    pointerEvents: 'auto',
                    borderRadius: '28px',
                    background: '#fff',
                    padding: 'clamp(24px, 4vw, 32px)',
                    color: '#000',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    fontWeight: '600',
                    letterSpacing: '0.14em',
                    color: '#6b7280',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                  }}>
                    {BENEFITS[activeBenefit].highlight}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(20px, 3vw, 32px)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    marginBottom: '16px'
                  }}>
                    {BENEFITS[activeBenefit].title}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    color: '#4b5563',
                    lineHeight: '1.6'
                  }}>
                    {BENEFITS[activeBenefit].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 업계 최고 수준의 신입 지원 시스템 */}
      <section style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
        color: '#fff',
        padding: 'clamp(60px, 10vw, 120px) 0'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            lineHeight: '1.2'
          }}>
            업계 최고 수준의 <span style={{ color: '#10b981' }}>신입 지원 시스템</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(20px, 3vw, 24px)',
            marginTop: 'clamp(40px, 6vw, 60px)'
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
        color: '#fff',
        padding: 'clamp(60px, 10vw, 120px) 0'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px',
            lineHeight: '1.2'
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

          {/* Process Carousel */}
          <div style={{ position: 'relative', marginTop: 'clamp(40px, 6vw, 60px)' }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              paddingBottom: '20px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }} className="hide-scrollbar">
              {PROCESS_STEPS.map((step, idx) => {
                const dist = idx - activeProcess;
                const offset = Math.max(-1, Math.min(1, dist)) * 18;
                return (
                  <motion.button
                    key={step.step}
                    onClick={() => setActiveProcess(idx)}
                    style={{
                      position: 'relative',
                      height: '72vh',
                      minWidth: '180px',
                      flex: 1,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: idx === activeProcess ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
                      opacity: idx === activeProcess ? 1 : 0.9,
                      cursor: 'pointer',
                      backgroundImage: `url(${step.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    animate={{ x: offset }}
                    transition={{ duration: 0.9, ease: easeBezier }}
                    onMouseEnter={(e) => {
                      if (idx !== activeProcess) e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      if (idx !== activeProcess) e.currentTarget.style.opacity = '0.9';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0), rgba(0,0,0,0.3))',
                      pointerEvents: 'none'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: '1px',
                      background: 'rgba(255,255,255,0.1)',
                      pointerEvents: 'none'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      right: 0,
                      width: '1px',
                      background: 'rgba(255,255,255,0.1)',
                      pointerEvents: 'none'
                    }} />
                  </motion.button>
                );
              })}
            </div>

            {/* Content Panel */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '600px',
              zIndex: 10,
              pointerEvents: 'none'
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={processPanelKey}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 1.1, ease: easeBezier }}
                  style={{
                    pointerEvents: 'auto',
                    borderRadius: '28px',
                    background: '#fff',
                    padding: 'clamp(24px, 4vw, 32px)',
                    color: '#000',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    fontWeight: '600',
                    letterSpacing: '0.14em',
                    color: '#3b82f6',
                    marginBottom: '8px'
                  }}>
                    STEP {PROCESS_STEPS[activeProcess].step}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(20px, 3vw, 32px)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    marginBottom: '12px'
                  }}>
                    {PROCESS_STEPS[activeProcess].title}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    color: '#4b5563',
                    lineHeight: '1.6'
                  }}>
                    {PROCESS_STEPS[activeProcess].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 지점장 소개 */}
      <section style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
        color: '#fff',
        padding: 'clamp(60px, 10vw, 120px) 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            lineHeight: '1.2'
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
                marginBottom: '16px'
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
        color: '#fff',
        padding: 'clamp(60px, 10vw, 120px) 0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            lineHeight: '1.2'
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

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
