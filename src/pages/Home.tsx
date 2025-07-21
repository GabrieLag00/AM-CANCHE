"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/Navigation"
import {
  Code,
  BookOpen,
  Users,
  Star,
  Play,
  Download,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Monitor,
  Coffee,
  Heart,
  Rocket,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Contenido Claro",
      description: "Material didáctico explicado paso a paso, perfecto para principiantes",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Comunidad Activa",
      description: "Únete a una comunidad de estudiantes que aprenden juntos",
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Recursos Gratuitos",
      description: "Accede a guías, ejercicios y archivos descargables sin costo",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Enfoque Práctico",
      description: "Aprende programando proyectos reales desde el primer día",
    },
  ]

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Múltiples Lenguajes",
      description: "Python, JavaScript, Java y más",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Desarrollo Web",
      description: "HTML, CSS, React y frameworks modernos",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Bases de Datos",
      description: "SQL, NoSQL y gestión de datos",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Apps Móviles",
      description: "Desarrollo para iOS y Android",
    },
  ]

  const stats = [
    { number: "1000+", label: "Estudiantes", icon: <Users className="h-5 w-5" /> },
    { number: "50+", label: "Cursos", icon: <BookOpen className="h-5 w-5" /> },
    { number: "100%", label: "Gratuito", icon: <Heart className="h-5 w-5" /> },
    { number: "24/7", label: "Acceso", icon: <Globe className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2">
              <Rocket className="h-4 w-4 mr-2" />
              ¡Comienza tu carrera en programación hoy!
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Aprende a Programar
              <br />
              <span className="text-gray-800">Desde Cero</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre el mundo de la programación con contenido claro, ejercicios prácticos y el apoyo del profesor
              Rafael. Una plataforma diseñada especialmente para principiantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Comenzar Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Ver Cursos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 delay-${index * 100} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-center mb-2 text-blue-600">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              <Star className="h-4 w-4 mr-2" />
              ¿Por qué elegirnos?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Beneficios de Nuestra Plataforma</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diseñada especialmente para estudiantes autodidactas que buscan aprender programación de manera efectiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Lightbulb className="h-4 w-4 mr-2" />
              Tecnologías
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">¿Qué Aprenderás?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Domina las tecnologías más demandadas del mercado con nuestros cursos especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white w-fit group-hover:rotate-12 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Comenzar tu Carrera en Programación?</h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a miles de estudiantes que ya están aprendiendo con nosotros. Accede a todo nuestro contenido de
              forma completamente gratuita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Rocket className="h-5 w-5 mr-2" />
                Empezar Gratis
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                <Coffee className="h-5 w-5 mr-2" />
                Conocer al Profesor
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Sin tarjeta de crédito
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Acceso inmediato
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                100% gratuito
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
