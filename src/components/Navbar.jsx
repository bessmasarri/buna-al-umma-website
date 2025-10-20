import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral/90 shadow-md backdrop-blur-sm' : 'bg-transparent' // beige -> neutral
      } border-b border-transparent`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-amiri text-primary"> {/* zaytooni -> primary */}
          بُناة الأمة
        </a>
        
        <div className="hidden md:flex items-center gap-6 text-lg">
          <a href="#project-idea" className="text-gray-700 hover:text-primary transition-colors">الفكرة</a> {/* zaytooni -> primary */}
          <a href="#program" className="text-gray-700 hover:text-primary transition-colors">البرنامج</a> {/* zaytooni -> primary */}
          <a href="#specialties" className="text-gray-700 hover:text-primary transition-colors">المجالات</a> {/* zaytooni -> primary */}
        </div>
        
        <a 
          href="#join-team" 
          className="bg-primary text-white px-5 py-2 rounded-full font-bold hover:shadow-glow-primary transition-all duration-300" // zaytooni -> primary
        >
          انضم الآن
        </a>
      </div>
    </nav>
  );
};

export default Navbar;