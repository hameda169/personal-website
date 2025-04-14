import { useTranslation } from '../../contexts/LanguageContext';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {currentYear} Your Name. {t.copyright}
        </p>
      </div>
    </footer>
  );
}
