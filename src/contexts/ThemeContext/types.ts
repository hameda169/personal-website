// Theme type definition
export type Theme = 'light' | 'dark';

// Theme context type definition
export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  toggleTheme: () => void;
}
