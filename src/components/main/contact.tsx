import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardBody, Input, Textarea, Button } from "@nextui-org/react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import {Image} from "@nextui-org/image";

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!name.trim()) {
      newErrors.name = "El nombre es requerido"
      isValid = false
    }

    if (!email.trim()) {
      newErrors.email = "El email es requerido"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido"
      isValid = false
    }

    if (!message.trim()) {
      newErrors.message = "El mensaje es requerido"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-5 px-4 from-purple-100 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Contáctanos</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardBody className="p-8">
              {name && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-semibold text-primary mb-4"
                >
                  Hola {name}, ¡es un placer conocerte!
                </motion.p>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Input
                    label="Nombre"
                    placeholder="Tu nombre"
                    variant="bordered"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name}
                    className="max-w-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Input
                    label="Email"
                    placeholder="tucorreo@uns.edu.pe"
                    type="email"
                    variant="bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                    className="max-w-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Textarea
                    label="Mensaje"
                    placeholder="¿Cómo podemos ayudarte?"
                    variant="bordered"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    isInvalid={!!errors.message}
                    errorMessage={errors.message}
                    className="max-w-full"
                    minRows={2}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <Button
                    color="primary"
                    type="submit"
                    className="w-full max-w-xs"
                    size="lg"
                    endContent={isSubmitted ? <CheckCircle className="ml-2" /> : <Send className="ml-2" />}
                  >
                    {isSubmitted ? "¡Mensaje Enviado!" : "Enviar Mensaje"}
                  </Button>
                </motion.div>
              </form>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-green-600 font-semibold"
                >
                  Gracias por tu mensaje. Te contactaremos pronto.
                </motion.p>
              )}
            </CardBody>
          </Card>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4 p-4 bg-yellow-100 rounded-lg shadow-md"
          >
            <p className="text-yellow-800 flex items-center">
              <AlertCircle className="mr-2" />
              Esta opción está actualmente en desarrollo. Gracias por tu paciencia.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full lg:w-1/2"
        >
          <Image
            src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/300184768_548809990374961_7497026110705637457_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=jaOeIfsj9KkQ7kNvgG8qm8N&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=ArAoPef2ywPikx-AbyhPCll&oh=00_AYA3KA4lOHljlu9pAnMePZGHvT5hb5kCIp_t_2zrZxr4GQ&oe=6749B64D"
            alt="Imagen de contacto"
            width={600}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}