import React, { useState } from 'react';

import { Button, Card, CardBody } from "@nextui-org/react";



import StudentAvatar from './StudentAvatar';
import StudentInfo from './StudentInfo';
import Tabs from './Tabs';
import Appointments from './Appointments';
import Styles from "./StudentDashboard.module.css";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("citasProgramadas");

  const renderContent = () => {
    if (activeSection === "citasProgramadas") {
      return <Appointments />;
    } else if (activeSection === "citas") {
      return (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold" style={{ color: "#ff6f61" }}>Esta es la sección de Citas</h2>
          <p style={{ color: "#333333" }}>Aquí podrías mostrar información de próximas citas disponibles o permitir al estudiante seleccionar una nueva cita.</p>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10">
    <Card className={Styles.contain_student_info}>
      <CardBody className="flex flex-col items-center gap-4">
        <StudentAvatar />
        <StudentInfo />
        <Button className={Styles.button_log_out}  variant="flat" onClick={() => alert("Cerrar sesión")}>
          Cerrar Sesión
        </Button>
      </CardBody>
    </Card>
      <div className="md:w-3/4">
        <Tabs activeSection={activeSection} setActiveSection={setActiveSection} />
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentDashboard;
