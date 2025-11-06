'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  Heart,
  TrendingUp,
  Users,
  Shield,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  Check,
  Star,
  Award,
  Briefcase,
  GraduationCap,
  Handshake
} from 'lucide-react';

export default function RecruitingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingUp,
      title: "1년간 월 300만원 최소 보장",
      description: "업계 최고 수준의 신입 보장 제도. 안정적인 출발을 약속합니다.",
      highlight: "업계 최고",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "지인 영업 절대 NO",
      description: "최고 품질의 DB를 제공합니다. 지인 관계를 지키며 일하세요.",
      highlight: "차별화",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: GraduationCap,
      title: "체계적인 교육 시스템",
      description: "영업의 기본부터 고급 전략까지. 제대로 배우고 성장하세요.",
      highlight: "전문성",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Heart,
      title: "가족 같은 조직 문화",
      description: "서로 끌어주고 밀어주는 진짜 팀워크. 혼자가 아닙니다.",
      highlight: "신뢰",
      color: "from-red-500 to-orange-600"
    }
  ];

  const problems = [
    "💔 지인 영업으로 관계가 틀어졌어요",
    "😰 교육도 없이 혼자 알아서 하래요",
    "💸 수입이 불안정해서 불안해요",
    "🤷 멘토도 없고 물어볼 사람이 없어요"
  ];

  const solutions = [
    "✨ 최고 품질의 DB로 전문적인 영업",
    "📚 체계적인 1:1 멘토링 시스템",
    "💰 1년간 월 300만원 최소 보장",
    "👨‍👩‍👧‍👦 24시간 지원하는 팀 조직"
  ];

  const process = [
    { 
      step: "01", 
      title: "간단한 상담", 
      desc: "전화 또는 카톡으로 편하게 문의하세요",
      icon: Phone 
    },
    { 
      step: "02", 
      title: "1:1 미팅", 
      desc: "강성현 지점장과 커피 한잔 나누며 이야기해요",
      icon: Handshake 
    },
    { 
      step: "03", 
      title: "교육 시작", 
      desc: "기초부터 탄탄하게 영업의 A to Z를 배웁니다",
      icon: GraduationCap 
    },
    { 
      step: "04", 
      title: "함께 성장", 
      desc: "평생 함께할 동료이자 가족으로 성장합니다",
      icon: TrendingUp 
    }
  ];

  return (
    <section 
      ref={ref} 
      style={{ 
        padding: 'clamp(60px, 10vw, 120px) 0',
        background: 'linear-gradient(to bottom right, #f8fafc, #e0e7ff, #f8fafc)',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* 배경 데코레이션 */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}>
        <div style={{ 
          position: 'absolute', 
          top: '80px', 
          left: '40px', 
          width: '288px', 
          height: '288px', 
          background: '#3b82f6', 
          borderRadius: '50%', 
          filter: 'blur(80px)' 
        }} />
        <div style={{ 
          position: 'absolute', 
          bottom: '80px', 
          right: '40px', 
          width: '384px', 
          height: '384px', 
          background: '#a855f7', 
          borderRadius: '50%', 
          filter: 'blur(80px)' 
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 40px)', width: '100%', position: 'relative', zIndex: 10 }}>
        {/* 상단 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '24px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(to right, #2563eb, #9333ea)',
            color: 'white',
            borderRadius: '50px',
            padding: '8px 24px',
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            fontWeight: '700'
          }}>
            <Sparkles style={{ width: '16px', height: '16px' }} />
            <span>We're Hiring - 함께 성장할 팀원을 찾습니다</span>
          </div>
        </motion.div>

        {/* 메인 헤딩 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 60px)',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            당신의 첫 시작이,
            <br />
            <span style={{
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              최고의 시작이 되도록
            </span>
          </h2>
          
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 24px)',
            color: '#4b5563',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            보험 조직은 <span style={{ fontWeight: '700', color: '#2563eb' }}>누가 이끄냐</span>에 따라 달라집니다.
            <br />
            강성현 지점장과 함께, 제대로 된 영업을 배우고 성장하세요.
          </p>
        </motion.div>

        {/* Problem vs Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            marginBottom: 'clamp(40px, 6vw, 80px)',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {/* 다른 곳은 이래요 */}
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 32px)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            border: '2px solid #fee2e2'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#fee2e2',
                color: '#dc2626',
                borderRadius: '50px',
                padding: '8px 16px',
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                <span>❌</span>
                <span>다른 곳은 이래요</span>
              </div>
              <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '800', color: '#111827' }}>흔한 보험사의 현실</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  style={{
                    padding: '16px',
                    background: '#fee2e2',
                    borderRadius: '12px',
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    lineHeight: '1.6',
                    color: '#991b1b'
                  }}
                >
                  {problem}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 우리는 달라요 */}
          <div style={{
            background: 'linear-gradient(to bottom right, #2563eb, #9333ea)',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 32px)',
            boxShadow: '0 20px 60px rgba(37, 99, 235, 0.3)',
            color: 'white'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                padding: '8px 16px',
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                <span>✨</span>
                <span>우리는 달라요</span>
              </div>
              <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '800' }}>강성현 조직의 차별점</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  style={{
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    lineHeight: '1.6'
                  }}
                >
                  {solution}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 핵심 혜택 4개 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}
        >
          <h3 style={{
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: '800',
            textAlign: 'center',
            color: '#111827',
            marginBottom: 'clamp(32px, 5vw, 48px)'
          }}>
            업계 최고 수준의 <span style={{ color: '#2563eb' }}>신입 지원 시스템</span>
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(20px, 3vw, 24px)'
          }}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: 'clamp(20px, 3vw, 24px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '2px solid transparent',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#bfdbfe';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                  }}
                >
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
                    background: '#dbeafe',
                    color: '#2563eb',
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    fontWeight: '700',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    marginBottom: '12px'
                  }}>
                    {benefit.highlight}
                  </div>
                  
                  <h4 style={{
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    fontWeight: '800',
                    color: '#111827',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}>
                    {benefit.title}
                  </h4>
                  
                  <p style={{
                    color: '#4b5563',
                    lineHeight: '1.7',
                    fontSize: 'clamp(13px, 1.8vw, 16px)'
                  }}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 입사 프로세스 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}
        >
          <h3 style={{
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: '800',
            textAlign: 'center',
            color: '#111827',
            marginBottom: '16px'
          }}>
            시작하기, 정말 간단합니다
          </h3>
          <p style={{
            textAlign: 'center',
            color: '#4b5563',
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            marginBottom: 'clamp(32px, 5vw, 48px)'
          }}>
            부담 없이 상담부터 시작하세요
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(20px, 3vw, 24px)',
            maxWidth: '1000px',
            margin: '0 auto',
            position: 'relative'
          }}>
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  style={{ position: 'relative', textAlign: 'center' }}
                >
                  {/* 연결선 (데스크톱만, 마지막 제외) */}
                  {index < process.length - 1 && (
                    <div 
                      className="hidden md:block"
                      style={{
                        position: 'absolute',
                        top: '40px',
                        left: '60%',
                        width: '80%',
                        height: '2px',
                        background: 'linear-gradient(to right, #93c5fd, #c4b5fd)',
                        zIndex: 0
                      }}
                    />
                  )}
                  
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto 16px',
                      background: 'linear-gradient(to bottom right, #2563eb, #9333ea)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
                    }}>
                      <Icon style={{ width: '40px', height: '40px', color: 'white' }} />
                    </div>
                    <div style={{
                      color: '#2563eb',
                      fontWeight: '700',
                      fontSize: 'clamp(12px, 1.5vw, 14px)',
                      marginBottom: '8px'
                    }}>
                      STEP {item.step}
                    </div>
                    <h4 style={{
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontWeight: '800',
                      color: '#111827',
                      marginBottom: '8px'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      color: '#4b5563',
                      fontSize: 'clamp(13px, 1.8vw, 16px)',
                      lineHeight: '1.6'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 리더 소개 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          style={{
            background: 'linear-gradient(to right, #1e293b, #1e40af)',
            borderRadius: '24px',
            padding: 'clamp(32px, 5vw, 48px)',
            marginBottom: 'clamp(40px, 6vw, 80px)',
            color: 'white',
            position: 'relative'
          }}
        >
          <div style={{
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
              
              {/* 데코레이션 */}
              <div style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-24px',
                width: '96px',
                height: '96px',
                background: '#fbbf24',
                borderRadius: '16px',
                zIndex: -1
              }} />
              <div style={{
                position: 'absolute',
                top: '-24px',
                left: '-24px',
                width: '96px',
                height: '96px',
                background: '#f472b6',
                borderRadius: '16px',
                zIndex: -1
              }} />
            </div>
          </div>
        </motion.div>

        {/* 최종 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: 'linear-gradient(to right, #2563eb, #9333ea)',
            borderRadius: '24px',
            padding: 'clamp(32px, 5vw, 48px)',
            color: 'white'
          }}>
            <h3 style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: '800',
              marginBottom: '16px'
            }}>
              지금 시작하세요
            </h3>
            <p style={{
              fontSize: 'clamp(16px, 2.5vw, 24px)',
              color: '#bfdbfe',
              marginBottom: 'clamp(24px, 4vw, 32px)'
            }}>
              1년간 월 300만원 보장 · 지인 영업 NO · 최고의 DB 제공
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="tel:010-4111-5552"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'white',
                  color: '#2563eb',
                  padding: 'clamp(14px, 2vw, 18px) clamp(32px, 4vw, 40px)',
                  borderRadius: '50px',
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Phone style={{ width: '20px', height: '20px' }} />
                전화로 상담하기
                <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
              </a>
              
              <Link
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: 'clamp(14px, 2vw, 18px) clamp(32px, 4vw, 40px)',
                  borderRadius: '50px',
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <Mail style={{ width: '20px', height: '20px' }} />
                온라인으로 문의하기
              </Link>
            </div>
            
            <div style={{
              marginTop: 'clamp(24px, 4vw, 32px)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'clamp(16px, 3vw, 24px)',
              color: '#bfdbfe',
              fontSize: 'clamp(12px, 1.5vw, 14px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users style={{ width: '16px', height: '16px' }} />
                <span>현재 팀원 15명</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star style={{ width: '16px', height: '16px' }} />
                <span>신입 만족도 98%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp style={{ width: '16px', height: '16px' }} />
                <span>평균 정착률 85%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 하단 신뢰 요소 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.2 }}
          style={{
            textAlign: 'center',
            marginTop: 'clamp(32px, 5vw, 48px)',
            color: '#6b7280',
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <p>💼 정식 금융위원회 등록 보험대리점</p>
          <p>🔒 개인정보는 채용 목적으로만 사용되며 안전하게 보호됩니다</p>
          <p>⭐ 면접 불합격 시에도 피드백을 성실히 드립니다</p>
        </motion.div>
      </div>
    </section>
  );
}

