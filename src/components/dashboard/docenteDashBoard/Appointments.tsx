import React from 'react';
import { Button } from '@nextui-org/react';

const Appointments: React.FC = () => {
  const isFinalized = true; // Cambia esto según tu lógica

  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold mb-4">DOCENTE</h2>
      <p className="text-lg">Daza Alfredo Vergaray</p>
      <hr className="my-4" />

      <h3 className="text-lg font-semibold mb-2">HORARIOS RESERVADOS</h3>
      <div className="flex flex-col space-y-2">
        <div className="border border-gray-300 p-2 rounded-md">
          Miércoles 12:09 - 12:03
        </div>
        <div className="border border-gray-300 p-2 rounded-md">
          Viernes 12:03 - 21:22
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-4 mb-2">ESTADO</h3>
      <div className="flex space-x-2">
        <Button className="bg-blue-500 text-white" disabled>
          Finalizado
        </Button>
        <Button 
          className="bg-green-500 text-white" 
          disabled={!isFinalized}
        >
          Responder formulario
        </Button>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        El botón para responder formulario solo se habilitará cuando el estado de la cita sea "Finalizado".
      </p>
    </div>
  );
};

export default Appointments;
