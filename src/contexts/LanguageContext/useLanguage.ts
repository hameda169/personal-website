import { useContext } from 'react';

import { LanguageContext } from './context';
import { translations } from '../../i18n';

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  // Add the translations to the returned context
  return {
    ...context,
    t: translations[context.language],
  };
};
