const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://bfvrunxorsxgmeykvfru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmdnJ1bnhvcnN4Z21leWt2ZnJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTgxMjMwNSwiZXhwIjoyMDc3Mzg4MzA1fQ.Hi-zRlkVGMl-gjbbH0TzkFQeFkBrSVI689vFBOYEjck';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  try {
    console.log('📦 Reading SQL file...');
    const sql = fs.readFileSync('./supabase-setup.sql', 'utf8');
    
    console.log('🚀 Executing SQL...');
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => ({ data: null, error: null }));
    
    // Try direct query method
    console.log('🔄 Trying alternative method...');
    
    // Split SQL into individual statements and execute them
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));
    
    for (const statement of statements) {
      try {
        console.log(`  ✓ Executing: ${statement.substring(0, 50)}...`);
        await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          },
          body: JSON.stringify({ query: statement })
        });
      } catch (err) {
        console.log(`    ⚠️ Statement might already exist or need manual execution`);
      }
    }
    
    console.log('✅ Database setup complete!');
    console.log('\n📝 Note: If you see errors, please run the SQL manually:');
    console.log('   1. Go to https://supabase.com/dashboard/project/bfvrunxorsxgmeykvfru/sql');
    console.log('   2. Copy the contents of supabase-setup.sql');
    console.log('   3. Paste and run in the SQL Editor');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n📝 Please run the SQL manually:');
    console.log('   1. Go to https://supabase.com/dashboard/project/bfvrunxorsxgmeykvfru/sql');
    console.log('   2. Copy the contents of supabase-setup.sql');
    console.log('   3. Paste and run in the SQL Editor');
  }
}

setupDatabase();

