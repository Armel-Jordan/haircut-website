export interface Hairstyle {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes?: string;
}