"use client"

import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { User, Book, Mail } from 'lucide-react'

const professors = [
  {
    cargo: "Dr.",
    name: "Díaz Tello, Sixto",
    title: "Doctor en Ingeniería de Sistemas",
    specialty: "Inteligencia Artificial",
    email: "sdiaz@uns.edu.pe"
  },
  {
    cargo: "Dr.",
    name: "Sánchez Chávez, Juan",
    title: "Doctor en Ciencias de la Computación",
    specialty: "Seguridad Informática",
    email: "jsanchez@uns.edu.pe"
  },
  {
    cargo: "Mg.",
    name: "Caselli Gismondi, Hugo",
    title: "Magíster en Ingeniería de Software",
    specialty: "Desarrollo Web Avanzado",
    email: "hcaselli@uns.edu.pe"
  },
]

export default function Professor() {
  return (
    <section id="professors" className="py-16 px-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Nuestros Tutores y Consejeros</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Conoce a nuestro equipo de expertos dedicados a guiarte en tu camino académico y profesional.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {professors.map((professor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className=" shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
                <Image
                  alt={`Foto de ${professor.name}`}
                  className="object-cover rounded-full border-4 border-purple-200"
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${professor.name}`}
                  width={100}
                  height={100}
                />
                <h4 className="font-bold text-2xl mt-4 text-gray-400">{professor.name}</h4>
                <p className="text-sm text-purple-600 font-semibold mt-1">{professor.title}</p>
              </CardHeader>
              <CardBody className="py-4 px-6">
                <div className="flex items-center mb-2">
                  <Book className="w-5 h-5 mr-2 text-blue-500" />
                  <p className="text-gray-500">{professor.specialty}</p>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 mr-2 text-blue-500" />
                  <p className="text-gray-500">{professor.email}</p>
                </div>
                <Button
                  color="primary"
                  variant="shadow"
                  endContent={<User className="w-4 h-4" />}
                  className="w-full mt-2"
                >
                  Agendar Tutoría
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

