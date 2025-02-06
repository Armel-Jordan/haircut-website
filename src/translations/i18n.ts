import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import des traductions
const fr = {
  "HOME": "Accueil",
  "products": "Produits",
  "team": "Notre équipe",
  "whyChooseUs": "Pourquoi nous choisir",
  "services": "Services",
  "contact": "Contact",
  "BEAUTY WOMAN": "BEAUTY WOMAN"
};

const en = {
  "HOME": "Home",
  "products": "Products",
  "team": "Our Team",
  "whyChooseUs": "Why Choose Us",
  "services": "Services",
  "contact": "Contact",
  "BEAUTY WOMAN": "BEAUTY WOMAN"
};

const es = {
  "HOME": "Inicio",
  "products": "Productos",
  "team": "Nuestro Equipo",
  "whyChooseUs": "Por Qué Elegirnos",
  "services": "Servicios",
  "contact": "Contacto",
  "BEAUTY WOMAN": "BEAUTY WOMAN"
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      es: { translation: es }
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
