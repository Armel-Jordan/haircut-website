import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar } from './calendar/calendar.component';
import { TimeSlots } from './calendar/timeSlots.component';
import BookingForm from './bookingForm/bookingForm.component';
import { hairstyles } from './hairstyleList/hairstyles.component';
import { TimeSlot, BookingFormData } from './types/index.component';

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const hairstyle = hairstyles.find(h => h.id === Number(id));

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<BookingFormData | null>(null);

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

  const handleBookingSubmit = (data: BookingFormData) => {
    setFormData(data);
    setStep(4); // Aller à l'étape de confirmation
  };

  const handleConfirmBooking = () => {
    // Ici vous enverriez normalement les données à votre backend
    console.log('Booking confirmed:', {
      hairstyle,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    
    // Naviguer vers une page de confirmation ou afficher un message de succès
    alert('Booking confirmed! Thank you for choosing our salon.');
    navigate('/');
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/services');
    }
  };

  const getStepTitle = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return 'Select a Date';
      case 2:
        return 'Select a Time';
      case 3:
        return 'Your Information';
      case 4:
        return 'Confirm Booking';
      default:
        return '';
    }
  };

  if (!hairstyle) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
                  ${step >= stepNumber ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {stepNumber}
                </div>
                <div className="text-xs text-center text-gray-600">
                  {getStepTitle(stepNumber)}
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-2 bg-gray-200 rounded">
            <div 
              className="absolute h-full bg-pink-600 rounded transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
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

            {step === 4 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Confirm Your Booking</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Selected Service</h3>
                    <p>{hairstyle.name} - ${hairstyle.price}</p>
                    <p className="text-gray-600">{hairstyle.duration} minutes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Date & Time</h3>
                    <p>{selectedDate?.toLocaleDateString()}</p>
                    <p>{selectedTime}</p>
                  </div>
                  {formData && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Your Information</h3>
                      <p>{formData.firstName} {formData.lastName}</p>
                      <p>{formData.email}</p>
                      <p>{formData.phone}</p>
                      {formData.notes && (
                        <div className="mt-2">
                          <p className="font-semibold">Notes:</p>
                          <p>{formData.notes}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleConfirmBooking}
                  className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handleBack}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>
            {step < 4 && (
              <div className="text-sm text-gray-600">
                Step {step} of 4
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;