import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">관리자 페이지</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">관리자님, 환영합니다</span>
            </div>
          </div>
        </header>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

