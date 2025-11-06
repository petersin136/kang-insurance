'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { RecommendedProduct } from '@/lib/supabase';
import Link from 'next/link';
import AuthGuard from '@/components/admin/AuthGuard';

function ProductsPageContent() {
  const [products, setProducts] = useState<RecommendedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    insurance_type: 'life',
    title: '',
    description: '',
    content: '',
    image_url: ''
  });

  const insuranceTypes = [
    { value: 'life', label: '생명보험' },
    { value: 'health', label: '건강보험' },
    { value: 'pension', label: '연금보험' },
    { value: 'savings', label: '저축보험' },
    { value: 'fire', label: '화재보험' },
    { value: 'car', label: '자동차보험' }
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('recommended_products')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) {
        console.error('Error fetching products:', error);
        return;
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 크기 체크 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('파일 크기는 5MB 이하여야 합니다.');
      return;
    }

    // 파일 타입 체크
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    setUploading(true);

    try {
      // 파일명 생성 (중복 방지)
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      // Supabase Storage에 업로드
      const { error: uploadError } = await supabase.storage
        .from('public-media')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        alert('이미지 업로드 중 오류가 발생했습니다.');
        return;
      }

      // Public URL 가져오기
      const { data: { publicUrl } } = supabase.storage
        .from('public-media')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: publicUrl });
      alert('이미지가 업로드되었습니다!');
    } catch (error) {
      console.error('Error:', error);
      alert('이미지 업로드 중 오류가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert('상품명을 입력해주세요.');
      return;
    }

    try {
      const { error } = await supabase
        .from('recommended_products')
        .insert([
          {
            ...formData,
            order_index: products.length
          }
        ]);

      if (error) {
        alert('상품 추가 중 오류가 발생했습니다.');
        console.error(error);
        return;
      }

      alert('상품이 추가되었습니다!');
      setFormData({
        insurance_type: 'life',
        title: '',
        description: '',
        content: '',
        image_url: ''
      });
      setShowAddForm(false);
      fetchProducts();
    } catch (error) {
      console.error('Error:', error);
      alert('상품 추가 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const { error } = await supabase
        .from('recommended_products')
        .delete()
        .eq('id', id);

      if (error) {
        alert('삭제 중 오류가 발생했습니다.');
        console.error(error);
        return;
      }

      alert('삭제되었습니다!');
      fetchProducts();
    } catch (error) {
      console.error('Error:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f3' }}>
      {/* Header */}
      <header style={{ 
        background: '#2b2825', 
        color: '#faf8f3', 
        padding: 'clamp(16px, 3vw, 24px) clamp(20px, 4vw, 32px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '700', marginBottom: 'clamp(12px, 2vw, 16px)', color: '#faf8f3' }}>📦 추천 보험상품 관리</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 1.5vw, 12px)' }}>
            <Link href="/manage" style={{ 
              color: '#2b2825', 
              textDecoration: 'none', 
              padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)', 
              background: '#faf8f3', 
              borderRadius: '8px',
              fontSize: 'clamp(13px, 1.8vw, 15px)',
              fontWeight: '500',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e8e3d9';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#faf8f3';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              ← 관리자 홈
            </Link>
            <Link href="/" style={{ 
              color: '#2b2825', 
              textDecoration: 'none', 
              padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)', 
              background: '#faf8f3', 
              borderRadius: '8px',
              fontSize: 'clamp(13px, 1.8vw, 15px)',
              fontWeight: '500',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e8e3d9';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#faf8f3';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              사이트로 돌아가기
            </Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: 'clamp(32px, 5vw, 60px) clamp(20px, 4vw, 40px)', width: '100%' }}>
        {/* Add Button */}
        <div style={{ marginBottom: 'clamp(24px, 4vw, 32px)' }}>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            style={{
              width: '100%',
              maxWidth: 'clamp(280px, 40vw, 400px)',
              padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)',
              background: '#2b2825',
              color: '#faf8f3',
              border: 'none',
              borderRadius: '12px',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1a1715';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2b2825';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {showAddForm ? '취소' : '+ 새 상품 추가'}
          </button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div style={{ 
            background: '#ffffff', 
            borderRadius: '20px', 
            padding: 'clamp(32px, 5vw, 48px)',
            marginBottom: 'clamp(32px, 5vw, 48px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
          }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', marginBottom: 'clamp(24px, 4vw, 32px)', color: '#2b2825' }}>새 상품 추가</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 'clamp(20px, 3vw, 24px)' }}>
                <label style={{ display: 'block', marginBottom: 'clamp(8px, 1.5vw, 12px)', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(14px, 2vw, 16px)' }}>보험 종류</label>
                <select
                  value={formData.insurance_type}
                  onChange={(e) => setFormData({ ...formData, insurance_type: e.target.value })}
                  style={{
                    width: '100%',
                    padding: 'clamp(12px, 2vw, 16px)',
                    border: '2px solid #e8e3d9',
                    borderRadius: '8px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: '#2b2825',
                    background: '#ffffff'
                  }}
                >
                  {insuranceTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 'clamp(20px, 3vw, 24px)' }}>
                <label style={{ display: 'block', marginBottom: 'clamp(8px, 1.5vw, 12px)', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(14px, 2vw, 16px)' }}>상품명 *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="예: 삼성생명 프리미엄 종신보험"
                  style={{
                    width: '100%',
                    padding: 'clamp(12px, 2vw, 16px)',
                    border: '2px solid #e8e3d9',
                    borderRadius: '8px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: '#2b2825',
                    background: '#ffffff'
                  }}
                />
              </div>

              <div style={{ marginBottom: 'clamp(20px, 3vw, 24px)' }}>
                <label style={{ display: 'block', marginBottom: 'clamp(8px, 1.5vw, 12px)', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(14px, 2vw, 16px)' }}>짧은 설명</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  placeholder="상품의 핵심 특징을 간단히 설명해주세요"
                  style={{
                    width: '100%',
                    padding: 'clamp(12px, 2vw, 16px)',
                    border: '2px solid #e8e3d9',
                    borderRadius: '8px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    resize: 'vertical',
                    color: '#2b2825',
                    background: '#ffffff'
                  }}
                />
              </div>

              <div style={{ marginBottom: 'clamp(20px, 3vw, 24px)' }}>
                <label style={{ display: 'block', marginBottom: 'clamp(8px, 1.5vw, 12px)', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(14px, 2vw, 16px)' }}>상세 내용</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={6}
                  placeholder="상품에 대한 자세한 설명을 작성해주세요"
                  style={{
                    width: '100%',
                    padding: 'clamp(12px, 2vw, 16px)',
                    border: '2px solid #e8e3d9',
                    borderRadius: '8px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    resize: 'vertical',
                    color: '#2b2825',
                    background: '#ffffff'
                  }}
                />
              </div>

              <div style={{ marginBottom: 'clamp(20px, 3vw, 24px)' }}>
                <label style={{ display: 'block', marginBottom: 'clamp(8px, 1.5vw, 12px)', fontWeight: '600', color: '#2b2825', fontSize: 'clamp(14px, 2vw, 16px)' }}>상품 이미지</label>
                
                {/* 이미지 업로드 */}
                <div style={{ 
                  border: '2px dashed #e8e3d9', 
                  borderRadius: '12px', 
                  padding: 'clamp(24px, 4vw, 32px)', 
                  textAlign: 'center',
                  marginBottom: 'clamp(12px, 2vw, 16px)',
                  background: formData.image_url ? '#faf8f3' : '#ffffff'
                }}>
                  {formData.image_url ? (
                    <div>
                      <img 
                        src={formData.image_url} 
                        alt="Preview" 
                        style={{ 
                          maxWidth: '200px', 
                          maxHeight: '200px', 
                          marginBottom: '12px',
                          borderRadius: '8px'
                        }} 
                      />
                      <div>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, image_url: '' })}
                          style={{
                            padding: '8px 16px',
                            background: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          이미지 삭제
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label style={{ 
                        display: 'inline-block',
                        padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)',
                        background: '#2b2825',
                        color: '#faf8f3',
                        borderRadius: '8px',
                        cursor: uploading ? 'not-allowed' : 'pointer',
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        fontWeight: '600',
                        opacity: uploading ? 0.6 : 1,
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        if (!uploading) {
                          e.currentTarget.style.background = '#1a1715';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!uploading) {
                          e.currentTarget.style.background = '#2b2825';
                        }
                      }}
                      >
                        {uploading ? '업로드 중...' : '📷 이미지 선택'}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={uploading}
                          style={{ display: 'none' }}
                        />
                      </label>
                      <p style={{ marginTop: 'clamp(12px, 2vw, 16px)', fontSize: 'clamp(13px, 1.8vw, 15px)', color: '#5a534e' }}>
                        JPG, PNG, GIF 파일 (최대 5MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={uploading}
                style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(32px, 4vw, 40px)',
                  background: uploading ? '#ccc' : '#2b2825',
                  color: '#faf8f3',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: uploading ? 'not-allowed' : 'pointer',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (!uploading) {
                    e.currentTarget.style.background = '#1a1715';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!uploading) {
                    e.currentTarget.style.background = '#2b2825';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                저장
              </button>
            </form>
          </div>
        )}

        {/* Products List */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '20px', 
          padding: 'clamp(32px, 5vw, 48px)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', marginBottom: 'clamp(24px, 4vw, 32px)', color: '#2b2825' }}>등록된 상품</h2>
          
          {loading ? (
            <p style={{ textAlign: 'center', color: '#5a534e', padding: 'clamp(40px, 6vw, 60px)', fontSize: 'clamp(14px, 2vw, 16px)' }}>로딩 중...</p>
          ) : products.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#5a534e', padding: 'clamp(40px, 6vw, 60px)', fontSize: 'clamp(14px, 2vw, 16px)' }}>등록된 상품이 없습니다.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(280px, 35vw, 400px), 1fr))', gap: 'clamp(24px, 4vw, 32px)' }}>
              {products.map((product) => (
                <div key={product.id} style={{ 
                  border: '2px solid #e8e3d9', 
                  borderRadius: '16px', 
                  padding: 'clamp(20px, 3vw, 28px)',
                  position: 'relative',
                  background: '#ffffff',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#a68a64';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e8e3d9';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  {product.image_url && (
                    <img 
                      src={product.image_url} 
                      alt={product.title}
                      style={{ 
                        width: '100%', 
                        height: '200px', 
                        objectFit: 'cover', 
                        borderRadius: '8px',
                        marginBottom: '16px'
                      }}
                    />
                  )}
                  <div style={{ marginBottom: 'clamp(8px, 1.5vw, 12px)', fontSize: 'clamp(11px, 1.5vw, 13px)', color: '#a68a64', fontWeight: '600', textTransform: 'uppercase' }}>
                    {insuranceTypes.find(t => t.value === product.insurance_type)?.label}
                  </div>
                  <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '700', marginBottom: 'clamp(8px, 1.5vw, 12px)', color: '#2b2825' }}>
                    {product.title}
                  </h3>
                  <p style={{ color: '#5a534e', fontSize: 'clamp(13px, 2vw, 15px)', marginBottom: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.7' }}>
                    {product.description}
                  </p>
                  <button
                    onClick={() => product.id && handleDelete(product.id)}
                    style={{
                      padding: 'clamp(8px, 1.5vw, 12px) clamp(16px, 2.5vw, 20px)',
                      background: '#dc2626',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: 'clamp(13px, 1.8vw, 15px)',
                      fontWeight: '500',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#b91c1c';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#dc2626';
                    }}
                  >
                    삭제
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return <AuthGuard><ProductsPageContent /></AuthGuard>;
}
