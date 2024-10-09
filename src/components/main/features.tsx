import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { BookOpen, Users, Lightbulb, TrendingUp, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import {Image} from "@nextui-org/image"
import { WhatsappIcon } from "@/components/icons";;

const features = [
  {
    title: "Asesoría Académica Personalizada",
    description: "Recibe orientación individualizada para mejorar tu rendimiento académico y superar desafíos en tus estudios.",
    icon: BookOpen,
  },
  {
    title: "Mentoría de Pares",
    description: "Conéctate con estudiantes de años superiores que te guiarán en tu trayectoria universitaria.",
    icon: Users,
  },
  {
    title: "Desarrollo de Habilidades Blandas",
    description: "Participa en talleres y actividades que potenciarán tus habilidades de comunicación, liderazgo y trabajo en equipo.",
    icon: Lightbulb,
  },
  {
    title: "Seguimiento de Progreso",
    description: "Monitorea tu avance académico y personal con herramientas de seguimiento y retroalimentación continua.",
    icon: TrendingUp,
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
    name: "Jarol Zapata",
    role: "Estudiante de Ingeniería",
    comment: "Esta plataforma ha transformado mi experiencia universitaria. ¡Altamente recomendada!",
    avatar: "https://osterstatic.reciperm.com/webp/10036.webp",
  },
  {
    name: "Rodrigo Muñoz",
    role: "Sauron",
    comment: "Como mentor, he visto el increíble impacto que tiene en el desarrollo de los estudiantes.",
    avatar: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/02/16621364623205.jpg",
  },
]

export default function Features() {
  return (
    <div className="min-h-screen from-blue-50 to-purple-100">
      <section id="features" className="py-20 px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-10 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Características de Nuestro Sistema
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-5  shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex gap-3">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="news" className="py-20 px-4 ">
        <motion.h2 
          className="text-4xl font-bold text-center mb-10 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Últimas Noticias
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <Image src={item.image} alt={item.title} width={300} height={200} className="w-full h-48 object-cover" />
                <CardBody>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-gray-500">{item.date}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-10 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lo que dicen nuestros usuarios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardBody className="flex flex-col items-center text-center">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={100} height={100} className="rounded-full mb-4" />
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          <WhatsappIcon />
          
        </a>
      </motion.div>
    </div>
  )
}