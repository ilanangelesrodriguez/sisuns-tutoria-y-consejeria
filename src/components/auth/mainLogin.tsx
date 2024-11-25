import { Card, Divider, Link } from "@nextui-org/react";
import {BriefcaseIcon, AcademicCapIcon, UserIcon} from "@/components/icons";
import  ItemMainLogin from "@/components/auth/itemMainLogin";

const MainLogin = () =>{
    return(
            <Card className="p-5 py-8 mb-5 gap-6 flex flex-row item-center justify-center flex-wrap">
                <h3 className="text-2xl font-bold">CONTROL DE ACCESO</h3>
                <Divider />
                <ItemMainLogin tipo="Estudiante" message="Accede como estudiante" description="Módulos de apoyo para la actividad del tutor y consejero." href="/student_dashboard">
                    <AcademicCapIcon style={{ width: '60px', height: '60px' }}/>
                </ItemMainLogin>
                <ItemMainLogin tipo="Docente" message="Accede como docente" description="Módulos de apoyo para el alumno." href="/docente_dashboard">
                    <BriefcaseIcon style={{ width: '60px', height: '60px' }}/>
                </ItemMainLogin>
                <ItemMainLogin tipo="Administrador" message="Accede como administrador" description="Módulo de apoyo para el administrador." href="/administrador_dashboard">
                    <UserIcon style={{ width: '60px', height: '60px' }}/>
                </ItemMainLogin>
                <Divider />
                <Link href="/" className="text-gray-500 dark:text-gray-300 underline">Regresar</Link>
            </Card>
    );
}

export default MainLogin;