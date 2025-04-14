// Language type definition
export type Language = 'en' | 'fa';

// Language context type definition
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: Record<string, string>;
}
