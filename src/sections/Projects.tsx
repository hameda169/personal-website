import { ProjectCard } from '../components/ui/ProjectCard';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useTranslation } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useTranslation();

  // Project data
  const projects = [
    {
      title: 'Personal Website',
      description: 'This very portfolio website, built with React, TypeScript, Tailwind CSS, and Vite.',
      imageUrl: 'https://placehold.co/600x400/6366f1/ffffff?text=Website', // Placeholder
      link: 'https://github.com/hameda169/personal-website',
    },
    {
      title: 'Todo List App',
      description: 'A functional Todo List application built with Next.js and TypeScript.',
      imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=Todo+List', // Placeholder
      link: 'https://github.com/hameda169/todo-list',
    },
    {
      title: 'ERC20 Token Management',
      description: 'A project demonstrating interactions or management related to ERC20 tokens, built with TypeScript.',
      imageUrl: 'https://placehold.co/600x400/10b981/ffffff?text=ERC20', // Placeholder
      link: 'https://github.com/hameda169/erc20-token-management',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 scroll-mt-16">
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
