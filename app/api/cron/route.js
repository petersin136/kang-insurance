import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // SQL로 직접 쿼리 (RPC 사용)
    const { data, error } = await supabase.rpc('exec_sql', {
      query: 'SELECT id FROM app_public.pages LIMIT 1'
    });

    if (error) {
      // RPC 함수가 없으면 auth.users 테이블로 대체
      const { data: authData, error: authError } = await supabase.auth.admin.listUsers({ 
        page: 1, 
        perPage: 1 
      });
      
      if (authError) {
        console.error('Ping error:', authError);
        return NextResponse.json({ 
          ok: false, 
          error: authError.message,
          timestamp: new Date().toISOString() 
        }, { status: 500 });
      }

      console.log('✅ Ping successful - Auth check');
      return NextResponse.json({ 
        ok: true, 
        dbActive: true,
        timestamp: new Date().toISOString(),
        queryResult: 'auth_check'
      });
    }

    console.log('✅ Ping successful - DB active');
    return NextResponse.json({ 
      ok: true, 
      dbActive: true,
      timestamp: new Date().toISOString(),
      queryResult: 'success'
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
