import { createContext } from 'react';

import type { LanguageContextType } from './types';

// Create the context with default values
export const LanguageContext = createContext<LanguageContextType>(null as unknown as LanguageContextType);
