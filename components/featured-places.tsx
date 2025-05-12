"use client"

import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Card3D from "./card-3d"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function FeaturedPlaces() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredPlaces = [
    {
      id: 1,
      name: "Casa de la Libertad",
      image: "/placeholder.svg?height=200&width=300",
      category: "Edificios Históricos",
      url: "/lugares?category=edificios",
      address: "Plaza 25 de Mayo, Sucre",
      hours: "9:00 - 18:00",
    },
    {
      id: 2,
      name: "Catedral Metropolitana",
      image: "/placeholder.svg?height=200&width=300",
      category: "Catedrales",
      url: "/lugares?category=catedrales",
      address: "Plaza 25 de Mayo, Sucre",
      hours: "8:00 - 18:00",
    },
    {
      id: 3,
      name: "Parque Cretácico",
      image: "/placeholder.svg?height=200&width=300",
      category: "Parques",
      url: "/lugares?category=parques",
      address: "Cal Orck'o, a 5 km de Sucre",
      hours: "9:00 - 17:00",
    },
  ]

  return (
    <div ref={ref} className="container mx-auto py-12 px-4 md:px-6">
      <div
        className={`flex flex-col md:flex-row justify-between items-center mb-8 ${inView ? "animate-fadeIn" : "opacity-0"}`}
      >
        <div>
          <h2 className="text-3xl font-bold mb-2 font-courgette">Lugares Destacados</h2>
          <p className="text-gray-600 dark:text-gray-400">Descubre los sitios más emblemáticos de Sucre</p>
        </div>
        <Link href="/lugares" className="mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center gap-2 group">
            Ver todos los lugares
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredPlaces.map((place, index) => (
          <Card3D
            key={place.id}
            className={`h-full ${inView ? "animate-slideIn" : "opacity-0"}`}
            style={{ animationDelay: `${index * 150}ms` }}>
            <div className="h-48 overflow-hidden relative">
              <img
                src={place.image || "/placeholder.svg"}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                {place.category}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-xl mb-3">{place.name}</h3>
              <div className="flex flex-col space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-green-600" />
                  <span>{place.address}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" />
                  <span>{place.hours}</span>
                </div>
              </div>
              <Link href={place.url} className="w-full">
                <Button variant="default" size="sm" className="w-full">
                  Ver más
                </Button>
              </Link>
            </CardContent>
          </Card3D>
        ))}
      </div>

      <div
        className={`bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between ${
          inView ? "animate-fadeIn" : "opacity-0"
        }`}
        style={{ animationDelay: "450ms" }}
      >
        <div className="mb-4 md:mb-0 md:mr-6">
          <h3 className="text-xl font-bold mb-2">¿Quieres explorar más lugares?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Sucre tiene más de 100 sitios turísticos para descubrir. Encuentra tu próxima aventura.
          </p>
        </div>
        <Link href="/lugares">
          <Button size="lg" className="whitespace-nowrap">
            Explorar todos los lugares
          </Button>
        </Link>
      </div>
    </div>
  )
}
