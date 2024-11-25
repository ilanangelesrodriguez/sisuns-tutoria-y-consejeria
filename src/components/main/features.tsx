import { Card, CardBody, CardHeader, Button } from "@nextui-org/react"
import { BookOpen, Users, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import { Image } from "@nextui-org/image"

const features = [
  {
    title: "Asesoría Académica Personalizada",
    description: "Recibe orientación individualizada para mejorar tu rendimiento académico y superar desafíos en tus estudios.",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    title: "Mentoría de Pares",
    description: "Conéctate con estudiantes de años superiores que te guiarán en tu trayectoria universitaria.",
    icon: Users,
    color: "bg-green-500"
  },
  {
    title: "Desarrollo de Habilidades Blandas",
    description: "Participa en talleres y actividades que potenciarán tus habilidades de comunicación, liderazgo y trabajo en equipo.",
    icon: Lightbulb,
    color: "bg-yellow-500"
  },
  {
    title: "Seguimiento de Progreso",
    description: "Monitorea tu avance académico y personal con herramientas de seguimiento y retroalimentación continua.",
    icon: TrendingUp,
    color: "bg-purple-500"
  },
]

const news = [
  {
    title: "Nuevo programa de mentoría lanzado",
    date: "15 de Mayo, 2023",
    image: "https://files.pucp.education/puntoedu/wp-content/uploads/2021/12/09165710/06-pucp-abre-mentoria-ganadores-proyectos_01.png",
  },
  {
    title: "Taller de liderazgo próximamente",
    date: "22 de Mayo, 2023",
    image: "https://www.ttisuccessinsights.es/wp-content/uploads/2020/05/5236-1024x585.jpg",
  },
  {
    title: "Resultados del programa de tutoría",
    date: "1 de Junio, 2023",
    image: "https://fococonsultores.es/wp-content/uploads/2018/09/mentoring-empresarial.jpg",
  },
]

const testimonials = [
  {
    name: "HURTADO RAMOS RONALD FABRIZIO",
    role: "Estudiante de Ingeniería",
    comment: "El profesor Camilo Suárez Rebaza es excepcional. Sus clases son claras y muy enriquecedoras.",
    avatar: "https://www.universia.net/content/dam/universia/imagenes/estudiantes-universitarios.jpg",
  },
  {
    name: "RAMOS ENCARNACIÓN NILTON",
    role: "Estudiante de Ingeniería",
    comment: "Las clases del profesor Camilo Suárez Rebaza han sido fundamentales para mi aprendizaje.",
    avatar: "https://www.universia.net/content/dam/universia/imagenes/estudiantes-universitarios.jpg",
  },
]

export default function Features() {
  return (
    <div className="min-h-screen">
      <section id="features" className="py-10 px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Características de Nuestro Sistema
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex gap-4 items-center pb-4">
                  <div className={`p-3 rounded-full ${feature.color}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                </CardHeader>
                <CardBody>
                    <p className="text-gray-600 text-base">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="news" className="py-10 px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Últimas Noticias
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-56 object-cover"
                />
                <CardBody className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{item.title}</h3>
                  <p className="text-gray-500 mb-4">{item.date}</p>
                  <Button 
                    color="primary" 
                    variant="flat" 
                    endContent={<ArrowRight className="ml-2" />}
                  >
                    Leer más
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-10 px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lo que dicen nuestros usuarios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardBody className="flex flex-col items-center text-center">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={120} 
                    height={120} 
                    className="rounded-full mb-6 border-4 border-primary"
                  />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                  <h4 className="font-semibold text-primary text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

