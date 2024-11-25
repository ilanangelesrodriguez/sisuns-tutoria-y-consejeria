interface Cuestionario {
    cuestionario_id: string;
    estudiante_id: string;
    archivo: Record<string, any>;
    tipo: string;
  }

export default Cuestionario;