'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
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
          개인정보처리방침
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
              1. 총칙
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              PRIME ASSET(이하 "회사")은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>
            <p style={{ color: '#5a534e' }}>
              본 방침은 회사가 제공하는 모든 서비스(온라인 상담 신청, 보험 상품 안내 등)에 적용되며, 관련 법령 및 지침의 변경에 따라 개정될 수 있습니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              2. 수집하는 개인정보의 항목 및 수집 방법
            </h2>
            <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600', marginBottom: '12px', color: '#2b2825', marginTop: '24px' }}>
              2.1 수집 항목
            </h3>
            <ul style={{ marginBottom: '16px', paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>필수 항목:</strong> 이름, 연락처(전화번호), 이메일 주소
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>선택 항목:</strong> 상담 내용, 보유 보험 정보
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>자동 수집 항목:</strong> IP 주소, 쿠키, 접속 로그, 서비스 이용 기록
              </li>
            </ul>
            <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600', marginBottom: '12px', color: '#2b2825', marginTop: '24px' }}>
              2.2 수집 방법
            </h3>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '8px' }}>온라인 상담 신청 양식을 통한 직접 입력</li>
              <li style={{ marginBottom: '8px' }}>전화 상담을 통한 수집</li>
              <li style={{ marginBottom: '8px' }}>서비스 이용 과정에서 자동 생성·수집</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              3. 개인정보의 처리 목적
            </h2>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>상담 서비스 제공:</strong> 고객의 보험 상담 신청 처리 및 보험 상품 안내
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>서비스 개선:</strong> 서비스 품질 향상 및 고객 만족도 조사
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>민원 처리:</strong> 고객 문의사항 및 불만 처리
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>법적 의무 이행:</strong> 관련 법령에 따른 의무 사항 준수
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              4. 개인정보의 보유 및 이용 기간
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>상담 신청 정보:</strong> 상담 완료 후 3년간 보관 (전자상거래 등에서의 소비자보호에 관한 법률)
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>계약 관련 정보:</strong> 계약 종료 후 5년간 보관 (전자상거래 등에서의 소비자보호에 관한 법률)
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>서비스 이용 기록:</strong> 3년간 보관 (통신비밀보호법)
              </li>
            </ul>
            <p style={{ marginTop: '16px', color: '#5a534e' }}>
              단, 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지 보관하며, 계약 또는 청약철회 등에 관한 기록은 5년간 보관합니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              5. 개인정보의 제3자 제공
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              회사는 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
            </p>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '12px' }}>정보주체가 사전에 동의한 경우</li>
              <li style={{ marginBottom: '12px' }}>법령에 특별한 규정이 있는 경우</li>
              <li style={{ marginBottom: '12px' }}>정보주체의 생명이나 신체의 이익을 보호하기 위하여 필요한 경우</li>
              <li style={{ marginBottom: '12px' }}>보험 계약 체결 및 이행을 위하여 보험회사에 제공하는 경우</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              6. 개인정보 처리의 위탁
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁할 수 있습니다.
            </p>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginTop: '16px' }}>
              <p style={{ marginBottom: '8px', color: '#5a534e' }}>
                <strong>위탁 업체:</strong> 보험회사 및 관련 서비스 업체
              </p>
              <p style={{ marginBottom: '8px', color: '#5a534e' }}>
                <strong>위탁 업무 내용:</strong> 보험 상품 안내 및 계약 체결 지원
              </p>
              <p style={{ color: '#5a534e' }}>
                <strong>개인정보 보유 및 이용 기간:</strong> 위탁 계약 종료 시까지
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              7. 정보주체의 권리·의무 및 행사 방법
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              정보주체는 다음의 권리를 행사할 수 있습니다.
            </p>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '12px' }}>개인정보 열람 요구</li>
              <li style={{ marginBottom: '12px' }}>개인정보 정정·삭제 요구</li>
              <li style={{ marginBottom: '12px' }}>개인정보 처리정지 요구</li>
            </ul>
            <p style={{ marginTop: '16px', color: '#5a534e' }}>
              위 권리 행사는 회사에 대해 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              8. 개인정보의 파기
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            </p>
            <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600', marginBottom: '12px', color: '#2b2825', marginTop: '24px' }}>
              8.1 파기 방법
            </h3>
            <ul style={{ paddingLeft: '24px', color: '#5a534e' }}>
              <li style={{ marginBottom: '8px' }}>전자적 파일 형태: 복구 및 재생되지 않도록 안전하게 삭제</li>
              <li style={{ marginBottom: '8px' }}>기록물, 인쇄물, 서면 등: 분쇄하거나 소각</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              9. 개인정보 보호책임자
            </h2>
            <p style={{ marginBottom: '16px', color: '#5a534e' }}>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginTop: '16px' }}>
              <p style={{ marginBottom: '8px', color: '#5a534e' }}>
                <strong>개인정보 보호책임자:</strong> 강성현
              </p>
              <p style={{ marginBottom: '8px', color: '#5a534e' }}>
                <strong>직책:</strong> 손해 생명보험 총괄대리인
              </p>
              <p style={{ marginBottom: '8px', color: '#5a534e' }}>
                <strong>연락처:</strong> T. 033-763-9785, M. 010-4111-5552
              </p>
              <p style={{ color: '#5a534e' }}>
                <strong>이메일:</strong> kangsh6917@naver.com
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', marginBottom: '16px', color: '#2b2825' }}>
              10. 개인정보 처리방침 변경
            </h2>
            <p style={{ color: '#5a534e' }}>
              이 개인정보처리방침은 2025년 11월 6일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

