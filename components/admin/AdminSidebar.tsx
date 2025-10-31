'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: '📊',
      label: '대시보드',
      href: '/admin/dashboard',
    },
    {
      icon: '📄',
      label: '페이지 관리',
      href: '/admin/pages',
    },
    {
      icon: '🧩',
      label: '섹션 관리',
      href: '/admin/sections',
    },
    {
      icon: '🖼️',
      label: '미디어 관리',
      href: '/admin/media',
    },
    {
      icon: '🏥',
      label: '보험 상품',
      href: '/admin/products',
    },
    {
      icon: '⭐',
      label: '고객 후기',
      href: '/admin/testimonials',
    },
    {
      icon: '📚',
      label: '성공 사례',
      href: '/admin/cases',
    },
    {
      icon: '✍️',
      label: '블로그 글',
      href: '/admin/posts',
    },
    {
      icon: '💬',
      label: '상담 신청',
      href: '/admin/consultations',
    },
    {
      icon: '⚙️',
      label: '사이트 설정',
      href: '/admin/settings',
    },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <Link href="/admin/dashboard" className="flex items-center space-x-2 mb-8">
          <span className="text-2xl font-bold">관리자</span>
        </Link>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <Link
            href="/"
            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
          >
            <span className="text-xl">🏠</span>
            <span className="font-medium">사이트로 돌아가기</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

