import { Button } from "@nextui-org/react"

export default function Hero() {
  return (
    <section className="text-center py-20 px-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md">
      <h1 className="text-5xl font-bold mb-4">Sistema de Tutoría y Consejería</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Impulsando el éxito académico y personal de los estudiantes de Ingeniería de Sistemas e Informática en la
        Universidad Nacional del Santa
      </p>
      <Button
        size="lg"
        color="warning"
        variant="shadow"
        as="a"
        href="#features"
        className="font-bold text-large"
      >
        Descubre Cómo Podemos Ayudarte
      </Button>
    </section>
  )
}