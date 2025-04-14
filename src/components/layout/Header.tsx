import { useState } from 'react';

import { useTranslation } from '../../contexts/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 dark:bg-gray-800 dark:shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Your Name</div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-1 transition duration-150"
            >
              {t.about}
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-1 transition duration-150"
            >
              {t.skills}
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-1 transition duration-150"
            >
              {t.experience}
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-1 transition duration-150"
            >
              {t.projects}
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-1 transition duration-150"
            >
              {t.contact}
            </a>
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 space-y-2`}>
          <a
            href="#about"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-2 transition duration-150"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {t.about}
          </a>
          <a
            href="#skills"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-2 transition duration-150"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {t.skills}
          </a>
          <a
            href="#experience"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-2 transition duration-150"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {t.experience}
          </a>
          <a
            href="#projects"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-2 transition duration-150"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {t.projects}
          </a>
          <a
            href="#contact"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md px-3 py-2 transition duration-150"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {t.contact}
          </a>
          <div className="flex items-center space-x-4 pt-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
