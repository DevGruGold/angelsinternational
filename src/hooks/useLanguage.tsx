import { useState, createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.title': 'ANGELS INTERNATIONAL',
    'hero.subtitle': 'COSTA RICA\'S PREMIUM LIFESTYLE SERVICES',
    'hero.description': 'Experience luxury concierge services with that Vice City flair. From express deliveries to private chefs, we\'ve got your lifestyle covered.',
    'hero.exploreServices': 'EXPLORE SERVICES',
    'hero.bookNow': 'BOOK NOW',
    
    // Services
    'services.title': 'PREMIUM SERVICES',
    'services.subtitle': 'Luxury Lifestyle Solutions',
    'services.delivery.title': 'EXPRESS DELIVERY',
    'services.delivery.description': 'Lightning-fast food delivery from Costa Rica\'s finest restaurants. From gourmet meals to midnight cravings, we deliver in style.',
    'services.cleaning.title': 'HOUSE CLEANING',
    'services.cleaning.description': 'Professional cleaning services that keep your space spotless. Our team ensures your home maintains that premium Vice City standard.',
    'services.chef.title': 'PRIVATE CHEF',
    'services.chef.description': 'Personal culinary experiences crafted by world-class chefs. From intimate dinners to lavish parties, we create unforgettable moments.',
    
    // Contact
    'contact.title': 'GET IN TOUCH',
    'contact.subtitle': 'Ready to Experience Angels International?',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.service': 'Service',
    'contact.message': 'Message',
    'contact.selectService': 'Select a service',
    'contact.bookWhatsapp': 'BOOK VIA WHATSAPP',
    'contact.send': 'SEND MESSAGE',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    
    // Language
    'language.switch': 'Español'
  },
  es: {
    // Hero Section
    'hero.title': 'ANGELS INTERNATIONAL',
    'hero.subtitle': 'SERVICIOS PREMIUM DE ESTILO DE VIDA EN COSTA RICA',
    'hero.description': 'Experimenta servicios de conserjería de lujo con ese estilo de Vice City. Desde entregas express hasta chefs privados, tenemos tu estilo de vida cubierto.',
    'hero.exploreServices': 'EXPLORAR SERVICIOS',
    'hero.bookNow': 'RESERVAR AHORA',
    
    // Services
    'services.title': 'SERVICIOS PREMIUM',
    'services.subtitle': 'Soluciones de Estilo de Vida de Lujo',
    'services.delivery.title': 'ENTREGA EXPRESS',
    'services.delivery.description': 'Entrega de comida ultrarrápida de los mejores restaurantes de Costa Rica. Desde comidas gourmet hasta antojos de medianoche, entregamos con estilo.',
    'services.cleaning.title': 'LIMPIEZA DOMÉSTICA',
    'services.cleaning.description': 'Servicios de limpieza profesional que mantienen tu espacio impecable. Nuestro equipo asegura que tu hogar mantenga ese estándar premium de Vice City.',
    'services.chef.title': 'CHEF PRIVADO',
    'services.chef.description': 'Experiencias culinarias personales creadas por chefs de clase mundial. Desde cenas íntimas hasta fiestas lujosas, creamos momentos inolvidables.',
    
    // Contact
    'contact.title': 'PONERSE EN CONTACTO',
    'contact.subtitle': '¿Listo para Experimentar Angels International?',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.service': 'Servicio',
    'contact.message': 'Mensaje',
    'contact.selectService': 'Selecciona un servicio',
    'contact.bookWhatsapp': 'RESERVAR VÍA WHATSAPP',
    'contact.send': 'ENVIAR MENSAJE',
    'contact.success': '¡Mensaje enviado exitosamente!',
    'contact.error': 'Error al enviar mensaje. Por favor intenta de nuevo.',
    
    // Language
    'language.switch': 'English'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};