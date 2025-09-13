import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardHeader className="pb-4">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <CardTitle className="text-2xl text-green-600">¡Formulario Enviado Exitosamente!</CardTitle>
            <CardDescription className="text-lg">
              Gracias por contactar a Imagine Media Pro
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-left space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">¿Qué sucede ahora?</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm mr-2 mt-0.5">1</span>
                    <span>Recibirás un correo electrónico de confirmación con un resumen de tu información</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm mr-2 mt-0.5">2</span>
                    <span>Nuestro equipo revisará detalladamente tu formulario</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm mr-2 mt-0.5">3</span>
                    <span>Nos pondremos en contacto contigo para programar una reunión de seguimiento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm mr-2 mt-0.5">4</span>
                    <span>Prepararemos una propuesta personalizada para tu campaña judicial</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Información Importante</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Revisa tu bandeja de entrada (y carpeta de spam) para el correo de confirmación</li>
                  <li>• Guarda este correo para tu referencia futura</li>
                  <li>• Si no recibes el correo en las próximas horas, contáctanos directamente</li>
                  <li>• Prepara cualquier material adicional que quieras compartir en nuestra reunión</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Contacto Directo</h3>
                <p className="text-green-800 text-sm">
                  Si tienes alguna pregunta urgente, no dudes en contactarnos:
                </p>
                <p className="text-green-700 font-medium">
                  Email: ronald@latinmediamarketing.com
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/">Volver al Formulario</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="mailto:ronald@latinmediamarketing.com">
                  Contactar por Email
                </Link>
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 pt-4 border-t">
              <p>Imagine Media Pro - Tu partner en desarrollo web y marketing digital</p>
              <p className="mt-1">© 2024 Imagine Media Pro. Todos los derechos reservados.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}