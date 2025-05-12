"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function FeaturedEvents() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const events = [
    {
      id: 1,
      title: "Festival Internacional de la Cultura",
      date: "15 - 30 de Julio, 2025",
      location: "Diversos escenarios de la ciudad",
      image: "/placeholder.svg?height=200&width=300",
      category: "Festival",
    },
    {
      id: 2,
      title: "Entrada de la Virgen de Guadalupe",
      date: "8 de Septiembre, 2025",
      location: "Centro Histórico",
      image: "/placeholder.svg?height=200&width=300",
      category: "Tradicional",
    },
    {
      id: 3,
      title: "Feria del Libro de Sucre",
      date: "10 - 20 de Mayo, 2025",
      location: "Casa de la Cultura",
      image: "/placeholder.svg?height=200&width=300",
      category: "Cultural",
    },
  ]

  return (
    <div ref={ref} className="bg-gray-50 dark:bg-gray-900/50 py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div
          className={`flex flex-col md:flex-row justify-between items-center mb-8 ${inView ? "animate-fadeIn" : "opacity-0"}`}
        >
          <div>
            <h2 className="text-3xl font-bold mb-2 font-courgette">Próximos Eventos</h2>
            <p className="text-gray-600 dark:text-gray-400">No te pierdas los eventos más importantes de Sucre</p>
          </div>
          <Link href="/eventos" className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2 group">
              Ver todos los eventos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                inView ? "animate-slideIn" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-medium px-2 py-1 rounded-full">
                  {event.category}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                <div className="flex flex-col space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-red-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Link href={`/eventos/${event.id}`} className="w-full">
                  <Button variant="default" size="sm" className="w-full">
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
