"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Globe } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function VidaNocturnaPage() {
  const categories = [
    { id: "bares", name: "Bares y Pubs" },
    { id: "discotecas", name: "Discotecas" },
    { id: "penas", name: "Peñas Folclóricas" },
  ]

  const nightlifeData = {
    bares: [
      {
        id: 1,
        name: "Joy Ride Café",
        description: "Bar con ambiente internacional, música en vivo y amplia selección de bebidas.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Nicolás Ortiz #14",
        hours: "18:00 - 02:00, todos los días",
        phone: "+591 4 6461787",
        website: "joyridecafe.com",
        tags: ["Popular", "Música en vivo", "Comida internacional"],
      },
      {
        id: 2,
        name: "Florin Bar",
        description: "Bar acogedor con buena comida, cervezas artesanales y ambiente relajado.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Bolívar #567",
        hours: "17:00 - 01:00, de martes a domingo",
        phone: "+591 4 6452839",
        website: "florinbar.com",
        tags: ["Recomendado", "Cervezas artesanales", "Comida"],
      },
      {
        id: 3,
        name: "Metro Café",
        description: "Café bar con ambiente bohemio, exposiciones de arte y música alternativa.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Aniceto Arce #234",
        hours: "16:00 - 00:00, de lunes a sábado",
        phone: "+591 4 6435678",
        website: "metrocafesucre.com",
        tags: ["Arte", "Bohemio", "Café"],
      },
      {
        id: 4,
        name: "La Posada",
        description: "Bar tradicional con música latina y ambiente internacional.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Junín #789",
        hours: "20:00 - 03:00, de jueves a sábado",
        phone: "+591 4 6478901",
        website: "laposada.com",
        tags: ["Música latina", "Baile", "Turístico"],
      },
    ],
    discotecas: [
      {
        id: 5,
        name: "Discoteca Mitos",
        description: "La discoteca más grande de Sucre con música variada y ambiente juvenil.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Av. Hernando Siles #234",
        hours: "22:00 - 04:00, de jueves a sábado",
        phone: "+591 4 6489012",
        website: "discotecamitos.com",
        tags: ["Popular", "Música variada", "Ambiente juvenil"],
      },
      {
        id: 6,
        name: "Etnia Club",
        description: "Club nocturno con música electrónica y DJs invitados.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Calvo #456",
        hours: "23:00 - 05:00, viernes y sábado",
        phone: "+591 4 6490123",
        website: "etniaclub.com",
        tags: ["Electrónica", "DJs", "Moderno"],
      },
      {
        id: 7,
        name: "Luxury",
        description: "Discoteca exclusiva con ambiente elegante y música actual.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Av. de las Américas #789",
        hours: "22:00 - 04:00, de viernes a domingo",
        phone: "+591 4 6401234",
        website: "luxurysucre.com",
        tags: ["Exclusivo", "Elegante", "VIP"],
      },
    ],
    penas: [
      {
        id: 8,
        name: "Peña Jatun Ayllu",
        description: "Auténtica peña folclórica con música y danzas tradicionales bolivianas.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Audiencia #123",
        hours: "20:00 - 01:00, de jueves a sábado",
        phone: "+591 4 6412345",
        website: "jatunayllu.com",
        tags: ["Tradicional", "Folclore", "Show en vivo"],
      },
      {
        id: 9,
        name: "Peña Misk'i Takiy",
        description: "Peña con show folclórico y comida típica boliviana.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Potosí #456",
        hours: "19:00 - 00:00, de miércoles a domingo",
        phone: "+591 4 6423456",
        website: "miskitakiy.com",
        tags: ["Recomendado", "Comida típica", "Música andina"],
      },
      {
        id: 10,
        name: "Peña Cultural Sucre",
        description: "Espacio cultural con presentaciones de música, danza y teatro boliviano.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle San Alberto #789",
        hours: "19:30 - 23:30, viernes y sábado",
        phone: "+591 4 6434567",
        website: "penaculturalsucre.com",
        tags: ["Cultural", "Artístico", "Educativo"],
      },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div className="container mx-auto py-8 mt-[140px]" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Vida Nocturna en Sucre</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Descubre los mejores lugares para disfrutar de la noche en la Ciudad Blanca
        </p>
      </motion.div>

      <Tabs defaultValue="bares" className="w-full">
        <TabsList className="flex justify-center mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(nightlifeData).map(([category, places]) => (
          <TabsContent key={category} value={category}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {places.map((place) => (
                <motion.div key={place.id} variants={itemVariants}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={place.image || "/placeholder.svg"}
                        alt={place.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-xl">{place.name}</h3>
                        <Badge
                          variant="outline"
                          className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                        >
                          {place.tags[0]}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{place.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{place.address}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-2 text-amber-600" />
                          <span>{place.hours}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Phone className="h-4 w-4 mr-2 text-green-600" />
                          <span>{place.phone}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {place.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-auto">
                        <a
                          href={`https://${place.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full flex items-center gap-1">
                            <Globe className="h-4 w-4 mr-1" />
                            Sitio web
                          </Button>
                        </a>
                        <Link href={`/vida-nocturna/${place.id}`} className="flex-1">
                          <Button size="sm" className="w-full">
                            Ver detalles
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  )
}
