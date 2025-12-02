import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import ImageAlif from '../assets/img/hero/profil_alif_alfarizi.jpg';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <div>
              <p className="text-blue-600 font-semibold mb-2">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                I'm a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Web Developer</span>
              </h1>
              <p className="text-2xl text-gray-600 mt-4">Alif Alfarizi</p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              A fresh graduate in Computer and Network Engineering with hands-on experience in web development using PHP, CodeIgniter, and Arduino technology. Experienced in building Content Management Systems (CMS) and managing content-focused applications with an emphasis on efficient technological solutions. Demonstrated leadership abilities through organizational involvement and a strong passion for programming.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300"
              >
                View My Work <ArrowRight size={20} />
              </a>
              <a
                href="mailto:alifalfariziiwu@gmail.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Contact Me <Mail size={20} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/alfrziwell"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/alif-alfarizi-8b7420293/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div className="relative flex justify-center items-center">
            {/* Animated Background Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-blue-300 rounded-3xl blur-3xl opacity-40 scale-125 animate-pulse"></div>
            
            {/* Image Container with Modern Frame */}
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-40"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={ImageAlif} 
                  alt="Alif Alfarizi" 
                  className="w-full h-full object-cover object-[center_80%]"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-purple-500 to-blue-600 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
