import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHairstyleServices } from '../../services/firebase.service';
import { Service, ServicesData } from '../types';
import HairstyleCard from './hairstyleCard.component';

export const HairstyleList: React.FC = () => {
  const [services, setServices] = useState<ServicesData>({});
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getHairstyleServices();
        setServices(servicesData);
      } catch (error) {
        console.error('Erreur lors du chargement des services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Object.values(services).map((service: Service) => (
        <HairstyleCard
          key={service.id}
          id={service.id}
          name={service.translations[currentLang]?.title || ''}
          description={service.translations[currentLang]?.description || ''}
          price={`${service.price.amount}${service.price.currency[currentLang]}`}
          duration={`${service.duration.value}${service.duration.unit[currentLang]}`}
          image={service.images.main}
        />
      ))}
    </div>
  );
};