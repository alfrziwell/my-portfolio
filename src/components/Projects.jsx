import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// LOGIN PAGE IMAGES
import DummyLoginPage1 from '../assets/img/projects/dummy-project/login-page/1-1.png';
import DummyLoginPage2 from '../assets/img/projects/dummy-project/login-page/1-2.png';
import DummyLoginPage3 from '../assets/img/projects/dummy-project/login-page/1-3.png';
import DummyLoginPage4 from '../assets/img/projects/dummy-project/login-page/1-4.png';

// IFIK IMAGES
import PublishIFIK1 from '../assets/img/projects/publish-project/ifik/2-1.png';
import PublishIFIK2 from '../assets/img/projects/publish-project/ifik/2-2.png';
import PublishIFIK3 from '../assets/img/projects/publish-project/ifik/2-3.png';
import PublishIFIK4 from '../assets/img/projects/publish-project/ifik/2-4.png';
import PublishIFIK5 from '../assets/img/projects/publish-project/ifik/2-5.png';
import PublishIFIK6 from '../assets/img/projects/publish-project/ifik/2-6.png';
import PublishIFIK7 from '../assets/img/projects/publish-project/ifik/2-7.png';
import PublishIFIK8 from '../assets/img/projects/publish-project/ifik/2-8.png';

// MY BRAND IMAGES
import DummyBrand1 from '../assets/img/projects/dummy-project/my-brand/4-1.png';
import DummyBrand2 from '../assets/img/projects/dummy-project/my-brand/4-2.png';
import DummyBrand3 from '../assets/img/projects/dummy-project/my-brand/4-3.png';
import DummyBrand4 from '../assets/img/projects/dummy-project/my-brand/4-4.png';
import DummyBrand5 from '../assets/img/projects/dummy-project/my-brand/4-5.png';
import DummyBrand6 from '../assets/img/projects/dummy-project/my-brand/4-6.png';
import DummyBrand7 from '../assets/img/projects/dummy-project/my-brand/4-7.png';
import DummyBrand8 from '../assets/img/projects/dummy-project/my-brand/4-8.png';

// ONIC ESPORT IMAGES
import DummyONIC1 from '../assets/img/projects/dummy-project/onic/5-1.png';
import DummyONIC2 from '../assets/img/projects/dummy-project/onic/5-2.png';
import DummyONIC3 from '../assets/img/projects/dummy-project/onic/5-3.png';
import DummyONIC4 from '../assets/img/projects/dummy-project/onic/5-4.png';

// P3KD IMAGES
import PublishP3KD1 from '../assets/img/projects/publish-project/p3kd/6-1.png';
import PublishP3KD2 from '../assets/img/projects/publish-project/p3kd/6-2.png';
import PublishP3KD3 from '../assets/img/projects/publish-project/p3kd/6-3.png';
import PublishP3KD4 from '../assets/img/projects/publish-project/p3kd/6-4.png';
import PublishP3KD5 from '../assets/img/projects/publish-project/p3kd/6-5.png';


const publishedProjectsData = [
  {
    title: 'Development Web IFIK',
    description: 'Create an IFIK Landing Page display with modern design and responsive layout.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Codeigniter 3'],
    images: [
      PublishIFIK1,
      PublishIFIK2,
      PublishIFIK3,
      PublishIFIK4,
      PublishIFIK5,
      PublishIFIK6,
      PublishIFIK7,
      PublishIFIK8
    ],
    type: 'Web App',
    link: 'https://ifik.telkomuniversity.ac.id/'
  },
  {
    title: 'Project P3KD',
    description: 'Creating a CMS (Content Management System) for DKI Jakarta provincial health service using the Codeigniter 3 framework.',
    technologies: ['Codeigniter 3', 'PostgreSQL', 'Bootstrap', 'JSON'],
    images: [
      PublishP3KD1,
      PublishP3KD2,
      PublishP3KD3,
      PublishP3KD4,
      PublishP3KD5
    ],
    type: 'Web App',
    link: 'https://pk3d.jakarta.go.id/'
  }
];

const dummyProjectsData = [
  {
    title: 'Login Page',
    description: 'Create a Login Page with the PHP programming language using the Codeigniter 3 Framework and utilizing PHPMailer as email sender.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    images: [
      DummyLoginPage1,
      DummyLoginPage2,
      DummyLoginPage3,
      DummyLoginPage4
    ],
    type: 'Web App'
  },
  {
    title: 'Project Dump My Brand',
    description: 'Create own E-Commerce brand to make it easier for customers to order products with complete payment and inventory system.',
    technologies: ['Codeigniter 3', 'PostgreSQL', 'Bootstrap'],
    images: [
      DummyBrand1,
      DummyBrand2,
      DummyBrand3,
      DummyBrand4,
      DummyBrand5,
      DummyBrand6,
      DummyBrand7,
      DummyBrand8
    ],
    type: 'Web App'
  },
  {
    title: 'ONIC Esport Landing Page',
    description: 'Create a Landing Page with the ONIC Esport theme using HTML and CSS, manually without using bootstrap layout code.',
    technologies: ['HTML', 'CSS'],
    images: [
      DummyONIC1,
      DummyONIC2,
      DummyONIC3,
      DummyONIC4
    ],
    type: 'Web App'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ImageModal = ({ project, onClose }) => {
    const images = project.images;
    const currentImage = images[currentImageIndex];

    const handleNext = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Image Viewer */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50">
            <img 
              src={currentImage} 
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[60vh] object-contain"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between p-4 border-t bg-white">
            <button 
              onClick={handlePrev}
              disabled={images.length === 1}
              className="p-2 hover:bg-gray-100 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Counter & Dots */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-semibold text-gray-600">
                {currentImageIndex + 1} / {images.length}
              </span>
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition duration-300 ${
                      index === currentImageIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button 
              onClick={handleNext}
              disabled={images.length === 1}
              className="p-2 hover:bg-gray-100 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project, isPublished = false }) => (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
    >
      {/* Project Image */}
      <div 
        onClick={() => {
          setSelectedProject(project);
          setCurrentImageIndex(0);
        }}
        className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer group relative"
      >
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Type Badge */}
        <div className="text-xs font-semibold text-purple-600 mb-4">{project.type}</div>

        {/* Action Button */}
        {isPublished ? (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
          >
            <ExternalLink size={18} />
            View Project
          </a>
        ) : null}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600">
            A selection of projects I've worked on showcasing my skills and expertise
          </p>
        </div>

        {/* Published Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <ExternalLink size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Published Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedProjectsData.map((project, index) => (
              <ProjectCard key={index} project={project} isPublished={true} />
            ))}
          </div>
        </div>

        {/* Dummy Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Github size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Portfolio Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyProjectsData.map((project, index) => (
              <ProjectCard key={index} project={project} isPublished={false} />
            ))}
          </div>
        </div>

        {/* Image Modal with Slider */}
        {selectedProject && (
          <ImageModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
}
