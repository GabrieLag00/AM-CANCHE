"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Users,
  Star,
  Download,
  Search,
  Filter,
  FileText,
  Image,
  Archive,
  PenToolIcon as Tool,
  Zap,
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
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/Navigation"

export default function RecursosPage() {

  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedType, setSelectedType] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { name: "Todos", icon: <Archive className="h-4 w-4" />, count: 45 },
    { name: "Programación", icon: <FileCode className="h-4 w-4" />, count: 15 },
    { name: "Desarrollo Web", icon: <Globe className="h-4 w-4" />, count: 12 },
    { name: "Bases de Datos", icon: <Database className="h-4 w-4" />, count: 8 },
    { name: "Herramientas", icon: <Tool className="h-4 w-4" />, count: 6 },
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
    // Guías PDF - Programación
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
    },
    {
      id: 3,
      title: "Java Fundamentals Guide",
      description: "Fundamentos de Java con POO, colecciones y manejo de excepciones",
      category: "Programación",
      type: "Guías PDF",
      size: "3.2 MB",
      downloads: 2156,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop",
      tags: ["Java", "POO", "Fundamentos"],
      level: "Principiante",
      pages: 95,
    },

    // Ejercicios - Programación
    {
      id: 4,
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
    },
    {
      id: 5,
      title: "Algoritmos y Estructuras de Datos",
      description: "Ejercicios de algoritmos clásicos con implementaciones en múltiples lenguajes",
      category: "Programación",
      type: "Ejercicios",
      size: "2.1 MB",
      downloads: 3234,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=300&h=200&fit=crop",
      tags: ["Algoritmos", "Estructuras", "Lógica"],
      level: "Intermedio",
      exercises: 75,
    },

    // Desarrollo Web
    {
      id: 6,
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
    },
    {
      id: 7,
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
    },
    {
      id: 8,
      title: "Responsive Web Templates",
      description: "5 plantillas web completamente responsivas listas para usar",
      category: "Desarrollo Web",
      type: "Plantillas",
      size: "8.2 MB",
      downloads: 3456,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1467232004584-dccba630e2f6?w=300&h=200&fit=crop",
      tags: ["HTML", "CSS", "Responsive"],
      level: "Principiante",
      templates: 5,
    },

    // Bases de Datos
    {
      id: 9,
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
    },
    {
      id: 10,
      title: "Ejercicios de SQL Avanzado",
      description: "50 ejercicios de SQL con joins, subconsultas y funciones avanzadas",
      category: "Bases de Datos",
      type: "Ejercicios",
      size: "1.8 MB",
      downloads: 2567,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      tags: ["SQL", "Avanzado", "Joins"],
      level: "Avanzado",
      exercises: 50,
    },

    // Herramientas
    {
      id: 11,
      title: "VS Code Extensions Pack",
      description: "Lista curada de las mejores extensiones para desarrollo",
      category: "Herramientas",
      type: "Guías PDF",
      size: "0.5 MB",
      downloads: 6789,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      tags: ["VS Code", "Extensiones", "Productividad"],
      level: "Todos",
      extensions: 30,
    },
    {
      id: 12,
      title: "Git Commands Reference",
      description: "Comandos esenciales de Git con ejemplos y casos de uso",
      category: "Herramientas",
      type: "Cheat Sheets",
      size: "0.7 MB",
      downloads: 5432,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1556075798482-afdab827c52f?w=300&h=200&fit=crop",
      tags: ["Git", "Comandos", "Control de versiones"],
      level: "Todos",
      commands: 45,
    },

    // Proyectos
    {
      id: 13,
      title: "10 Proyectos Python para Principiantes",
      description: "Proyectos completos con código fuente y explicaciones detalladas",
      category: "Programación",
      type: "Proyectos",
      size: "12.5 MB",
      downloads: 3890,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1515879218367-afdab827c52f?w=300&h=200&fit=crop",
      tags: ["Python", "Proyectos", "Principiantes"],
      level: "Principiante",
      projects: 10,
    },
    {
      id: 14,
      title: "Portfolio Web Templates",
      description: "3 plantillas de portfolio profesional con código fuente",
      category: "Desarrollo Web",
      type: "Proyectos",
      size: "15.8 MB",
      downloads: 2345,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      tags: ["Portfolio", "Web", "Profesional"],
      level: "Intermedio",
      projects: 3,
    },

    // Diseño
    {
      id: 15,
      title: "UI/UX Design Principles",
      description: "Guía de principios de diseño para desarrolladores",
      category: "Diseño",
      type: "Guías PDF",
      size: "3.8 MB",
      downloads: 1890,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-15610707912526d30994b5?w=300&h=200&fit=crop",
      tags: ["UI", "UX", "Diseño"],
      level: "Todos",
      pages: 45,
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
        return "bg-green-100 text-green-800"
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800"
      case "Avanzado":
        return "bg-red-100 text-red-800"
      case "Todos":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
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
        return <Tool className="h-4 w-4" />
      case "Diseño":
        return <Palette className="h-4 w-4" />
      default:
        return <Archive className="h-4 w-4" />
    }
  }

  const totalDownloads = resources.reduce((sum, resource) => sum + resource.downloads, 0)

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
            <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-2">
              <Download className="h-4 w-4 mr-2" />
              Recursos Gratuitos
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Biblioteca de
              <br />
              <span className="text-gray-800">Recursos</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Accede a nuestra colección completa de guías, ejercicios, plantillas y herramientas. Todo completamente
              gratuito para acelerar tu aprendizaje en programación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar recursos..."
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
                    <Archive className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{resources.length}+</div>
                  <div className="text-sm text-gray-600">Recursos</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <Download className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{Math.floor(totalDownloads / 1000)}K+</div>
                  <div className="text-sm text-gray-600">Descargas</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">5K+</div>
                  <div className="text-sm text-gray-600">Usuarios</div>
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

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white border-y border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <Filter className="h-6 w-6 mr-2 text-blue-600" />
              Filtros
            </h2>
            <Badge className="bg-blue-100 text-blue-800">{filteredResources.length} recursos encontrados</Badge>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Categorías</h3>
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

          {/* Type Filters */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Tipo de Recurso</h3>
            <div className="flex flex-wrap gap-3">
              {resourceTypes.map((type) => (
                <Button
                  key={type.name}
                  variant={selectedType === type.name ? "default" : "outline"}
                  onClick={() => setSelectedType(type.name)}
                  className={`flex items-center space-x-2 ${
                    selectedType === type.name
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  }`}
                >
                  {type.icon}
                  <span>{type.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card
                key={resource.id}
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getLevelColor(resource.level)}>{resource.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800 flex items-center">
                      {getTypeIcon(resource.type)}
                      <span className="ml-1 hidden sm:inline">{resource.type}</span>
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-black/70 text-white flex items-center">
                      {getCategoryIcon(resource.category)}
                      <span className="ml-1">{resource.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Archive className="h-4 w-4" />
                      <span>{resource.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-blue-50 text-blue-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      {resource.pages && (
                        <div className="flex items-center space-x-1">
                          <FileText className="h-4 w-4" />
                          <span>{resource.pages} páginas</span>
                        </div>
                      )}
                      {resource.exercises && (
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4" />
                          <span>{resource.exercises} ejercicios</span>
                        </div>
                      )}
                      {resource.components && (
                        <div className="flex items-center space-x-1">
                          <Layers className="h-4 w-4" />
                          <span>{resource.components} componentes</span>
                        </div>
                      )}
                      {resource.projects && (
                        <div className="flex items-center space-x-1">
                          <FolderOpen className="h-4 w-4" />
                          <span>{resource.projects} proyectos</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Download className="h-4 w-4" />
                      <span>{resource.downloads.toLocaleString()} descargas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
                      >
                        <Image className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform duration-200">
                    <Download className="h-4 w-4 mr-2" />
                    Descargar Gratis
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <Search className="h-16 w-16 text-gray-300 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron recursos</h3>
              <p className="text-gray-500">
                Intenta cambiar los filtros o el término de búsqueda para encontrar más recursos.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas un Recurso Específico?</h2>
            <p className="text-xl mb-8 opacity-90">
              Si no encuentras lo que buscas, háznoslo saber. Creamos nuevos recursos basados en las necesidades de
              nuestra comunidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Zap className="h-5 w-5 mr-2" />
                Solicitar Recurso
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                <Heart className="h-5 w-5 mr-2" />
                Contribuir
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Recursos actualizados
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Siempre gratuito
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Sin registro requerido
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
