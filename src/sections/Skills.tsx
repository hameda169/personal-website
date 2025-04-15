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
      skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3'],
    },
    {
      title: t.frameworksLibraries,
      icon: Library,
      skills: [
        'React',
        'React Native',
        'Next.js',
        'Express.js',
        'MobX / MobX State Tree',
        'React Testing Library',
        'Jest',
        'Telegraf / GramJS',
        'Socket.IO',
        'TypeORM / Prisma',
      ],
    },
    {
      title: t.toolsPlatforms,
      icon: Terminal,
      skills: [
        'Git & GitLab CI/CD',
        'Docker',
        'Node.js',
        'PostgreSQL / SQLite',
        'Linux / Bash',
        'ESLint / Prettier',
        'Shopify Apps / BigCommerce Apps',
      ],
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
