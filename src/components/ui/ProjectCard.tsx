import { Github, ExternalLink } from 'lucide-react';
import { type Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-[#0A0A0A] border-2 border-[#1F1F1F] rounded-lg overflow-hidden hover:border-[#EF5B0C] transition-all duration-300 group">
      {/* Image Placeholder */}
      <div className="h-48 bg-linear-to-br from-[#1F1F1F] to-[#0A0A0A] flex items-center justify-center">
        <div className="text-6xl opacity-20">⚡</div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#EF5B0C] transition-colors duration-300">
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
              className="px-3 py-1 bg-[#111111] border border-[#1F1F1F] text-[#A3A3A3] text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#EF5B0C] transition-colors duration-300"
            >
              <Github size={18} />
              <span className="text-sm">Code</span>
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
