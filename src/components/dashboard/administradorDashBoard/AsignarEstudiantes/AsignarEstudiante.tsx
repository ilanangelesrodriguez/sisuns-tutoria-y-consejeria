import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Estudiantes from "./Estudiantes";

const AsignarEstudiante = () => {
  return (
    <Card fullWidth className="border-0 shadow-none">
      <CardBody className="flex flex-row items-center justify-center gap-4 border-0">
        <Input size="sm" type="text" label="Semestre Académico" />
        <Button
          className="p-1 w-[170px]"
          size="sm"
          color="primary"
          variant="bordered"
        >
          Asignar Estudiante
        </Button>
      </CardBody>
      <CardBody className="flex flex-row items-center justify-center gap-4 border-0">
        <Estudiantes />
      </CardBody>
      <CardBody className="flex flex-row items-center justify-center gap-4 border-0">
        <Input size="sm" type="text" label="Semestre Académico" />
        <Button
          className="p-1 w-[170px]"
          size="sm"
          color="primary"
          variant="solid"
        >
            Asignar Docente
        </Button>
      </CardBody>
    </Card>
  );
};

export default AsignarEstudiante;
