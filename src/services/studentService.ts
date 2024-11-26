import apiClient from "@/config/apiClient";
import { Docente } from "@/models/docente";
import Estudiante from "@/models/estudiante";

const API_URL = 'public/v1/api/docentesAsignados.json';

export const getEstudiantes = async (): Promise<Estudiante[]> => {
    try {
      const response = await fetch('public/v1/api/estudiantes.json');
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      const data = await response.json();
      return data as Estudiante[];
    } catch (error) {
      console.error('Error al obtener estudiantes:', error);
      throw error;
    }
  };
  
  export const getEstudianteById = async (id: string): Promise<Estudiante> => {
    try {
      const estudiantes = await getEstudiantes();
      const estudiante = estudiantes.find(est => est.estudiante_id === id);
      if (!estudiante) {
        throw new Error(`Estudiante con ID ${id} no encontrado`);
      }
      return estudiante;
    } catch (error) {
      console.error(`Error al obtener el estudiante con ID ${id}:`, error);
      throw error;
    }
  };

  /*
export const getEstudiantes = async (): Promise<Estudiante[]> => {
  try {
    const response = await apiClient.get('/estudiantes');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    throw error;
  }
};

export const getEstudianteById = async (id: string): Promise<Estudiante> => {
  try {
    const response = await apiClient.get(`/estudiantes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el estudiante con ID ${id}:`, error);
    throw error;
  }
};
*/
export const createEstudiante = async (estudiante: Estudiante): Promise<Estudiante> => {
  try {
    const response = await apiClient.post('/estudiantes', estudiante);
    return response.data;
  } catch (error) {
    console.error('Error al crear estudiante:', error);
    throw error;
  }
};

export const updateEstudiante = async (id: string, estudiante: Estudiante): Promise<Estudiante> => {
  try {
    const response = await apiClient.put(`/estudiantes/${id}`, estudiante);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar el estudiante con ID ${id}:`, error);
    throw error;
  }
};

export const deleteEstudiante = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/estudiantes/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el estudiante con ID ${id}:`, error);
    throw error;
  }
};

export const getDocentesAsignados = async (): Promise<Docente[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    const data = await response.json();
    return data as Docente[];
  } catch (error) {
    console.error('Error al obtener docentes asignados:', error);
    throw error;
  }
};