import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Zap, Download, Mail, User, Award, Target } from 'lucide-react';
import { useInView } from '../utils/useInView';
import resumePDF from '../assets/Mounica_Pulagorla_9347813886.pdf';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isInView && contentRef.current) {
      contentRef.current.style.opacity = '1';
      contentRef.current.style.transform = 'translateY(0)';
    }
  }, [isInView]);

  const personalInfo = [
    { icon: Calendar, label: 'Born', value: 'June 24, 2004', color: 'text-pink-400' },
    { icon: MapPin, label: 'Location', value: 'Narasaraopet', color: 'text-green-400' },
    { icon: Briefcase, label: 'Focus', value: 'Java Full Stack Development', color: 'text-purple-400' },
    { icon: GraduationCap, label: 'Degree', value: 'B.Tech. in Computer Science', color: 'text-yellow-400' }
  ];


  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Pulagorla_Mounica_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen py-20 bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-cyan-400/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-full blur-2xl animate-spin-slow -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Interactive mouse follower */}
        <div 
          className="absolute w-40 h-40 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-2xl transition-all duration-500 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <User className="text-blue-400" size={32} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Award className="text-purple-400 animate-pulse" size={28} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-base leading-relaxed">
            Discover my learning journey in Java Full Stack Development and the passion that drives me to master enterprise-level web applications.
          </p>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={contentRef}
            className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out space-y-6"
          >
            {/* Profile Card */}
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-6 rounded-3xl border border-blue-500/20 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                    <User className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Pulagorla Mounica</h3>
                    <p className="text-blue-400 font-medium text-sm">Aspiring Java Full Stack Developer</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4 text-base">
                  I'm a passionate Computer Science student currently learning <span className="text-green-400 font-semibold">Java Full Stack Development</span>. 
                  My journey focuses on mastering <span className="text-blue-400 font-semibold">Spring Boot</span> for backend development and 
                  <span className="text-cyan-400 font-semibold">React</span> for creating dynamic user interfaces. 
                  I'm dedicated to building scalable enterprise applications and continuously expanding my expertise in modern full-stack technologies.
                </p>
                
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Target size={14} className="text-green-400" />
                    <span>Always Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-yellow-400" />
                    <span>Problem Solver</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {personalInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gray-900/60 backdrop-blur-lg p-4 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${info.color.includes('pink') ? 'from-pink-500/20 to-rose-500/20' : info.color.includes('green') ? 'from-green-500/20 to-emerald-500/20' : info.color.includes('purple') ? 'from-purple-500/20 to-violet-500/20' : 'from-yellow-500/20 to-amber-500/20'} transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent size={16} className={info.color} />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-xs font-medium mb-1">{info.label}</p>
                        <p className="text-white font-semibold text-xs leading-tight">{info.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-xl p-6 rounded-3xl border border-blue-500/20">
              <h4 className="text-lg font-bold text-white mb-4 text-center">Let's Connect</h4>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <a 
                  href="#contact" 
                  className="group flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-4 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black text-center text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Mail size={16} className="group-hover:animate-bounce" />
                    Contact Me
                  </span>
                </a>
                <button
                  onClick={downloadResume}
                  className="group flex-1 bg-gray-800/50 hover:bg-gray-700/50 border-2 border-gray-600 hover:border-blue-400/50 text-gray-300 hover:text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download size={16} className="group-hover:animate-bounce" />
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
