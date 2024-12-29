// src/components/Booking/BookingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HairstyleList from './hairstyleList/hairstyleList.component';
import Calendar from './calendar/calendar.component';
import TimeSlots from './calendar/timeSlots.component';
import BookingForm from './bookingForm/bookingForm.component';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedHairstyle, setSelectedHairstyle] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  const navigate = useNavigate();

  const handleHairstyleSelect = (hairstyle) => {
    setSelectedHairstyle(hairstyle);
    setStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep(3);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(4);
  };

  const handleBookingSubmit = (formData) => {
    // Envoyer les données à votre API
    console.log('Réservation:', formData);
    // Rediriger vers une page de confirmation
    navigate('/booking-confirmation');
  };

  return (
    <div className="container mx-auto py-8">
      {step === 1 && (
        <HairstyleList onSelectHairstyle={handleHairstyleSelect} />
      )}
      
      {step === 2 && (
        <Calendar
          selectedHairstyle={selectedHairstyle}
          onSelectDate={handleDateSelect}
          unavailableDates={[]} // À remplir avec vos dates indisponibles
        />
      )}
      
      {step === 3 && (
        <TimeSlots
          selectedDate={selectedDate}
          selectedHairstyle={selectedHairstyle}
          onSelectTime={handleTimeSelect}
          unavailableSlots={[]} // À remplir avec vos créneaux indisponibles
        />
      )}
      
      {step === 4 && (
        <BookingForm
          selectedHairstyle={selectedHairstyle}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
};

export default BookingPage;