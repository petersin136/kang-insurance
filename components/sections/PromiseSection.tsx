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
            <p className="text-[17px] leading-[1.8] text-[#5a534e] font-light">
              {content.text1}
            </p>
            
            <p className="text-[17px] leading-[1.8] text-[#5a534e] font-light">
              {content.text2}<br />
              {content.text3}
            </p>
            
            <p className="text-[16px] leading-[1.8] text-[#7a706b] font-light">
              {content.text4}
            </p>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[20px] leading-[1.5] font-bold text-[#2b2825] pt-4"
            >
              {content.text5}
            </motion.p>
          </div>

          {/* 데스크톱 버전 */}
          <div className="hidden md:block">
            <p className="text-3xl leading-loose text-[#5a534e] font-light mb-8">
              {content.text1}<br />
              {content.text2}<br />
              {content.text3}
            </p>
            
            <p className="text-2xl leading-loose text-[#7a706b] font-light mb-10">
              {content.text4}
            </p>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl font-bold text-[#2b2825] leading-tight"
            >
              {content.text5}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
