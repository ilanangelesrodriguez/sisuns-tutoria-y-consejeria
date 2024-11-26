// Función para interpretar fechas
export const interpretarFecha = (fecha: string): string => {
    // Validar si el formato de fecha es correcto
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
      throw new Error("Formato de fecha inválido. Debe ser YYYY-MM-DD.");
    }
  
    // Descomponer la fecha en partes
    const [year, month, day] = fecha.split("-").map(Number);
  
    // Meses en español
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
  
    // Validar que el mes sea válido
    if (month < 1 || month > 12) {
      throw new Error("Mes inválido.");
    }
  
    // Devolver el formato "15 de Agosto del 2005"
    return `${day} de ${meses[month - 1]} del ${year}`;
  };
  