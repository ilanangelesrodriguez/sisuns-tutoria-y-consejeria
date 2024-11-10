import {Link} from "@nextui-org/react";
// import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
        <div className="flex flex-col max-w-lg text-center justify-center gap-4 w-full">
          <Link href="/form_info_student">Información de Estudiante</Link>
          <Link href="/assign_student">Asignar Estudiantes</Link>
          <Link href="/form_info_personal_professor">Iformación Personal Del Docente</Link>
        </div>
  );
}
