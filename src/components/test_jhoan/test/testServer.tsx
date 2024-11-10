import { useEffect, useState } from 'react';
import { Card } from '@nextui-org/react'; // Importando componentes de NextUI

const Formulario = () => {
  const [data, setData] = useState<any>(null); // Estado para almacenar la respuesta
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Realizando la solicitud GET al servidor simulado
    fetch('https://b55824f8-e452-4f36-a8f2-7a5f1a8b0f3f.mock.pstmn.io/pet/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Guardando los datos en el estado
        setLoading(false); // Cambiar estado de carga
      })
      .catch((error) => {
        setError(error.message); // Manejo de errores
        setLoading(false); // Cambiar estado de carga
      });
  }, []); // El array vacío asegura que se ejecute solo una vez al cargar el componente

  // Si hay error
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  // Si está cargando
  if (loading) {
    return <div className="text-blue-500">Cargando...</div>;
  }

  // Si la data es obtenida correctamente
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-4" shadow="sm">
        <h3 className="mb-4 text-center">Nombre del Usuario</h3>
        <h2 className="text-center font-10 font-semibold">{data.nombre}</h2>
      </Card>
    </div>
  );
};

export default Formulario;
