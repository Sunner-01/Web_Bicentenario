"use client"

import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Card3D from "./card-3d"
import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface Event {
  id: number
  title: string
  description: string
  image: string
  date: string
  location: string
  duration: string
  details?: string
}

interface EventCategoryProps {
  title: string
  events: Event[]
}

export default function EventCategory({ title, events }: EventCategoryProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [quickViewOpen, setQuickViewOpen] = useState(false)

  const handleQuickView = (event: Event) => {
    setSelectedEvent(event)
    setQuickViewOpen(true)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card3D key={event.id} className="h-full">
            <div className="h-48 overflow-hidden">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-xl mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleQuickView(event)
                  }}
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    Vista rápida
                  </Button>
                </a>
                <Link href={`/eventos/${event.id}`} className="flex-1">
                  <Button size="sm" className="w-full">
                    Ver detalles
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card3D>
        ))}
      </div>

      <Dialog open={quickViewOpen} onOpenChange={setQuickViewOpen}>
        {selectedEvent && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
              <DialogDescription>Información del evento</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-64 overflow-hidden rounded-md">
                <img
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="mb-4">{selectedEvent.description}</p>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span>{selectedEvent.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span>Duración: {selectedEvent.duration}</span>
                </div>
                <div className="mt-4">
                  <Link href={`/eventos/${selectedEvent.id}`}>
                    <Button className="w-full">Ver página completa</Button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
