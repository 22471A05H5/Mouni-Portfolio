import React, { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Star, Calendar, Tag, MousePointer2 } from 'lucide-react';
import { useInView } from '../utils/useInView';
import placement from "../assets/placement.png";
import food from "../assets/food.png";
import android from "../assets/android.png";
import sport from "../assets/sport.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeLink: string;
  category: string;
  featured?: boolean;
  year: string;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Placement Beacon',
    description: 'A comprehensive placement management platform with real-time notifications, student tracking, and company management features.',
    image: placement,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    codeLink: 'https://github.com/22471A05H5/react',
    category: 'fullstack',
    featured: true,
    year: '2024',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Food Donation Platform',
    description: 'A social impact web application connecting food donors with NGOs to reduce food waste and help communities.',
    image: food,
    technologies: ['Angular', 'MySQL', 'TypeScript'],
    codeLink: 'https://github.com/22471A05H5/CSP-Project',
    category: 'fullstack',
    featured: true,
    year: '2024',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Android High School App',
    description: 'A modern school management mobile app with task tracking, notifications, and student-teacher communication.',
    image: android,
    technologies: ['Kotlin', 'XML', 'Firebase', 'Material Design'],
    codeLink: 'https://github.com/22471A05H5/AndroidProject-1',
    category: 'mobile',
    year: '2023',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Jubli Sports Site',
    description: 'A responsive sports showcase website with interactive galleries, team profiles, and event management.',
    image: sport,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    codeLink: 'https://github.com/22471A05H5/jubli',
    category: 'frontend',
    year: '2023',
    status: 'Completed'
  }
];


const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fullstack': return <Code className="w-4 h-4" />;
      case 'mobile': return <MousePointer2 className="w-4 h-4" />;
      case 'frontend': return <ExternalLink className="w-4 h-4" />;
      default: return <Tag className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fullstack': return 'from-blue-500 to-cyan-500';
      case 'mobile': return 'from-purple-500 to-pink-500';
      case 'frontend': return 'from-green-500 to-teal-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 bg-black text-blue-300 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Mouse Follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Code className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Code className="w-8 h-8 text-blue-400" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-base text-blue-300/80 leading-relaxed">
            Explore my latest work showcasing full-stack development, mobile applications, and innovative web solutions
          </p>
          
          {/* Project Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">4+</div>
              <div className="text-sm text-blue-300/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">3+</div>
              <div className="text-sm text-blue-300/60">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">2+</div>
              <div className="text-sm text-blue-300/60">Years</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:border-blue-400/40 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-100 mb-2 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-blue-300/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        {project.status}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </div>
                </div>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech} 
                      className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full hover:bg-blue-500/20 transition-colors duration-200"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-blue-500/20">
                  <div className="text-sm text-blue-300/60">
                    Click to explore
                  </div>
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Floating Particles */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                        animationDelay: `${i * 200}ms`,
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3">
            <Github className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300">More projects available on GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
