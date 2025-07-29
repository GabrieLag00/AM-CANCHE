"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/Navigation"
import {
  Code,
  Users,
  Star,
  Download,
  Search,
  Filter,
  FileText,
  Archive,
  Target,
  ArrowRight,
  CheckCircle,
  Globe,
  Heart,
  Database,
  FileCode,
  Layers,
  BookMarked,
  Palette,
  FolderOpen,
  Zap,
  Brain,
} from "lucide-react"

export default function RecursosPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedType, setSelectedType] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const categories = [
    { name: "Todos", icon: <Archive className="h-4 w-4" />, count: 45 },
    { name: "Programación", icon: <FileCode className="h-4 w-4" />, count: 15 },
    { name: "Desarrollo Web", icon: <Globe className="h-4 w-4" />, count: 12 },
    { name: "Bases de Datos", icon: <Database className="h-4 w-4" />, count: 8 },
    { name: "Herramientas", icon: <Brain className="h-4 w-4" />, count: 6 },
    { name: "Diseño", icon: <Palette className="h-4 w-4" />, count: 4 },
  ]

  const resourceTypes = [
    { name: "Todos", icon: <Archive className="h-4 w-4" /> },
    { name: "Guías PDF", icon: <FileText className="h-4 w-4" /> },
    { name: "Ejercicios", icon: <Target className="h-4 w-4" /> },
    { name: "Plantillas", icon: <Layers className="h-4 w-4" /> },
    { name: "Cheat Sheets", icon: <BookMarked className="h-4 w-4" /> },
    { name: "Proyectos", icon: <FolderOpen className="h-4 w-4" /> },
  ]

  const resources = [
    {
      id: 1,
      title: "Guía Completa de Python",
      description: "Manual completo con sintaxis, ejemplos y mejores prácticas de Python",
      category: "Programación",
      type: "Guías PDF",
      size: "2.5 MB",
      downloads: 3420,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
      tags: ["Python", "Sintaxis", "Ejemplos"],
      level: "Principiante",
      pages: 85,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "JavaScript ES6+ Handbook",
      description: "Guía moderna de JavaScript con todas las características de ES6 y posteriores",
      category: "Programación",
      type: "Guías PDF",
      size: "1.8 MB",
      downloads: 2890,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      tags: ["JavaScript", "ES6", "Moderno"],
      level: "Intermedio",
      pages: 62,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      title: "100 Ejercicios de Python",
      description: "Colección de ejercicios prácticos con soluciones paso a paso",
      category: "Programación",
      type: "Ejercicios",
      size: "1.2 MB",
      downloads: 4567,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555066931169-0a1dd7228f2d?w=300&h=200&fit=crop",
      tags: ["Python", "Práctica", "Soluciones"],
      level: "Todos",
      exercises: 100,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: 4,
      title: "HTML5 & CSS3 Cheat Sheet",
      description: "Referencia rápida con todas las etiquetas y propiedades más utilizadas",
      category: "Desarrollo Web",
      type: "Cheat Sheets",
      size: "0.8 MB",
      downloads: 5678,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      tags: ["HTML5", "CSS3", "Referencia"],
      level: "Todos",
      pages: 12,
      gradient: "from-purple-400 to-violet-500",
    },
    {
      id: 5,
      title: "React Components Library",
      description: "Colección de componentes React reutilizables con código fuente",
      category: "Desarrollo Web",
      type: "Plantillas",
      size: "4.5 MB",
      downloads: 2890,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      tags: ["React", "Componentes", "Plantillas"],
      level: "Intermedio",
      components: 25,
      gradient: "from-indigo-400 to-blue-500",
    },
    {
      id: 6,
      title: "SQL Query Cheat Sheet",
      description: "Referencia completa de consultas SQL con ejemplos prácticos",
      category: "Bases de Datos",
      type: "Cheat Sheets",
      size: "1.1 MB",
      downloads: 4123,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop",
      tags: ["SQL", "Consultas", "MySQL"],
      level: "Todos",
      pages: 8,
      gradient: "from-red-400 to-pink-500",
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === "Todos" || resource.category === selectedCategory
    const matchesType = selectedType === "Todos" || resource.type === selectedType
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesType && matchesSearch
  })

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Principiante":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Avanzado":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "Todos":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Guías PDF":
        return <FileText className="h-4 w-4" />
      case "Ejercicios":
        return <Target className="h-4 w-4" />
      case "Plantillas":
        return <Layers className="h-4 w-4" />
      case "Cheat Sheets":
        return <BookMarked className="h-4 w-4" />
      case "Proyectos":
        return <FolderOpen className="h-4 w-4" />
      default:
        return <Archive className="h-4 w-4" />
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
      case "Herramientas":
        return <Brain className="h-4 w-4" />
      case "Diseño":
        return <Palette className="h-4 w-4" />
      default:
        return <Archive className="h-4 w-4" />
    }
  }

  const totalDownloads = resources.reduce((sum, resource) => sum + resource.downloads, 0)

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
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-gray-100 text-gray-800 border-0 font-medium tracking-wide px-4 py-2 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:scale-110">
              <Download className="h-4 w-4 mr-2" />
              RECURSOS GRATUITOS
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                BIBLIOTECA
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">DE</span>{" "}
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-gray-400">
                RECURSOS
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium tracking-wide">
              Accede a nuestra colección completa de guías, ejercicios, plantillas y herramientas. Todo completamente
              gratuito para acelerar tu aprendizaje en programación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-md mx-auto">
              <div className="relative flex-1 w-full group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-hover:text-black transition-colors duration-300" />
                <Input
                  placeholder="Buscar recursos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-300 focus:border-black hover:border-gray-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: `${resources.length}+`, label: "RECURSOS", icon: <Archive className="h-5 w-5" /> },
                {
                  number: `${Math.floor(totalDownloads / 1000)}K+`,
                  label: "DESCARGAS",
                  icon: <Download className="h-5 w-5" />,
                },
                { number: "5K+", label: "USUARIOS", icon: <Users className="h-5 w-5" /> },
                { number: "100%", label: "GRATUITO", icon: <Heart className="h-5 w-5" /> },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-black group cursor-pointer hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-center mb-2 text-gray-600 group-hover:text-white transition-colors duration-300">
                      <div className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-black text-black group-hover:text-white transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-300 font-medium tracking-wide transition-colors duration-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-black flex items-center tracking-tight">
              <Filter className="h-6 w-6 mr-2 text-black" />
              FILTROS
            </h2>
            <Badge className="bg-black text-white font-medium tracking-wide hover:scale-105 transition-transform duration-300">
              {filteredResources.length} RECURSOS ENCONTRADOS
            </Badge>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-black text-gray-700 mb-3 tracking-wide">CATEGORÍAS</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 hover:scale-105 transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-black text-white hover:bg-gray-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent hover:border-black"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="group-hover:rotate-12 transition-transform duration-300">{category.icon}</div>
                  <span className="font-medium tracking-wide">{category.name}</span>
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

          {/* Type Filters */}
          <div>
            <h3 className="text-sm font-black text-gray-700 mb-3 tracking-wide">TIPO DE RECURSO</h3>
            <div className="flex flex-wrap gap-3">
              {resourceTypes.map((type, index) => (
                <Button
                  key={type.name}
                  variant={selectedType === type.name ? "default" : "outline"}
                  onClick={() => setSelectedType(type.name)}
                  className={`flex items-center space-x-2 hover:scale-105 transition-all duration-300 ${
                    selectedType === type.name
                      ? "bg-black text-white hover:bg-gray-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent hover:border-black"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="group-hover:rotate-12 transition-transform duration-300">{type.icon}</div>
                  <span className="font-medium tracking-wide">{type.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card
                key={resource.id}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white overflow-hidden cursor-pointer relative ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getLevelColor(resource.level)} transition-all duration-300 hover:scale-110`}>
                      {resource.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800 flex items-center hover:bg-black hover:text-white transition-all duration-300">
                      <div className="group-hover:rotate-12 transition-transform duration-300">
                        {getTypeIcon(resource.type)}
                      </div>
                      <span className="ml-1 hidden sm:inline font-medium">{resource.type}</span>
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-black/70 text-white flex items-center hover:bg-black transition-all duration-300">
                      <div className="group-hover:rotate-12 transition-transform duration-300">
                        {getCategoryIcon(resource.category)}
                      </div>
                      <span className="ml-1 font-medium">{resource.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Efecto de gradiente específico del recurso */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Archive className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">{resource.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-bold text-gray-700">{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-black text-black group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                    {resource.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed font-medium">
                    {resource.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 text-xs font-medium hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 font-medium">
                    <div className="flex items-center space-x-4">
                      {resource.pages && (
                        <div className="flex items-center space-x-1">
                          <FileText className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          <span>{resource.pages} páginas</span>
                        </div>
                      )}
                      {resource.exercises && (
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          <span>{resource.exercises} ejercicios</span>
                        </div>
                      )}
                      {resource.components && (
                        <div className="flex items-center space-x-1">
                          <Layers className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          <span>{resource.components} componentes</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500 font-medium">
                      <Download className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{resource.downloads.toLocaleString()} descargas</span>
                    </div>
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-medium tracking-wide group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      DESCARGAR GRATIS
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Button>
                </CardContent>

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <Search className="h-16 w-16 text-gray-300 mx-auto animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-gray-600 mb-2 tracking-tight">NO SE ENCONTRARON RECURSOS</h3>
              <p className="text-gray-500 font-medium">
                Intenta cambiar los filtros o el término de búsqueda para encontrar más recursos.
              </p>
            </div>
          )}
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
                ¿NECESITAS UN
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RECURSO ESPECÍFICO?
              </span>
            </h2>
            <p className="text-xl mb-8 text-gray-300 font-medium tracking-wide">
              Si no encuentras lo que buscas, háznoslo saber. Creamos nuevos recursos basados en las necesidades de
              nuestra comunidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-medium tracking-wide px-8 py-4 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  SOLICITAR RECURSO
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-900 bg-transparent font-medium tracking-wide px-8 py-4 hover:scale-105 transition-all duration-300 group"
              >
                <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                CONTRIBUIR
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm text-gray-400 font-medium tracking-widest">
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <CheckCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                RECURSOS ACTUALIZADOS
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <CheckCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                SIEMPRE GRATUITO
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300">
                <CheckCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                SIN REGISTRO REQUERIDO
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



