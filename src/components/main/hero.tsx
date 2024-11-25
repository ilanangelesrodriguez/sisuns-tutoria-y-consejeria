import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Users, Lightbulb } from 'lucide-react';

const images = [
  "/main/egresados.jpg",
  "/main/edificio-sistemas.jpg",
];

const features = [
  { icon: Calendar, text: "Horarios flexibles" },
  { icon: Users, text: "Atención personalizada" },
  { icon: Lightbulb, text: "Orientación experta" },
];

export default function EnhancedHero() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId: number;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev + images.length - 1) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-12 px-6 rounded-lg sm:px-8 lg:px-12 bg-gradient-to-r from-sky-500 via-cyan-800 to-teal-900 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Impulsa tu desarrollo
            <span className="block text-yellow-400 mt-2">Tutoría y Consejería integral</span>
          </h1>
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto"
            >
            Agenda tu reunión hoy y aprovecha la oportunidad de conectar con
            docentes capacitados para avanzar hacia tus metas académicas y profesionales.
            </motion.p>
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[index]}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card isHoverable isPressable className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <CardBody className="p-0">
                  <img
                    src={images[index]}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardBody>
                <CardFooter className="absolute bottom-0 w-full bg-black bg-opacity-60 flex justify-center py-4">
                    <Button
                    size="lg"
                    color="warning"
                    variant="shadow"
                    as="a"
                    href="#features"
                    className="font-bold text-sm transition-all transform hover:scale-105 px-8 py-3"
                    >
                    Comienza tu journey aquí
                    </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 text-gray-800 p-4 rounded-full hover:bg-opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 text-gray-800 p-4 rounded-full hover:bg-opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
            {features.map((feature, idx) => (
            <Card key={idx} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
              <CardBody className="flex flex-col items-center p-3">
              <feature.icon className="w-8 h-8 text-yellow-400 mb-2" />
              <p className="text-sm font-semibold text-white">{feature.text}</p>
              </CardBody>
            </Card>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

