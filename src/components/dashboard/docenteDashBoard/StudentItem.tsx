import React from 'react';
import { useNavigate } from "react-router-dom";
import {Card, Button, Chip} from "@nextui-org/react";
import { interpretarFecha } from '@/services/interpreteFechas';
interface AppointmentItemProps {
  tutorName: string;
  celular: string;
  correo: string;
  fecha_nacimiento: string;
  codigo_matricula: string;
  anio_estudio: string;

}

const StudentItem: React.FC<AppointmentItemProps> = ({ tutorName, celular, correo, fecha_nacimiento, codigo_matricula, anio_estudio}) => {
  const navigate = useNavigate();
  const handleFormSingle = () =>{
    navigate("/single_appointment");
  }
  return (
    
    <Card className="border p-6 rounded-md shadow-sm">
      <div className="flex p-0 items-center gap-4 mb-2">
        <div className="w-12 p-0 h-12 rounded-full flex items-center justify-center font-bold" style={{ borderColor: "#ff6f61", color: "#ff6f61" }}>
        <img
          src="public/images/perfil/avatar_docente.jpg" // URL del avatar (puede ser dinámica)
          alt="Tutor Avatar"
          className="w-full h-full rounded-full object-cover"
        />
        </div>
        <div>
          <p className='bold font-bold'>{tutorName}</p>
          <p>Nacido el  {interpretarFecha(fecha_nacimiento)}</p>
        </div>
      </div>
      <div className="mb-2 p-1 gap-4">
        <div className="flex gap-2">
            <Chip radius="lg" className='bg-wo-41B3A4'><span className='bold font-bold'>Código de matrícula: </span> {codigo_matricula}</Chip>
            <Chip radius="lg"><span className='bold font-bold'>Año de estudio: </span> {anio_estudio}</Chip>
        </div>
        <div className="flex gap-2 mt-2">
            <Chip radius="lg"><span className='bold font-bold'>Celular: </span> +51 {celular}</Chip>
            <Chip radius="lg" className='bg-wo-41B3A4'><span className='bold font-bold'>Correo: </span> {correo}</Chip>
        </div>
      </div>

      <div className="mb-4 p-1">
        <div className="flex gap-2 mt-0">
          <Button className='font-bold bg-solid-41B3A4 text-green-50' onClick={handleFormSingle}>Comparar</Button>
        </div>
      </div>
    </Card>
  );
};

export default StudentItem;