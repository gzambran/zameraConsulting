import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Contact Us' : 'Contáctenos'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Get in touch with us to discuss how we can help your business succeed in international markets.'
              : 'Póngase en contacto con nosotros para discutir cómo podemos ayudar a su empresa a tener éxito en mercados internacionales.'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Name' : 'Nombre'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Email' : 'Correo Electrónico'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'en' ? 'Subject' : 'Asunto'}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'en' ? 'Message' : 'Mensaje'}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {language === 'en' ? 'Send Message' : 'Enviar Mensaje'}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'Email Us' : 'Envíenos un Correo'}
              </h3>
              <p className="text-gray-600">contact@zamera.com</p>
            </div>
            <div className="text-center">
              <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'Call Us' : 'Llámenos'}
              </h3>
              <p className="text-gray-600">+593 (2) 555-0123</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}