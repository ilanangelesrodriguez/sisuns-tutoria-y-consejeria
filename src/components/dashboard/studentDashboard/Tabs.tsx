import React from 'react';
import { Button, ButtonGroup } from '@nextui-org/react';

interface TabsProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeSection, setActiveSection }) => (
  <ButtonGroup variant="light" className="mb-4">
    <Button
      onClick={() => setActiveSection("citasProgramadas")}
      className={activeSection === "citasProgramadas" ? "bg-wo-41B3A4 font-bold" : ""}
      variant={activeSection === "citasProgramadas" ? "flat" : "ghost"}
    >
      Tutor y Consejero
    </Button>
    <Button
      onClick={() => setActiveSection("citas")}
      className={activeSection === "citas" ? "bg-wo-41B3A4 font-bold" : ""}
      variant={activeSection === "citas" ? "flat" : "ghost"}
    >
      Citas Programadas
    </Button>
  </ButtonGroup>
);

export default Tabs;
