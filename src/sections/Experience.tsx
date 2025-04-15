import { ExperienceEntry } from '../components/ui/ExperienceEntry';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useTranslation } from '../contexts/LanguageContext';

export function Experience() {
  const { t } = useTranslation();

  // Experience data (could be localized further if needed)
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Partnerz',
      location: 'Abu Dhabi, UAE (Remote)',
      dates: 'June 2024 - Present',
      responsibilities: [
        'Re-implementing an existing Shopify application for BigCommerce and WooCommerce platforms using React and TypeScript.',
        'Developing and maintaining a merchant-facing SDK integrated into various e-commerce storefronts.',
        'Building and optimizing CI/CD pipelines using GitLab CI and Docker for streamlined deployment.',
        'Collaborating with backend and product teams to deliver features for e-commerce merchants.',
        'Utilizing technologies such as React, TypeScript, Node.js, SDK development principles, GitLab CI, and Docker.',
      ],
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Avicenna Research',
      location: 'Toronto, ON, Canada (Remote)',
      dates: 'September 2022 - June 2024',
      responsibilities: [
        'Led the successful adoption and integration of TypeScript into the existing JavaScript codebase, significantly improving code quality and maintainability.',
        "Managed the challenging upgrade of the project's Node.js version from 12 to 20, handling numerous dependency updates and compatibility issues.",
        'Enhanced code standards by configuring and enforcing ESLint and Prettier rules tailored to project needs.',
        'Advocated for and attempted implementation of frontend testing practices.',
        'Developed features using React, JavaScript, and later, TypeScript.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Zardalu',
      location: 'Tehran, Iran',
      dates: 'February 2020 - September 2022',
      responsibilities: [
        'Developed and maintained features for complex enterprise applications using React, TypeScript, and MobX/MobX State Tree.',
        'Achieved and consistently maintained over 90% test coverage using Jest and React Testing Library, ensuring high code reliability.',
        'Actively participated in code reviews, upholding high standards for code quality and best practices.',
        'Onboarded and mentored new junior frontend developers, fostering team growth.',
        'Promoted to lead a sub-team of 3 developers towards the end of my tenure.',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'RahnemaCollege',
      location: 'Tehran, Iran',
      dates: 'Summer 2019',
      responsibilities: [
        'Learned JavaScript, React, and React Native from scratch in an intensive internship program.',
        'Collaborated with a team to build a mobile social media application prototype similar to Instagram using React Native.',
        'Gained practical experience in frontend development workflows and team collaboration.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-gray-800 scroll-mt-16">
      <div className="container mx-auto px-6">
        <SectionTitle>{t.workExperience}</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceEntry key={index} {...exp} />
          ))}
          {/* Commenting out resume download button for now
          <div className="text-center mt-12">
            <a
              href="[Link_To_Your_Resume.pdf]"
              download="YourName_Resume.pdf"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 inline-flex items-center"
            >
              {t.downloadResume} <Download className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
