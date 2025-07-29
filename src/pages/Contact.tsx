"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/Navigation"
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Heart,
  Globe,
  CheckCircle,
  ArrowRight,
  User,
  HelpCircle,
  Zap,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Brain,
  Target,
} from "lucide-react"

export default function ContactoPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)

    // Aquí podrías mostrar un mensaje de éxito
    alert("¡Mensaje enviado correctamente! Te responderemos pronto.")
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "CORREO ELECTRÓNICO",
      value: "rafael@codelab.com",
      description: "Respuesta en 24 horas",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "TELÉFONO",
      value: "+1 (555) 123-4567",
      description: "Lun - Vie, 9:00 AM - 6:00 PM",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "UBICACIÓN",
      value: "Ciudad de México, México",
      description: "Zona horaria: GMT-6",
      gradient: "from-purple-400 to-violet-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "HORARIO DE ATENCIÓN",
      value: "9:00 AM - 6:00 PM",
      description: "Lunes a Viernes",
      gradient: "from-orange-400 to-red-500",
    },
  ]

  const socialMedia = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://facebook.com/codelab",
      color: "hover:bg-blue-600",
      followers: "12K",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/codelab",
      color: "hover:bg-sky-500",
      followers: "8.5K",
      gradient: "from-sky-400 to-sky-500",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/codelab",
      color: "hover:bg-pink-600",
      followers: "15K",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/company/codelab",
      color: "hover:bg-blue-700",
      followers: "5.2K",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      url: "https://youtube.com/codelab",
      color: "hover:bg-red-600",
      followers: "25K",
      gradient: "from-red-500 to-red-600",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/codelab",
      color: "hover:bg-gray-800",
      followers: "3.8K",
      gradient: "from-gray-700 to-gray-800",
    },
  ]

  const faqs = [
    {
      question: "¿Los cursos son realmente gratuitos?",
      answer:
        "Sí, todos nuestros cursos introductorios son completamente gratuitos. Creemos en democratizar el acceso a la educación en programación.",
      icon: <Heart className="h-4 w-4" />,
    },
    {
      question: "¿Necesito experiencia previa en programación?",
      answer:
        "No, nuestros cursos están diseñados para principiantes absolutos. Comenzamos desde lo más básico y avanzamos gradualmente.",
      icon: <Brain className="h-4 w-4" />,
    },
    {
      question: "¿Ofrecen certificados al completar los cursos?",
      answer:
        "Sí, al completar cada curso recibirás un certificado digital que puedes agregar a tu perfil profesional.",
      icon: <Target className="h-4 w-4" />,
    },
    {
      question: "¿Hay soporte disponible si tengo dudas?",
      answer:
        "Por supuesto. Tenemos una comunidad activa y el profesor Rafael responde personalmente las consultas más complejas.",
      icon: <MessageCircle className="h-4 w-4" />,
    },
  ]


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
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-gray-100 text-gray-800 border-0 font-medium tracking-wide px-4 py-2 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:scale-110">
              <MessageCircle className="h-4 w-4 mr-2" />
              ESTAMOS AQUÍ PARA AYUDARTE
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                PONTE EN
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-gray-400">
                CONTACTO
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium tracking-wide">
              ¿Tienes preguntas sobre nuestros cursos? ¿Necesitas ayuda con algún tema? ¿Quieres colaborar con nosotros?
              Estamos aquí para ayudarte en tu camino hacia el aprendizaje de la programación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 font-medium tracking-wide px-8 py-4 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Send className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  ENVIAR MENSAJE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent font-medium tracking-wide px-8 py-4 hover:scale-105 hover:border-black transition-all duration-300 group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                LLAMAR AHORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  <Send className="h-4 w-4 mr-2" />
                  FORMULARIO DE CONTACTO
                </Badge>
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-black tracking-tight">
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    ENVÍANOS UN
                  </span>{" "}
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-gray-400">
                    MENSAJE
                  </span>
                </h2>
                <p className="text-lg text-gray-600 font-medium">
                  Completa el formulario y te responderemos lo antes posible. Todas las consultas son bienvenidas.
                </p>
              </div>

              <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <CardContent className="p-8 relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-black text-gray-700 mb-2 tracking-wide">
                          NOMBRE COMPLETO *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-hover:text-black transition-colors duration-300" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10 border-gray-300 focus:border-black hover:border-gray-400 transition-all duration-300"
                            placeholder="Tu nombre completo"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-black text-gray-700 mb-2 tracking-wide">
                          CORREO ELECTRÓNICO *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-hover:text-black transition-colors duration-300" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10 border-gray-300 focus:border-black hover:border-gray-400 transition-all duration-300"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-black text-gray-700 mb-2 tracking-wide">
                        ASUNTO *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-black hover:border-gray-400 transition-all duration-300"
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-black text-gray-700 mb-2 tracking-wide">
                        MENSAJE *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-black hover:border-gray-400 transition-all duration-300 resize-none"
                        placeholder="Cuéntanos más detalles sobre tu consulta..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-black tracking-wide hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            ENVIANDO...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                            ENVIAR MENSAJE
                            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Button>
                  </form>
                </CardContent>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  <MapPin className="h-4 w-4 mr-2" />
                  INFORMACIÓN DE CONTACTO
                </Badge>
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-black tracking-tight">
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                    OTRAS FORMAS DE
                  </span>{" "}
                  <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-gray-400">
                    CONTACTARNOS
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-medium">
                  Elige la forma que más te convenga para ponerte en contacto con nosotros.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border-0 bg-white cursor-pointer relative overflow-hidden"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gray-100 group-hover:bg-black rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-black text-black mb-1 tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                            {info.title}
                          </h3>
                          <p className="text-lg font-bold text-black mb-1 group-hover:scale-105 transition-transform duration-300 inline-block">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-600 font-medium">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                    {/* Efecto de gradiente */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-black text-black mb-4 flex items-center tracking-tight">
                  <Globe className="h-5 w-5 mr-2 text-black" />
                  SÍGUENOS EN REDES SOCIALES
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {socialMedia.map((social, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border-0 cursor-pointer bg-white relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-4 text-center relative z-10">
                        <div className="mx-auto mb-3 p-3 bg-gray-100 group-hover:bg-black rounded-full text-gray-600 group-hover:text-white transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-12">
                          {social.icon}
                        </div>
                        <h4 className="font-black text-black mb-1 tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                          {social.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">{social.followers} seguidores</p>
                      </CardContent>
                      {/* Efecto de gradiente */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      ></div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <HelpCircle className="h-4 w-4 mr-2" />
              PREGUNTAS FRECUENTES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black tracking-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                ¿TIENES
              </span>{" "}
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-gray-400">
                DUDAS?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Aquí tienes las respuestas a las preguntas más comunes que recibimos de nuestros estudiantes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-500 border-0 bg-white hover:bg-black cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-black text-black group-hover:text-white flex items-start tracking-tight transition-colors duration-500">
                    <div className="p-2 bg-gray-100 group-hover:bg-white rounded-lg text-gray-600 group-hover:text-black mr-4 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {faq.icon}
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pl-16">
                  <CardDescription className="text-gray-600 group-hover:text-gray-300 leading-relaxed text-base font-medium transition-colors duration-500">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </Card>
            ))}
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

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                ¿LISTO PARA COMENZAR
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TU AVENTURA?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-medium tracking-wide">
              No esperes más para transformar tu futuro. Únete a miles de estudiantes que ya están aprendiendo
              programación con nosotros.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-medium tracking-wide px-8 py-4 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  COMENZAR AHORA
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-900 bg-transparent font-medium tracking-wide px-8 py-4 hover:scale-105 transition-all duration-300 group"
              >
                <Star className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                VER CURSOS
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm text-gray-400 font-medium tracking-widest">
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <CheckCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                RESPUESTA EN 24H
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <CheckCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                SOPORTE PERSONALIZADO
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <CheckCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                SIEMPRE DISPONIBLE
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
                      FAQ
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

