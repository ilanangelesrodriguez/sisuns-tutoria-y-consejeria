import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, ChipProps, TableCell, User, Button, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "@/components/icons";
import { DeleteIcon } from "@/components/icons";
import { EyeIcon } from "@/components/icons";
import { columns, users } from "./data"; // Asegúrate de que columns tenga claves correctas
import Estudiante from "@/models/estudiante";

interface StudentItemProps {
  estudiantes: Estudiante[]; // Propiedad que recibirá la lista de estudiantes
}




// Mapea el estado del estudiante a los colores del chip
const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type UserType = typeof users[0]; // Cambié el nombre de `User` a `UserType`

const StudentItem: React.FC<StudentItemProps> = ({ estudiantes }) => {
  const renderCell = React.useCallback((user: Estudiante, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof Estudiante]; // Accede al valor de la propiedad de `user`

    switch (columnKey) {
      case "student":
        return (
          <User
            avatarProps={{ radius: "lg", src: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }}
            description={user.correo_institucional}
            name={`${user.nombre} ${user.apellido_paterno}`}
          >
            {user.correo_institucional}
          </User>
        );
      case "contact":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm">{user.correo_institucional}</p>
            <p className="text-bold text-sm text-default-400">{user.celular}</p>
          </div>
        );
      case "code":
        return (
          <Chip className="capitalize" color={"success"} size="sm" variant="flat">
            {user.codigo_matricula}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            {/* <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip> */}
            <Tooltip color="success" content="Delete user">
              <Button size="sm" color="success" variant="bordered">
                Comparar
              </Button> 
            </Tooltip>
            {/* Implementar íconos para editar y eliminar si es necesario */}
            {/* <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip> */}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={estudiantes}>
        {(item) => (
          <TableRow key={item.codigo_matricula}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default StudentItem;


// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import {Card, Button, Chip} from "@nextui-org/react";
// import { interpretarFecha } from '@/services/interpreteFechas';
// interface AppointmentItemProps {
//   tutorName: string;
//   celular: string;
//   correo: string;
//   fecha_nacimiento: string;
//   codigo_matricula: string;
//   anio_estudio: string;

// }

// // const StudentItem: React.FC<AppointmentItemProps> = ({ tutorName, celular, correo, fecha_nacimiento, codigo_matricula, anio_estudio}) => {
// //   const navigate = useNavigate();
// //   const handleFormSingle = () =>{
// //     navigate("/single_appointment");
// //   }
// //   return (
    
// //     <Card className="border p-6 rounded-md shadow-sm">
// //       <div className="flex p-4 items-center gap-4 mb-2 bg-solid-41B3A4 rounded-md">
// //         <div className="w-12 p-0 h-12 rounded-full flex items-center justify-center font-bold" style={{ borderColor: "#ff6f61", color: "#ff6f61" }}>
// //         <img
// //           src="public/images/perfil/avatar_docente.jpg" // URL del avatar (puede ser dinámica)
// //           alt="Tutor Avatar"
// //           className="w-full h-full rounded-full object-cover"
// //         />
// //         </div>
// //         <div>
// //           <p className='bold font-bold'>{tutorName}</p>
// //           <p>Nacido el  {interpretarFecha(fecha_nacimiento)}</p>
// //         </div>
// //       </div>
// //       <div className="mb-2 p-1 gap-4">
// //         <div className="flex gap-2">
// //             <Chip radius="lg" className='bg-wo-41B3A4'><span className='bold font-bold'>Código de matrícula: </span> {codigo_matricula}</Chip>
// //             <Chip radius="lg"><span className='bold font-bold'>Año de estudio: </span> {anio_estudio}</Chip>
// //         </div>
// //         <div className="flex gap-2 mt-2">
// //             <Chip radius="lg"><span className='bold font-bold'>Celular: </span> +51 {celular}</Chip>
// //             <Chip radius="lg" className='bg-wo-41B3A4'><span className='bold font-bold'>Correo: </span> {correo}</Chip>
// //         </div>
// //       </div>

// //       <div className="mb-4 p-1">
// //         <div className="flex gap-2 mt-0">
// //           <Button className='font-bold bg-solid-41B3A4 text-green-50' onClick={handleFormSingle}>Comparar</Button>
// //         </div>
// //       </div>
// //     </Card>
// //   );
// // };

// // export default StudentItem;