import React from 'react';

const TimeSlots = ({ selectedDate, selectedHairstyle, onSelectTime, unavailableSlots }) => {
  const generateTimeSlots = () => {
    const slots = [];
    const start = 9; // 9h
    const end = 18; // 18h
    
    for (let hour = start; hour < end; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    
    return slots;
  };

  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {generateTimeSlots().map((time) => (
        <button
          key={time}
          onClick={() => onSelectTime(time)}
          disabled={unavailableSlots.includes(time)}
          className={`p-2 rounded ${
            unavailableSlots.includes(time)
              ? 'bg-gray-200 text-gray-400'
              : 'bg-white hover:bg-blue-100 border'
          }`}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;