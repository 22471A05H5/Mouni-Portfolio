import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              Showcasing my work, skills, and professional journey.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/22471A05H5" className="text-gray-300 hover:text-white transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mounica-pulagorla-3a8272276/" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#certificates" className="text-gray-300 hover:text-white transition-colors">Certificates</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Feel free to reach out!</p>
            <p className="text-gray-300 mb-2">Email: pulagorlamounica@gmail.com</p>
            
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;