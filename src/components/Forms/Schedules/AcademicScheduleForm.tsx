import { useState } from 'react';
import { DatePicker, Button, Input, Card } from '@nextui-org/react';
import { CalendarDate } from '@nextui-org/react';

const AcademicScheduleForm: React.FC = () => {
  // Usamos CalendarDate en lugar de DateValue
  const [startTime, setStartTime] = useState<CalendarDate | null>(null);
  const [endTime, setEndTime] = useState<CalendarDate | null>(null);

  const handleSubmit = () => {
    console.log('Horario ID:', startTime);
    console.log('Curso:', endTime);
    // Aquí podrías agregar la lógica para enviar los datos al backend
  };

  return (
    <Card className="p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4">Horario Académico</h2>

      <label className="block text-gray-600 mb-1">Horario ID:</label>
      <Input
        type="text"
        placeholder="Horario ID"
        aria-label="Horario ID"
        className="w-full mb-2"
      />

      <label className="block text-gray-600 mb-1">Curso:</label>
      <Input
        type="text"
        placeholder="Curso"
        aria-label="Curso"
        className="w-full mb-2"
      />

      <label className="block text-gray-600 mb-1">Hora Inicio:</label>
      <DatePicker
        value={startTime}
        onChange={(date: CalendarDate | null) => setStartTime(date)}  // Usa CalendarDate o null
        aria-label="Hora de inicio"
        className="w-full mb-2"
        // format="hh:mm a" // Formato de hora (ajústalo según tus necesidades)
      />

      <label className="block text-gray-600 mb-1">Hora Fin:</label>
      <DatePicker
        value={endTime}
        onChange={(date: CalendarDate | null) => setEndTime(date)}  // Usa CalendarDate o null
        aria-label="Hora de fin"
        className="w-full mb-2"
        // format="hh:mm a" // Formato de hora (ajústalo según tus necesidades)
      />

      <Button
        className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        onClick={handleSubmit}
      >
        Guardar
      </Button>
    </Card>
  );
};

export default AcademicScheduleForm;
