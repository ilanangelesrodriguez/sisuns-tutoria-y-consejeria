import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  select,
  Tooltip,
  Chip,
} from "@nextui-org/react";
import { ClockIcon, MinusCircleIcon } from "@/components/icons";
import { wrap } from "framer-motion";

const ScheduleItem = () => {
  // ESTADO PARA ALMACENAR LAS SELECCIONES DE LOS HORARIOS POR DÍA.
  const [selected, setSelected] = useState<string[]>(["", "", ""]);

  // Función para manejar el clic en los botones
  const selectHoraInicio = (key: string) => {
    const newSelected = [...selected];

    // Si `key` ya está en el arreglo, lo eliminamos
    if (newSelected.includes(key)) {
      newSelected[newSelected.indexOf(key)] = ""; // Eliminar el valor
    } else {
      // Asignar el `key` al primer espacio vacío
      if (newSelected[0] === "") {
        newSelected[0] = key;
      } else if (newSelected[1] === "") {
        newSelected[1] = key;
      } else {
        newSelected[2] = key;
      }
    }

    // Actualizar el estado una sola vez
    setSelected(newSelected);
  };

  // Datos para las filas (horas)
  const Btn = (hora:string) => {
    return(
      <Button
      className="rounded-full"
      style={{
        height: "40px",
        fontSize: "2em",
        width: "7px",
      }}
      color={selected.includes(hora) ? "danger": "secondary"}
      isIconOnly
      onClick={() => {
        selectHoraInicio(hora);
      }}
      variant="solid"
    >
      {
        selected.includes(hora) ? <ClockIcon />: <MinusCircleIcon color="white" />
      }
      
    </Button>
    );
  };
  const rows = [
    {
      key: "1",
      hour: "7:00",
      monday: Btn("Lunes 7:00 AM - 8:00 AM"),
      tuesday: Btn("Martes 7:00 AM - 8:00 AM"),
      wednesday: Btn("Miercoles 7:00 AM - 8:00 AM"),
      thursday: Btn("Jueves 7:00 AM - 8:00 AM"),
      friday: Btn("Viernes 7:00 AM - 8:00 AM"),
      saturday: Btn("Sábado 7:00 AM - 8:00 AM"),
    },
    {
      key: "2",
      hour: "8:00",
      monday: Btn("Lunes 8:00 AM - 9:00 AM"),
      tuesday: Btn("Martes 8:00 AM - 9:00 AM"),
      wednesday: Btn("Miercoles 8:00 AM - 9:00 AM"),
      thursday: Btn("Jueves 8:00 AM - 9:00 AM"),
      friday: Btn("Viernes 8:00 AM - 9:00 AM"),
      saturday: Btn("Sábado 8:00 AM - 9:00 AM"),
    },
    {
      key: "3",
      hour: "9:00",
      monday: Btn("Lunes 9:00 AM - 10:00 AM"),
      tuesday: Btn("Martes 9:00 AM - 10:00 AM"),
      wednesday: Btn("Miercoles 9:00 AM - 10:00 AM"),
      thursday: Btn("Jueves 9:00 AM - 10:00 AM"),
      friday: Btn("Viernes 9:00 AM - 10:00 AM"),
      saturday: Btn("Sábado 9:00 AM - 10:00 AM"),
    },
    {
      key: "4",
      hour: "10:00",
      monday: Btn("Lunes 10:00 AM - 11:00 AM"),
      tuesday: Btn("Martes 10:00 AM - 11:00 AM"),
      wednesday: Btn("Miercoles 10:00 AM - 11:00 AM"),
      thursday: Btn("Jueves 10:00 AM - 11:00 AM"),
      friday: Btn("Viernes 10:00 AM - 11:00 AM"),
      saturday: Btn("Sábado 10:00 AM - 11:00 AM"),
    },
    {
      key: "5",
      hour: "11:00",
      monday: Btn("Lunes 11:00 AM - 12:00 PM"),
      tuesday: Btn("Martes 11:00 AM - 12:00 PM"),
      wednesday: Btn("Miercoles 11:00 AM - 12:00 PM"),
      thursday: Btn("Jueves 11:00 AM - 12:00 PM"),
      friday: Btn("Viernes 11:00 AM - 12:00 PM"),
      saturday: Btn("Sábado 11:00 AM - 12:00 PM"),
    },
    {
      key: "6",
      hour: "12:00",
      monday: Btn("Lunes 12:00 PM - 1:00 PM"),
      tuesday: Btn("Martes 12:00 PM - 1:00 PM"),
      wednesday: Btn("Miercoles 12:00 PM - 1:00 PM"),
      thursday: Btn("Jueves 12:00 PM - 1:00 PM"),
      friday: Btn("Viernes 12:00 PM - 1:00 PM"),
      saturday: Btn("Sábado 12:00 PM - 1:00 PM"),
    },
    {
      key: "7",
      hour: "1:00",
      monday: Btn("Lunes 1:00 PM - 2:00 PM"),
      tuesday: Btn("Martes 1:00 PM - 2:00 PM"),
      wednesday: Btn("Miercoles 1:00 PM - 2:00 PM"),
      thursday: Btn("Jueves 1:00 PM - 2:00 PM"),
      friday: Btn("Viernes 1:00 PM - 2:00 PM"),
      saturday: Btn("Sábado 1:00 PM - 2:00 PM"),
    },
    {
      key: "8",
      hour: "2:00",
      monday: Btn("Lunes 2:00 PM - 3:00 PM"),
      tuesday: Btn("Martes 2:00 PM - 3:00 PM"),
      wednesday: Btn("Miercoles 2:00 PM - 3:00 PM"),
      thursday: Btn("Jueves 2:00 PM - 3:00 PM"),
      friday: Btn("Viernes 2:00 PM - 3:00 PM"),
      saturday: Btn("Sábado 2:00 PM - 3:00 PM"),
    },
    {
      key: "9",
      hour: "3:00",
      monday: Btn("Lunes 3:00 PM - 4:00 PM"),
      tuesday: Btn("Martes 3:00 PM - 4:00 PM"),
      wednesday: Btn("Miercoles 3:00 PM - 4:00 PM"),
      thursday: Btn("Jueves 3:00 PM - 4:00 PM"),
      friday: Btn("Viernes 3:00 PM - 4:00 PM"),
      saturday: Btn("Sábado 3:00 PM - 4:00 PM"),
    },
    {
      key: "10",
      hour: "4:00",
      monday: Btn("Lunes 4:00 PM - 5:00 PM"),
      tuesday: Btn("Martes 4:00 PM - 5:00 PM"),
      wednesday: Btn("Miercoles 4:00 PM - 5:00 PM"),
      thursday: Btn("Jueves 4:00 PM - 5:00 PM"),
      friday: Btn("Viernes 4:00 PM - 5:00 PM"),
      saturday: Btn("Sábado 4:00 PM - 5:00 PM"),
    },
    {
      key: "11",
      hour: "5:00",
      monday: Btn("Lunes 5:00 PM - 6:00 PM"),
      tuesday: Btn("Martes 5:00 PM - 6:00 PM"),
      wednesday: Btn("Miercoles 5:00 PM - 6:00 PM"),
      thursday: Btn("Jueves 5:00 PM - 6:00 PM"),
      friday: Btn("Viernes 5:00 PM - 6:00 PM"),
      saturday: Btn("Sábado 5:00 PM - 6:00 PM"),
    },
    {
      key: "12",
      hour: "6:00",
      monday: Btn("Lunes 6:00 PM - 7:00 PM"),
      tuesday: Btn("Martes 6:00 PM - 7:00 PM"),
      wednesday: Btn("Miercoles 6:00 PM - 7:00 PM"),
      thursday: Btn("Jueves 6:00 PM - 7:00 PM"),
      friday: Btn("Viernes 6:00 PM - 7:00 PM"),
      saturday: Btn("Sábado 6:00 PM - 7:00 PM"),
    },
    {
      key: "13",
      hour: "7:00",
      monday: Btn("Lunes 7:00 PM - 8:00 PM"),
      tuesday: Btn("Martes 7:00 PM - 8:00 PM"),
      wednesday: Btn("Miercoles 7:00 PM - 8:00 PM"),
      thursday: Btn("Jueves 7:00 PM - 8:00 PM"),
      friday: Btn("Viernes 7:00 PM - 8:00 PM"),
      saturday: Btn("Sábado 7:00 PM - 8:00 PM"),
    },
    {
      key: "14",
      hour: "8:00",
      monday: Btn("Lunes 8:00 PM - 9:00 PM"),
      tuesday: Btn("Martes 8:00 PM - 9:00 PM"),
      wednesday: Btn("Miercoles 8:00 PM - 9:00 PM"),
      thursday: Btn("Jueves 8:00 PM - 9:00 PM"),
      friday: Btn("Viernes 8:00 PM - 9:00 PM"),
      saturday: Btn("Sábado 8:00 PM - 9:00 PM"),
    },
    {
      key: "15",
      hour: "9:00",
      monday: Btn("Lunes 9:00 PM - 10:00 PM"),
      tuesday: Btn("Martes 9:00 PM - 10:00 PM"),
      wednesday: Btn("Miercoles 9:00 PM - 10:00 PM"),
      thursday: Btn("Jueves 9:00 PM - 10:00 PM"),
      friday: Btn("Viernes 9:00 PM - 10:00 PM"),
      saturday: Btn("Sábado 9:00 PM - 10:00 PM"),
    },
    {
      key: "16",
      hour: "10:00",
      monday: Btn("Lunes 10:00 PM - 11:00 PM"),
      tuesday: Btn("Martes 10:00 PM - 11:00 PM"),
      wednesday: Btn("Miercoles 10:00 PM - 11:00 PM"),
      thursday: Btn("Jueves 10:00 PM - 11:00 PM"),
      friday: Btn("Viernes 10:00 PM - 11:00 PM"),
      saturday: Btn("Sábado 10:00 PM - 11:00 PM"),
    }
  ];

  return (
    <>
        
        <div className="flex justify-start items-center gap-2 px-4 flex-wrap" style={{ width:"100%"}}>
          <Button variant="flat" color={"default"} className="capitalize">
                Horarios: 
          </Button>
          {selected.map((item, index) => 
            item && (
              <Tooltip key={index} color="success" content={item} className="capitalize">
                <Button variant="flat" color="success" className="capitalize">
                  {item}
                </Button>
              </Tooltip>
            )
          )}
        </div>   
      <Table
        color="success"
        className="m-0 p-0"
        style={{ margin: "0px" }}
        selectionMode="single"
        aria-label="Weekly schedule"
      >
        <TableHeader>
          <TableColumn style={{ textAlign: "center" }}>INICIO</TableColumn>
          <TableColumn style={{ textAlign: "center" }}>L</TableColumn>
          <TableColumn style={{ textAlign: "center" }}>M</TableColumn>
          <TableColumn style={{ textAlign: "center" }}>M</TableColumn>
          <TableColumn style={{ textAlign: "center" }}>J</TableColumn>
          <TableColumn style={{ textAlign: "center" }}>V</TableColumn>
          <TableColumn style={{ textAlign: "center" }}>S</TableColumn>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.key}>
              <TableCell style={{ textAlign: "center"}}>{row.hour}</TableCell>
              <TableCell style={{ textAlign: "center"}}>
                {row.monday}
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                {row.tuesday}
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                {row.wednesday}
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                {row.thursday}
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                {row.friday}
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                {row.saturday}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-start items-center gap-2 px-4 mb-10 flex-wrap" style={{ width:"100%"}}>
          <Button variant="flat" color={"default"} className="capitalize">
                Horarios: 
          </Button>
          {selected.map((item, index) => 
            item && (
              <Tooltip key={index} color="success" content={item} className="capitalize">
                <Button variant="flat" color="success" className="capitalize">
                  {item}
                </Button>
              </Tooltip>
            )
          )}
        </div>   
      <Button size="lg" className="w-full dark:text-color-white text-color-default" color="success" style={{fontWeight:"bolder"}}>Enviar</Button>
    </>
  );
};

export default ScheduleItem;