'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('rkdtjdgus');
  const [confirmPassword, setConfirmPassword] = useState('rkdtjdgus');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // URL에서 토큰 확인
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const type = hashParams.get('type');

    if (type === 'recovery' && accessToken) {
      // 세션 설정
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: hashParams.get('refresh_token') || '',
      }).then(() => {
        // 자동으로 비밀번호 업데이트
        handlePasswordUpdate();
      });
    }
  }, []);

  const handlePasswordUpdate = async () => {
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (password.length < 6) {
      setError('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password: password
      });

      if (updateError) {
        setError(`비밀번호 업데이트 실패: ${updateError.message}`);
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/manage');
      }, 2000);
    } catch (err: any) {
      setError(`오류 발생: ${err.message}`);
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
            비밀번호 재설정
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '14px'
          }}>
            새 비밀번호를 입력하세요
          </p>
        </div>

        {success ? (
          <div style={{
            padding: '20px',
            background: '#d1fae5',
            border: '1px solid #10b981',
            borderRadius: '8px',
            color: '#065f46',
            textAlign: 'center'
          }}>
            ✅ 비밀번호가 성공적으로 변경되었습니다! 관리자 페이지로 이동합니다...
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handlePasswordUpdate(); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '14px', 
                fontWeight: '600', 
                color: '#1a1a1a', 
                marginBottom: '8px'
              }}>
                새 비밀번호
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
                placeholder="새 비밀번호 입력"
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
                비밀번호 확인
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                placeholder="비밀번호 확인"
              />
            </div>

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
            >
              {loading ? '처리 중...' : '비밀번호 변경'}
            </button>
          </form>
        )}

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <a 
            href="/manage/login" 
            style={{ 
              color: '#667eea', 
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            로그인 페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}

