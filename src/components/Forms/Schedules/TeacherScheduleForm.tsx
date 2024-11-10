
import { Card } from "@nextui-org/react";
const TeacherScheduleForm = () => {
  return (
    
      <Card className="p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4">Horario Docente</h2>
        <label className="block text-gray-600 mb-1">Horario ID:</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" />
        <label className="block text-gray-600 mb-1">Docente ID:</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 w-full">Guardar</button>
      </Card>
    
  );
};

export default TeacherScheduleForm;
