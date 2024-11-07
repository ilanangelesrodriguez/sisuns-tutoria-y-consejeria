import Login from "@/components/auth/login";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Login />
      </section>
    </DefaultLayout>
  );
}