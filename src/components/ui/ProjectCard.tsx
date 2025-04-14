import { ExternalLink } from 'lucide-react';

import type { ProjectCardProps } from '../../types';

import { useTranslation } from '../../contexts/LanguageContext';

export function ProjectCard({ title, description, imageUrl, link = '#' }: ProjectCardProps) {
  const { isRTL, t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <img
        src={imageUrl}
        alt={`${title} Screenshot`}
        className="w-full h-48 object-cover"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          const img = e.currentTarget;
          img.onerror = null;
          img.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error';
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">{title}</h3>
        <p className="text-gray-600 mb-4 dark:text-gray-400">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium inline-flex items-center dark:text-blue-400"
        >
          {t.viewProject} <ExternalLink className={`${isRTL ? 'mr-2 order-first' : 'ml-2'} h-4 w-4`} />
        </a>
      </div>
    </div>
  );
}
