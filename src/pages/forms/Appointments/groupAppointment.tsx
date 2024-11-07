import GroupAppointment from "@/components/Forms/Appointments/group/groupAppointment";
// import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <GroupAppointment />
        </div>
      </section>
    </DefaultLayout>
  );
}

// import { title } from "@/components/primitives";
// import DefaultLayout from "@/layouts/default";

// export default function DocsPage() {
//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         <div className="inline-block max-w-lg text-center justify-center">
//           <h1 className={title()}>Nosotros</h1>
//         </div>
//       </section>
//     </DefaultLayout>
//   );
// }