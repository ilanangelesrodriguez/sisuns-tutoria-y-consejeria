import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';

const InfoPersonalDocente: React.FC = () => {
  // Estados para el formulario
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [celular, setCelular] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [escolaridad, setEscolaridad] = useState('');
  const [gradoAcademico, setGradoAcademico] = useState('');
  const [departamentoAcademico, setDepartamentoAcademico] = useState('');
  const [condicion, setCondicion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dedicacion, setDedicacion] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({ nombre, apellidoPaterno, apellidoMaterno, celular, correoElectronico, escolaridad, gradoAcademico, departamentoAcademico, condicion, categoria, dedicacion, clave });
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 text-center">Información del Docente</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Información Personal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <Input
              label="Nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full"
              required
            />
            <Input
              label="Apellido Paterno"
              placeholder="Apellido Paterno"
              value={apellidoPaterno}
              onChange={(e) => setApellidoPaterno(e.target.value)}
              className="w-full"
              required
            />
            <Input
              label="Apellido Materno"
              placeholder="Apellido Materno"
              value={apellidoMaterno}
              onChange={(e) => setApellidoMaterno(e.target.value)}
              className="w-full"
              required
            />
            <Input
              label="Celular"
              placeholder='Celular'
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              className="w-full"
              required
            />
            <Input
              label="Correo Electrónico"
              placeholder='Correo Electrónico'
              type="email"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
              className="w-full"
              required
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Datos Académicos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <Input
              label="Escolaridad"
              placeholder='Escolaridad'
              value={escolaridad}
              onChange={(e) => setEscolaridad(e.target.value)}
              className="w-full"
              required
            />
            <Input
              label="Grado Académico"
              placeholder='Grado Académico'
              value={gradoAcademico}
              onChange={(e) => setGradoAcademico(e.target.value)}
              className="w-full"
              required
            />
            <Input
              label="Departamento Académico"
              value={departamentoAcademico}
              placeholder='Departamento Académico'
              onChange={(e) => setDepartamentoAcademico(e.target.value)}
              className="w-full"
              required
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Datos Laborales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <Input
              label="Condición"
              placeholder='Condición'
              value={condicion}
              onChange={(e) => setCondicion(e.target.value)}
              className="w-full"
              required
            />
        
            <Input
              label="Categoría"
              placeholder='Categoría'
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full"
              required
            />
            <Input
              label="Dedicación"
              placeholder="Dedicación"
              value={dedicacion}
              onChange={(e) => setDedicacion(e.target.value)}
              className="w-full"
              required
            />
            <Input
              label="Clave"
              placeholder="Clave"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              className="w-full"
              required
            />
          </div>
        </div>

        <Button type="submit" size="lg" className="teal w-full bg-solid-41B3A4">Enviar</Button>
      </form>
    </div>
  );
};

export default InfoPersonalDocente;
