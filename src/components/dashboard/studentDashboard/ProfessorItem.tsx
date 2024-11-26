import React from 'react';
import { useNavigate } from "react-router-dom";
import {Card, Button, Chip} from "@nextui-org/react";
interface AppointmentItemProps {
  tutorName: string;
  celular: string;
  correo: string;
  modality: string;
}

const ProfessorItem: React.FC<AppointmentItemProps> = ({ tutorName, celular, correo }) => {
  const navigate = useNavigate();
  const handleFormGroup = () => {
    navigate("/group_appointment");
  };
  const handleFormSingle = () =>{
    navigate("/single_appointment");
  }
  return (
    
    <Card className="border p-6 rounded-md shadow-sm">
      <div className="flex p-0 items-center gap-4 mb-4">
        <div className="w-12 p-0 h-12 rounded-full flex items-center justify-center font-bold" style={{ borderColor: "#ff6f61", color: "#ff6f61" }}>
        <img
          src="public/images/perfil/avatar_docente.jpg" // URL del avatar (puede ser dinámica)
          alt="Tutor Avatar"
          className="w-full h-full rounded-full object-cover"
        />
        </div>
        <div>
          <p className='bold font-bold'>DOCENTE ASIGNADO</p>
          <p>{tutorName}</p>
        </div>
      </div>
      <div className="mb-4 p-1">
        <h4>Datos de contacto:</h4>
        <div className="flex gap-2">
            <Chip radius="lg">+51 {celular}</Chip>
            <Chip radius="lg"> {correo}</Chip>
        </div>


      </div>

      <div className="mb-4 p-1">
        <div className="flex gap-3 mt-0">
          <Button className='font-bold bg-solid-41B3A4 text-green-50' onClick={handleFormGroup}>Reservar Cita</Button>
          <Button className='font-bold bg-solid-41B3A4 text-green-50' onClick={handleFormSingle}>Comparar</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfessorItem;