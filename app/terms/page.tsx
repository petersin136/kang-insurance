'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#faf8f3' }}>
      <Header />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px', color: '#2b2825' }}>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ color: '#667eea', textDecoration: 'none', fontSize: '14px' }}>
            ← 홈으로 돌아가기
          </Link>
        </div>

        <h1 style={{ 
          fontSize: 'clamp(32px, 5vw, 48px)', 
          fontWeight: '700', 
          marginBottom: '32px',
          color: '#2b2825'
        }}>
          이용약관
        </h1>

        <div style={{ 
          background: 'white', 
          padding: 'clamp(32px, 5vw, 48px)',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          lineHeight: '1.8',
          fontSize: 'clamp(14px, 2vw, 16px)'
        }}>
          <p style={{ marginBottom: '24px', color: '#666', fontSize: 'clamp(12px, 1.8vw, 14px)' }}>
            <strong>최종 수정일:</strong> 2025년 11월 6일
          </p>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제1조 (목적)
            </h2>
            <p style={{ color: '#5a534e' }}>
              본 약관은 PRIME ASSET(이하 "회사")이 운영하는 보험 상담 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제2조 (정의)
            </h2>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>"서비스"</strong>란 회사가 제공하는 보험 상담 및 보험 상품 안내 서비스를 의미합니다.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>"이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 받는 개인 또는 법인을 의미합니다.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>"상담 신청"</strong>이란 이용자가 온라인 또는 전화를 통해 보험 상담을 요청하는 행위를 의미합니다.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제3조 (약관의 효력 및 변경)
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.
            </p>
            <p style={{ color: '#5a534e' }}>
              회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 약관을 변경한 경우에는 지체 없이 공지합니다. 변경된 약관은 그 공지 7일 후부터 효력이 발생합니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제4조 (서비스의 제공 및 변경)
            </h2>
            <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600', marginBottom: '12px', color: '#2b2825', marginTop: '24px' }}>
              4.1 제공 서비스
            </h3>
            <ul style={{ paddingLeft: '24px', color: '#5a534e', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>보험 상담 서비스</li>
              <li style={{ marginBottom: '8px' }}>보험 상품 안내 및 비교 분석</li>
              <li style={{ marginBottom: '8px' }}>보험 계약 체결 지원</li>
              <li style={{ marginBottom: '8px' }}>보험 관련 정보 제공</li>
            </ul>
            <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600', marginBottom: '12px', color: '#2b2825', marginTop: '24px' }}>
              4.2 서비스 변경
            </h3>
            <p style={{ color: '#5a534e' }}>
              회사는 서비스의 내용, 제공 방법 등을 변경할 수 있으며, 변경 시 사전에 공지합니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제5조 (서비스 이용 신청)
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              이용자는 온라인 상담 신청 양식에 필요한 정보를 정확히 입력하여 상담을 신청할 수 있습니다.
            </p>
            <p style={{ color: '#5a534e' }}>
              회사는 다음 각 호에 해당하는 신청에 대하여는 승인을 하지 않거나 사후에 취소할 수 있습니다.
            </p>
            <ul style={{ paddingLeft: '24px', color: '#5a534e', marginTop: '16px' }}>
              <li style={{ marginBottom: '8px' }}>가입 신청자가 본 약관에 의하여 이전에 이용자 자격을 상실한 적이 있는 경우</li>
              <li style={{ marginBottom: '8px' }}>실명이 아니거나 타인의 명의를 이용한 경우</li>
              <li style={{ marginBottom: '8px' }}>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
              <li style={{ marginBottom: '8px' }}>기타 이용자의 귀책사유로 인하여 승인이 불가능하거나 법령에 위반되는 경우</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제6조 (상담 신청 및 처리)
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              이용자가 상담을 신청하면, 회사는 24시간 이내에 전화 또는 이메일을 통해 연락을 드립니다.
            </p>
            <p style={{ color: '#5a534e' }}>
              상담은 무료로 제공되며, 보험 상품 가입 여부는 이용자의 자유로운 선택에 따릅니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제7조 (이용자의 의무)
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              이용자는 다음 행위를 하여서는 안 됩니다.
            </p>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '8px' }}>신청 또는 변경 시 허위 내용의 등록</li>
              <li style={{ marginBottom: '8px' }}>타인의 정보 도용</li>
              <li style={{ marginBottom: '8px' }}>회사가 게시한 정보의 변경</li>
              <li style={{ marginBottom: '8px' }}>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li style={{ marginBottom: '8px' }}>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li style={{ marginBottom: '8px' }}>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li style={{ marginBottom: '8px' }}>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제8조 (회사의 의무)
            </h2>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '12px' }}>
                회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 노력합니다.
              </li>
              <li style={{ marginBottom: '12px' }}>
                회사는 이용자의 개인정보 보호를 위해 보안시스템을 구축하며 개인정보처리방침을 공시하고 준수합니다.
              </li>
              <li style={{ marginBottom: '12px' }}>
                회사는 서비스 이용과 관련하여 이용자로부터 제기된 의견이나 불만이 정당하다고 인정할 경우 이를 처리하여야 합니다.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제9조 (개인정보 보호)
            </h2>
            <p style={{ color: '#5a534e' }}>
              회사는 이용자의 개인정보 보호를 위하여 노력합니다. 이용자의 개인정보 보호에 관해서는 관련법령 및 회사가 정하는 "개인정보처리방침"에 정한 바에 따릅니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제10조 (손해배상)
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              회사는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해를 지는 경우에도 동 손해가 회사의 중대한 과실에 의한 경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.
            </p>
            <p style={{ color: '#5a534e' }}>
              회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제11조 (면책조항)
            </h2>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '12px' }}>
                회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              </li>
              <li style={{ marginBottom: '12px' }}>
                회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
              </li>
              <li style={{ marginBottom: '12px' }}>
                회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않습니다.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              제12조 (관할법원)
            </h2>
            <p style={{ color: '#5a534e' }}>
              서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 강원특별자치도 원주시를 관할하는 법원을 전속 관할법원으로 합니다.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              부칙
            </h2>
            <p style={{ color: '#5a534e' }}>
              본 약관은 2025년 11월 6일부터 시행됩니다.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

