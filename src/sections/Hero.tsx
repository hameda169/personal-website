import { ArrowRight } from 'lucide-react';

import { useTranslation } from '../contexts/LanguageContext';

export function Hero() {
  const { isRTL, t } = useTranslation();

  return (
    <section id="hero" className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{t.greeting}</h1>
        <p className="text-lg md:text-2xl mb-8 text-blue-100">{t.jobTitle}</p>
        <a
          href="#projects"
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 transition duration-300 inline-flex items-center"
        >
          {t.viewWork} <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
        </a>
      </div>
    </section>
  );
}
