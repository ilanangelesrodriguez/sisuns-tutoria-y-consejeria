import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen ">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
