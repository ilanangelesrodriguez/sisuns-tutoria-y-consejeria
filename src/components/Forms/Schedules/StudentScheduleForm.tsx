import React from "react";
import { useState } from "react";
import { Card, Select, SelectItem, Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { useNavigate } from "react-router-dom";
import ScheduleItem from "./ScheduleItem";

const StudentScheduleForm = () => {
  return (
    <Card
      className="shadow-lg rounded-lg  gap-6 items-start sm:p-0 sm:w-full md:w-[700px] md:p-2 lg:w-[800px]"
    >
      <p className="font-bold text-center w-full py-1">
        SELECCIONA HORARIO
      </p>
      <Divider />
      <ScheduleItem />
    </Card>
  );
};
export default StudentScheduleForm;