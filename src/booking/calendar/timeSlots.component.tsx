import React from 'react';
import { TimeSlot } from '../types/index.component';

export const TimeSlots = ({
  slots,
  selectedTime,
  onTimeSelect
}: {
  slots: TimeSlot[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {slots.map((slot, index) => (
        <button
          key={index}
          onClick={() => slot.available && onTimeSelect(slot.time)}
          disabled={!slot.available}
          className={`
            p-2 rounded-lg text-center
            ${!slot.available ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
              selectedTime === slot.time ? 'bg-black text-white' : 'hover:bg-gray-100'}
          `}
        >
          {slot.time}
        </button>
      ))}
    </div>
  );
};