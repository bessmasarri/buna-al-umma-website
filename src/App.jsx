import React from 'react';

// 1. استيراد جميع المكونات (الأقسام)
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectIdea from './components/ProjectIdea';
import Program from './components/Program';
import Specialties from './components/Specialties';
import JoinTeam from './components/JoinTeam';
import Contact from './components/Contact';

function App() {
  return (
    // principal folder
    <div className="App">
      <Navbar />
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