import React from 'react';
import { format, addDays, isBefore, startOfToday } from 'date-fns';

export const Calendar = ({ 
  selectedDate, 
  onDateSelect, 
  unavailableDates = [] 
}: {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  unavailableDates?: Date[];
}) => {
  const today = startOfToday();
  const dates = Array.from({ length: 14 }, (_, i) => addDays(today, i));

  const isDateUnavailable = (date: Date) => {
    return isBefore(date, today) || unavailableDates.some(
      unavailable => format(unavailable, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
        <div key={day} className="text-center font-semibold text-sm py-2">
          {day}
        </div>
      ))}
      {dates.map((date, i) => (
        <button
          key={i}
          onClick={() => !isDateUnavailable(date) && onDateSelect(date)}
          disabled={isDateUnavailable(date)}
          className={`
            p-2 rounded-lg text-center
            ${isDateUnavailable(date) ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 
              selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                ? 'bg-black text-white'
                : 'hover:bg-gray-100'}
          `}
        >
          {format(date, 'd')}
        </button>
      ))}
    </div>
  );
};