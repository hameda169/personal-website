import { useContext } from 'react';

import { ThemeContext } from './context';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
