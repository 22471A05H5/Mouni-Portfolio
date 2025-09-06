import React from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Certificates />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;