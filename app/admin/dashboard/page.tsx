export default function DashboardPage() {
  const stats = [
    {
      title: '오늘 상담 신청',
      value: '3',
      change: '+2',
      icon: '💬',
      color: 'bg-blue-500',
    },
    {
      title: '총 고객 수',
      value: '1,234',
      change: '+45',
      icon: '👥',
      color: 'bg-green-500',
    },
    {
      title: '활성 보험 상품',
      value: '24',
      change: '+2',
      icon: '🏥',
      color: 'bg-purple-500',
    },
    {
      title: '이번 달 방문자',
      value: '8,456',
      change: '+12%',
      icon: '📈',
      color: 'bg-orange-500',
    },
  ];

  const recentConsultations = [
    {
      id: 1,
      name: '김민수',
      type: '생명보험',
      date: '2024-10-30',
      status: 'pending',
    },
    {
      id: 2,
      name: '이지은',
      type: '건강보험',
      date: '2024-10-29',
      status: 'in_progress',
    },
    {
      id: 3,
      name: '박준호',
      type: '연금보험',
      date: '2024-10-29',
      status: 'completed',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; color: string }> = {
      pending: { label: '대기중', color: 'bg-yellow-100 text-yellow-800' },
      in_progress: { label: '진행중', color: 'bg-blue-100 text-blue-800' },
      completed: { label: '완료', color: 'bg-green-100 text-green-800' },
    };
    const { label, color } = statusMap[status] || statusMap.pending;
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
        {label}
      </span>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">대시보드</h2>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <span className="text-green-600 text-sm font-semibold">
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* 최근 상담 신청 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">최근 상담 신청</h3>
          <a
            href="/admin/consultations"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            전체 보기 →
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">
                  이름
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">
                  상담 유형
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">
                  날짜
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">
                  상태
                </th>
              </tr>
            </thead>
            <tbody>
              {recentConsultations.map((consultation) => (
                <tr
                  key={consultation.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4 font-medium text-gray-900">
                    {consultation.name}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {consultation.type}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {consultation.date}
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(consultation.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 빠른 작업 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          href="/admin/products"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all transform hover:-translate-y-1"
        >
          <div className="text-4xl mb-4">🏥</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            보험 상품 관리
          </h3>
          <p className="text-gray-600">보험 상품을 추가하거나 수정합니다</p>
        </a>

        <a
          href="/admin/testimonials"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all transform hover:-translate-y-1"
        >
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            고객 후기 관리
          </h3>
          <p className="text-gray-600">고객 후기를 추가하거나 수정합니다</p>
        </a>

        <a
          href="/admin/posts"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all transform hover:-translate-y-1"
        >
          <div className="text-4xl mb-4">✍️</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            블로그 글 작성
          </h3>
          <p className="text-gray-600">새로운 블로그 글을 작성합니다</p>
        </a>
      </div>
    </div>
  );
}

