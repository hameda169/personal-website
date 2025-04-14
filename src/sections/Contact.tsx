import { Mail, Linkedin, Github } from 'lucide-react';

import { SectionTitle } from '../components/ui/SectionTitle';
import { useTranslation } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useTranslation();

  // Contact links
  const contactLinks = [
    { label: 'Email', href: 'mailto:your.email@example.com', icon: Mail },
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    { label: 'GitHub', href: '#', icon: Github },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-800 scroll-mt-16">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle>{t.getInTouch}</SectionTitle>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">{t.contactText}</p>
        <div className="flex justify-center space-x-6">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition duration-150"
              title={label}
            >
              <Icon className="w-8 h-8 inline-block" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
