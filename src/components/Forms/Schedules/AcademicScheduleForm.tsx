import  { useState } from 'react';
import DatePicker from 'react-datepicker';

const AcademicScheduleForm = () => {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  return (
    
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4">Horario Académico</h2>
        <label className="block text-gray-600 mb-1">Horario ID:</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" />
        <label className="block text-gray-600 mb-1">Curso:</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" />

        <label className="block text-gray-600 mb-1">Hora Inicio:</label>
        <DatePicker
          selected={startTime}
          onChange={(date) => setStartTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Hora"
          dateFormat="h:mm aa"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholderText="Seleccione la hora de inicio"
        />

        <label className="block text-gray-600 mb-1">Hora Fin:</label>
        <DatePicker
          selected={endTime}
          onChange={(date) => setEndTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Hora"
          dateFormat="h:mm aa"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholderText="Seleccione la hora de fin"
        />

        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 w-full">Guardar</button>
      </div>
    
  );
};

export default AcademicScheduleForm;
