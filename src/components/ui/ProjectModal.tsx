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
  const allImages = [...images, ...pcbImages, ...thumbnail].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0A0A] border-2 border-[#2a2a2a] rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-10 z-10 p-2 bg-[#1a1a1a] hover:bg-[#EF5B0C] border-2 border-[#2a2a2a] rounded-full transition-all duration-300"
        >
          <X className="w-6 h-6 text-[#F5F5F5]" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] mb-4">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#111111] border-2 border-[#2a2a2a] text-[#A3A3A3] text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-[#EF5B0C] hover:bg-[#EF5B0C] text-[#F5F5F5] rounded-lg transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-[#EF5B0C] hover:bg-[#EF5B0C] text-[#F5F5F5] rounded-lg transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-[#EF5B0C] hover:bg-[#EF5B0C] text-[#F5F5F5] rounded-lg transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe className="w-4 h-4" />
                  <span>Website</span>
                </a>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          {allImages.length > 0 && (
            <div className="mb-6">
              <div className="relative bg-[#000000] border-2 border-[#2a2a2a] rounded-lg overflow-hidden">
                <img
                  src={allImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-125 object-contain py-10"
                />
                
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-[#EF5B0C] border-2 border-[#2a2a2a] rounded-full transition-all duration-300"
                    >
                      <span className="text-[#F5F5F5] text-xl">←</span>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-[#EF5B0C] border-2 border-[#2a2a2a] rounded-full transition-all duration-300"
                    >
                      <span className="text-[#F5F5F5] text-xl">→</span>
                    </button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {allImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex ? 'bg-[#EF5B0C] w-6' : 'bg-[#A3A3A3]'
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
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4 border-l-4 border-[#EF5B0C] pl-4">
              About
            </h3>
            <div className="text-[#A3A3A3] whitespace-pre-line leading-relaxed">
              {project.longDescription || project.description}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4 border-l-4 border-[#EF5B0C] pl-4">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#111111] border-2 border-[#2a2a2a] rounded-lg">
                    <span className="text-[#EF5B0C] text-lg mt-0.5">✓</span>
                    <span className="text-[#A3A3A3]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Details */}
          {project.technicalDetails && (
            <div>
              <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4 border-l-4 border-[#EF5B0C] pl-4">
                Technical Details
              </h3>
              <p className="text-[#A3A3A3] leading-relaxed">
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