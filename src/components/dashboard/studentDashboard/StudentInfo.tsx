import { Card } from "@nextui-org/react";
import Styles from "./StudentDashboard.module.css";
import "./StudentDashboard.module.css";

// #92B7AD ...gris______ color-92B7AD
// #C7D4D8 ...gris claro gaa______ color-C7D4D8
// #ABBFC6 ...gris metalico______ color-ABBFC6
// #41B3A4 … verde fuerte______ color-41B3A4
// #50AB91 … verde sucio______ color-50AB91

const StudentInfo = () => (
//className="bg-white text-black dark:bg-gray-800 dark:text-white p-4 rounded"
  <Card className="dark:bg-wo-41B3A4 dark:text-white w-full text-center p-4 rounded-md border" shadow='none'>
    <h3 className={Styles.title}>INFORMACIÓN DEL ESTUDIANTE</h3>
    <p className="text-foreground mt-2">
      Estudiante: <span className="font-bold">James Martinez</span>
    </p>
    <p className="text-foreground mt-2">
      Código: <span className="font-bold">0202114005</span>
    </p>
    <p className="text-foreground mt-2">
      Ciclo: <span className="font-bold">VIII</span>
    </p>
  </Card>
);

export default StudentInfo;
