import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar } from './calendar/calendar.component';
import { TimeSlots } from './calendar/timeSlots.component';
import BookingForm from './bookingForm/bookingForm.component';
import { hairstyles } from './hairstyleList/hairstyles.component';
import { TimeSlot, BookingFormData } from './types/index.component';

 const BookingPage =() => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const hairstyle = hairstyles.find(h => h.id === Number(id));

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Mock time slots - in a real app, these would come from an API
  const [timeSlots] = useState<TimeSlot[]>([
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: false },
    { time: '4:00 PM', available: true },
  ]);

  useEffect(() => {
    if (!hairstyle) {
      navigate('/services');
    }
  }, [hairstyle, navigate]);

  const handleBookingSubmit = (formData: BookingFormData) => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', {
      hairstyle,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    
    // Navigate to a confirmation page or show a success message
    alert('Booking confirmed! Thank you for choosing our salon.');
    navigate('/');
  };

  if (!hairstyle) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Book {hairstyle.name}</h1>
          <p className="text-gray-600">${hairstyle.price} • {hairstyle.duration} minutes</p>
        </div>

        <div className="space-y-8">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={(date) => {
                  setSelectedDate(date);
                  setStep(2);
                }}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select a Time</h2>
              <TimeSlots
                slots={timeSlots}
                selectedTime={selectedTime}
                onTimeSelect={(time) => {
                  setSelectedTime(time);
                  setStep(3);
                }}
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Complete Your Booking</h2>
              <BookingForm onSubmit={handleBookingSubmit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;