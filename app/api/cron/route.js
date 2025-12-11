import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Supabase 클라이언트 생성 (서비스 롤 사용, app_public 스키마 지정)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      {
        db: { schema: 'app_public' }
      }
    );

    // 실제 DB 쿼리 실행 (페이지 1개만 조회)
    const { data, error } = await supabase
      .from('pages')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Ping DB query error:', error);
      return NextResponse.json({ 
        ok: false, 
        error: error.message,
        timestamp: new Date().toISOString() 
      }, { status: 500 });
    }

    console.log('✅ Ping successful - DB active');
    return NextResponse.json({ 
      ok: true, 
      dbActive: true,
      timestamp: new Date().toISOString(),
      queryResult: data ? 'success' : 'no data'
    });

  } catch (err) {
    console.error('Ping error:', err);
    return NextResponse.json({ 
      ok: false, 
      error: err.message,
      timestamp: new Date().toISOString() 
    }, { status: 500 });
  }
}

