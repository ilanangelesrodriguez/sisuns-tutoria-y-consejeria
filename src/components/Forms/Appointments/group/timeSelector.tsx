import React from 'react';
import { Checkbox } from '@nextui-org/react';

interface TimeSelectorProps {
  selectedTimes: string[];
  onTimeChange: (time: string) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ selectedTimes, onTimeChange }) => {
  const times = ['Lunes 32-34pm', 'Martes 32-34pm', 'Miércoles 32-34pm'];

  return (
    <div className="w-full md:flex-nowrap gap-1 border-gray-300 py-2">
      <h4 className='font-bold text-start w-full my-3'>Horarios:</h4>
      <div className='flex w-full flex-wrap md:flex-nowrap gap-1'>
        {times.map((time) => (
          <Checkbox
            key={time}
            isSelected={selectedTimes.includes(time)}
            onChange={() => onTimeChange(time)}
            radius="full"
            color="success"
          >
            {time}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;
