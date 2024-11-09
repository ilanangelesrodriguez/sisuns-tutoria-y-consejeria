import React, { useState } from 'react';
import { Button} from '@nextui-org/react';

const AssignStudents: React.FC = () => {
  const [ciclo, setCiclo] = useState('');
  const [promocion, setPromocion] = useState('');

  const estudiantes = [
    { nombre: 'Jhoan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', ciclo: '2023-1', promocion: '2025' },
    { nombre: 'Lucía', apellidoPaterno: 'Sánchez', apellidoMaterno: 'Martínez', ciclo: '2023-1', promocion: '2024' },
    { nombre: 'Andrés', apellidoPaterno: 'González', apellidoMaterno: 'Rojas', ciclo: '2023-2', promocion: '2025' },
    { nombre: 'Carmen', apellidoPaterno: 'Castro', apellidoMaterno: 'Ortiz', ciclo: '2023-2', promocion: '2026' },
    { nombre: 'Raúl', apellidoPaterno: 'Fernández', apellidoMaterno: 'Lopez', ciclo: '2022-1', promocion: '2023' },
    { nombre: 'Jhoan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', ciclo: '2023-1', promocion: '2025' },
    { nombre: 'Lucía', apellidoPaterno: 'Sánchez', apellidoMaterno: 'Martínez', ciclo: '2023-1', promocion: '2024' },

  ];

  return (
    <div className="max-w-4xl mx-auto p-4 border border-gray-300 rounded-lg shadow-md my-5">
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 text-center">Asignar Estudiantes a Docente</h2>

      <select
            className="w-full border border-gray-300 rounded-md p-2 my-4"
          >
            <option value="">Seleccione Docente</option>
            <option value="2023-1">Carlos Alfredo</option>
          </select>

      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="block mb-1">Filtro: Ciclo</label>
          <select 
            value={ciclo} 
            onChange={(e) => setCiclo(e.target.value)} 
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Seleccione Ciclo</option>
            <option value="2023-1">2023-1</option>
            <option value="2023-2">2023-2</option>
            <option value="2022-1">2022-1</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1">Promoción</label>
          <select 
            value={promocion} 
            onChange={(e) => setPromocion(e.target.value)} 
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Seleccione Promoción</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Seleccionar</th>
            <th className="border border-gray-300 px-4 py-2">Nombre del Estudiante</th>
            <th className="border border-gray-300 px-4 py-2">Apellido Paterno</th>
            <th className="border border-gray-300 px-4 py-2">Apellido Materno</th>
            <th className="border border-gray-300 px-4 py-2">Ciclo</th>
            <th className="border border-gray-300 px-4 py-2">Promoción</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 px-4 py-2">{estudiante.nombre}</td>
              <td className="border border-gray-300 px-4 py-2">{estudiante.apellidoPaterno}</td>
              <td className="border border-gray-300 px-4 py-2">{estudiante.apellidoMaterno}</td>
              <td className="border border-gray-300 px-4 py-2">{estudiante.ciclo}</td>
              <td className="border border-gray-300 px-4 py-2">{estudiante.promocion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <Button className="bg-solid-41B3A4 text-white w-full" size="lg">Guardar</Button>
      </div>
    </div>
  );
};

export default AssignStudents;
