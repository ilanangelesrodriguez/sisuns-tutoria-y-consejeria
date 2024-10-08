import DefaultLayout from "@/layouts/default";
import Hero from "@/components/main/hero";
import Features from "@/components/main/features";
import Contact from "@/components/main/contact";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Hero />
        <Features />
        <Contact />
      </section>
    </DefaultLayout>
  );
}
