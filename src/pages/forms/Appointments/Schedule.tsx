import StudentScheduleForm from "@/components/Forms/Schedules/StudentScheduleForm";
// import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    // p-6 shadow-lg rounded-lg border border-gray-300 gap-6 items-start sm:w-[300px] md:w-[450px] lg:w-[700px]
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block flex items-center flex-col justify-center text-center justify-center" style={{width:"100%"}}>
          <StudentScheduleForm />
        </div>
      </section>
    </DefaultLayout>
  );
}
