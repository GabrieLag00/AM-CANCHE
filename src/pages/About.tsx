"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  BookOpen,
  Users,
  Star,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Globe,
  Coffee,
  Heart,
  Rocket,
  GraduationCap,
  Clock,
  Mail,
  Calendar,
  User,
  Quote,
  TrendingUp,
  Zap,
  Shield,
  Compass,
  BookMarked,
} from "lucide-react"
import Navigation from "@/components/Navigation"

export default function NosotrosPage() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timeline = [
    {
      year: "2010",
      title: "Inicio en la Docencia",
      description: "Comenzó como profesor universitario de programación",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      year: "2015",
      title: "Especialización en Metodologías",
      description: "Desarrolló técnicas innovadoras para enseñar programación",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      year: "2018",
      title: "Creación de Contenido",
      description: "Empezó a crear material didáctico especializado",
      icon: <BookMarked className="h-5 w-5" />,
    },
    {
      year: "2024",
      title: "Lanzamiento de la Plataforma",
      description: "Nace CodeAcademy Pro para democratizar la educación",
      icon: <Rocket className="h-5 w-5" />,
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pasión por Enseñar",
      description: "Cada estudiante merece una educación de calidad, clara y accesible",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Contenido Confiable",
      description: "Material verificado y actualizado constantemente por expertos",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Comunidad Inclusiva",
      description: "Un espacio seguro donde todos pueden aprender sin prejuicios",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Crecimiento Continuo",
      description: "Evolucionamos constantemente para ofrecer la mejor experiencia",
    },
  ]

  const achievements = [
    { number: "15+", label: "Años de Experiencia", icon: <Clock className="h-5 w-5" /> },
    { number: "5000+", label: "Estudiantes Formados", icon: <Users className="h-5 w-5" /> },
    { number: "98%", label: "Satisfacción", icon: <Star className="h-5 w-5" /> },
    { number: "50+", label: "Cursos Creados", icon: <BookOpen className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2">
                  <User className="h-4 w-4 mr-2" />
                  Conoce al Profesor
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                  Profesor{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Rafael Villegas
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Con más de 15 años de experiencia en la docencia universitaria, el profesor Rafael ha dedicado su
                  carrera a hacer que la programación sea accesible para todos. Su pasión por la enseñanza y su
                  metodología única han transformado la vida de miles de estudiantes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contactar
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 bg-transparent"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Agendar Reunión
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 delay-${index * 100} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    >
                      <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white/50 backdrop-blur-sm">
                        <CardContent className="p-4">
                          <div className="flex justify-center mb-2 text-blue-600">{achievement.icon}</div>
                          <div className="text-2xl font-bold text-gray-800">{achievement.number}</div>
                          <div className="text-sm text-gray-600">{achievement.label}</div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Profesor Rafael Villegas"
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              <BookOpen className="h-4 w-4 mr-2" />
              Nuestra Historia
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">El Camino Hacia la Excelencia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde sus inicios como docente universitario hasta la creación de esta plataforma, conoce la historia
              detrás de CodeAcademy Pro
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center mb-12">
                  <div
                    className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center w-full`}
                  >
                    {/* Timeline Point */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "" : "md:mr-auto"}`}>
                      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50">
                        <CardHeader>
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </div>
                            <Badge className="bg-blue-100 text-blue-800">{item.year}</Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-800">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Compass className="h-4 w-4 mr-2" />
              Misión y Valores
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">¿Qué nos Motiva?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros valores fundamentales guían cada decisión que tomamos para crear la mejor experiencia educativa
            </p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12 text-center">
                <Quote className="h-12 w-12 mx-auto mb-6 opacity-50" />
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Nuestra Misión</h3>
                <p className="text-lg md:text-xl leading-relaxed opacity-95">
                  "Democratizar el acceso a la educación en programación, proporcionando contenido de alta calidad,
                  claro y accesible para que cualquier persona, sin importar su origen o experiencia previa, pueda
                  aprender a programar y transformar su futuro profesional."
                </p>
                <div className="mt-8 flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Metodología Única
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Aprendizaje{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Efectivo
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestra metodología se basa en años de experiencia docente y está diseñada específicamente para
                estudiantes autodidactas que buscan aprender programación de manera efectiva.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mt-1">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Aprendizaje Progresivo</h4>
                    <p className="text-gray-600">
                      Cada concepto se construye sobre el anterior, asegurando una comprensión sólida
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mt-1">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Práctica Constante</h4>
                    <p className="text-gray-600">
                      Ejercicios prácticos en cada lección para reforzar el aprendizaje teórico
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mt-1">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Apoyo Continuo</h4>
                    <p className="text-gray-600">Comunidad activa y soporte directo del profesor para resolver dudas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Metodología de enseñanza"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Comenzar tu Transformación?</h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a la comunidad de estudiantes que ya están cambiando sus vidas a través de la programación. El
              profesor Rafael te acompañará en cada paso del camino.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Rocket className="h-5 w-5 mr-2" />
                Comenzar Ahora
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                <Coffee className="h-5 w-5 mr-2" />
                Conocer los Cursos
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                15+ años de experiencia
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                5000+ estudiantes formados
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Metodología probada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">CodeAcademy Pro</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Plataforma educativa creada por el profesor Rafael para enseñar programación desde cero de manera clara
                y accesible.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Comunidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeAcademy Pro. Todos los derechos reservados. Creado con ❤️ por el Profesor Rafael.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

