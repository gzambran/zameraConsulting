import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = {
    en: [
      { name: 'Home', href: '#home' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    es: [
      { name: 'Inicio', href: '#home' },
      { name: 'Servicios', href: '#services' },
      { name: 'Nosotros', href: '#about' },
      { name: 'Contacto', href: '#contact' },
    ]
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600">
              Zamera
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation[language].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="inline-flex items-center text-gray-600 hover:text-blue-600"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="uppercase">{language === 'en' ? 'es' : 'en'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="space-y-2">
              {navigation[language].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'es' : 'en');
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              >
                <Globe className="h-5 w-5 mr-2" />
                <span className="uppercase">{language === 'en' ? 'es' : 'en'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}