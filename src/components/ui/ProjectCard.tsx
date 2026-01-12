import { Github, ExternalLink } from 'lucide-react';
import { type Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-[#0A0A0A] border-2 border-[#2a2a2a] rounded-lg overflow-hidden hover:border-[#EF5B0C] transition-all duration-300 group  flex flex-col h-full">
      {/* Image Section */}
      <div className="h-64 bg-[#0a0a0a] flex items-center justify-center">
        {project.pcbImages ? (
          // PCB Images - Front and Back side by side
          <div className="w-full h-full flex gap-5 p-5">
            <div className="flex-1 flex flex-col">
              <img
                src={project.pcbImages.front}
                alt={`${project.title} PCB Front`}
                className="w-full flex-1 object-contain"
              />
              <span className="text-xs text-[#A3A3A3] mt-2 text-center">Front</span>
            </div>
            <div className="flex-1 flex flex-col">
              <img
                src={project.pcbImages.back}
                alt={`${project.title} PCB Back`}
                className="w-full flex-1 object-contain"
              />
              <span className="text-xs text-[#A3A3A3] mt-2 text-center">Back</span>
            </div>
          </div>
        ) : project.image ? (
          // Single project image
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          // Placeholder for projects without images
          <div className="text-6xl opacity-20">⚡</div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#f1f1f1] mb-3 group-hover:text-[#EF5B0C] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[#A3A3A3] mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
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
        <div className="flex items-center gap-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#EF5B0C] transition-colors duration-300"
            >
              <Github size={18} />
              <span className="text-sm">Github</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#EF5B0C] transition-colors duration-300"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#EF5B0C] transition-colors duration-300"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Website</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
