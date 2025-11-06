'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function SetupPage() {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const createAdminAccount = async () => {
    setLoading(true);
    setStatus('계정 생성 중...');

    try {
      // 1. 회원가입
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: 'kangsh6917@naver.com',
        password: 'rkdtjdgus',
        options: {
          emailRedirectTo: `${window.location.origin}/manage`
        }
      });

      if (signUpError) {
        if (signUpError.message.includes('already registered')) {
          setStatus('이미 등록된 계정입니다. 로그인을 시도합니다...');
          
          // 이미 존재하는 경우 로그인 시도
          const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email: 'kangsh6917@naver.com',
            password: 'rkdtjdgus',
          });

          if (signInError) {
            setStatus(`로그인 실패: ${signInError.message}`);
            setLoading(false);
            return;
          }

          if (signInData.user) {
            // 프로필 확인 및 업데이트
            const { error: profileError } = await supabase
              .schema('app_public')
              .from('profiles')
              .upsert({
                id: signInData.user.id,
                email: 'kangsh6917@naver.com',
                role: 'admin'
              }, { onConflict: 'id' });

            if (profileError) {
              console.error('Profile update error:', profileError);
            }

            setStatus('로그인 성공! 관리자 페이지로 이동합니다...');
            setTimeout(() => {
              router.push('/manage');
              router.refresh();
            }, 1000);
            return;
          }
        } else {
          setStatus(`계정 생성 실패: ${signUpError.message}`);
          setLoading(false);
          return;
        }
      }

      if (signUpData.user) {
        setStatus('계정 생성 완료! 프로필 설정 중...');

        // 2. 프로필 생성 및 admin role 부여
        const { error: profileError } = await supabase
          .schema('app_public')
          .from('profiles')
          .upsert({
            id: signUpData.user.id,
            email: 'kangsh6917@naver.com',
            role: 'admin'
          });

        if (profileError) {
          setStatus(`프로필 생성 오류: ${profileError.message}`);
          console.error('Profile creation error:', profileError);
        } else {
          setStatus('프로필 생성 완료! 로그인 시도 중...');
        }

        // 3. 이메일 인증 없이 바로 로그인 시도
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: 'kangsh6917@naver.com',
          password: 'rkdtjdgus',
        });

        if (signInError) {
          setStatus(`로그인 실패: ${signInError.message}. 이메일 인증이 필요할 수 있습니다.`);
          setLoading(false);
          return;
        }

        if (signInData.user) {
          setStatus('성공! 관리자 페이지로 이동합니다...');
          setTimeout(() => {
            router.push('/manage');
            router.refresh();
          }, 1000);
        }
      }
    } catch (err: any) {
      setStatus(`오류 발생: ${err.message}`);
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          color: '#1a1a1a',
          marginBottom: '16px'
        }}>
          관리자 계정 설정
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '14px',
          marginBottom: '32px'
        }}>
          관리자 계정을 생성합니다.<br />
          이메일: kangsh6917@naver.com
        </p>

        <button
          onClick={createAdminAccount}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            background: loading ? '#9ca3af' : '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.3s',
            marginBottom: '20px'
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.background = '#5568d3';
            }
          }}
          onMouseLeave={(e) => {
            if (!loading) {
              e.currentTarget.style.background = '#667eea';
            }
          }}
        >
          {loading ? '처리 중...' : '관리자 계정 생성'}
        </button>

        {status && (
          <div style={{
            padding: '12px',
            background: status.includes('성공') || status.includes('완료') ? '#d1fae5' : '#fee2e2',
            border: `1px solid ${status.includes('성공') || status.includes('완료') ? '#10b981' : '#fecaca'}`,
            borderRadius: '8px',
            color: status.includes('성공') || status.includes('완료') ? '#065f46' : '#991b1b',
            fontSize: '14px',
            textAlign: 'center',
            marginTop: '16px'
          }}>
            {status}
          </div>
        )}

        <div style={{ marginTop: '24px' }}>
          <a 
            href="/manage/login" 
            style={{ 
              color: '#667eea', 
              textDecoration: 'none',
              fontSize: '14px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            로그인 페이지로 이동
          </a>
        </div>
      </div>
    </div>
  );
}

