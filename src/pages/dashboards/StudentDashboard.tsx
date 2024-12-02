import DefaultLayout from "@/layouts/default";
import StudentDashboard from "@/components/dashboard/studentDashboard/StudentDashboard";

const DocsPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" style={{width: '100%'}}>
        <div className="inline-block max-w-4xl" style={{width: '100%'}}>
          <StudentDashboard />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default DocsPage;
