import AdministradorDashboard from "@/components/dashboard/administradorDashBoard/AdministradorDashoard";
import DefaultLayout from "@/layouts/default";

const AdministradorDashboardPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" style={{width: '100%'}}>
        <div className="inline-block max-w-4xl" style={{width: '100%'}}>
          <AdministradorDashboard />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default AdministradorDashboardPage;
