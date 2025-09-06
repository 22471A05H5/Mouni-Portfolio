import React, { useState, useRef, useEffect } from 'react';
import { Trophy, Award, Star, Target, Zap, Crown, Medal, Sparkles, TrendingUp, Calendar, ChevronRight, X, ZoomIn, Eye } from 'lucide-react';
import { useInView } from '../utils/useInView';

import codingContest from '../assets/codingcontest.jpeg';
import hitechChase from '../assets/Hitechchasecertificate.jpeg';
import ideaPitching from '../assets/ideapitching.jpeg';
import hackathonCert from '../assets/Hackathoncertificate.jpeg';
import androidKotlin from '../assets/Androidusingkotlincertificate.jpeg';

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  icon: any;
  color: string;
  bgGradient: string;
  achievement_type: 'academic' | 'project' | 'certification' | 'competition' | 'recognition';
  highlight?: boolean;
  image: string;
}

const Achievements: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCertificate, setSelectedCertificate] = useState<Achievement | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Certificate of Excellence - Coding Contest",
      description: "Awarded Certificate of Excellence in Coding Contest by NEC Engineering College for outstanding performance in collaborative programming and computer science fundamentals.",
      category: "Programming Competition",
      date: "2024",
      icon: Trophy,
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      achievement_type: "competition",
      highlight: true,
      image: codingContest
    },
    {
      id: 2,
      title: "Hi-Tech Chase Certificate - NEC Fest",
      description: "Certificate of participation in Hi-Tech Chase technical event during NEC Fest 2025, showcasing skills in technology management and cultural sports activities.",
      category: "Technical Event",
      date: "2025",
      icon: Zap,
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-orange-500/20",
      achievement_type: "competition",
      image: hitechChase
    },
    {
      id: 3,
      title: "Idea Pitching Competition Certificate",
      description: "Participated in Idea Pitching competition organized by NEC Engineering College, demonstrating innovation and entrepreneurial thinking in technology solutions.",
      category: "Innovation Challenge",
      date: "2024",
      icon: Star,
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      achievement_type: "competition",
      image: ideaPitching
    },
    {
      id: 4,
      title: "Hack-A-Thon Participation Certificate",
      description: "Certificate of participation in Hack-A-Thon event, demonstrating skills in rapid prototyping, collaborative development, and innovative problem-solving.",
      category: "Hackathon",
      date: "2024",
      icon: Crown,
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      achievement_type: "competition",
      highlight: true,
      image: hackathonCert
    },
    {
      id: 5,
      title: "Android App Development using Kotlin",
      description: "Successfully completed Android App Development workshop using Kotlin, gaining hands-on experience in mobile application development and modern Android frameworks.",
      category: "Technical Workshop",
      date: "2024",
      icon: Medal,
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-teal-500/20",
      achievement_type: "certification",
      image: androidKotlin
    }
  ];

  const achievementStats = [
    { label: "Competition Certificates", value: "5+", icon: Trophy },
    { label: "Technical Events", value: "4+", icon: Zap },
    { label: "Hackathons Participated", value: "2+", icon: Crown },
    { label: "Workshops Completed", value: "3+", icon: Target }
  ] as const;

  const openModal = (achievement: Achievement) => {
    setSelectedCertificate(achievement);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setIsImageZoomed(false);
    document.body.style.overflow = 'auto';
  };

  const toggleImageZoom = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const getAchievementTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'project': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'certification': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'competition': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'recognition': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="min-h-screen py-20 bg-black relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Mouse follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-500/20 mb-8">
            <Trophy className="text-yellow-400" size={24} />
            <span className="text-yellow-400 font-semibold">Competition Achievements</span>
            <Sparkles className="text-orange-400" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Competition
            </span>
            <br />
            <span className="text-blue-100">Certificates & Awards</span>
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Showcasing certificates and awards earned through various programming competitions, 
            hackathons, and technical challenges that demonstrate my problem-solving abilities.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievementStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 text-center hover:border-yellow-500/30 transition-all duration-300 hover:scale-105 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="text-yellow-400 mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer ${
                achievement.highlight ? 'ring-2 ring-yellow-500/20' : ''
              } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(achievement.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openModal(achievement)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Highlight indicator */}
              {achievement.highlight && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} />
                  Featured
                </div>
              )}
              
              <div className="relative z-10">
                {/* Certificate Image Preview */}
                <div className="mb-6">
                  <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    <div className={`absolute top-3 right-3 p-2 rounded-xl bg-gradient-to-br ${achievement.bgGradient} border border-gray-700/50`}>
                      <achievement.icon className={achievement.color} size={20} />
                    </div>
                    <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium border ${getAchievementTypeColor(achievement.achievement_type)} backdrop-blur-sm`}>
                      {achievement.achievement_type.charAt(0).toUpperCase() + achievement.achievement_type.slice(1)}
                    </div>
                    
                    {/* View Certificate Overlay */}
                    <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <div className="text-white text-center">
                        <Eye className="mx-auto mb-2" size={24} />
                        <span className="text-sm font-medium">Click to view full certificate</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-100 group-hover:text-blue-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-blue-200 leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-2 text-blue-300 text-sm">
                      <Calendar size={16} />
                      <span>{achievement.date}</span>
                    </div>
                    <div className="text-blue-400 text-sm font-medium">
                      {achievement.category}
                    </div>
                  </div>
                </div>

                {/* Hover effect arrow */}
                <div className={`absolute bottom-6 right-6 text-blue-400 transform transition-all duration-300 ${
                  hoveredCard === achievement.id ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                }`}>
                  <ChevronRight size={20} />
                </div>
              </div>

                {/* Floating particles effect */}
              {hoveredCard === achievement.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-full px-8 py-4 border border-yellow-500/20">
            <Trophy className="text-yellow-400" size={24} />
            <span className="text-white font-semibold text-lg">Competing, Winning, Excelling</span>
            <Sparkles className="text-orange-400" size={20} />
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2">
            <div className={`bg-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl transition-all duration-300 ${
              isImageZoomed ? 'w-[95vw] h-[95vh]' : 'w-[90vw] h-[90vh]'
            } flex flex-col`}>
              
              {/* Modal Header with Close Button */}
              <div className="relative flex-shrink-0 p-4 border-b border-gray-700/50">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-gray-800/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg hover:bg-gray-700/80 transition-all duration-300 hover:scale-110 border border-gray-600/50 z-10"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
                
                <div className="bg-yellow-500/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                  <Trophy size={16} />
                  <span>Achievement Certificate</span>
                </div>
              </div>
              
              {/* Certificate Image Container */}
              <div className="flex-1 overflow-auto p-4">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="max-w-full max-h-full object-contain cursor-pointer transition-all duration-300"
                    onClick={toggleImageZoom}
                  />
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="flex-shrink-0 p-6 border-t border-gray-700/50 bg-gray-800/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${selectedCertificate.bgGradient} border border-gray-700/50`}>
                      <selectedCertificate.icon className={selectedCertificate.color} size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-100">{selectedCertificate.title}</h3>
                      <p className="text-blue-300 text-sm flex items-center gap-2">
                        <Calendar size={14} />
                        {selectedCertificate.category} • {selectedCertificate.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm flex items-center gap-2">
                    <ZoomIn size={14} />
                    <span>Click image to zoom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
