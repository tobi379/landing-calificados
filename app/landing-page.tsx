"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MenuIcon } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSegment, setActiveSegment] = useState("Proveedores")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <header className="bg-gradient-to-b from-white to-gray-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Image 
                src="/images/logo.png"
                alt="SoloCalificados"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
              <nav className={`hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2 ${isMenuOpen ? 'flex flex-col top-16 right-0 bg-white p-4 shadow-md' : ''}`}>
                <a href="#quienes-somos" className="text-sm font-medium text-gray-600 hover:text-gray-900">Quienes somos</a>
                <a href="#servicios" className="text-sm font-medium text-gray-600 hover:text-gray-900">Servicios</a>
                <a href="#formulario" className="text-sm font-medium text-gray-600 hover:text-gray-900">Formulario</a>
                <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">FAQ</a>
              </nav>
              <div className="flex items-center gap-4">
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
                <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-2 flex justify-center">
            <div className="inline-flex rounded-full border p-1 bg-white shadow-sm">
              <Button
                variant={activeSegment === "Proveedores" ? "default" : "ghost"}
                className="rounded-full"
                onClick={() => setActiveSegment("Proveedores")}
              >
                Proveedores
              </Button>
              <Button
                variant={activeSegment === "Dueños" ? "default" : "ghost"}
                className="rounded-full"
                onClick={() => setActiveSegment("Dueños")}
              >
                Dueños
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden under the fixed header */}
      <div className="h-[132px]"></div>

      {/* Rest of your page content goes here */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">TÍTULO</h1>
              <p className="text-lg md:text-xl text-muted-foreground">Bajada de título</p>
              <div className="flex justify-center md:justify-start">
                <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-2 rounded-full">
                  CTA
                </Button>
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="Personas mirando la plataforma SoloCalificados que muestra los valores principales: Calidad, Seguridad, Eficiencia y Confianza"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24" id="quienes-somos">
        <h2 className="text-5xl font-bold text-center mb-20">QUIENES SOMOS</h2>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <Card className="bg-blue-50 border-none shadow-none">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="aspect-square w-full max-w-[280px] relative mb-6">
                <Image
                  src="/placeholder.svg?height=280&width=280"
                  alt="Imagen representativa 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-none shadow-none">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="aspect-square w-full max-w-[280px] relative mb-6">
                <Image
                  src="/placeholder.svg?height=280&width=280"
                  alt="Imagen representativa 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 text-lg">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-none shadow-none">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="aspect-square w-full max-w-[280px] relative mb-6">
                <Image
                  src="/placeholder.svg?height=280&width=280"
                  alt="Imagen representativa 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-700 text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button 
            className="bg-orange-400 hover:bg-orange-500 text-white px-16 py-3 rounded-full text-lg"
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
          >
            FAQ
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-4">TÍTULO</h2>
      <p className="text-center text-muted-foreground mb-8">Bajada de título</p>
      
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="Buscar..."
            className="w-full h-12 pl-4 pr-24 rounded-full border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
          />
          <Button 
            className="absolute right-0 top-0 h-12 px-8 bg-teal-500 hover:bg-teal-600 text-white rounded-full"
          >
            Buscar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex flex-col items-center">
            <div className="aspect-square w-full bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                <div className="absolute inset-0 border-2 border-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-0.5 bg-gray-300 absolute transform rotate-45" />
                  <div className="w-full h-0.5 bg-gray-300 absolute transform -rotate-45" />
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-600">Títulos</span>
          </div>
        ))}
      </div>
    </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Planes</h2>
        <div className="bg-muted rounded-lg p-8">
        <section className="container mx-auto px-4 py-12 relative overflow-hidden">
          {/* Pink gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
          
          <div className="text-center space-y-2 mb-12">
            <h3 className="text-lg text-gray-600">Nuestros planes y herramientas</h3>
            <h2 className="text-3xl md:text-4xl font-bold">90 días de garantía o devolución de dinero</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* PRO Plan */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>
                  <div className="text-sm text-gray-600 mb-1">Plan 1</div>
                  <div className="text-2xl font-bold">PRO</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Mensajes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Reportes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Roles y permisos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Encuestas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Soporte online</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PREMIUM Plan */}
            <Card className="relative overflow-hidden border-orange-400">
              <CardHeader>
                <CardTitle>
                  <div className="text-sm text-gray-600 mb-1">Plan 2</div>
                  <div className="text-2xl font-bold text-orange-500">PREMIUM</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-600 mb-4">Todo lo que tiene el plan Pro +</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Sistema de Liquidación de expensas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Denuncias y multas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Seguridad para porterías</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Reservas amenities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Botón de emergencias</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* HARDWARE Plan */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>
                  <div className="text-sm text-gray-600 mb-1">Plan 3</div>
                  <div className="text-2xl font-bold">HARDWARE</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-600 mb-4">Todo lo que tiene el plan Premium +</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Sistema instalable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Face Id</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Control de barreras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Plataforma offline</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Formulario</h2>
          <form className="space-y-4">
            <Input placeholder="Nombre" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Teléfono" type="tel" />
            <Textarea placeholder="Mensaje" />
            <Button className="w-full">Enviar</Button>
          </form>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12" id="faq">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {[1, 2, 3, 4].map((item) => (
              <AccordionItem key={item} value={`item-${item}`}>
                <AccordionTrigger>Pregunta {item}</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Image 
                src="/images/logo.png"
                alt="SoloCalificados"
                width={160}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-gray-600 text-center md:text-left">
                Conectando profesionales calificados con clientes exigentes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Inicio</a></li>
                <li><a href="#quienes-somos" className="text-gray-600 hover:text-gray-900">Quienes somos</a></li>
                <li><a href="#servicios" className="text-gray-600 hover:text-gray-900">Servicios</a></li>
                <li><a href="#formulario" className="text-gray-600 hover:text-gray-900">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Soporte</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Política de privacidad</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Términos de servicio</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} SoloCalificados. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}