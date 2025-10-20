import React from 'react';

// 1. استيراد جميع المكونات (الأقسام)
import Home from './components/Home';
import ProjectIdea from './components/ProjectIdea';
import Program from './components/Program';
import Specialties from './components/Specialties';
import JoinTeam from './components/JoinTeam';
import Contact from './components/Contact';

function App() {
  return (
    // هذا هو الملف الرئيسي الذي يجمع كل شيء
    <div className="App">
      <Home />
      <ProjectIdea />
      <Program />
      <Specialties />
      <JoinTeam />
      <Contact />
    </div>
  );
}

export default App;