import { GlobeIcon } from 'lucide-react';

import { useTranslation } from '../../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <button
      onClick={() => {
        setLanguage(language === 'en' ? 'fa' : 'en');
      }}
      className="inline-flex items-center justify-center py-1 px-3 rounded-md text-gray-600 hover:text-blue-600 transition"
      aria-label={language === 'en' ? 'Switch to Persian' : 'Switch to English'}
    >
      <GlobeIcon className="h-5 w-5 mr-1" />
      {language === 'en' ? 'فارسی' : 'English'}
    </button>
  );
}
