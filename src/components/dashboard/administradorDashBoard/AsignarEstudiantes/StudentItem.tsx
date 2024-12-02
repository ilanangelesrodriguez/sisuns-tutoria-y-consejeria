import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, ChipProps, TableCell, User, Button, Chip, Tooltip } from "@nextui-org/react";
import { columns } from "./data"; // Asegúrate de que columns tenga claves correctas
import Estudiante from "@/models/estudiante";
import { EditIcon, EyeIcon } from "@/components/icons";

interface StudentItemProps {
  estudiantes: Estudiante[]; // Propiedad que recibirá la lista de estudiantes
}


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
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            {/* Implementar íconos para editar y eliminar si es necesario */}
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
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

