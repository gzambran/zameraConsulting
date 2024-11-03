import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, Briefcase, Globe2 } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const achievements = {
    en: [
      {
        icon: Briefcase,
        title: '15+ Years Experience',
        description: 'In finance and international business'
      },
      {
        icon: Award,
        title: 'Certified Expert',
        description: 'Financial and business translations'
      },
      {
        icon: Globe2,
        title: 'International Network',
        description: 'Strong US-Ecuador connections'
      }
    ],
    es: [
      {
        icon: Briefcase,
        title: '+15 Años de Experiencia',
        description: 'En finanzas y negocios internacionales'
      },
      {
        icon: Award,
        title: 'Experto Certificado',
        description: 'Traducciones financieras y comerciales'
      },
      {
        icon: Globe2,
        title: 'Red Internacional',
        description: 'Sólidas conexiones EE.UU.-Ecuador'
      }
    ]
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1593435221502-c5d7bfc26cab?auto=format&fit=crop&q=80"
              alt={language === 'en' ? 'John Zambrano, Founder' : 'John Zambrano, Fundador'}
              className="rounded-lg shadow-2xl object-cover w-full h-[600px]"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'About John Zambrano' : 'Sobre John Zambrano'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {language === 'en' 
                ? 'With over 15 years of hands-on experience in international business and finance, John has built a strong reputation for connecting U.S. and Ecuadorian markets. His practical expertise and deep understanding of both cultures help businesses navigate cross-border opportunities successfully.'
                : 'Con más de 15 años de experiencia práctica en negocios internacionales y finanzas, John ha construido una sólida reputación conectando los mercados de EE.UU. y Ecuador. Su experiencia práctica y profundo entendimiento de ambas culturas ayuda a las empresas a navegar exitosamente las oportunidades transfronterizas.'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {achievements[language].map((achievement, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                  <achievement.icon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}