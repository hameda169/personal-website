import { useTranslation } from '../../contexts/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold text-blue-600">Your Name</div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <a href="#about" className="text-gray-600 hover:text-blue-600 rounded-md px-3 py-1 transition duration-150">
            {t.about}
          </a>
          <a href="#skills" className="text-gray-600 hover:text-blue-600 rounded-md px-3 py-1 transition duration-150">
            {t.skills}
          </a>
          <a href="#experience" className="text-gray-600 hover:text-blue-600 rounded-md px-3 py-1 transition duration-150">
            {t.experience}
          </a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600 rounded-md px-3 py-1 transition duration-150">
            {t.projects}
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 rounded-md px-3 py-1 transition duration-150">
            {t.contact}
          </a>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
