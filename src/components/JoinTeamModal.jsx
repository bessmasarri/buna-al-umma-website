// src/components/JoinTeamModal.jsx

import React from 'react';
import { motion } from 'framer-motion';

const JoinTeamModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-neutral rounded-xl shadow-2xl max-w-md w-full p-8 text-center relative border-t-4 border-secondary"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* --- هذا هو الكود المفقود --- */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-800 transition-colors p-1" // استخدمت 'left-4' ليناسب التصميم العربي
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* --- نهاية الكود المفقود --- */}

        <h2 className="text-3xl font-amiri font-bold mb-6 text-primary">
          اختر نوع الانضمام
        </h2>
        <div className="flex flex-col gap-4">
          
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeXAWgHAIcZ7-rdD2oa7lu0G2uLXLYr9DvtroBS7mElVm1rBA/viewform" // !! استبدل بالرابط الصحيح
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-glow-primary"
            whileHover={{ scale: 1.03 }}
          >
            الانضمام للمجموعة العامة
          </motion.a>
          
          <motion.a
            href="https://forms.gle/specialized_team_form" // !! استبدل بالرابط الصحيح
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-glow-secondary"
            whileHover={{ scale: 1.03 }}
          >
            الانضمام لفريق التخصص
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JoinTeamModal;