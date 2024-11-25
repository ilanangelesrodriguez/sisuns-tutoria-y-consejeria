import React from 'react';
import { Card } from '@nextui-org/react';
import DefaultLayout from '@/layouts/default';
import TeacherScheduleForm from '@/components/Forms/Schedules/TeacherScheduleForm';
import StudentScheduleForm from '@/components/Forms/Schedules/StudentScheduleForm';
import AcademicScheduleForm from '@/components/Forms/Schedules/AcademicScheduleForm';

const Schedules: React.FC = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-6 py-8 md:py-10">
        <h2 className="text-2xl font-semibold mb-4">Formularios de Horarios</h2>
        
        <Card className="w-full max-w-lg p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-medium mb-4">Horario Docente</h3>
          <TeacherScheduleForm />
        </Card>
        
        <Card className="w-full max-w-lg p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-medium mb-4">Horario Estudiante</h3>
          <StudentScheduleForm />
        </Card>
        
        <Card className="w-full max-w-lg p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-medium mb-4">Horario Académico</h3>
          <AcademicScheduleForm />
        </Card>
      </section>
    </DefaultLayout>
  );
};

export default Schedules;
