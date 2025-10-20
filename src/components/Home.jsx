import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 }
  })
};

const Home = () => {
  return (
    <motion.section 
      id="home"
      className="h-screen min-h-[700px] flex flex-col justify-center items-center text-center p-8 bg-neutral" // beige -> neutral
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold font-amiri text-primary mb-6" // zaytooni -> primary
        custom={0}
        variants={textVariants}
      >
        بُناة الأمة: العِلم والعمل عُدّة التمكين
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-2xl max-w-3xl mb-10 text-gray-700"
        custom={1}
        variants={textVariants}
      >
        مبادرة تدعو شباب الأمة إلى تحويل علومهم ومعارفهم إلى مشاريع عملية تنهض بالأمة وتخدم قضاياها.
      </motion.p>
      
      <motion.a 
        href="#project-idea"
        className="bg-primary text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-300 hover:shadow-glow-primary hover:scale-105" // zaytooni -> primary
        custom={2}
        variants={textVariants}
      >
        اكتشف المشروع
      </motion.a>
    </motion.section>
  );
};

export default Home;