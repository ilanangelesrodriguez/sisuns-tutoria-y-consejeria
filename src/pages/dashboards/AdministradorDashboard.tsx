import AdministradorDashboard from "@/components/dashboard/administradorDashBoard/AdministradorDashoard";
import DefaultLayout from "@/layouts/default";

const AdministradorDashboardPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-4xl">
          <AdministradorDashboard />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default AdministradorDashboardPage;
