import apiClient from "@/config/apiClient";
import { Docente } from "@/models/docente";
import Estudiante from "@/models/estudiante";

// Obtener todos los docentes
export const getAllDocentes = async (): Promise<Docente[]> => {
  try {
    const response = await apiClient.get("/docente/allDocentes");
    return response.data; // Devuelve la lista de docentes
  } catch (error) {
    console.error("Error al obtener todos los docentes:", error);
    throw error;
  }
};

// Obtener un docente por ID
export const getDocenteById = async (id: string): Promise<Docente> => {
  try {
    const response = await apiClient.get(`/docente/buscar/${id}`);
    return response.data; // Devuelve el docente encontrado
  } catch (error) {
    console.error(`Error al obtener el docente con ID ${id}:`, error);
    throw error;
  }
};

// Crear un docente
export const createDocente = async (docente: Docente): Promise<Docente> => {
  try {
    const response = await apiClient.post("/docente/insert", docente);
    return response.data; // Devuelve el docente creado
  } catch (error) {
    console.error("Error al crear el docente:", error);
    throw error;
  }
};

// Actualizar un docente
export const updateDocente = async (docente: Docente): Promise<Docente> => {
  try {
    const response = await apiClient.put("/docente/update", docente);
    return response.data; // Devuelve el docente actualizado
  } catch (error) {
    console.error(`Error al actualizar el docente con ID ${docente.id}:`, error);
    throw error;
  }
};

// Eliminar un docente
export const deleteDocente = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/docente/delete/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el docente con ID ${id}:`, error);
    throw error;
  }
};



// ############## ACTIVA EN PRUEBA ONLINE #####################
/*
// Obtener estudiantes asignados a un docente en un semestre específico
export const getEstudiantesAsignados = async (semestre: string, id: string): Promise<Estudiante[]> => {
  try {
    const response = await apiClient.get(`/docente/estudiantesAsignados/${semestre}/${id}`);
    return response.data; // Devuelve la lista de estudiantes asignados
  } catch (error) {
    console.error(`Error al obtener estudiantes asignados para el docente con ID ${id} en el semestre ${semestre}:`, error);
    throw error;
  }
};

*/
// ############## DESACTIVA EN PRUEBA ONLINE #####################
export const getEstudiantesAsignados = async (): Promise<Estudiante[]> => {
    try {
      const response = await fetch('public/v1/api/estudiantesAsignados.json');
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      const data = await response.json();
      return data as Estudiante[];
    } catch (error) {
      console.error('Error al obtener docentes asignados:', error);
      throw error;
    }
  };