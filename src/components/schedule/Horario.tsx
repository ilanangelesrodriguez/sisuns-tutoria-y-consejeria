import React from "react";
import { Table, Card, CardHeader, CardBody, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const Horario: React.FC = () => {
  // Días de la semana
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  // Horas de 7:00 AM a 12:00 AM
  const hours = Array.from({ length: 18 }, (_, i) => `${7 + i}:00`);

  return (
    <Card>
      <CardHeader>
        <h3>Horario Semanal</h3>
      </CardHeader>
      <CardBody>
        <Table aria-label="Horario Semanal" css={{ height: "auto", minWidth: "100%" }}>
          <TableHeader>
            <TableColumn>Horas</TableColumn>
            {days.map((day) => (
              <TableColumn key={day}>{day}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {hours.map((hour) => (
              <TableRow key={hour}>
                <TableCell>{hour}</TableCell>
                {days.map((day) => (
                  <TableCell key={`${day}-${hour}`} css={{ cursor: "pointer", "&:hover": { backgroundColor: "$gray200" } }}>
                    {/* Espacio para contenido dinámico */}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Horario;
