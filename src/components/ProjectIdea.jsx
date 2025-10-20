import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const ProjectIdea = () => {
  return (
    <motion.section 
      id="project-idea" 
      className="py-24 md:py-32 px-8 text-center bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto p-10 rounded-lg">
        <h2 className="text-4xl font-bold text-primary mb-8">فكرة المشروع</h2> {/* zaytooni -> primary */}
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          "نهدف إلى تقديم صفحة تعريفية ملهمة وعصرية لمشروع بُناة الأمة، وهي مبادرة تدعو شباب الأمة إلى تحويل علومهم ومعارفهم إلى مشاريع عملية تنهض بالأمة وتخدم قضاياها."
        </p>
        
        <div className="relative max-w-3xl mx-auto bg-neutral p-8 rounded-lg shadow-inner"> {/* beige -> neutral */}
          <FaQuoteRight className="absolute top-4 right-4 text-secondary text-3xl opacity-30" /> {/* dahabi -> secondary */}
          <blockquote className="text-2xl font-amiri italic text-primary"> {/* zaytooni -> primary */}
            «ما مَكَنَ اللهُ أُمّةً في الأرض، ولا رفع لها ذكرًا بين العالمين، إلا حين جمعت بين العلم النافع والعمل الصالح.»
          </blockquote>
        </div>
        
        <div className="flex justify-center gap-4 mt-12 font-bold">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full">#بناة_الأمة</span> {/* zaytooni -> primary */}
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full">#علم_و_عمل</span> {/* zaytooni -> primary */}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectIdea;