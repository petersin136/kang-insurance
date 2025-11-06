'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function PromiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // 텍스트 상태 관리
  const [content, setContent] = useState({
    text1: '솔직히 말하면 그렇습니다. 우린 매달 피 같은 돈을 냅니다.',
    text2: '그런데 내 보험이 지금 뭘 보장하고, 언제까지 유지되고,',
    text3: '정말 필요한 보장에 잘 들어가 있는지… 정확히 알고 계신가요?',
    text4: '대부분은 그저 서랍 속에 쌓여 있는 보험증권, 핸드폰 어딘가에 저장된 보험 파일, 언제 가입했는지도 가물가물한 계약들.',
    text5: '"아마 잘 되어 있겠지" "괜찮겠지" 하고 지나치기엔 가족의 안심이 달린 일입니다.'
  });

  // Supabase에서 텍스트 가져오기
  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await supabase
        .from('content_edits')
        .select('*')
        .eq('section_name', 'promise');
      
      if (data && data.length > 0) {
        const newContent = { ...content };
        data.forEach((item) => {
          if (item.field_name in newContent) {
            newContent[item.field_name as keyof typeof content] = item.content;
          }
        });
        setContent(newContent);
      }
    };
    
    fetchContent();
  }, []);

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* 모바일 버전 */}
          <div className="md:hidden space-y-6">
            {/* 제목 - 맨 위에 배치 */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[26px] leading-[1.8] font-bold text-[#2b2825] mb-14"
            >
              "아마 잘 되어 있겠지" "괜찮겠지"<br />
              하고 지나치기엔<br />
              <span className="text-[#ef4444]">가족의 안심이 달린 일입니다.</span>
            </motion.h2>

            {/* 본문 내용 */}
            <div className="space-y-8">
              <p className="text-[21px] leading-[2.2] text-[#3a3530] font-semibold mt-4">
                우린 매달 피 같은 돈을 냅니다.
              </p>
              
              <p className="text-[21px] leading-[2.2] text-[#3a3530] font-semibold">
                그런데 내 보험이 지금 뭘 보장하고,<br />
                언제까지 유지되고,<br />
                정말 필요한 보장이 잘 들어가 있는지<br />
                정확히 알고 계신가요?
              </p>
              
              <p className="text-[20px] leading-[2.2] text-[#5a534e] font-medium">
                대부분은 그저 서랍 속에 쌓여 있는 보험증권<br />
                핸드폰 어딘가에 저장된 보험 파일들...<br />
                언제 가입했는지도 가물가물한 계약들....
              </p>
            </div>
          </div>

          {/* 데스크톱 버전 */}
          <div className="hidden md:block space-y-8">
            {/* 제목 - 맨 위에 배치 */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[54px] font-bold text-[#2b2825] leading-[1.6] mb-16"
            >
              "아마 잘 되어 있겠지" "괜찮겠지"<br />
              하고 지나치기엔<br />
              <span className="text-[#ef4444]">가족의 안심이 달린 일입니다.</span>
            </motion.h2>

            {/* 본문 내용 */}
            <div className="space-y-8">
              <p className="text-[28px] leading-[2.0] text-[#3a3530] font-semibold mt-6">
                우린 매달 피 같은 돈을 냅니다.
              </p>
              
              <p className="text-[28px] leading-[2.0] text-[#3a3530] font-semibold">
                그런데 내 보험이 지금 뭘 보장하고, 언제까지 유지되고,<br />
                정말 필요한 보장에 잘 들어가 있는지… 정확히 알고 계신가요?
              </p>
              
              <p className="text-[22px] leading-[2.0] text-[#5a534e] font-medium">
                대부분은 그저 서랍 속에 쌓여 있는 보험증권, 핸드폰 어딘가에 저장된 보험 파일들...<br />
                언제 가입했는지도 가물가물한 계약들....
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
