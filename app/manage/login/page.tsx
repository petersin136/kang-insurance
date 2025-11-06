'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('kangsh6917@naver.com');
  const [password, setPassword] = useState('rkdtjdgus');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [autoCreateStatus, setAutoCreateStatus] = useState('');

  // 페이지 로드 시 자동 계정 생성 및 로그인 시도
  useEffect(() => {
    const autoCreateAndLogin = async () => {
      try {
        // 먼저 로그인 시도 (이미 계정이 있는지 확인)
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: 'kangsh6917@naver.com',
          password: 'rkdtjdgus',
        });

        if (signInData.user) {
          // 로그인 성공
          router.push('/manage');
          return;
        }

        // 로그인 실패 시 새 계정 생성
        if (signInError && signInError.message.includes('Invalid login credentials')) {
          setAutoCreateStatus('계정 생성 중...');
          
          // 새 계정 생성
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: 'kangsh6917@naver.com',
            password: 'rkdtjdgus',
            options: {
              emailRedirectTo: `${window.location.origin}/manage`
            }
          });

          if (signUpError) {
            setAutoCreateStatus(`계정 생성 실패: ${signUpError.message}`);
            return;
          }

          if (signUpData.user) {
            // 프로필 생성 및 admin role 부여
            await supabase
              .schema('app_public')
              .from('profiles')
              .upsert({
                id: signUpData.user.id,
                email: 'kangsh6917@naver.com',
                role: 'admin'
              });

            // 이메일 인증 상태를 서버에서 업데이트 (API 호출)
            try {
              const response = await fetch('/api/auth/confirm-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: signUpData.user.id })
              });
            } catch (err) {
              // API 호출 실패는 무시 (수동으로 처리)
            }

            setAutoCreateStatus('계정 생성 완료! 로그인 중...');

            // 잠시 대기 후 로그인 시도 (이메일 인증 처리 시간)
            setTimeout(async () => {
              const { data: newSignInData, error: newSignInError } = await supabase.auth.signInWithPassword({
                email: 'kangsh6917@naver.com',
                password: 'rkdtjdgus',
              });

              if (newSignInData.user) {
                setAutoCreateStatus('로그인 성공! 관리자 페이지로 이동합니다...');
                setTimeout(() => {
                  router.push('/manage');
                  router.refresh();
                }, 500);
              } else if (newSignInError) {
                // 이메일 인증이 필요한 경우, 수동으로 인증 처리
                setAutoCreateStatus('이메일 인증이 필요합니다. 처리 중...');
                // 수동으로 이메일 인증 상태 업데이트를 시도
                // 실제로는 Supabase Dashboard에서 수동으로 처리해야 합니다
              }
            }, 1000);
          }
        }
      } catch (err: any) {
        setAutoCreateStatus(`오류 발생: ${err.message}`);
      }
    };

    autoCreateAndLogin();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // 회원가입
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password: password,
          options: {
            emailRedirectTo: `${window.location.origin}/manage`
          }
        });

        if (error) {
          setError(error.message || '회원가입 중 오류가 발생했습니다.');
          setLoading(false);
          return;
        }

        if (data.user) {
          // 회원가입 성공 시 프로필 생성 및 admin role 부여
          const { error: profileError } = await supabase
            .schema('app_public')
            .from('profiles')
            .upsert({
              id: data.user.id,
              email: email.trim(),
              role: 'admin'
            });

          if (profileError) {
            console.error('Profile creation error:', profileError);
          }

          // 계정이 이미 존재하는 경우도 처리
          if (data.user && !data.session) {
            // 이메일 인증 필요 없이 바로 로그인 시도
            const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
              email: email.trim(),
              password: password,
            });

            if (signInError) {
              // 비밀번호 재설정 링크 전송
              await supabase.auth.resetPasswordForEmail(email.trim(), {
                redirectTo: `${window.location.origin}/manage/login?reset=true`
              });
              setError('계정이 이미 존재합니다. 이메일로 비밀번호 재설정 링크를 보냈습니다.');
              setLoading(false);
              return;
            }

            if (signInData.user) {
              router.push('/manage');
              router.refresh();
            }
          } else if (data.session) {
            // 이미 로그인된 경우
            router.push('/manage');
            router.refresh();
          }
        }
      } else {
        // 로그인
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password,
        });

        if (error) {
          // 이메일 인증 오류인 경우
          if (error.message.includes('Email not confirmed')) {
            // 이메일 인증 상태를 수동으로 확인 처리 시도
            setError('이메일 인증이 필요합니다. 처리 중...');
            
            // 잠시 후 다시 로그인 시도
            setTimeout(async () => {
              const { data: retryData, error: retryError } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password: password,
              });

              if (retryData.user) {
                router.push('/manage');
                router.refresh();
              } else {
                setError('이메일 인증이 필요합니다. Supabase Dashboard에서 이메일 인증을 확인해주세요.');
                setLoading(false);
              }
            }, 1000);
            return;
          }
          
          setError('이메일 또는 비밀번호가 올바르지 않습니다.');
          setLoading(false);
          return;
        }

        if (data.user) {
          // 로그인 성공 시 관리자 페이지로 이동
          router.push('/manage');
          router.refresh();
        }
      }
    } catch (err) {
      setError(isSignUp ? '회원가입 중 오류가 발생했습니다.' : '로그인 중 오류가 발생했습니다.');
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
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '700', 
            color: '#1a1a1a',
            marginBottom: '8px'
          }}>
            {isSignUp ? '관리자 계정 생성' : '관리자 로그인'}
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '14px'
          }}>
            {isSignUp ? '새 관리자 계정을 생성합니다' : '관리자 페이지에 접근하려면 로그인이 필요합니다'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#1a1a1a', 
              marginBottom: '8px'
            }}>
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                outline: 'none',
                transition: 'border-color 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#1a1a1a', 
              marginBottom: '8px'
            }}>
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '15px',
                outline: 'none',
                transition: 'border-color 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          {autoCreateStatus && (
            <div style={{
              padding: '12px',
              background: '#dbeafe',
              border: '1px solid #93c5fd',
              borderRadius: '8px',
              color: '#1e40af',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              {autoCreateStatus}
            </div>
          )}

          {error && (
            <div style={{
              padding: '12px',
              background: '#fee2e2',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              color: '#dc2626',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
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
              boxSizing: 'border-box'
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
            {loading ? (isSignUp ? '계정 생성 중...' : '로그인 중...') : (isSignUp ? '계정 생성' : '로그인')}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#667eea',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isSignUp ? '이미 계정이 있으신가요? 로그인' : '계정이 없으신가요? 회원가입'}
          </button>
          <a 
            href="/" 
            style={{ 
              color: '#667eea', 
              textDecoration: 'none',
              fontSize: '14px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            사이트로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}

