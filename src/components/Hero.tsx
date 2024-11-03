import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {language === 'en' ? (
                <>
                  Bridging Business <span className="text-blue-600">Opportunities</span>
                </>
              ) : (
                <>
                  Conectando <span className="text-blue-600">Oportunidades</span> de Negocio
                </>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'en'
                ? 'Expert consulting and translation services connecting Ecuador with international markets.'
                : 'Servicios expertos de consultoría y traducción conectando Ecuador con mercados internacionales.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 transition-colors"
              >
                {language === 'en' ? 'Contact Us' : 'Contáctenos'}
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1623461487986-9400110de28e?auto=format&fit=crop&q=80"
              alt={language === 'en' ? 'Ecuador and USA Flags' : 'Banderas de Ecuador y EE.UU.'}
              className="rounded-lg shadow-2xl object-cover w-full aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}