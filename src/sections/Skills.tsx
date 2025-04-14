import { Code, Library, Terminal } from 'lucide-react';

import { SectionTitle } from '../components/ui/SectionTitle';
import { SkillCategory } from '../components/ui/SkillCategory';
import { useTranslation } from '../contexts/LanguageContext';

export function Skills() {
  const { t } = useTranslation();

  // Dynamic skill data based on language
  const skillCategories = [
    {
      title: t.programmingLanguages,
      icon: Code,
      skills: ['JavaScript (ES6+)', 'Python', 'Java', 'HTML5 & CSS3', 'SQL', '[Add More]'],
    },
    {
      title: t.frameworksLibraries,
      icon: Library,
      skills: ['React', 'Node.js', 'Spring Boot', 'Django / Flask', 'Tailwind CSS', '[Add More]'],
    },
    {
      title: t.toolsPlatforms,
      icon: Terminal,
      skills: ['Git & GitHub', 'Docker', 'AWS / Azure / GCP', 'PostgreSQL / MySQL', 'Jira', '[Add More]'],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 scroll-mt-16">
      <div className="container mx-auto px-6">
        <SectionTitle>{t.technicalSkills}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
