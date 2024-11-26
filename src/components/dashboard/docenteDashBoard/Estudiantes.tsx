import React, { useEffect, useState } from 'react';
import StudentItem from './StudentItem';
import { getEstudiantesAsignados } from '@/services/professorServices';
import Estudiante from '@/models/estudiante';

const Estudiantes: React.FC = () => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]); // Datos dinámicos de docentes
  const [error, setError] = useState<string | null>(null); // Estado para errores
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const data = await getEstudiantesAsignados(); // Llama al servicio para obtener datos
        setEstudiantes(data); // Guarda los datos obtenidos
      } catch (err) {
        setError('Error al cargar los docentes asignados');
        console.error(err);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchDocentes();
  }, []); // Se ejecuta solo una vez al montar el componente

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col gap-6 size:lg w-full">
      {estudiantes.length === 0 ? (
        <p>No hay docentes asignados disponibles.</p>
      ) : (
        estudiantes.map((estudiante, index) => (
          <StudentItem
            key={index}
            tutorName={`${estudiante.nombre} ${estudiante.apellido_paterno} ${estudiante.apellido_materno}`}
            celular={estudiante.celular}
            correo={estudiante.correo_institucional}
            fecha_nacimiento={estudiante.fecha_nacimiento}
            codigo_matricula={estudiante.codigo_matricula}
            anio_estudio={estudiante.anio_estudio}
          />
        ))
      )}
    </div>
  );
};

export default Estudiantes;
