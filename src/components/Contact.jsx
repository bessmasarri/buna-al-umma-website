import React from 'react';
import { FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-neutral p-10 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 font-amiri text-secondary">تواصل معنا وانضم للمجموعات</h3>
        
        <div className="flex justify-center flex-wrap gap-8 mb-8">
          <a 
            href="https://t.me/bunnatelummah"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-neutral hover:text-accent2 transition-colors"
          >
            <FaTelegramPlane size={30} />
            <span>القناة العامة</span>
          </a>
          
          <a 
            href="mailto:info@buna-al-umma.com"
            className="flex flex-col items-center gap-2 text-neutral hover:text-accent2 transition-colors"
          >
            <FaEnvelope size={30} />
            <span>البريد الإلكتروني</span>
          </a>
        </div>
        
        <p className="text-sm text-neutral/80">
          © {currentYear} - جميع الحقوق محفوظة لمبادرة بُناة الأمة
        </p>
      </div>
    </footer>
  );
};

export default Contact;
