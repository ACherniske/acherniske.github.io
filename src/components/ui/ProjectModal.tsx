import { useState } from 'react';
import { X, Github, ExternalLink, Globe } from 'lucide-react';
import { type Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const images = project.images || [];
  const pcbImages = project.pcbImages ? [project.pcbImages.front, project.pcbImages.back] : [];
  const thumbnail = project.image ? [project.image] : [];
  const allImages = [...thumbnail, ...pcbImages, ...images].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-[#0A0A0A] border-2 border-[#2a2a2a] rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-[#1a1a1a] hover:bg-[#EF5B0C] border-2 border-[#2a2a2a] rounded-full transition-all duration-300"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5F5F5]" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[95vh] sm:max-h-[90vh] p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-3 sm:mb-4 pr-8">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 sm:px-3 bg-[#111111] border-2 border-[#2a2a2a] text-[#A3A3A3] text-xs sm:text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-[#EF5B0C] hover:bg-[#EF5B0C] text-[#F5F5F5] rounded-lg transition-all duration-300 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-[#EF5B0C] hover:bg-[#EF5B0C] text-[#F5F5F5] rounded-lg transition-all duration-300 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-[#EF5B0C] hover:bg-[#EF5B0C] text-[#F5F5F5] rounded-lg transition-all duration-300 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Website</span>
                </a>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          {allImages.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <div className="relative bg-[#000000] border-2 border-[#2a2a2a] rounded-lg overflow-hidden">
                <img
                  src={allImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto min-h-50 max-h-75 sm:max-h-100 md:max-h-125 object-contain p-6 sm:py-10 sm:px-6"
                />
                
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/70 hover:bg-[#EF5B0C] border-2 border-[#2a2a2a] rounded-full transition-all duration-300"
                    >
                      <span className="text-[#F5F5F5] text-lg sm:text-xl">←</span>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/70 hover:bg-[#EF5B0C] border-2 border-[#2a2a2a] rounded-full transition-all duration-300"
                    >
                      <span className="text-[#F5F5F5] text-lg sm:text-xl">→</span>
                    </button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                      {allImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex ? 'bg-[#EF5B0C] w-4 sm:w-6' : 'bg-[#A3A3A3]'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-3 sm:mb-4 border-l-4 border-[#EF5B0C] pl-3 sm:pl-4">
              About
            </h3>
            <div className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed space-y-4">
              {(project.longDescription || project.description)
                .split('\n\n')
                .map((paragraph, idx) => (
                  <p key={idx} className="text-left sm:text-justify">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-3 sm:mb-4 border-l-4 border-[#EF5B0C] pl-3 sm:pl-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#111111] border-2 border-[#2a2a2a] rounded-lg">
                    <span className="text-[#A3A3A3] text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Details */}
          {project.technicalDetails && (
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-3 sm:mb-4 border-l-4 border-[#EF5B0C] pl-3 sm:pl-4">
                Technical Details
              </h3>
              <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
                {project.technicalDetails}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;