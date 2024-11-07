import { Card, CardBody, CardHeader, Image} from "@nextui-org/react"
import {Heart} from "lucide-react"

const professor = [
  {
    title: "Docente 1",
    description: "Ingenierio de Sistemas...",
    icon: Heart
  },
  {
    title: "Docente 2",
    description: "Ingenierio de Sistemas...",
  },
  {
    title: "Docente 3",
    description: "Ingenierio de Sistemas...",
  },
  {
    title: "Docente 4",
    description: "Ingenierio de Sistemas...",
  },
]

export default function Professor() {
  return (
    <section id="professsor" className="py-20 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-10">Tutores y Consejeros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {professor.map((professor, index) => (
          <Card key={index} className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{professor.title}</h4>
            <p className="text-tiny uppercase font-bold">Daily Mix</p> 
            <small className="text-default-500">12 Likes</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
        <p>{professor.description}</p>
          </CardBody>
        </Card>
        ))}
      </div>
    </section>
  )
}