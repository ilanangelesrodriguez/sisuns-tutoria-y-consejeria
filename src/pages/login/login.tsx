
import { useState } from 'react';
import { Card, Input, Button, Link } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon, UserIcon } from 'lucide-react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '@/layouts/default';
import { useAuth } from '@/context/authContext';

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string }>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      await login(data.email, data.password);
      navigate('/inicio');
    } catch (error) {
      alert('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen py-10 mb-5 rounded flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyan-900 via-slate-900 to-indigo-900">
        {/* Animated background elements */}
        <AnimatePresence>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
                scale: [0, 1],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md px-4"
        >
          <Card className="p-8 backdrop-blur-xl bg-white/10 shadow-2xl rounded-3xl">
            <motion.div
              className="mb-8 text-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <UserIcon className="w-16 h-16 mx-auto text-white mb-4" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                Bienvenido
              </h1>
            </motion.div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  type="email"
                  label="Email"
                  placeholder="Ingresa tu email"
                  startContent={<MailIcon className="text-white/50 pointer-events-none flex-shrink-0" />}
                  {...register("email", {
                    required: "Email es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message?.toString() || ""}
                  classNames={{
                    input: "text-white",
                    label: "text-white",
                  }}
                />
              </div>
              <div>
                <Input
                  type={isVisible ? "text" : "password"}
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  startContent={<LockIcon className="text-white/50 pointer-events-none flex-shrink-0" />}
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                      {isVisible ? (
                        <EyeIcon className="text-2xl text-white/50 pointer-events-none" />
                      ) : (
                        <EyeOffIcon className="text-2xl text-white/50 pointer-events-none" />
                      )}
                    </button>
                  }
                  {...register("password", {
                    required: "Contraseña es requerida",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres"
                    }
                  })}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password?.message?.toString()}
                  classNames={{
                    input: "text-white",
                    label: "text-white",
                  }}
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                  size="lg"
                  isLoading={isLoading}
                >
                  {isLoading ? 'Iniciando sesión...' : 'Entrar'}
                </Button>
              </motion.div>
            </form>

            <div className="mt-6 text-center">
              <Link href="#" className="text-sm text-white hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </DefaultLayout>
  );
}

