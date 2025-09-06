import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2 } from 'lucide-react';
import '../sections/navbar.css';

const navLinks = [
  { id: 'about', name: 'About Me' },
  { id: 'skills', name: 'Skills' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'certificates', name: 'Certificates' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10 py-3' 
        : 'bg-black/70 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-cyan-200 hover:to-blue-400 transition-all duration-300 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Code2 size={24} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
          <span>Mounica</span>
          <Sparkles size={16} className="text-cyan-400 animate-pulse" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavLinkClick(link.id)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === link.id 
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-400/30 shadow-lg shadow-blue-500/20' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-blue-400/20 border border-transparent'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {activeSection === link.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl blur-sm"></div>
                  )}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/5 group-hover:to-cyan-400/5 transition-all duration-300"></div>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-400/50 text-blue-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full left-0 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 bg-black/95 backdrop-blur-xl border-b border-blue-500/20 shadow-xl shadow-blue-500/10' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ animationDelay: `${index * 0.1}s` }} className={`${isMenuOpen ? 'animate-slideUp' : ''}`}>
                <button
                  onClick={() => handleNavLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === link.id 
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-400/30 shadow-lg shadow-blue-500/20' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-blue-400/20 border border-transparent hover:translate-x-2'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {activeSection === link.id && <Sparkles size={14} className="text-blue-400 animate-pulse" />}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;