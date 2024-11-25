import Contact from "@/components/main/contact";
import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block  text-center justify-center">
          <Contact />
        </div>
      </section>
    </DefaultLayout>
  );
}