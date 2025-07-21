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
  Play,
  Clock,
  Target,
  Filter,
  Search,
  ArrowRight,
  CheckCircle,
  Globe,
  Heart,
  Database,
  Smartphone,
  Server,
  Zap,
  FileCode,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/Navigation"

export default function CursosPage() {

  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { name: "Todos", icon: <Code className="h-4 w-4" />, count: 24 },
    { name: "Programación", icon: <FileCode className="h-4 w-4" />, count: 8 },
    { name: "Desarrollo Web", icon: <Globe className="h-4 w-4" />, count: 6 },
    { name: "Bases de Datos", icon: <Database className="h-4 w-4" />, count: 4 },
    { name: "Móvil", icon: <Smartphone className="h-4 w-4" />, count: 3 },
    { name: "DevOps", icon: <Server className="h-4 w-4" />, count: 3 },
  ]

  const courses = [
    // Programación
    {
      id: 1,
      title: "Python desde Cero",
      description: "Aprende Python paso a paso, desde variables hasta programación orientada a objetos",
      category: "Programación",
      level: "Principiante",
      duration: "8 semanas",
      students: 1250,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      technologies: ["Python", "VS Code"],
      lessons: 32,
      projects: 5,
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      description: "Domina JavaScript moderno con ES6+, DOM manipulation y programación asíncrona",
      category: "Programación",
      level: "Principiante",
      duration: "6 semanas",
      students: 980,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS"],
      lessons: 28,
      projects: 4,
    },
    {
      id: 3,
      title: "Java para Principiantes",
      description: "Fundamentos de Java, POO y desarrollo de aplicaciones de consola",
      category: "Programación",
      level: "Principiante",
      duration: "10 semanas",
      students: 756,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      technologies: ["Java", "IntelliJ"],
      lessons: 35,
      projects: 6,
    },
    {
      id: 4,
      title: "C++ Básico",
      description: "Introducción a C++, estructuras de datos y algoritmos básicos",
      category: "Programación",
      level: "Intermedio",
      duration: "12 semanas",
      students: 543,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      technologies: ["C++", "Visual Studio"],
      lessons: 40,
      projects: 7,
    },

    // Desarrollo Web
    {
      id: 5,
      title: "HTML & CSS Completo",
      description: "Crea sitios web modernos y responsivos con HTML5 y CSS3",
      category: "Desarrollo Web",
      level: "Principiante",
      duration: "4 semanas",
      students: 1456,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      technologies: ["HTML5", "CSS3", "Flexbox"],
      lessons: 24,
      projects: 3,
    },
    {
      id: 6,
      title: "React desde Cero",
      description: "Desarrolla aplicaciones web modernas con React, Hooks y Context API",
      category: "Desarrollo Web",
      level: "Intermedio",
      duration: "8 semanas",
      students: 892,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      technologies: ["React", "JavaScript", "Node.js"],
      lessons: 30,
      projects: 5,
    },
    {
      id: 7,
      title: "Vue.js Fundamentals",
      description: "Aprende Vue.js 3 con Composition API y desarrollo de SPAs",
      category: "Desarrollo Web",
      level: "Intermedio",
      duration: "6 semanas",
      students: 634,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400&h=250&fit=crop",
      technologies: ["Vue.js", "JavaScript", "Vite"],
      lessons: 26,
      projects: 4,
    },
    {
      id: 8,
      title: "Node.js & Express",
      description: "Desarrollo de APIs REST y aplicaciones backend con Node.js",
      category: "Desarrollo Web",
      level: "Intermedio",
      duration: "7 semanas",
      students: 723,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB"],
      lessons: 28,
      projects: 4,
    },

    // Bases de Datos
    {
      id: 9,
      title: "SQL desde Cero",
      description: "Aprende SQL con MySQL, consultas avanzadas y diseño de bases de datos",
      category: "Bases de Datos",
      level: "Principiante",
      duration: "5 semanas",
      students: 1123,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      technologies: ["MySQL", "SQL", "Workbench"],
      lessons: 22,
      projects: 3,
    },
    {
      id: 10,
      title: "MongoDB Fundamentals",
      description: "Base de datos NoSQL, agregaciones y modelado de datos",
      category: "Bases de Datos",
      level: "Intermedio",
      duration: "4 semanas",
      students: 567,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      technologies: ["MongoDB", "Compass", "Atlas"],
      lessons: 18,
      projects: 2,
    },
    {
      id: 11,
      title: "PostgreSQL Avanzado",
      description: "Optimización, procedimientos almacenados y administración de PostgreSQL",
      category: "Bases de Datos",
      level: "Avanzado",
      duration: "6 semanas",
      students: 345,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["PostgreSQL", "pgAdmin", "SQL"],
      lessons: 25,
      projects: 3,
    },

    // Móvil
    {
      id: 12,
      title: "React Native",
      description: "Desarrolla apps móviles nativas para iOS y Android con React Native",
      category: "Móvil",
      level: "Intermedio",
      duration: "10 semanas",
      students: 456,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      technologies: ["React Native", "Expo", "JavaScript"],
      lessons: 32,
      projects: 4,
    },
    {
      id: 13,
      title: "Flutter Básico",
      description: "Crea aplicaciones móviles multiplataforma con Flutter y Dart",
      category: "Móvil",
      level: "Principiante",
      duration: "8 semanas",
      students: 678,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      technologies: ["Flutter", "Dart", "Android Studio"],
      lessons: 30,
      projects: 5,
    },

    // DevOps
    {
      id: 14,
      title: "Docker Fundamentals",
      description: "Containerización de aplicaciones con Docker y Docker Compose",
      category: "DevOps",
      level: "Intermedio",
      duration: "4 semanas",
      students: 432,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop",
      technologies: ["Docker", "Linux", "Containers"],
      lessons: 20,
      projects: 3,
    },
    {
      id: 15,
      title: "Git & GitHub",
      description: "Control de versiones, colaboración y flujos de trabajo con Git",
      category: "DevOps",
      level: "Principiante",
      duration: "3 semanas",
      students: 1234,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      technologies: ["Git", "GitHub", "Terminal"],
      lessons: 15,
      projects: 2,
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Principiante":
        return "bg-green-100 text-green-800"
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800"
      case "Avanzado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programación":
        return <FileCode className="h-4 w-4" />
      case "Desarrollo Web":
        return <Globe className="h-4 w-4" />
      case "Bases de Datos":
        return <Database className="h-4 w-4" />
      case "Móvil":
        return <Smartphone className="h-4 w-4" />
      case "DevOps":
        return <Server className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2">
              <BookOpen className="h-4 w-4 mr-2" />
              Cursos Gratuitos
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Aprende Programación
              <br />
              <span className="text-gray-800">Paso a Paso</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra colección de cursos introductorios completamente gratuitos. Desde programación básica
              hasta tecnologías avanzadas, todo explicado de manera clara y práctica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar cursos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-300 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">15+</div>
                  <div className="text-sm text-gray-600">Cursos</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">8000+</div>
                  <div className="text-sm text-gray-600">Estudiantes</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">200+</div>
                  <div className="text-sm text-gray-600">Horas</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Gratuito</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-white border-y border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <Filter className="h-6 w-6 mr-2 text-blue-600" />
              Categorías
            </h2>
            <Badge className="bg-blue-100 text-blue-800">{filteredCourses.length} cursos encontrados</Badge>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <Badge
                  className={`ml-2 ${
                    selectedCategory === category.name ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800 flex items-center">
                      {getCategoryIcon(course.category)}
                      <span className="ml-1 hidden sm:inline">{course.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">{course.description}</CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-blue-50 text-blue-700 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons} lecciones</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="h-4 w-4" />
                        <span>{course.projects} proyectos</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} estudiantes</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform duration-200">
                    <Play className="h-4 w-4 mr-2" />
                    Comenzar Curso
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <Search className="h-16 w-16 text-gray-300 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron cursos</h3>
              <p className="text-gray-500">
                Intenta cambiar los filtros o el término de búsqueda para encontrar más cursos.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No Encuentras lo que Buscas?</h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos constantemente agregando nuevos cursos. Suscríbete para ser el primero en conocer nuestras
              novedades y cursos especializados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Zap className="h-5 w-5 mr-2" />
                Solicitar Curso
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                <Heart className="h-5 w-5 mr-2" />
                Suscribirse
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Nuevos cursos cada mes
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Siempre gratuito
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Certificados incluidos
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
