import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Building2, FileText, Globe2, LineChart } from 'lucide-react';

export default function Services() {
  const { language } = useLanguage();

  const services = {
    en: [
      {
        icon: Building2,
        title: 'Business Consulting',
        description: 'Strategic guidance for companies expanding into Ecuadorian markets, with expertise in financial regulations and local business practices.'
      },
      {
        icon: FileText,
        title: 'Document Translation',
        description: 'Professional translation of financial documents, contracts, and business materials between English and Spanish.'
      },
      {
        icon: Globe2,
        title: 'Market Entry Strategy',
        description: 'Comprehensive support for international businesses establishing presence in Ecuador, including cultural and regulatory guidance.'
      },
      {
        icon: LineChart,
        title: 'Financial Advisory',
        description: 'Expert financial consulting leveraging U.S. and Ecuadorian market experience for optimal business outcomes.'
      }
    ],
    es: [
      {
        icon: Building2,
        title: 'Consultoría Empresarial',
        description: 'Orientación estratégica para empresas que se expanden en mercados ecuatorianos, con experiencia en regulaciones financieras y prácticas comerciales locales.'
      },
      {
        icon: FileText,
        title: 'Traducción de Documentos',
        description: 'Traducción profesional de documentos financieros, contratos y materiales comerciales entre inglés y español.'
      },
      {
        icon: Globe2,
        title: 'Estrategia de Entrada al Mercado',
        description: 'Apoyo integral para empresas internacionales que establecen presencia en Ecuador, incluyendo orientación cultural y regulatoria.'
      },
      {
        icon: LineChart,
        title: 'Asesoría Financiera',
        description: 'Consultoría financiera experta aprovechando la experiencia en mercados de EE.UU. y Ecuador para resultados comerciales óptimos.'
      }
    ]
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Comprehensive business solutions tailored to bridge international markets with Ecuador'
              : 'Soluciones empresariales integrales diseñadas para conectar mercados internacionales con Ecuador'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services[language].map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}