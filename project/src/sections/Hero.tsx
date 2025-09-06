import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Download, Mail, MapPin, Code2, Sparkles } from 'lucide-react';
import heroImage from '../assets/mouni.jpg';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.opacity = '1';
      headingRef.current.style.transform = 'translateY(0)';
    }

    setTimeout(() => {
      if (subheadingRef.current) {
        subheadingRef.current.style.opacity = '1';
        subheadingRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.opacity = '1';
        buttonRef.current.style.transform = 'translateY(0)';
      }
    }, 600);
  }, []);


  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-blue-600/30 rounded-full blur-3xl animate-float translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/15 rounded-full blur-2xl animate-spin-slow -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Interactive mouse follower */}
        <div 
          className="absolute w-32 h-32 bg-blue-400/5 rounded-full blur-xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          {/* Status Badge */}
          <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs sm:text-sm font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="hidden xs:inline">Available for opportunities</span>
            <span className="xs:hidden">Available</span>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <h1
              ref={headingRef}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold opacity-0 transform translate-y-8 transition-all duration-700 ease-out leading-tight"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
                Mounica
              </span>
              <br className="hidden sm:block" />
              <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-300 font-normal block mt-1 sm:mt-2">
                Aspiring Java Full Stack Developer
              </span>
            </h1>
            
            <p
              ref={subheadingRef}
              className="text-sm sm:text-base lg:text-base text-gray-300 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              <span className="hidden sm:inline">Currently learning and building expertise in </span>
              <span className="sm:hidden">Learning </span>
              <span className="text-blue-400 font-semibold">Java Full Stack Development</span> with <span className="text-green-400 font-semibold">Spring Boot</span> and <span className="text-blue-400 font-semibold">React</span>.
              <span className="hidden sm:inline"> Passionate about creating scalable enterprise applications and modern web solutions.</span>
            </p>
            
            {/* Quick Stats */}
            <div className={`flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                <Code2 size={16} className="text-blue-400 sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm">5+ Projects</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                <Sparkles size={16} className="text-blue-400 sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm hidden xs:inline">Multiple Certifications</span>
                <span className="text-xs sm:text-sm xs:hidden">Certified</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                <MapPin size={16} className="text-blue-400 sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm">India</span>
              </div>
            </div>
          </div>
          {/* Social Links */}
          <div className={`flex justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="https://github.com/22471A05H5"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 sm:p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-400/50 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              <Github size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mounica-pulagorla-3a8272276/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 sm:p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-400/50 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              <Linkedin size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:pulagorlamounica@gmail.com"
              className="group p-2.5 sm:p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-400/50 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              <Mail size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              ref={buttonRef}
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles size={16} className="group-hover:animate-spin sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xs:inline">Explore My Work</span>
                <span className="xs:hidden">My Work</span>
                <ArrowDown size={16} className="group-hover:animate-bounce sm:w-[18px] sm:h-[18px]" />
              </span>
            </button>
            
            <a
              href="/src/assets/Pulagorla_Mounica_Resume.pdf"
              download
              className="group bg-gray-800/50 hover:bg-gray-700/50 border-2 border-gray-700 hover:border-blue-400/50 text-gray-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                <Download size={16} className="group-hover:animate-bounce sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xs:inline">Download CV</span>
                <span className="xs:hidden">Resume</span>
              </span>
            </a>
          </div>
        </div>

        {/* Enhanced Profile Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative mb-8 sm:mb-12 lg:mb-0">
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 -m-4 sm:-m-6 lg:-m-8">
              {/* Rotating ring */}
              <div className="absolute inset-0 border border-blue-400/20 sm:border-2 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 sm:inset-4 border border-cyan-400/30 rounded-full animate-pulse"></div>
              
              {/* Floating particles - hide on very small screens */}
              <div className="hidden xs:block absolute top-4 sm:top-8 left-4 sm:left-8 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
              <div className="hidden xs:block absolute top-8 sm:top-16 right-6 sm:right-12 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-300 rounded-full animate-pulse opacity-80"></div>
              <div className="hidden xs:block absolute bottom-6 sm:bottom-12 left-8 sm:left-16 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
              <div className="hidden xs:block absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-2 sm:w-3 h-2 sm:h-3 bg-cyan-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Main image container */}
            <div className="group relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-full p-0.5 sm:p-1 animate-pulse">
                <div className="w-full h-full bg-black rounded-full"></div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-600/20 rounded-full blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
              
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 p-0.5 sm:p-1">
                <img
                  src={heroImage}
                  alt="Mounica Pulagorla - Aspiring Java Full Stack Developer"
                  className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            
            {/* Tech stack indicators - Mobile optimized */}
            <div className={`absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Mobile: Stack vertically on very small screens, horizontal on larger */}
              <div className="flex flex-wrap justify-center gap-1.5 xs:gap-2 sm:gap-3 max-w-[280px] xs:max-w-none">
                <div className="px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-[10px] xs:text-xs font-medium whitespace-nowrap">Java</div>
                <div className="px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-[10px] xs:text-xs font-medium whitespace-nowrap">Spring Boot</div>
                <div className="px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-[10px] xs:text-xs font-medium whitespace-nowrap">React</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
