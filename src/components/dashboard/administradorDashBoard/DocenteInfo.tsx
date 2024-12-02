import { Card } from "@nextui-org/react";
import Styles from "@/components/dashboard/docenteDashBoard/DocenteDashboard.module.css";

const DocenteInfo = () => (
  <Card className="dark:bg-wo-41B3A4 dark:text-white w-full text-center p-4 rounded-md border" shadow='none'>
    <h3 className={Styles.title}>INFORMACIÓN DEL DOCENTE</h3>
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

export default DocenteInfo;
