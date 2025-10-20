import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const JoinTeam = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeXAWgHAIcZ7-rdD2oa7lu0G2uLXLYr9DvtroBS7mElVm1rBA/viewform";

  return (
    <motion.section 
      id="join-team" 
      className="py-20 px-8 text-center bg-neutral text-primary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-secondary mb-6">الانضمام إلى الفريق</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        ندعو كل شاب وشابة يمتلك علماً أو مهارة، ويحمل همّ أمته، للانضمام إلينا. كن جزءاً من البناء وشاركنا فكرتك أو مشروعك.
      </p>
      
      <motion.a 
        href={googleFormLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-neutral px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-secondary transition"
        whileHover={{ scale: 1.05 }}
      >
        املأ استمارة الانضمام
      </motion.a>
      
      <p className="mt-6 text-accent1">
        (الاسم، التخصص، المهارات، الفكرة أو المشروع المقترح)
      </p>
    </motion.section>
  );
};

export default JoinTeam;
