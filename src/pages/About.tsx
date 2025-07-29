"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/Navigation"
import { ArrowUpRight, Code, ChevronRight, Circle, Sparkles, Brain, Target, Users } from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const timeline = [
    {
      year: "2010",
      title: "FUNDACIÓN",
      description: "Comenzó como profesor universitario de programación con visión de educación tecnológica accesible",
    },
    {
      year: "2015",
      title: "INNOVACIÓN",
      description: "Desarrolló metodologías revolucionarias para enseñar conceptos complejos de programación",
    },
    {
      year: "2018",
      title: "EXPANSIÓN",
      description: "Creó currículum integral cubriendo frameworks modernos de desarrollo",
    },
    {
      year: "2024",
      title: "EVOLUCIÓN",
      description: "Lanzó CODELAB para democratizar el acceso a educación de programación de vanguardia",
    },
  ]

  const achievements = [
    { number: "15+", label: "AÑOS", sublabel: "EXPERIENCIA" },
    { number: "5000+", label: "ESTUDIANTES", sublabel: "FORMADOS" },
    { number: "98%", label: "ÉXITO", sublabel: "TASA" },
    { number: "50+", label: "CURSOS", sublabel: "CREADOS" },
  ]

  const principles = [
    {
      title: "TECNOLOGÍA ÉTICA",
      description: "Construyendo soluciones de IA y software responsables que beneficien a la humanidad",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "EXCELENCIA COGNITIVA",
      description: "Desarrollando pensamiento crítico a través de desafíos de programación prácticos",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "HABILIDADES DEL FUTURO",
      description: "Preparando desarrolladores para tecnologías emergentes y demandas de la industria",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "APRENDIZAJE INCLUSIVO",
      description: "Creando caminos educativos accesibles para diversos orígenes y experiencias",
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) * 0.005,
    y: (mousePosition.y - window.innerHeight / 2) * 0.005,
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
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge className="bg-gray-100 text-gray-800 border-0 font-medium tracking-wide mb-8 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:scale-110">
                    ARQUITECTO
                  </Badge>

                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-none mb-8">
                    <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                      PROF.
                    </span>
                    <br />
                    <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                      RAFAEL
                    </span>
                    <br />
                    <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-gray-400">
                      VILLEGAS
                    </span>
                  </h1>

                  <p className="text-lg text-gray-600 font-medium tracking-wide leading-relaxed mb-12">
                    INGENIERÍA DE ECOSISTEMAS DIGITALES DEL MAÑANA A TRAVÉS DE TECNOLOGÍA ÉTICA Y EXCELENCIA COGNITIVA
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-gray-800 font-medium tracking-wide px-8 py-4 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        CONECTAR
                        <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent font-medium tracking-wide px-8 py-4 hover:scale-105 hover:border-black transition-all duration-300 group"
                    >
                      AGENDAR REUNIÓN
                      <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Quick Stats con animaciones */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="text-center group cursor-pointer hover:scale-110 transition-all duration-300"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="text-2xl font-black text-black group-hover:text-blue-600 transition-colors duration-300">
                          {achievement.number}
                        </div>
                        <div className="text-xs font-medium text-gray-500 tracking-widest group-hover:text-gray-700 transition-colors duration-300">
                          {achievement.label}
                        </div>
                        <div className="text-xs text-gray-400 tracking-wide">{achievement.sublabel}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="aspect-square bg-gray-100 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group"
                    style={{
                      transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                    }}
                  >
                    <img
                      src="./public/2ded5dff-ad3c-4662-8cd0-b7a2214c6249.jpeg"
                      alt="Profesor Rafael Villegas"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay con efecto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-black text-white p-4 rounded-lg hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer">
                    <div className="text-sm font-black tracking-wide">15+ AÑOS</div>
                    <div className="text-xs text-gray-300">EXPERIENCIA</div>
                  </div>
                  {/* Elementos decorativos */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-gray-300 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-black rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6">
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  LÍNEA DE
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  EVOLUCIÓN
                </span>
              </h2>
              <p className="text-lg text-gray-600 font-medium tracking-wide max-w-2xl mx-auto">
                De profesor universitario a arquitecto de ecosistemas digitales
              </p>
            </div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="group" style={{ animationDelay: `${index * 200}ms` }}>
                  <Card className="border-0 bg-white hover:bg-black transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-4 gap-6 items-center">
                        <div className="text-center md:text-left">
                          <div className="text-3xl font-black text-black group-hover:text-white transition-colors duration-500 group-hover:scale-110 inline-block">
                            {item.year}
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-black tracking-wide text-black group-hover:text-white transition-colors duration-500 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-all duration-500 ml-auto group-hover:scale-110 group-hover:rotate-12" />
                        </div>
                      </div>
                    </CardContent>
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-8">
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  NUESTRA
                </span>{" "}
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  MISIÓN
                </span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <Card className="border-0 bg-black text-white hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden">
                  <CardContent className="p-12 text-center relative z-10">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-wide group-hover:scale-105 transition-transform duration-300">
                      "DEMOCRATIZAR EL ACCESO A EDUCACIÓN DE PROGRAMACIÓN DE VANGUARDIA, EMPODERANDO A INDIVIDUOS PARA
                      CONSTRUIR SOLUCIONES TECNOLÓGICAS ÉTICAS QUE MOLDEEN UN MEJOR FUTURO DIGITAL PARA LA HUMANIDAD."
                    </p>
                    <div className="mt-8 flex items-center justify-center space-x-2">
                      <Circle className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" />
                      <Circle
                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <Circle
                        className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                  </CardContent>
                  {/* Efecto de gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6">
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  PRINCIPIOS
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                  FUNDAMENTALES
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="group" style={{ animationDelay: `${index * 150}ms` }}>
                  <Card className="border-0 bg-white hover:bg-black transition-all duration-500 cursor-pointer h-full hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gray-100 group-hover:bg-white rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <div className="text-gray-600 group-hover:text-black transition-colors duration-300">
                            {principle.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-black tracking-wide text-black group-hover:text-white transition-colors duration-500 mb-4">
                            {principle.title}
                          </h3>
                          <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TRANSFORMARTE?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-medium tracking-wide">
              Únete a la comunidad de desarrolladores construyendo la tecnología del mañana hoy
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-medium tracking-wide px-8 py-4 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  COMENZAR VIAJE
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-900 bg-transparent font-medium tracking-wide px-8 py-4 hover:scale-105 transition-all duration-300 group"
              >
                EXPLORAR CURSOS
                <Sparkles className="h-4 w-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm text-gray-400 font-medium tracking-widest">
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Circle className="h-2 w-2 mr-3 fill-current group-hover:scale-150 transition-transform duration-300" />
                15+ AÑOS PROBADOS
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Circle className="h-2 w-2 mr-3 fill-current group-hover:scale-150 transition-transform duration-300" />
                5000+ ESTUDIANTES
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <Circle className="h-2 w-2 mr-3 fill-current group-hover:scale-150 transition-transform duration-300" />
                ENFOQUE ÉTICO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}


