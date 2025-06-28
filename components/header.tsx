"use client"

import { useState, useEffect } from "react"
import { Menu, X, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Nuvify
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("streamings")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Streamings
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("planos")}
              className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Ver Planos
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4 border-t border-white/10">
            <button
              onClick={() => scrollToSection("streamings")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left py-2"
            >
              Streamings
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left py-2"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left py-2"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("planos")}
              className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white rounded-full font-semibold transition-all duration-200 w-full"
            >
              Ver Planos
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
