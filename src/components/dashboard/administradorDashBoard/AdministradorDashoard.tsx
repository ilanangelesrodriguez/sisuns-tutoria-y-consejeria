import React from "react";
import { Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import AsignarEstudiante from "./AsignarEstudiantes/AsignarEstudiante";


const AdministradorDashboard: React.FC = () => {
  const [isVertical] = React.useState(true);
  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" isVertical={isVertical}>
          <Tab key="profile" title="Perfil">
            <Card style={{width: '100%'}} fullWidth>
              <CardBody style={{width: '100%'}}>
                  PERFIL EN DESARROLLO...
              </CardBody>
            </Card>  
          </Tab >
          <Tab key="assign" title="Asignar Estudiantes"  style={{width: '100%'}}>
            <Card fullWidth>
              <CardBody  style={{width: '100%'}}>
                <AsignarEstudiante />
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="section1" title="Estudiantes (Primeros Años)"  style={{width: '100%'}}>
            <Card fullWidth>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="section2" title="Estudiantes (Últimos Años)"  style={{width: '100%'}}>
            <Card fullWidth>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="section3" title="Condición Irregular (Primeros Años)"  style={{width: '100%'}}>
            <Card fullWidth>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="section4" className="text-left" title="Condición Irregular (Últimos Años)"  style={{width: '100%'}}>
            <Card fullWidth>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AdministradorDashboard;
