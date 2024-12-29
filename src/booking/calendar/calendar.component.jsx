import React, { useState } from 'react';

const Calendar = ({ selectedHairstyle, onSelectDate, unavailableDates }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
  };

  const isDateUnavailable = (date) => {
    if (date < new Date().setHours(0, 0, 0, 0)) return true;
    return unavailableDates.some(unavailable => 
      unavailable.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="grid grid-cols-7 gap-2">
        {getDaysInMonth(currentMonth).map((date) => (
          <button
            key={date.toString()}
            onClick={() => !isDateUnavailable(date) && onSelectDate(date)}
            disabled={isDateUnavailable(date)}
            className={`p-2 rounded ${
              isDateUnavailable(date)
                ? 'bg-gray-200 text-gray-400'
                : 'bg-white hover:bg-blue-100'
            }`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;