import { useEffect } from 'react';

import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { LanguageProvider, useTranslation } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

// Separate component to use the language context
function AppContent() {
  const { isRTL } = useTranslation();

  return (
    <div className={`bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 antialiased ${isRTL ? 'font-vazir' : 'font-sans'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Main App Component
export function App() {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
