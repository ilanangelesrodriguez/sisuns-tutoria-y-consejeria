import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { BookOpen, Users, Lightbulb, TrendingUp } from "lucide-react"

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

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-10">Características de Nuestro Sistema</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="p-5 from-blue-50 to-purple-50">
            <CardHeader className="flex gap-3">
              <feature.icon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </CardHeader>
            <CardBody>
              <p>{feature.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}