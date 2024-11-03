import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zamera Consulting</h3>
            <p className="text-gray-400">
              {language === 'en' 
                ? 'Bridging international business opportunities between Ecuador and global markets.'
                : 'Conectando oportunidades de negocios internacionales entre Ecuador y mercados globales.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'en' ? 'Contact Info' : 'Información de Contacto'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span>Quito, Ecuador</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span>+593 (2) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span>contact@zamera.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? 'Services' : 'Servicios'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? 'About Us' : 'Nosotros'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? 'Contact' : 'Contacto'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zamera Consulting. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        </div>
      </div>
    </footer>
  );
}