import Estudiante from '@/models/estudiante';
import axios from 'axios';

const API_URL = 'public/v1/api/estudiantes.json';

export const login = async (correo: string, clave: string) => {
  try {
    const response = await axios.get(API_URL);
    const estudiantes = response.data;

    const estudiante = estudiantes.find((est: any) => est.correo_institucional === correo && est.clave === clave);

    if (!estudiante) {
      throw new Error('Credenciales incorrectas');
    }

    return estudiante;
  } catch (error) {
    throw new Error((error as any).response?.data?.message || 'Error al iniciar sesión');
  }
};

export const getEstudiantes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener estudiantes');
  }
};

export const getEstudiante = async (id: string): Promise<Estudiante> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el estudiante');
  }
};

export const updateEstudiante = async (id: string, estudianteData: Partial<Estudiante>): Promise<Estudiante> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, estudianteData);
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el estudiante');
  }
};