'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { RecommendedProduct } from '@/lib/supabase';
import Link from 'next/link';

export default function ProductsPage() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header - 모바일 최적화 */}
      <header className="bg-gray-900 text-white px-4 py-4 md:px-8 md:py-5 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">📦 추천 보험상품 관리</h1>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href="/manage" className="text-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
              ← 관리자 홈
            </Link>
            <Link href="/" className="text-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
              사이트로 돌아가기
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 md:px-8 md:py-8">
        {/* Add Button - 모바일 최적화 */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="w-full sm:w-auto px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-sm md:text-base transition-colors"
          >
            {showAddForm ? '취소' : '+ 새 상품 추가'}
          </button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            padding: '32px',
            marginBottom: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>새 상품 추가</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>보험 종류</label>
                <select
                  value={formData.insurance_type}
                  onChange={(e) => setFormData({ ...formData, insurance_type: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  {insuranceTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>상품명 *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="예: 삼성생명 프리미엄 종신보험"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>짧은 설명</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  placeholder="상품의 핵심 특징을 간단히 설명해주세요"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>상세 내용</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={6}
                  placeholder="상품에 대한 자세한 설명을 작성해주세요"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>상품 이미지</label>
                
                {/* 이미지 업로드 */}
                <div style={{ 
                  border: '2px dashed #ddd', 
                  borderRadius: '8px', 
                  padding: '24px', 
                  textAlign: 'center',
                  marginBottom: '12px',
                  background: formData.image_url ? '#f8f9fa' : 'white'
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
                        padding: '12px 24px',
                        background: '#1a1a1a',
                        color: 'white',
                        borderRadius: '8px',
                        cursor: uploading ? 'not-allowed' : 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        opacity: uploading ? 0.6 : 1
                      }}>
                        {uploading ? '업로드 중...' : '📷 이미지 선택'}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={uploading}
                          style={{ display: 'none' }}
                        />
                      </label>
                      <p style={{ marginTop: '12px', fontSize: '14px', color: '#666' }}>
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
                  padding: '12px 32px',
                  background: uploading ? '#ccc' : '#1a1a1a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: uploading ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                저장
              </button>
            </form>
          </div>
        )}

        {/* Products List */}
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '32px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>등록된 상품</h2>
          
          {loading ? (
            <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>로딩 중...</p>
          ) : products.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>등록된 상품이 없습니다.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {products.map((product) => (
                <div key={product.id} style={{ 
                  border: '1px solid #ddd', 
                  borderRadius: '12px', 
                  padding: '20px',
                  position: 'relative'
                }}>
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
                  <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666', fontWeight: '600', textTransform: 'uppercase' }}>
                    {insuranceTypes.find(t => t.value === product.insurance_type)?.label}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                    {product.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6' }}>
                    {product.description}
                  </p>
                  <button
                    onClick={() => product.id && handleDelete(product.id)}
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
