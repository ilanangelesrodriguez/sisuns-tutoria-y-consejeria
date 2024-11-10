import { useState } from 'react';
import { Button, Card, CardBody } from "@nextui-org/react";

import StudentAvatar from './StudentAvatar';
import StudentInfo from './StudentInfo';
import Tabs from './Tabs';
import Profesores from './Profesores';
import Styles from "./StudentDashboard.module.css";
import Appointments from './Appointments';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("citasProgramadas");

  const renderContent = () => {
    if (activeSection === "citasProgramadas") {
      return (
        <div className="flex flex-col gap-2">
          <Profesores />
        </div>
        );
      
    } else if (activeSection === "citas") {
      return (
        <div className="flex flex-col gap-2">
          <Appointments />
          <Appointments />
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10">
    <Card className={Styles.contain_student_info + "  max-h-[550px] overflow-auto"}>
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
