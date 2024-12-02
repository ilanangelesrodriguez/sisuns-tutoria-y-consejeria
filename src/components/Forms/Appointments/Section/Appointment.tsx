import { Card, Select, SelectItem, Input } from "@nextui-org/react";
import UserInfo from "./userInfo";
import SubmitButton from "./submitButton";
import { Divider } from "@nextui-org/divider";
import { useNavigate } from "react-router-dom";

const GroupAppointment = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/appointment/schedule");
  };

  return (
    <Card
      className="p-6 shadow-lg rounded-lg border border-gray-300 gap-6 items-start sm:w-[300px] md:w-[350px] lg:w-[500px]"
      style={{}}
    >
      <p className="font-bold text-center w-full border-b-2 py-2">
        REGISTRAR CITA
      </p>
      <div
        className="flex flex-col lg:flex-row justify-start justify-center items-center gap-2"
        style={{ width: "100%" }}
      >
        <UserInfo />
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Select
            label="Tipo de cita"
            variant="bordered"
            size="sm"
            placeholder="Seleccione tipo de cita"
            className="max-w-xs"
          >
              <SelectItem key="grupal">Grupal</SelectItem>
              <SelectItem key="individual">Individual</SelectItem>
          </Select>
        </div>
      </div>
      <Divider className="my-0" />
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input type="text" variant="underlined" label="Motivo" placeholder="Ingrese el motivo de la cita." />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input type="text" variant="underlined" label="Forma" placeholder="Ingrese la forma." />
      </div>
      <SubmitButton onSubmit={handleSubmit} />
    </Card>
  );
};

export default GroupAppointment;
