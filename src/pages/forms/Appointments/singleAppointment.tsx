
import SingleAppointment from "@/components/Forms/Appointments/single/singleAppointment";
// import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <SingleAppointment />
        </div>
      </section>
    </DefaultLayout>
  );
}
