import { Download } from 'lucide-react';

import { ExperienceEntry } from '../components/ui/ExperienceEntry';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useTranslation } from '../contexts/LanguageContext';

export function Experience() {
  const { isRTL, t } = useTranslation();

  // Experience data (could be localized further if needed)
  const experiences = [
    {
      title: '[Job Title]',
      company: '[Company Name]',
      location: '[Location]',
      dates: '[Start Date] - [End Date or Present]',
      responsibilities: [
        'Developed and maintained [specific features or systems].',
        'Collaborated with [teams] to [achieve specific goals].',
        'Improved [performance, efficiency] by [specific actions].',
        'Utilized technologies such as [key technologies].',
        '[Add another key responsibility].',
      ],
    },
    {
      title: '[Previous Job Title]',
      company: '[Previous Company Name]',
      location: '[Location]',
      dates: '[Start Date] - [End Date]',
      responsibilities: [
        'Contributed to the development of [specific project].',
        'Worked with [key technologies used].',
        '[Add another key responsibility].',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="container mx-auto px-6">
        <SectionTitle>{t.workExperience}</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceEntry key={index} {...exp} />
          ))}
          <div className="text-center mt-12">
            <a
              href="[Link_To_Your_Resume.pdf]"
              download="YourName_Resume.pdf"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              {t.downloadResume} <Download className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
