import React, { useState } from 'react';
import { Input, Button, Select, SelectItem, DatePicker } from '@nextui-org/react';

const StudentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    celular: '',
    clave: '',
    codigoMatricula: '',
    sexo: '',
    fechaNacimiento: '',
    añoEstudio: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleDateChange = (value: any) => {
    setFormData({ ...formData, fechaNacimiento: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor o hacer alguna otra acción
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4">Datos del Estudiante</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            placeholder="Nombre"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <Input
            label="Apellido Paterno"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleInputChange}
            placeholder="Apellido Paterno"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <Input
            label="Apellido Materno"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleInputChange}
            placeholder="Apellido Materno"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <Input
            label="Celular"
            name="celular"
            value={formData.celular}
            onChange={handleInputChange}
            placeholder="Celular"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <Input
            label="Clave"
            name="clave"
            value={formData.clave}
            onChange={handleInputChange}
            placeholder="Clave"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <Input
            label="Código de Matrícula"
            name="codigoMatricula"
            value={formData.codigoMatricula}
            onChange={handleInputChange}
            placeholder="Código de Matrícula"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <DatePicker
            label="Fecha de Nacimiento"
            // value={formData.fechaNacimiento}
            onChange={handleDateChange}
            fullWidth
          />
        </div>

        <div className="mb-4">
          <Input
            label="Año de Estudio"
            name="añoEstudio"
            value={formData.añoEstudio}
            onChange={handleInputChange}
            placeholder="Año de Estudio"
            fullWidth
          />
        </div>

        <div className="mb-4 w-full ">
          <Select
            label="Sexo"
            placeholder="Selecciona el genero"
            className="w-full "
          >
            <SelectItem key="femenino" className='w-full flex'>
              Femenino
            </SelectItem>
            <SelectItem key="masculino">
              Masculino
            </SelectItem>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default StudentForm;
