import React from 'react';
import AppointmentItem from './AppointmentItem';

const appointments = [
  {
    tutorName: "Cruz Castillo Jhoan Antuni",
    times: ["Lunes 7:30 - 9:00", "Lunes 7:30 - 9:00", "Lunes 7:30 - 9:00"],
    modality: "Grupal"
  },
  {
    tutorName: "Cruz Castillo Jhoan Antuni",
    times: ["Lunes 7:30 - 9:00", "Lunes 7:30 - 9:00", "Lunes 7:30 - 9:00"],
    modality: "Individual"
  }
];

const Appointments = () => (
  <div className="flex flex-col gap-6 size:lg" >
    {appointments.map((appointment, index) => (
      <AppointmentItem
        key={index}
        tutorName={appointment.tutorName}
        times={appointment.times}
        modality={appointment.modality}
      />
    ))}
  </div>
);

export default Appointments;
