import React, { useEffect, useState } from 'react';
import ProfessorItem from './ProfessorItem';
import { getDocenteConsejeroDeEstudiante, getDocenteTutorDeEstudiante } from '@/services/studentService';
import { Docente } from '@/models/docente'; // Importa la interfaz Docente

const Profesores: React.FC = () => {
  const [tutor, setTutor] = useState<Docente>();
  const [consejero, setConsejero] = useState<Docente>();
  const [error, setError] = useState<string | null>(null); // Estado para errores
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const consejero = await getDocenteConsejeroDeEstudiante();
        const tutor = await getDocenteTutorDeEstudiante(); // Llama al servicio para obtener datos
        setConsejero(consejero); // Guarda los datos obtenidos
        setTutor(tutor); // Guarda los datos obtenidos
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
      {tutor || consejero ? (
        <>
          {/* Renderiza el tutor si existe */}
          {tutor && (
            <ProfessorItem
              tipo="Tutor"
              nombre={`${tutor.nombre} ${tutor.apellidoPaterno} ${tutor.apellidoMaterno}`}
              celular={tutor.celular}
              correo={tutor.correoInstitucional}
            />
          )}

          {/* Renderiza el consejero si existe */}
          {consejero && (
            <ProfessorItem
              tipo="Consejero"
              nombre={`${consejero.nombre} ${consejero.apellidoPaterno} ${consejero.apellidoMaterno}`}
              celular={consejero.celular}
              correo={consejero.correoInstitucional}
            />
          )}
        </>
      ) : (
        <p>No hay docentes asignados disponibles.</p>
      )}
    </div>
  );
};

export default Profesores;
