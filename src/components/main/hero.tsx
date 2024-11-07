import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/main/edificio-sistemas.jpg",
  "/main/egresados.jpg",
  "/main/edificio-sistemas.jpg",
  "/main/edificio-sistemas.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev + images.length - 1) % images.length);
  };

  return (
    <section className="text-center py-20 px-12 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-md w-full mx-auto shadow-2xl">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Impulsa tu desarrollo - Tutoría y Consejería integral
      </motion.h1>
      <motion.p
        className="text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Agenda tu reunión hoy y aprovecha la oportunidad de conectar con
        docentes capacitados para avanzar hacia tus metas.
      </motion.p>

      <div className="relative w-full mx-auto mt-12">
        <AnimatePresence>
          <motion.div
            key={images[index]}
            initial={{ opacity: 0, x: 300 }}  /* Desplaza desde la derecha */
            animate={{ opacity: 1, x: 0 }}   /* Centra la imagen */
            exit={{ opacity: 0, x: -300 }}   /* Desplaza hacia la izquierda */
            transition={{ duration: 0.5 }}
            className="w-full mx-auto"
          >
            {/* Card */}
            <Card isHoverable isPressable className="relative w-full h-96 rounded-lg overflow-hidden">
              <CardBody className="p-0">
                <img
                  src={images[index]}
                  alt="Slider image"
                  className="object-cover w-full h-full"
                />
              </CardBody>

              {/* Button inside the Card */}
              <CardFooter className="absolute bottom-0 w-full bg-black bg-opacity-50 flex justify-center">
                <Button
                  size="lg"
                  color="warning"
                  variant="shadow"
                  as="a"
                  href="#features"
                  className="font-bold text-large transition-all transform hover:scale-105"
                >
                  Comienza aquí
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
