import Features from "@/components/main/features";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2">
        <div className="inline-block text-center justify-center">
          <Features />
        </div>
      </section>
    </DefaultLayout>
  );
}