import React, { useState, useEffect } from 'react';

import type { Language } from './types';

import { LanguageContext } from './context';
import { translations } from '../../i18n';

// Language Provider Component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage === 'en' || savedLanguage === 'fa' ? (savedLanguage as Language) : 'en';
  });

  const isRTL = language === 'fa';

  useEffect(() => {
    // Set dir attribute on html element
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    // Set lang attribute on html element
    document.documentElement.lang = language;

    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRTL,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
