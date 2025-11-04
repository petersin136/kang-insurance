'use client';

import Link from 'next/link';

export default function LifeInsurancePage() {
  return (
    <div style={{ 
      fontFamily: 'var(--font-noto-sans-kr), -apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: '1.7',
      color: '#2c3e50',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e8eef3 100%)',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
        overflow: 'hidden'
      }}>
        <header style={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: 'white',
          padding: '60px 40px',
          textAlign: 'center',
          position: 'relative'
        }}>
          <Link href="/" style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            ← 홈으로
          </Link>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '15px',
            letterSpacing: '-1px'
          }}>생명보험</h1>
          <p style={{
            fontSize: '1.15rem',
            opacity: '0.95',
            fontWeight: '300'
          }}>가족을 위한 마지막 선물</p>
        </header>

        <div style={{ padding: '50px 40px' }}>
          <div style={{
            textAlign: 'center',
            padding: '40px 0 50px',
            borderBottom: '1px solid #e8eef3'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#1e3c72',
              marginBottom: '20px',
              fontWeight: '600'
            }}>생명보험이란?</h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#5a6c7d',
              lineHeight: '1.8'
            }}>내가 죽었을 때 가족에게 목돈을 주는 보험<br/><strong>사망 = 100% 보험금 지급</strong></p>
          </div>

          <div style={{ margin: '50px 0' }}>
            <h2 style={{
              fontSize: '1.6rem',
              color: '#1e3c72',
              marginBottom: '30px',
              fontWeight: '600',
              position: 'relative',
              paddingLeft: '20px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '5px',
                height: '30px',
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                borderRadius: '3px',
                display: 'inline-block'
              }}></span>
              종신보험 vs 정기보험
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px',
              marginTop: '30px'
            }}>
              <div style={{
                background: 'white',
                border: '2px solid #e8eef3',
                borderRadius: '16px',
                padding: '30px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '5px 15px',
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                  color: '#1565c0',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>평생 보장</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#1e3c72',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>종신보험</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '10px 0', color: '#5a6c7d', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '5px', color: '#2a5298', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                    언제 죽어도 100% 지급
                  </li>
                  <li style={{ padding: '10px 0', color: '#5a6c7d', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '5px', color: '#2a5298', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                    보험료 비쌈 (2~3배)
                  </li>
                  <li style={{ padding: '10px 0', color: '#5a6c7d', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '5px', color: '#2a5298', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                    해지환급금 있음
                  </li>
                  <li style={{ padding: '10px 0', color: '#5a6c7d', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '5px', color: '#2a5298', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                    상속 계획 가능
                  </li>
                </ul>
              </div>

              <div style={{
                background: 'white',
                border: '2px solid #e8eef3',
                borderRadius: '16px',
                padding: '30px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '5px 15px',
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                  color: '#1565c0',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>기간 한정</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#1e3c72',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>정기보험</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '10px 0', color: '#5a6c7d', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '5px', color: '#2a5298', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                    기간 내 사망만 지급
                  </li>
                  <li style={{ padding: '10px 0', color: '#5a6c7d', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '5px', color: '#2a5298', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                    보험료 저렴
                  </li>
                  <li style={{ padding: '10px 0', color: '#5a6c7d', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '5px', color: '#2a5298', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                    만기 시 환급 없음
                  </li>
                  <li style={{ padding: '10px 0', color: '#5a6c7d', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '5px', color: '#2a5298', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                    자녀 양육기 추천
                  </li>
                </ul>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #fff5e6 0%, #ffe8cc 100%)',
              borderLeft: '5px solid #ff9800',
              padding: '25px 30px',
              borderRadius: '12px',
              marginTop: '30px'
            }}>
              <h3 style={{
                color: '#e65100',
                marginBottom: '15px',
                fontSize: '1.2rem'
              }}>보험료 비교 (40세 남성, 1억 원 보장 기준)</h3>
              <p style={{ color: '#5a6c7d', lineHeight: '1.8', marginBottom: '10px' }}>
                <strong>종신보험 (평생 보장)</strong><br/>
                월 약 30만 원 × 20년 = 총 7,200만 원<br/>
                → 언제 죽어도 1억 원 지급
              </p>
              <p style={{ color: '#5a6c7d', lineHeight: '1.8', marginBottom: '10px' }}>
                <strong>정기보험 (70세 만기)</strong><br/>
                월 약 10만 원 × 20년 = 총 2,400만 원<br/>
                → 70세 전 사망 시만 1억 원 지급
              </p>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            color: 'white',
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            marginTop: '50px'
          }}>
            <p style={{
              fontSize: '1.3rem',
              fontWeight: '500',
              lineHeight: '1.8'
            }}>
              생명보험 = 나를 위한 게 아닌 가족을 위한 보험<br/>
              정기보험은 저렴하게, 종신보험은 평생 보장과 상속 설계<br/>
              젊을 때 가입할수록 보험료 저렴
            </p>
          </div>
        </div>

        <footer style={{
          textAlign: 'center',
          padding: '30px',
          color: '#95a5a6',
          fontSize: '0.9rem'
        }}>
          <p>※ 본 내용은 2025년 기준이며, 상품별 세부 내용은 약관을 확인하세요.</p>
        </footer>
      </div>
    </div>
  );
}

