import type { SkillCategoryProps } from '../../types';

import { useTranslation } from '../../contexts/LanguageContext';

export function SkillCategory({ title, icon: Icon, skills }: SkillCategoryProps) {
  const { isRTL } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-blue-600 inline-flex items-center">
        {/* Icon spacing based on text direction */}
        <Icon className={`${isRTL ? 'ml-2' : 'mr-2'} h-5 w-5`} /> {title}
      </h3>
      {/* List style based on text direction */}
      <ul className={`list-disc ${isRTL ? 'list-inside rtl' : 'list-inside'} text-gray-600 space-y-1`}>
        {skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
