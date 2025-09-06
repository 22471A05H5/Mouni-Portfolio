import React, { useState, useRef, useEffect } from 'react';
import { Award, X, Star, Calendar, Building, Sparkles, Trophy, Medal, CheckCircle, ZoomIn, Eye } from 'lucide-react';
import { useInView } from '../utils/useInView';

import cert1 from "../assets/Enterprise_Design_Thinking_Practitioner_Badge_page-0001.jpg";
import cert2 from "../assets/Introduction To Internet Of Things_page-0001.jpg";
import cert3 from "../assets/python_basic certificate_page-0001.jpg";
import cert4 from "../assets/Machine Learning Training - Certificate of Completion (1)_page-0001.jpg";
import cert5 from "../assets/sql_basic certificate_page-0001.jpg";
import cert6 from "../assets/javascript_basic certificate_page-0001.jpg";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  pdf?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Enterprise Design Thinking',
    issuer: 'IBM',
    date: 'July 2024',
    description: 'Practitioner-level badge from IBM validating design thinking methodologies.',
    image: cert1
  },
  {
    id: 2,
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    date: 'April 2024',
    description: 'An introductory course to the Internet of Things concepts and applications.',
    image: cert2
  },
  {
    id: 3,
    title: 'Python Basics',
    issuer: 'HackerRank',
    date: 'June 2023',
    description: 'Certificate of completion for basic Python programming concepts.',
    image: cert3
  },
  {
    id: 4,
    title: 'Machine Learning Training',
    issuer: 'SkillUp',
    date: 'Feb 2025',
    description: 'Completed machine learning training including supervised and unsupervised algorithms.',
    image: cert4
  },
  {
    id: 5,
    title: 'SQL Basics',
    issuer: 'HackerRank',
    date: 'August 2024',
    description: 'Demonstrated proficiency in writing basic SQL queries and database management.',
    image: cert5
  },
  {
    id: 6,
    title: 'JavaScript Basics',
    issuer: 'HackerRank',
    date: 'Nov 2023',
    description: 'Completed the basics of JavaScript programming language on HackerRank.',
    image: cert6
  }
];

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
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


  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="min-h-screen py-20 bg-black relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-cyan-500/5 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Interactive mouse follower */}
        <div 
          className="absolute w-40 h-40 bg-gradient-to-r from-yellow-400/8 to-orange-400/8 rounded-full blur-2xl transition-all duration-500 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="text-yellow-400 animate-pulse" size={32} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <Medal className="text-orange-400" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-blue-300 max-w-3xl mx-auto text-base leading-relaxed">
            Professional certifications and achievements that validate my technical skills and commitment to continuous learning.
          </p>
          
          {/* Stats Overview */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{certificates.length}</div>
              <div className="text-blue-400 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">6+</div>
              <div className="text-blue-400 text-sm">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">Verified</div>
              <div className="text-blue-400 text-sm">Skills</div>
            </div>
          </div>
        </div>

        {/* Enhanced Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => {
            const getIssuerColor = (issuer: string) => {
              switch (issuer.toLowerCase()) {
                case 'ibm': return 'from-blue-500 to-blue-600';
                case 'nptel': return 'from-green-500 to-green-600';
                case 'hackerrank': return 'from-emerald-500 to-emerald-600';
                case 'skillup': return 'from-purple-500 to-purple-600';
                default: return 'from-gray-500 to-gray-600';
              }
            };

            const getIssuerIcon = (issuer: string) => {
              switch (issuer.toLowerCase()) {
                case 'ibm': return <Building size={16} />;
                case 'nptel': return <Star size={16} />;
                case 'hackerrank': return <CheckCircle size={16} />;
                case 'skillup': return <Trophy size={16} />;
                default: return <Award size={16} />;
              }
            };

            return (
              <div
                key={certificate.id}
                className={`group relative bg-gray-900/60 backdrop-blur-lg rounded-3xl border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-700 hover:scale-[1.02] cursor-pointer overflow-hidden ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => openModal(certificate)}
                onMouseEnter={() => setHoveredCard(certificate.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getIssuerColor(certificate.issuer)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Verified badge */}
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <CheckCircle size={12} />
                    <span>Verified</span>
                  </div>
                  
                  {/* View details hint */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm flex items-center justify-center gap-2">
                      <Eye size={14} />
                      <span>Click to view full certificate</span>
                    </div>
                  </div>
                </div>
                
                {/* Certificate Content */}
                <div className="p-6 relative z-10">
                  {/* Title with icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${getIssuerColor(certificate.issuer)} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <Award size={20} className="text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors line-clamp-2">
                        {certificate.title}
                      </h3>
                      <p className="text-blue-400 text-sm">{certificate.description}</p>
                    </div>
                  </div>
                  
                  {/* Issuer and Date */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-300">
                      <div className="text-yellow-400">
                        {getIssuerIcon(certificate.issuer)}
                      </div>
                      <span className="font-medium">{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400">
                      <Calendar size={16} className="text-orange-400" />
                      <span className="text-sm">{certificate.date}</span>
                    </div>
                  </div>
                  
                  {/* Hover effect indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getIssuerColor(certificate.issuer)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl`}></div>
                </div>
                
                {/* Floating particles effect */}
                {hoveredCard === certificate.id && (
                  <>
                    <div className="absolute top-8 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse opacity-80"></div>
                    <div className="absolute bottom-16 left-12 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className={`bg-gray-900/95 backdrop-blur-xl rounded-3xl w-full border border-yellow-500/20 shadow-2xl shadow-yellow-500/10 transition-all duration-500 ${
            isImageZoomed ? 'max-w-7xl max-h-[95vh]' : 'max-w-4xl max-h-[90vh]'
          } overflow-auto`}>
            <div className="relative">
              <div className="relative cursor-pointer" onClick={toggleImageZoom}>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className={`w-full rounded-t-3xl transition-all duration-500 ${
                    isImageZoomed ? 'h-auto object-contain max-h-[80vh]' : 'h-80 object-cover'
                  }`}
                />
                {!isImageZoomed && (
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-t-3xl"></div>
                )}
                
                {/* Zoom indicator */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} />
                  <span>{isImageZoomed ? 'Click to zoom out' : 'Click to zoom in'}</span>
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 bg-gray-800/80 backdrop-blur-sm text-white rounded-full p-3 shadow-lg hover:bg-gray-700/80 transition-all duration-300 hover:scale-110 border border-gray-600/50"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              
              {/* Verified badge */}
              <div className="absolute top-6 left-6 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Verified Certificate</span>
              </div>
            </div>
            
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                  <Trophy size={32} className="text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedCertificate.title}</h3>
                  <div className="flex items-center gap-4 text-blue-300">
                    <div className="flex items-center gap-2">
                      <Building size={18} className="text-yellow-400" />
                      <span className="font-medium">{selectedCertificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-orange-400" />
                      <span>{selectedCertificate.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-700/50">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                  <Sparkles size={20} />
                  Certificate Details
                </h4>
                <p className="text-blue-300 leading-relaxed text-lg">{selectedCertificate.description}</p>
              </div>
              
              {/* Action button */}
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="flex items-center gap-2">
                    <Award size={18} />
                    Close
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Call to Action */}
      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 backdrop-blur-sm">
          <Medal className="text-yellow-400" size={20} />
          <span className="text-white font-medium">Committed to continuous learning and professional growth</span>
          <Sparkles className="text-orange-400 animate-pulse" size={16} />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
