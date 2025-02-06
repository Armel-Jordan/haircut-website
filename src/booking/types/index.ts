export interface ServiceTranslation {
  title: string;
  description: string;
}

export interface ServicePrice {
  amount: number;
  currency: {
    [key: string]: string;  // fr: '€', en: '$', etc.
  };
}

export interface ServiceDuration {
  value: number;
  unit: {
    [key: string]: string;  // fr: 'min', en: 'min', etc.
  };
}

export interface Service {
  id: string;
  images: {
    main: string;
    [key: string]: string;
  };
  translations: {
    [key: string]: ServiceTranslation;  // fr, en, es, etc.
  };
  price: ServicePrice;
  duration: ServiceDuration;
}

export interface ServicesData {
  [key: string]: Service;
}
