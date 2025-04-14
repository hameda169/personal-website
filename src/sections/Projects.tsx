import { ProjectCard } from '../components/ui/ProjectCard';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useTranslation } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useTranslation();

  // Project data
  const projects = [
    {
      title: 'Project Title 1',
      description: 'Brief description using React, Node.js, PostgreSQL.',
      imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=Project+1', // Default blue
      link: '#',
    },
    {
      title: 'Project Title 2',
      description: 'Brief description using Python, Django, AWS.',
      imageUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Project+2', // Default green (emerald)
      link: '#',
    },
    {
      title: 'Project Title 3',
      description: 'Brief description using Java, Spring Boot, Docker.',
      imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=Project+3', // Default yellow (amber)
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-100 scroll-mt-16">
      <div className="container mx-auto px-6">
        <SectionTitle>{t.myProjects}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
