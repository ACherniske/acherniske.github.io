import { projects } from '../data/projects';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f1f1f1] mb-4">
            Selected Projects
          </h2>
          <div className="w-20 h-1 bg-[#EF5B0C]"></div>
          <p className="text-[#A3A3A3] text-lg mt-6">
            A selection of hardware and software projects I've worked on
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={project.alwaysShowProject ? '' : 'hidden md:block'}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;