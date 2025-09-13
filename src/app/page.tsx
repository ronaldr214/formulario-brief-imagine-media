'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

const formSchema = z.object({
  // Sección 1: Información Básica
  nombreCompleto: z.string().min(1, 'El nombre completo es requerido'),
  cargoAspira: z.string().min(1, 'El cargo es requerido'),
  jurisdiccion: z.string().min(1, 'La jurisdicción es requerida'),
  fechaElecciones: z.string().min(1, 'La fecha es requerida'),
  tieneComite: z.enum(['si', 'no']),
  nombreComite: z.string().optional(),
  nombreTesorero: z.string().optional(),

  // Sección 2: Información Personal y Profesional
  anosExperiencia: z.string().min(1, 'Los años de experiencia son requeridos'),
  areaEspecializacion: z.string().min(1, 'El área de especialización es requerida'),
  universidad: z.string().min(1, 'La universidad es requerida'),
  anoGraduacion: z.string().min(1, 'El año de graduación es requerido'),
  experienciaJudicial: z.enum(['si', 'no']),
  detallesExperiencia: z.string().optional(),
  estadoCivil: z.string().min(1, 'El estado civil es requerido'),
  tieneHijos: z.enum(['si', 'no']),
  cuantosHijos: z.string().optional(),
  tiempoMiami: z.string().min(1, 'El tiempo en Miami-Dade es requerido'),
  comunidades: z.string().min(1, 'Las comunidades son requeridas'),

  // Sección 3: Historia Personal
  situacionFamiliar: z.string().min(1, 'La descripción es requerida'),
  tiempoAdiccion: z.string().min(1, 'El tiempo es requerido'),
  anosRecuperacion: z.string().min(1, 'Los años en recuperación son requeridos'),
  programaRecuperacion: z.string().min(1, 'El programa es requerido'),
  impactoCarrera: z.enum(['suspendio', 'continuo', 'otro']),
  otroImpacto: z.string().optional(),
  participaProgramas: z.enum(['si', 'no']),
  detallesProgramas: z.string().optional(),
  leccionesAprendidas: z.string().min(1, 'Las lecciones son requeridas'),

  // Sección 4: Visión y Mensaje
  mensajePrincipal: z.string().min(1, 'El mensaje principal es requerido'),
  diferenciacion: z.string().min(1, 'La diferenciación es requerida'),
  ventajaJudicial: z.string().min(1, 'La ventaja judicial es requerida'),
  casosInteres: z.string().min(1, 'Los casos de interés son requeridos'),
  otrosCasos: z.string().optional(),
  principios: z.string().min(1, 'Los principios son requeridos'),

  // Sección 5: Público Objetivo
  gruposVotantes: z.array(z.string()).min(1, 'Seleccione al menos un grupo'),
  idiomas: z.string().min(1, 'Los idiomas son requeridos'),
  otrosIdiomas: z.string().optional(),
  cortesDrogas: z.string().min(1, 'La posición es requerida'),
  rehabilitacionCastigo: z.string().min(1, 'La posición es requerida'),

  // Sección 6: Competencia
  competidores: z.string().min(1, 'Los competidores son requeridos'),
  fortalezas: z.string().min(1, 'Las fortalezas son requeridas'),
  criticas: z.string().min(1, 'Las críticas son requeridas'),
  respuestaCriticas: z.string().min(1, 'La respuesta es requerida'),

  // Sección 7: Respaldo y Testimonios
  respaldos: z.string().min(1, 'Los respaldos son requeridos'),
  tieneTestimonios: z.enum(['si', 'no']),
  colegasAbogados: z.string().optional(),
  lideresComunitarios: z.string().optional(),
  profesionalesSalud: z.string().optional(),

  // Sección 8: Contenido y Tono
  aperturaHistoria: z.enum(['muy', 'moderadamente', 'breve', 'recuperacion']),
  tonoSitio: z.enum(['profesional', 'calido', 'inspiracional', 'equilibrio']),
  noAparecer: z.string().optional(),
  temasEvitar: z.string().optional(),

  // Sección 9: Aspectos Técnicos
  preferenciaDominio: z.string().optional(),
  tieneLogo: z.enum(['si', 'no']),
  sitiosGustan: z.string().optional(),
  redesSociales: z.array(z.string()).optional(),
  eventosVirtuales: z.enum(['si', 'no']),
  necesitaCalendario: z.enum(['si', 'no']),

  // Sección 10: Metas y Métricas
  metaRecaudacion: z.string().optional(),
  donacionesMensuales: z.string().optional(),
  exitoSitio: z.string().min(1, 'La definición de éxito es requerida'),
  presupuestoPublicidad: z.enum(['si', 'no']),
  montoPublicidad: z.string().optional(),

  // Sección 11: Contactos Clave
  tesoreroNombre: z.string().optional(),
  tesoreroEmail: z.string().optional(),
  tesoreroTelefono: z.string().optional(),
  managerNombre: z.string().optional(),
  managerEmail: z.string().optional(),
  managerTelefono: z.string().optional(),
  contactoPrincipal: z.string().optional(),
  accesoActualizacion: z.string().optional(),

  // Sección 12: Timeline y Prioridades
  fechaLimite: z.string().min(1, 'La fecha límite es requerida'),
  eventosProximos: z.string().optional(),
  importanciaDiseno: z.string().optional(),
  importanciaDonaciones: z.string().optional(),
  importanciaHistoria: z.string().optional(),
  importanciaProfesional: z.string().optional(),
  importanciaNavegacion: z.string().optional(),
  otraInformacion: z.string().optional(),

  // Contacto del formulario
  email: z.string().email('El email es inválido'),
})

type FormData = z.infer<typeof formSchema>

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gruposVotantes: [],
      redesSociales: [],
      tieneComite: 'no',
      experienciaJudicial: 'no',
      tieneHijos: 'no',
      participaProgramas: 'no',
      tieneTestimonios: 'no',
      tieneLogo: 'no',
      eventosVirtuales: 'no',
      necesitaCalendario: 'no',
      presupuestoPublicidad: 'no',
      aperturaHistoria: 'moderadamente',
      tonoSitio: 'equilibrio',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      toast.success('Formulario enviado correctamente')
      form.reset()
      
      // Redirigir a página de confirmación
      window.location.href = '/gracias'
    } catch (error) {
      toast.error('Error al enviar el formulario')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">
              FORMULARIO DE BRIEF - DESARROLLO WEB
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Campaña Judicial - Imagine Media Pro
            </CardDescription>
          </CardHeader>
        </Card>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Sección 1: Información Básica */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">SECCIÓN 1: INFORMACIÓN BÁSICA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nombreCompleto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo del candidato</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cargoAspira"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cargo al que aspira</FormLabel>
                        <FormControl>
                          <Input placeholder="Cargo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="jurisdiccion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jurisdicción/Distrito</FormLabel>
                        <FormControl>
                          <Input placeholder="Jurisdicción" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fechaElecciones"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha tentativa de elecciones</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="tieneComite"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>¿Ya tiene comité de campaña registrado?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="si" />
                            </FormControl>
                            <FormLabel className="font-normal">Sí</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.watch('tieneComite') === 'si' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nombreComite"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre del comité</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre del comité" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nombreTesorero"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre del tesorero</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre del tesorero" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Email de contacto */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">INFORMACIÓN DE CONTACTO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email para recibir confirmación</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="su@email.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        Recibirá una copia de sus respuestas en este correo electrónico
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Formulario'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}