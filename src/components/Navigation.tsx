import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Code, ArrowUpRight, Zap } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navigationItems = [
    { name: "INICIO", path: "/" },
    { name: "NOSOTROS", path: "/about" },
    { name: "CURSOS", path: "/courses" },
    { name: "RECURSOS", path: "/resources" },
    { name: "CONTACTO", path: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActivePath = (path: string) => {
    return location.pathname === path
  }

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          : "bg-white/80 backdrop-blur-xl border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo con animación */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavigation("/")}>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <Code className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xl font-black tracking-tight text-black group-hover:tracking-wide transition-all duration-300">
              CODELAB
            </span>
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation con efectos hover */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-black group ${
                  isActivePath(item.path) ? "text-black" : "text-gray-500 hover:text-black"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-black transition-all duration-300 ${
                    isActivePath(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                {/* Efecto de brillo en hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons con animaciones */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent font-medium tracking-wide hover:scale-105 hover:border-black transition-all duration-300 group"
            >
              SOLICITAR ACCESO
              <Zap className="h-4 w-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 font-medium tracking-wide group hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                CONSTRUIR FUTURO
                <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              {/* Efecto de onda en hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </div>

          {/* Mobile Menu Button con animación */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1 left-0 w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`absolute top-3 left-0 w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu con animación slide */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-6 pb-6 border-t border-gray-100">
            <nav className="flex flex-col space-y-6 mt-6">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-left text-lg font-medium tracking-wide transition-all duration-300 hover:translate-x-2 ${
                    isActivePath(item.path) ? "text-black font-bold" : "text-gray-500 hover:text-black"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.3s ease ${index * 100}ms`,
                  }}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-6">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 bg-transparent font-medium hover:scale-105 transition-transform duration-300"
                >
                  SOLICITAR ACCESO
                </Button>
                <Button className="bg-black text-white font-medium hover:scale-105 transition-transform duration-300">
                  CONSTRUIR FUTURO
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
