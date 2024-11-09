import TestServer from '@/components/test_jhoan/test/testServer';
// import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col max-w-lg text-center justify-center gap-4 w-full">
            <TestServer />
        </div>
      </section>
    </DefaultLayout>
  );
}
