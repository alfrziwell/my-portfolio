import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Alif Alfarizi
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A passionate web developer crafting modern, user-centric digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition duration-300">Experience</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/alfrziwell"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/alif-alfarizi-8b7420293/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/alfrzialif/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:alifalfariziiwu@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart size={18} className="text-red-500" /> by Alif Alfarizi
            </p>
            <p className="text-gray-400">
              © {currentYear} My Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
