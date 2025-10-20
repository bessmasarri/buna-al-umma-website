// src/components/Specialties.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SpecialtyCard from './SpecialtyCard'; // سيعرض البطاقة الجديدة
// استيراد الأيقونات
import { FaCode, FaGavel, FaLanguage, FaAtom, FaStore, FaLandmark, FaUsers } from 'react-icons/fa';
import { MdOutlineMore } from 'react-icons/md';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } } 
};

// البيانات مع الأيقونات والوصف
const specialties = [
  { icon: <FaCode />, title: 'الإعلام الآلي', description: 'برمجة، شبكات، أمن سيبراني، ذكاء اصطناعي.' },
  { icon: <FaGavel />, title: 'الحقوق', description: 'قوانين، استشارات، ملكية فكرية، صياغة عقود.' },
  { icon: <FaLanguage />, title: 'اللغات', description: 'ترجمة، تدقيق، صناعة محتوى، تعليم لغات.' },
  { icon: <FaAtom />, title: 'الفيزياء والفلك', description: 'أبحاث، تبسيط علوم، رصد فلكي.' },
  { icon: <FaStore />, title: 'التصميم والتجارة', description: 'تصميم واجهات، تسويق رقمي، إدارة متاجر.' },
  { icon: <FaLandmark />, title: 'التاريخ والهندسة', description: 'توثيق، عمارة إسلامية، ترميم آثار.' },
  { icon: <FaUsers />, title: 'العلوم الاجتماعية', description: 'دراسات، استشارات نفسية، تنمية مجتمعية.' },
  { icon: <MdOutlineMore />, title: 'مجالات أخرى', description: 'طب، صيدلة، زراعة، وكل علم نافع.' },
];

const Specialties = () => {
  return (
    <motion.section 
      id="specialties" 
      className="py-24 md:py-32 px-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl  text-primary font-bold text-center text-zaytooni mb-16">المجالات التخصصية</h2>
      
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={sectionVariants}
      >
        {/* سيتم عرض البطاقات الجديدة هنا */}
        {specialties.map((spec, index) => (
          <SpecialtyCard 
            key={index} 
            icon={spec.icon}
            title={spec.title} 
            description={spec.description} 
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Specialties;