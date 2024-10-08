import { Card, CardBody, Input, Textarea, Button } from "@nextui-org/react"

export default function Contact() {
  return (
    <section id="contact" className="py-10 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-10">Contáctanos</h2>
      <Card className="max-w-md mx-auto">
        <CardBody>
          <form className="space-y-4 m-auto">
            <Input label="Nombre" placeholder="Tu nombre" />
            <Input label="Email" placeholder="tu@email.com" type="email" />
            <Textarea label="Mensaje" placeholder="¿Cómo podemos ayudarte?" />
            <Button color="primary" type="submit" className="w-100">
              Enviar Mensaje
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  )
}