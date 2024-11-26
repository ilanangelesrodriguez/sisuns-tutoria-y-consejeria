import React, { useEffect, useState } from 'react';
import ProfessorItem from './ProfessorItem';
import { getDocentesAsignados } from '@/services/studentService';
import { Docente } from '@/models/docente'; // Importa la interfaz Docente

const Profesores: React.FC = () => {
  const [docentes, setDocentes] = useState<Docente[]>([]); // Datos dinámicos de docentes
  const [error, setError] = useState<string | null>(null); // Estado para errores
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const data = await getDocentesAsignados(); // Llama al servicio para obtener datos
        setDocentes(data); // Guarda los datos obtenidos
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
      {docentes.length === 0 ? (
        <p>No hay docentes asignados disponibles.</p>
      ) : (
        docentes.map((docente, index) => (
          <ProfessorItem
            key={index}
            tutorName={`${docente.nombre} ${docente.apellidoPaterno} ${docente.apellidoMaterno}`}
            celular={docente.celular}
            correo={docente.correoInstitucional}
            modality="Grupal" // Ajusta según los datos reales si están disponibles
          />
        ))
      )}
    </div>
  );
};

export default Profesores;
