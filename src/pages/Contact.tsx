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
      title: "Correo Electrónico",
      value: "rafael@codeacademypro.com",
      description: "Respuesta en 24 horas",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      value: "+1 (555) 123-4567",
      description: "Lun - Vie, 9:00 AM - 6:00 PM",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      value: "Ciudad de México, México",
      description: "Zona horaria: GMT-6",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horario de Atención",
      value: "9:00 AM - 6:00 PM",
      description: "Lunes a Viernes",
    },
  ]

  const socialMedia = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://facebook.com/codeacademypro",
      color: "hover:bg-blue-600",
      followers: "12K",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/codeacademypro",
      color: "hover:bg-sky-500",
      followers: "8.5K",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/codeacademypro",
      color: "hover:bg-pink-600",
      followers: "15K",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/company/codeacademypro",
      color: "hover:bg-blue-700",
      followers: "5.2K",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      url: "https://youtube.com/codeacademypro",
      color: "hover:bg-red-600",
      followers: "25K",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/codeacademypro",
      color: "hover:bg-gray-800",
      followers: "3.8K",
    },
  ]

  const faqs = [
    {
      question: "¿Los cursos son realmente gratuitos?",
      answer:
        "Sí, todos nuestros cursos introductorios son completamente gratuitos. Creemos en democratizar el acceso a la educación en programación.",
    },
    {
      question: "¿Necesito experiencia previa en programación?",
      answer:
        "No, nuestros cursos están diseñados para principiantes absolutos. Comenzamos desde lo más básico y avanzamos gradualmente.",
    },
    {
      question: "¿Ofrecen certificados al completar los cursos?",
      answer:
        "Sí, al completar cada curso recibirás un certificado digital que puedes agregar a tu perfil profesional.",
    },
    {
      question: "¿Hay soporte disponible si tengo dudas?",
      answer:
        "Por supuesto. Tenemos una comunidad activa y el profesor Rafael responde personalmente las consultas más complejas.",
    },
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
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2">
              <MessageCircle className="h-4 w-4 mr-2" />
              Estamos Aquí para Ayudarte
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Ponte en
              <br />
              <span className="text-gray-800">Contacto</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes preguntas sobre nuestros cursos? ¿Necesitas ayuda con algún tema? ¿Quieres colaborar con nosotros?
              Estamos aquí para ayudarte en tu camino hacia el aprendizaje de la programación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Send className="h-4 w-4 mr-2" />
                  Formulario de Contacto
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Envíanos un{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Mensaje
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Completa el formulario y te responderemos lo antes posible. Todas las consultas son bienvenidas.
                </p>
              </div>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Tu nombre completo"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Correo Electrónico *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                        placeholder="Cuéntanos más detalles sobre tu consulta..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Enviar Mensaje
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                  <MapPin className="h-4 w-4 mr-2" />
                  Información de Contacto
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Otras Formas de{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Contactarnos
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Elige la forma que más te convenga para ponerte en contacto con nosotros.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                          <p className="text-lg font-medium text-blue-600 mb-1">{info.value}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-blue-600" />
                  Síguenos en Redes Sociales
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {socialMedia.map((social, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 cursor-pointer"
                    >
                      <CardContent className="p-4 text-center">
                        <div
                          className={`mx-auto mb-3 p-3 bg-gray-100 rounded-full text-gray-600 group-hover:text-white transition-all duration-300 w-fit ${social.color}`}
                        >
                          {social.icon}
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-1">{social.name}</h4>
                        <p className="text-sm text-gray-600">{social.followers} seguidores</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
              <HelpCircle className="h-4 w-4 mr-2" />
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">¿Tienes Dudas?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aquí tienes las respuestas a las preguntas más comunes que recibimos de nuestros estudiantes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-800 flex items-start">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pl-16">
                  <CardDescription className="text-gray-600 leading-relaxed text-base">{faq.answer}</CardDescription>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Comenzar tu Aventura?</h2>
            <p className="text-xl mb-8 opacity-90">
              No esperes más para transformar tu futuro. Únete a miles de estudiantes que ya están aprendiendo
              programación con nosotros.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Zap className="h-5 w-5 mr-2" />
                Comenzar Ahora
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                <Star className="h-5 w-5 mr-2" />
                Ver Cursos
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Respuesta en 24h
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Soporte personalizado
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Siempre disponible
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

