import { Card } from "@nextui-org/react";
import { useAuth } from "@/context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./StudentDashboard.module.css";
import "./StudentDashboard.module.css";

const StudentInfo: React.FC = () => {
  const { estudiante } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!estudiante) {
      // Redirige al usuario si no está autenticado
      navigate("/main_auth");
    }
  }, [estudiante, navigate]);

  return (
    <Card className="dark:bg-wo-41B3A4 dark:text-white w-full text-center p-4 rounded-md border" shadow="none">
      {estudiante && (
        <>
          <h3 className={Styles.title}>INFORMACIÓN DEL ESTUDIANTE</h3>
          <p className="text-foreground mt-2">
            Estudiante: <span className="font-bold">{estudiante.nombre} {estudiante.apellido_paterno} {estudiante.apellido_materno}</span>
          </p>
          <p className="text-foreground mt-2">
            Código: <span className="font-bold">{estudiante.codigo_matricula}</span>
          </p>
          <p className="text-foreground mt-2">
            Año de Estudio: <span className="font-bold">{estudiante.anio_estudio}</span>
          </p>
        </>
      )}
    </Card>
  );
};

export default StudentInfo;