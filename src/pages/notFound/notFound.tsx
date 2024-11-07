import DefaultLayout from '@/layouts/default'
import { Button, Card, Link } from "@nextui-org/react";
import { title } from '@/components/primitives';

export default function NotFound() {
  return (
    <DefaultLayout>
        <Card className="p-12 text-center backdrop-blur-sm animate-fade-in-up shadow-2xl max-w-md mx-auto" style={{ padding: '2.5em'}}>
            <h1 className={title({ color: "blue" })}>404</h1>
            <h2 className="text-xl mb-8 text-gray-700 mt-4">
            No lo sentimos, no se pudo encontrar la página que buscas.
            </h2>
            <Button
            as={Link}
            href="/"
            size="lg"
            className="m-auto px-8 py-6 font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out rounded-full"
            style={{ margin: '0 auto', padding: '1rem', paddingBottom: '1.5rem' }}
            >
            Volver al inicio
            </Button>
        </Card>
    </DefaultLayout>
  )
}