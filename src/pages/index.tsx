import DefaultLayout from "@/layouts/default";
import Hero from "@/components/main/hero";
import Features from "@/components/main/features";
import Contact from "@/components/main/contact";
import Professor from "@/components/main/professor";

export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 md:py-5">
        <Hero />
        <Features />
        <Professor />
        <Contact />
      </section>
    </DefaultLayout>
  );
}