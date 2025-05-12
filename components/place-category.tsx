"use client"

import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Card3D from "./card-3d"
import Link from "next/link"
import { MapPin, Clock, Ticket, Info, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Place {
  name: string
  image: string
  description: string
  details?: string
  address?: string
  hours?: string
  price?: string
}

interface PlaceCategoryProps {
  title: string
  places: Place[]
}

export default function PlaceCategory({ title, places }: PlaceCategoryProps) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
  const [quickViewOpen, setQuickViewOpen] = useState(false)

  const handleQuickView = (place: Place) => {
    setSelectedPlace(place)
    setQuickViewOpen(true)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        {title}
        <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
          {places.length} lugares para visitar
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <Card3D key={index} className="h-full">
            <div className="h-48 overflow-hidden relative">
              <img
                src={place.image || "/placeholder.svg"}
                alt={place.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
              <Badge className="absolute top-3 right-3 bg-white/80 dark:bg-black/50 text-black dark:text-white">
                {title}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-xl mb-3">{place.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{place.description}</p>
              <div className="flex gap-2 mt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleQuickView(place)
                  }}
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1">
                    <Info className="h-4 w-4" />
                    <span>Vista rápida</span>
                  </Button>
                </a>
                <Link
                  href={`/lugares/${encodeURIComponent(place.name.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="flex-1"
                >
                  <Button size="sm" className="w-full flex items-center justify-center gap-1">
                    <ArrowRight className="h-4 w-4" />
                    <span>Ver detalles</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card3D>
        ))}
      </div>

      <Dialog open={quickViewOpen} onOpenChange={setQuickViewOpen}>
        {selectedPlace && (
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedPlace.name}</DialogTitle>
              <DialogDescription>Información detallada</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src={selectedPlace.image || "/placeholder.svg"}
                  alt={selectedPlace.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedPlace.details || selectedPlace.description}
                  </p>
                </div>

                {selectedPlace.address && (
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Dirección</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{selectedPlace.address}</div>
                    </div>
                  </div>
                )}

                {selectedPlace.hours && (
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Horario</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{selectedPlace.hours}</div>
                    </div>
                  </div>
                )}

                {selectedPlace.price && (
                  <div className="flex items-start">
                    <Ticket className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Precio</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{selectedPlace.price}</div>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <Link href={`/lugares/${encodeURIComponent(selectedPlace.name.toLowerCase().replace(/\s+/g, "-"))}`}>
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
