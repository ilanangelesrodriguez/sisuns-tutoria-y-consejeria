import Footer from "@/components/footer/footer";
import { WhatsappIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar/navbar";
import { motion } from "framer-motion";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen ">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-5 ">
        {children}
      </main>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <a
          href="https://wa.me/975596292"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          <WhatsappIcon />
          
        </a>
      </motion.div>
      <Footer />
    </div>
  );
}
