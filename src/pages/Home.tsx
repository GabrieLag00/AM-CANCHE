"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/Navigation"
import {
  ArrowUpRight,
  Play,
  Users,
  BookOpen,
  Target,
  Zap,
  Code,
  Database,
  Globe,
  Smartphone,
  ChevronRight,
  Circle,
  Sparkles,
  Rocket,
  Brain,
  Shield,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Mouse tracking para efectos parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    {
      number: "1000+",
      label: "ESTUDIANTES",
      icon: <Users className="h-5 w-5" />,
      color: "from-blue-500 to-purple-500",
    },
    { number: "50+", label: "CURSOS", icon: <BookOpen className="h-5 w-5" />, color: "from-green-500 to-blue-500" },
    { number: "100%", label: "GRATUITO", icon: <Target className="h-5 w-5" />, color: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "ACCESO", icon: <Zap className="h-5 w-5" />, color: "from-orange-500 to-red-500" },
  ]

  const technologies = [
    {
      name: "PYTHON",
      icon: <Code className="h-6 w-6" />,
      students: "1.2K",
      description: "Inteligencia artificial y análisis de datos",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      name: "JAVASCRIPT",
      icon: <Globe className="h-6 w-6" />,
      students: "980",
      description: "Desarrollo web moderno y dinámico",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      name: "BASES DE DATOS",
      icon: <Database className="h-6 w-6" />,
      students: "756",
      description: "Gestión y arquitectura de datos",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      name: "MÓVIL",
      icon: <Smartphone className="h-6 w-6" />,
      students: "543",
      description: "Apps nativas multiplataforma",
      gradient: "from-purple-400 to-violet-500",
    },
  ]

  const features = [
    {
      label: "DISEÑO PRIMERO IA",
      description: "Aprende con currículum potenciado por IA de vanguardia diseñado para el futuro de la programación",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      label: "ESCALADO ÉTICO",
      description: "Construye tecnología responsable con nuestro enfoque ético-primero para el desarrollo de software",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      label: "DESARROLLO COGNITIVO",
      description:
        "Desarrolla habilidades de pensamiento crítico a través de proyectos prácticos y aplicaciones reales",
      icon: <Sparkles className="h-5 w-5" />,
    },
  ]

  // Efecto parallax para elementos flotantes
  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) * 0.01,
    y: (mousePosition.y - window.innerHeight / 2) * 0.01,
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Elementos de fondo animados */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-black rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-black rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-1 h-1 bg-gray-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          {/* Floating Labels con animaciones */}
          <div
            className="absolute top-40 left-20 hidden lg:block animate-float"
            style={{
              transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <Badge className="bg-gray-100 text-gray-800 border-0 font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:scale-110">
              PRODUCTO
            </Badge>
          </div>
          <div
            className="absolute top-60 right-32 hidden lg:block animate-float"
            style={{
              transform: `translate(${-parallaxOffset.x}px, ${-parallaxOffset.y}px)`,
              animation: "float 6s ease-in-out infinite 2s",
            }}
          >
            <Badge className="bg-gray-100 text-gray-800 border-0 font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:scale-110">
              PROTOTIPOS
            </Badge>
          </div>

          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Main Headline con efectos de texto */}
              <div className="text-center mb-16">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black leading-none mb-8 relative">
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    CONSTRUYE
                  </span>
                  <br />
                  <span className="relative inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    FUTURO
                    <div className="absolute -right-8 top-4 hidden md:block animate-bounce">
                      <ArrowUpRight className="h-8 w-8 text-gray-400 hover:text-black transition-colors duration-300" />
                    </div>
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                  </span>
                </h1>

                <div className="max-w-2xl mx-auto mb-12">
                  <p
                    className="text-lg text-gray-600 font-medium tracking-wide leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    NO IMAGINAMOS FUTUROS — LOS ARQUITECTAMOS
                  </p>
                </div>

                {/* Feature Tags con hover effects */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                  {features.map((feature, index) => (
                    <div key={index} className="group cursor-pointer" style={{ animationDelay: `${index * 200}ms` }}>
                      <Badge className="bg-gray-100 hover:bg-black text-gray-800 hover:text-white border-0 font-medium tracking-wide px-4 py-2 transition-all duration-500 hover:scale-110 hover:rotate-1 group-hover:shadow-lg">
                        <span className="flex items-center space-x-2">
                          <span className="group-hover:rotate-12 transition-transform duration-300">
                            {feature.icon}
                          </span>
                          <span>{feature.label}</span>
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons con efectos avanzados */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800 font-medium tracking-wide px-8 py-4 group relative overflow-hidden hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      COMENZAR A CONSTRUIR
                      <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                    {/* Efecto de onda */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent font-medium tracking-wide px-8 py-4 hover:scale-105 hover:border-black transition-all duration-300 group"
                  >
                    EXPLORAR CURSOS
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              {/* Stats Grid con animaciones staggered */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 hover:scale-105 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Card
                      className={`border-0 bg-gray-50 hover:bg-black transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                        hoveredCard === index ? "shadow-2xl" : ""
                      }`}
                    >
                      <CardContent className="p-6 text-center relative z-10">
                        <div className="flex justify-center mb-3 text-gray-600 group-hover:text-white transition-colors duration-500">
                          <div className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                        </div>
                        <div className="text-3xl font-black text-black group-hover:text-white mb-1 transition-colors duration-500">
                          {stat.number}
                        </div>
                        <div className="text-xs font-medium text-gray-500 group-hover:text-gray-300 tracking-widest transition-colors duration-500">
                          {stat.label}
                        </div>
                      </CardContent>
                      {/* Efecto de gradiente en hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Card flotante con animación */}
          <div
            className="absolute bottom-20 right-8 hidden xl:block animate-float"
            style={{
              animation: "float 8s ease-in-out infinite 1s",
            }}
          >
            <Card className="w-64 border-0 bg-black text-white hover:scale-105 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Code className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">PROF. RAFAEL</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300">15+ AÑOS EXPERIENCIA</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section con efectos avanzados */}
      <section className="py-20 px-6 bg-gray-50 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6">
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  DOMINA LAS
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  TECNOLOGÍAS
                </span>
              </h2>
              <p className="text-lg text-gray-600 font-medium tracking-wide max-w-2xl mx-auto">
                Construye experiencia en los lenguajes de programación y frameworks más demandados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="group border-0 bg-white hover:bg-black transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="mb-6 text-gray-600 group-hover:text-white transition-all duration-500">
                      <div className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-black tracking-wide text-black group-hover:text-white transition-colors duration-500 mb-2">
                      {tech.name}
                    </h3>
                    <div className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-500 font-medium mb-3">
                      {tech.students} ESTUDIANTES
                    </div>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                      {tech.description}
                    </p>
                  </CardContent>
                  {/* Efecto de gradiente */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section mejorada */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-8 leading-tight">
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    INGENIERÍA
                  </span>
                  <br />
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    ECOSISTEMAS
                  </span>
                  <br />
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    DIGITALES DEL
                  </span>
                  <br />
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    MAÑANA HOY
                  </span>
                </h2>
              </div>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="group cursor-pointer" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:translate-x-2">
                      <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                      <div>
                        <h3 className="text-sm font-black tracking-widest text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {feature.label}
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section con efectos dramáticos */}
      <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                ¿LISTO PARA
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                CONSTRUIR
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EL FUTURO?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-medium tracking-wide">
              Únete a miles de desarrolladores que ya están moldeando la tecnología del mañana
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-medium tracking-wide px-8 py-4 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Rocket className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  COMENZAR TU VIAJE
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-900 bg-transparent font-medium tracking-wide px-8 py-4 hover:scale-105 transition-all duration-300 group"
              >
                EXPLORAR RECURSOS
                <Sparkles className="h-4 w-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm text-gray-400 font-medium tracking-widest">
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Circle className="h-2 w-2 mr-3 fill-current group-hover:scale-150 transition-transform duration-300" />
                SIN TARJETA DE CRÉDITO
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Circle className="h-2 w-2 mr-3 fill-current group-hover:scale-150 transition-transform duration-300" />
                ACCESO INSTANTÁNEO
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Circle className="h-2 w-2 mr-3 fill-current group-hover:scale-150 transition-transform duration-300" />
                100% GRATUITO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer mejorado */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Code className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-xl font-black tracking-tight text-black group-hover:tracking-wide transition-all duration-300">
                    CODELAB
                  </span>
                </div>
                <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                  Ingeniería de ecosistemas digitales del mañana a través de educación de vanguardia y desarrollo de
                  tecnología ética.
                </p>
                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent w-10 h-10 p-0 hover:scale-110 hover:rotate-12 transition-all duration-300"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent w-10 h-10 p-0 hover:scale-110 hover:rotate-12 transition-all duration-300"
                  >
                    <Code className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-black text-black mb-4 tracking-wide text-sm">ENLACES RÁPIDOS</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      Cursos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      Recursos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-black text-black mb-4 tracking-wide text-sm">SOPORTE</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      Centro de Ayuda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      Comunidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      Documentación
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      Términos
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-12 pt-8 text-center">
              <p className="text-gray-500 font-medium tracking-wide">
                &copy; 2024 CODELAB. TODOS LOS DERECHOS RESERVADOS. INGENIERÍA CON PRECISIÓN POR EL PROF. RAFAEL.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS personalizado para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}


