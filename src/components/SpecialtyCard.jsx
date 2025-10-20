import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import JoinTeamModal from './JoinTeamModal';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SpecialtyCard = ({ icon, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 hover:shadow-primary/20" // zaytooni -> primary
        variants={cardVariants}
      >
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5"> {/* zaytooni -> primary */}
          <div className="text-primary text-3xl">{icon}</div> {/* zaytooni -> primary */}
        </div>
        
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3> {/* zaytooni -> primary */}
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-lg text-primary font-bold group mt-auto" // zaytooni -> primary
        >
          <span>انضم للفريق</span>
          <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
        </button>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <JoinTeamModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SpecialtyCard;