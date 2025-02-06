import { getDatabase, ref, get } from 'firebase/database';
import { ServicesData } from '../booking/types';

export const getHairstyleServices = async (language: string = 'fr'): Promise<ServicesData> => {
  const db = getDatabase();
  const servicesRef = ref(db, 'services');
  
  try {
    const snapshot = await get(servicesRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return {};
  } catch (error) {
    console.error('Erreur lors de la récupération des services:', error);
    throw error;
  }
};
