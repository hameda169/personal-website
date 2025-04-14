import { createContext } from 'react';

import type { ThemeContextType } from './types';

// Create the context with default values
export const ThemeContext = createContext<ThemeContextType>(null as unknown as ThemeContextType);
