import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Input } from '@nextui-org/react';

interface FormData {
  username: string;
  email: string;
}

const StudentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: ''
  });

  // Manejar los cambios de entrada del formulario
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar datos al servidor simulado en Postman
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://b55824f8-e452-4f36-a8f2-7a5f1a8b0f3f.mock.pstmn.io/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convertir los datos del formulario en JSON
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Formulario enviado con éxito:', result);
      } else {
        console.log('Error al enviar el formulario:', response.statusText);
      }
    } catch (error) {
      console.log('Error en la solicitud:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg m-5">
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 text-center">Datos del Estudiante</h2>

      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          label="Nombre"
          placeholder="Nombre"
          onChange={handleInputChange}
          value={formData.username}
          className="mb-4"
        />
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          onChange={handleInputChange}
          value={formData.email}
          className="mb-4"
        />

        <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white my-4">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default StudentForm;
