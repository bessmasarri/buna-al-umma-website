import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane } from 'react-icons/fa';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const sessions = [
    { date: "الجمعة 10 أكتوبر 2025", topic: "الجلسة الافتتاحية: معارفنا عدة التمكين" },
  { date: "السبت 11 أكتوبر 2025", topic: "اللغات / الحقوق في خدمة الأمة" },
  { date: "الأحد 12 أكتوبر 2025", topic: "التصميم / التجارة الإلكترونية في خدمة الأمة" },
  { date: "الإثنين 13 أكتوبر 2025", topic: "الإعلام الآلي في خدمة الأمة" },
  { date: "الثلاثاء 14 أكتوبر 2025", topic: "الفيزياء والفلك في خدمة الأمة" },
  { date: "الأربعاء 15 أكتوبر 2025", topic: "دور التاريخ والهندسة المعمارية في ترسيخ الهوية" },
  { date: "الخميس 16 أكتوبر 2025", topic: "العلوم الاجتماعية والنفسية في خدمة الأمة" },
  { date: "الجمعة 17 أكتوبر 2025", topic: "الجلسة الختامية" },
];

const Program = () => {
  return (
    <motion.section 
      id="program" 
      className="py-24 md:py-32 px-8 bg-neutral" // beige -> neutral
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">جد ثغرك</h2> {/* zaytooni -> primary */}
        <p className="text-2xl text-center text-gray-600 mb-12">البرنامج الأول لمبادرة بناة الأمة</p>
        
        <div className="shadow-xl rounded-lg overflow-hidden bg-white">
          <table className="w-full text-right">
            <thead className="bg-primary/10 border-b-2 border-primary/20"> {/* zaytooni -> primary */}
              <tr>
                <th className="p-5 font-amiri text-xl text-primary">التاريخ</th> {/* zaytooni -> primary */}
                <th className="p-5 font-amiri text-xl text-primary">الموضوع</th> {/* zaytooni -> primary */}
              </tr>
            </thead>
            <tbody>
            
            {sessions.map((session, index) => (
                <tr
                  key={index}
                  className="border-b border-[#c79a56]/30 hover:bg-[#fdf5e8] transition"
                >
                  <td className="p-4 font-bold text-[#6e1313]">{session.date}</td>
                  <td className="p-4 text-[#6e1313]">{session.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="https://t.me/bunnatelummah"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105" // blue-500 -> accent1
            whileHover={{ scale: 1.05 }}
          >
            <FaTelegramPlane size={24} />
            انضم لقناة التلغرام الرئيسية
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Program;