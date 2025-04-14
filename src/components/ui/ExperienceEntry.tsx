import type { ExperienceEntryProps } from '../../types';

import { useTranslation } from '../../contexts/LanguageContext';

export function ExperienceEntry({ title, company, location, dates, responsibilities }: ExperienceEntryProps) {
  const { isRTL } = useTranslation();

  return (
    <div className="mb-10 p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2 gap-2 sm:gap-0">
        {/* Text alignment based on direction */}
        <div className={isRTL ? 'text-right' : 'text-left'}>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
          <p className="text-blue-600 font-medium dark:text-blue-400">
            {company} - {location}
          </p>
        </div>
        <span className="text-sm text-gray-500 whitespace-nowrap text-right dark:text-gray-400">{dates}</span>
      </div>
      {/* List style based on text direction */}
      <ul className={`list-disc ${isRTL ? 'list-inside rtl' : 'list-inside'} text-gray-600 dark:text-gray-400 space-y-1 mt-3`}>
        {responsibilities.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
