import React, { useRef, useState, useEffect } from "react";
import { useInView } from "../utils/useInView";
import { Code2, Zap, Database, Globe, Star, TrendingUp, Award, Sparkles } from "lucide-react";

// Icon imports
import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiCss3,
  SiSpring,
  SiPostman,
  SiGit,
  SiApache,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

// Skill interface
interface Skill {
  name: string;
  displayName: string;
  percentage: number;
  level: string;
  Icon: React.ComponentType<any>;
  color: string;
  experience: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  gradient: string;
  skills: Skill[];
  description: string;
}

// Skills data organized by categories
const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    description: "Core programming languages I work with",
    skills: [
      { name: "java", displayName: "Java", percentage: 85, level: "Advanced", Icon: FaJava, color: "#f89820", experience: "Academic" },
      { name: "python", displayName: "Python", percentage: 90, level: "Advanced", Icon: SiPython, color: "#3776ab", experience: "Academic" },
      { name: "javascript", displayName: "JavaScript", percentage: 90, level: "Advanced", Icon: SiJavascript, color: "#f7df1e", experience: "Projects" },
      
    ]
  },
  {
    title: "Frontend Development",
    icon: Globe,
    gradient: "from-pink-500 to-rose-400",
    description: "Modern frontend technologies and frameworks",
    skills: [
      { name: "react", displayName: "React", percentage: 88, level: "Advanced", Icon: SiReact, color: "#61dafb", experience: "Projects" },
      { name: "html", displayName: "HTML5", percentage: 95, level: "Advanced", Icon: SiHtml5, color: "#e34f26", experience: "Academic" },
      { name: "css", displayName: "CSS3", percentage: 95, level: "Advanced", Icon: SiCss3, color: "#1572b6", experience: "Academic" },
      
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    gradient: "from-green-500 to-emerald-400",
    description: "Server-side technologies and database management",
    skills: [
      { name: "nodejs", displayName: "Node.js", percentage: 82, level: "Intermediate", Icon: SiNodedotjs, color: "#339933", experience: "Projects" },
      { name: "springboot", displayName: "Spring Boot", percentage: 40, level: "Beginner", Icon: SiSpring, color: "#6db33f", experience: "Learning" },
      { name: "mongodb", displayName: "MongoDB", percentage: 75, level: "Intermediate", Icon: SiMongodb, color: "#47a248", experience: "Projects" },
      { name: "mysql", displayName: "MySQL", percentage: 82, level: "Intermediate", Icon: SiMysql, color: "#4479a1", experience: "Academic" },
    ]
  },
  {
    title: "Development Tools",
    icon: Zap,
    gradient: "from-purple-500 to-violet-400",
    description: "Development tools, IDEs, and productivity software",
    skills: [
      { name: "vscode", displayName: "VS Code", percentage: 90, level: "Advanced", Icon: Code2, color: "#007acc", experience: "Daily Use" },
      { name: "git", displayName: "Git", percentage: 85, level: "Intermediate", Icon: SiGit, color: "#f05032", experience: "Projects" },
      { name: "github", displayName: "GitHub", percentage: 88, level: "Intermediate", Icon: SiGithub, color: "#181717", experience: "Projects" },
      { name: "maven", displayName: "Maven", percentage: 60, level: "Beginner", Icon: SiApache, color: "#c71a36", experience: "Learning" },
    ]
  },
  {
    title: "Frontend Frameworks",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-400",
    description: "CSS frameworks and UI libraries",
    skills: [
      { name: "tailwind", displayName: "Tailwind CSS", percentage: 85, level: "Intermediate", Icon: SiTailwindcss, color: "#06b6d4", experience: "Projects" },
      { name: "bootstrap", displayName: "Bootstrap", percentage: 80, level: "Intermediate", Icon: SiBootstrap, color: "#7952b3", experience: "Academic" },
    ]
  }
];

// Enhanced SkillCard component
const SkillCard: React.FC<{ skill: Skill; index: number; isInView: boolean }> = ({ skill, index, isInView }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(skill.percentage);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.percentage, index]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-green-400';
      case 'Advanced': return 'text-blue-400';
      case 'Intermediate': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500/20 border-green-500/30';
      case 'Advanced': return 'bg-blue-500/20 border-blue-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 border-yellow-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="group bg-gray-900/60 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gray-800/50 group-hover:scale-110 transition-transform duration-300">
            <skill.Icon size={24} color={skill.color} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">{skill.displayName}</h4>
            <p className="text-gray-400 text-sm">{skill.experience}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelBg(skill.level)}`}>
          <span className={getLevelColor(skill.level)}>{skill.level}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-sm font-medium">Proficiency</span>
          <span className="text-blue-400 font-bold">{animatedPercentage}%</span>
        </div>
        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${animatedPercentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Category Card component
const CategoryCard: React.FC<{ category: SkillCategory; isInView: boolean }> = ({ category, isInView }) => {
  const IconComponent = category.icon;
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r ${category.gradient} bg-opacity-20 border border-white/10 backdrop-blur-sm`}>
          <IconComponent size={24} className="text-white" />
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
        </div>
        <p className="text-gray-400 mt-3 text-sm">{category.description}</p>
      </div>
      
      <div className="grid gap-4">
        {category.skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-l from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-green-400/5 to-emerald-500/5 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Interactive mouse follower */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Star className="text-yellow-400 animate-pulse" size={32} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <TrendingUp className="text-green-400" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-base leading-relaxed">
            A comprehensive showcase of my technical expertise, proficiency levels, and hands-on experience across various technologies.
          </p>
          
          {/* Stats Overview */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">10+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">5+</div>
              <div className="text-gray-400 text-sm">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">Always</div>
              <div className="text-gray-400 text-sm">Learning</div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CategoryCard category={category} isInView={isInView} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <Award className="text-yellow-400" size={20} />
            <span className="text-white font-medium">Always learning and growing</span>
            <Sparkles className="text-cyan-400 animate-pulse" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
