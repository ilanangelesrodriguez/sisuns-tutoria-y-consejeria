import React from 'react';
import {Card, Button} from "@nextui-org/react";
interface AppointmentItemProps {
  tutorName: string;
  times: string[];
  modality: string;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ tutorName, times, modality }) => (
  <Card className="border p-4 rounded-md shadow-sm">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ borderColor: "#ff6f61", color: "#ff6f61" }}>
        {/* Placeholder for Tutor Avatar */}
      </div>
      <div>
        <p className='bold font-bold'>TUTOR ASIGNADO</p>
        <p>{tutorName}</p>
      </div>
    </div>
    <div className="mb-4">
      <p className='font-bold'>Horarios:</p>


      <div className="flex gap-2">
        {times.map((time, i) => (
          <span key={i} className="px-2 py-1 border rounded">
            {time}
          </span>
        ))}
      </div>


    </div>
    <div>
      <p>Modalidad de cita:</p>
      <div className="flex gap-4 mt-2">
        <Button className='font-bold bg-solid-41B3A4 text-green-50'>Grupal</Button>
        <Button className='font-bold bg-solid-41B3A4 text-green-50'>Individual</Button>
      </div>
    </div>
  </Card>
);

export default AppointmentItem;