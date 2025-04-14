import React from 'react';

import { useTranslation } from '../contexts/LanguageContext';

export function About() {
  const { isRTL, t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div
        className={`container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="md:w-1/3 text-center flex-shrink-0">
          <img
            src="https://placehold.co/300x300/e2e8f0/94a3b8?text=Your+Photo"
            alt="Your Name"
            className="rounded-full shadow-lg mx-auto w-48 h-48 md:w-64 md:h-64 object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const img = e.currentTarget;
              img.onerror = null;
              img.src = 'https://placehold.co/300x300/e2e8f0/94a3b8?text=Image+Error';
            }}
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t.aboutMe}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{t.aboutText1}</p>
          <p className="text-gray-600 leading-relaxed mb-4">{t.aboutText2}</p>
          <p className="text-gray-600 leading-relaxed">{t.aboutText3}</p>
        </div>
      </div>
    </section>
  );
}
