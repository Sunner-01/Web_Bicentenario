"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Ticket, ArrowLeft, ArrowRight, Share2, Heart, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"

interface EventDetailPageProps {
  params: { id: string }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // En un caso real, aquí buscarías los datos del evento según el ID
  const event = {
    id: Number.parseInt(params.id),
    title: "Festival Internacional de la Cultura",
    category: "Festivales",
    description:
      "Evento cultural que reúne artistas nacionales e internacionales en diversas disciplinas como música, danza, teatro, cine y artes plásticas.",
    longDescription:
      "El Festival Internacional de la Cultura de Sucre es uno de los eventos culturales más importantes de Bolivia. Durante dos semanas, la ciudad se convierte en un escenario para artistas nacionales e internacionales que presentan sus obras en diversas disciplinas como música, danza, teatro, cine y artes plásticas. El festival tiene como objetivo promover el intercambio cultural y artístico, así como difundir la riqueza cultural de Bolivia y de otros países participantes. Cada año, el festival atrae a miles de visitantes que disfrutan de una amplia variedad de actividades culturales en diferentes espacios de la ciudad.",
    date: "15 - 30 de Julio, 2025",
    startDate: "2025-07-15",
    endDate: "2025-07-30",
    venue: "Diversos escenarios de la ciudad",
    mainVenue: "Teatro Gran Mariscal",
    duration: "2 semanas",
    price: "Varía según el evento (algunos gratuitos)",
    organizer: "Ministerio de Culturas y Turismo de Bolivia",
    website: "festivalinternacionaldelacultura.gob.bo",
    rating: 4.9,
    reviewsCount: 156,
    images: [
      "/placeholder.svg?height=600&width=800&text=Festival+Internacional+1",
      "/placeholder.svg?height=600&width=800&text=Festival+Internacional+2",
      "/placeholder.svg?height=600&width=800&text=Festival+Internacional+3",
      "/placeholder.svg?height=600&width=800&text=Festival+Internacional+4",
      "/placeholder.svg?height=600&width=800&text=Festival+Internacional+5",
    ],
    history:
      "El Festival Internacional de la Cultura de Sucre se celebra desde 1992 y ha crecido hasta convertirse en uno de los eventos culturales más importantes de Bolivia. Inicialmente centrado en la música clásica y el teatro, con el tiempo ha ampliado su oferta para incluir una gran variedad de expresiones artísticas y culturales. A lo largo de los años, el festival ha contado con la participación de artistas de renombre internacional y ha servido como plataforma para promover a artistas bolivianos emergentes. El evento ha contribuido significativamente al posicionamiento de Sucre como un importante centro cultural en América Latina.",
    activities: [
      {
        name: "Conciertos de Música",
        description: "Presentaciones de artistas nacionales e internacionales en diversos géneros musicales.",
        image: "/placeholder.svg?height=300&width=400&text=Conciertos",
        venue: "Plaza 25 de Mayo y Teatro Gran Mariscal",
        schedule: "Todos los días, 19:00 - 22:00",
      },
      {
        name: "Exposiciones de Arte",
        description: "Muestras de pintura, escultura y fotografía de artistas contemporáneos.",
        image: "/placeholder.svg?height=300&width=400&text=Exposiciones",
        venue: "Casa de la Cultura y Museo de Arte Contemporáneo",
        schedule: "Todos los días, 10:00 - 20:00",
      },
      {
        name: "Obras de Teatro",
        description: "Representaciones teatrales de compañías nacionales e internacionales.",
        image: "/placeholder.svg?height=300&width=400&text=Teatro",
        venue: "Teatro Municipal y espacios alternativos",
        schedule: "De martes a domingo, 19:30",
      },
      {
        name: "Danza Contemporánea y Folclórica",
        description: "Espectáculos de danza que fusionan lo tradicional con lo contemporáneo.",
        image: "/placeholder.svg?height=300&width=400&text=Danza",
        venue: "Plaza Anzúrez y Teatro Gran Mariscal",
        schedule: "Viernes, sábados y domingos, 18:00",
      },
      {
        name: "Ciclo de Cine",
        description: "Proyección de películas independientes y documentales de diferentes países.",
        image: "/placeholder.svg?height=300&width=400&text=Cine",
        venue: "Cinemateca Boliviana - Sucre",
        schedule: "Todos los días, 15:00 y 20:00",
      },
    ],
    highlights: [
      {
        name: "Inauguración del Festival",
        date: "15 de julio, 2025",
        description: "Ceremonia de apertura con espectáculo de luces y concierto sinfónico en la Plaza 25 de Mayo.",
        image: "/placeholder.svg?height=200&width=300&text=Inauguración",
      },
      {
        name: "Noche de Gala",
        date: "22 de julio, 2025",
        description: "Presentación especial con artistas internacionales invitados en el Teatro Gran Mariscal.",
        image: "/placeholder.svg?height=200&width=300&text=Gala",
      },
      {
        name: "Desfile de Culturas",
        date: "25 de julio, 2025",
        description:
          "Desfile por las calles del centro histórico con representaciones culturales de diferentes países.",
        image: "/placeholder.svg?height=200&width=300&text=Desfile",
      },
    ],
    relatedEvents: [
      {
        title: "Feria del Libro de Sucre",
        date: "10 - 20 de Mayo, 2025",
        image: "/placeholder.svg?height=150&width=200&text=Feria+Libro",
        id: 4,
      },
      {
        title: "Encuentro de Teatro",
        date: "Septiembre, 2025",
        image: "/placeholder.svg?height=150&width=200&text=Teatro",
        id: 5,
      },
      {
        title: "Exposición de Arte Contemporáneo",
        date: "Noviembre, 2025",
        image: "/placeholder.svg?height=150&width=200&text=Arte",
        id: 6,
      },
    ],
    reviews: [
      {
        name: "Carlos Mendoza",
        date: "30 de julio, 2023",
        rating: 5,
        comment:
          "Una experiencia cultural increíble. Los conciertos fueron de primer nivel y las exposiciones muy interesantes.",
        avatar: "/placeholder.svg?height=50&width=50&text=CM",
      },
      {
        name: "Sophie Martin",
        date: "28 de julio, 2023",
        rating: 5,
        comment:
          "Viajé desde Francia para asistir al festival y superó mis expectativas. La organización fue excelente.",
        avatar: "/placeholder.svg?height=50&width=50&text=SM",
      },
      {
        name: "Juan Pérez",
        date: "25 de julio, 2023",
        rating: 4,
        comment: "Muy buen festival, con gran variedad de actividades. Solo faltó mejor señalización de los eventos.",
        avatar: "/placeholder.svg?height=50&width=50&text=JP",
      },
    ],
    faqs: [
      {
        question: "¿Cómo puedo comprar entradas para los eventos?",
        answer:
          "Las entradas para los eventos pagados están disponibles en línea a través del sitio web oficial del festival y en puntos de venta físicos ubicados en el Teatro Gran Mariscal y la Casa de la Cultura.",
      },
      {
        question: "¿Hay eventos gratuitos durante el festival?",
        answer:
          "Sí, aproximadamente el 60% de los eventos son gratuitos, especialmente los que se realizan en espacios públicos como plazas y parques.",
      },
      {
        question: "¿Se requiere reserva para los eventos gratuitos?",
        answer:
          "Para la mayoría de los eventos gratuitos no se requiere reserva, pero para algunos con aforo limitado se recomienda llegar con anticipación.",
      },
      {
        question: "¿Hay descuentos para estudiantes y adultos mayores?",
        answer:
          "Sí, hay descuentos del 50% para estudiantes con carnet vigente y adultos mayores de 65 años en los eventos pagados.",
      },
    ],
    coordinates: {
      lat: -19.035345,
      lng: -65.255788,
    },
  }

  useEffect(() => {
    // Simulación de carga de datos
    setIsLoaded(true)
  }, [])

  // Manejo de errores básico
  if (!event) {
    return <div className="container mx-auto py-8 px-4">Evento no encontrado</div>
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + event.images.length) % event.images.length)
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
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          className="container mx-auto py-8 px-4 md:px-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Breadcrumb y acciones */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6"
            variants={itemVariants}
          >
            <div className="mb-4 md:mb-0">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Link href="/eventos" className="hover:text-red-600 dark:hover:text-red-400">
                  Eventos
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href={`/eventos?category=${event.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-red-600 dark:hover:text-red-400"
                >
                  {event.category}
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-700 dark:text-gray-300">{event.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-red-500 hover:text-red-600" : ""}
                aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-blue-500 hover:text-blue-600" : ""}
                aria-label={isBookmarked ? "Quitar de guardados" : "Guardar evento"}
              >
                <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="outline" size="icon" aria-label="Compartir evento">
                <Share2 className="h-5 w-5" />
              </Button>
              <Link href="/eventos">
                <Button variant="default" size="sm" className="hidden md:flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Volver a Eventos
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Galería de imágenes principal */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-xl">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={event.images[currentImageIndex]}
                    alt={`Fotografía del ${event.title} - Imagen ${currentImageIndex + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    priority={currentImageIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10 backdrop-blur-sm"
                  onClick={prevImage}
                  aria-label="Imagen anterior"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10 backdrop-blur-sm"
                  onClick={nextImage}
                  aria-label="Siguiente imagen"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {event.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Seleccionar imagen ${index + 1} de ${event.images.length}`}
                  />
                ))}
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentImageIndex + 1} / {event.images.length}
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {event.images.slice(0, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-20 overflow-hidden rounded-lg ${
                    index === currentImageIndex ? "ring-2 ring-red-500" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Miniatura del ${event.title} - Imagen ${index + 1}`}
                    width={160}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Información principal y detalles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 mr-2">
                  {event.category}
                </Badge>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{event.rating}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">({event.reviewsCount} reseñas)</span>
                </div>
              </div>

              <p className="text-lg mb-6">{event.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-[#FFC636]" />
                      <span className="font-bold">Fecha:</span>
                    </div>
                    <p>{event.date}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-[#FFC636]" />
                      <span className="font-bold">Ubicación:</span>
                    </div>
                    <p>{event.venue}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-[#FFC636]" />
                      <span className="font-bold">Duración:</span>
                    </div>
                    <p>{event.duration}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Ticket className="h-5 w-5 text-[#FFC636]" />
                      <span className="font-bold">Precio:</span>
                    </div>
                    <p>{event.price}</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="descripcion" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                  <TabsTrigger value="actividades">Actividades</TabsTrigger>
                  <TabsTrigger value="destacados">Destacados</TabsTrigger>
                  <TabsTrigger value="preguntas">Preguntas frecuentes</TabsTrigger>
                </TabsList>

                <TabsContent value="descripcion">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Sobre {event.title}</h3>
                      <p className="whitespace-pre-line mb-4">{event.longDescription}</p>
                      <h4 className="text-lg font-bold mb-2">Historia del evento</h4>
                      <p className="whitespace-pre-line">{event.history}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="actividades">
                  <div className="space-y-4">
                    {event.activities.map((activity, index) => (
                      <Card key={`${activity.name}-${index}`}>
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/3 h-48 overflow-hidden rounded-md">
                              <Image
                                src={activity.image}
                                alt={`Fotografía de ${activity.name} en ${event.title}`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:w-2/3">
                              <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
                              <p className="mb-3">{activity.description}</p>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                                  <span>
                                    <strong>Lugar:</strong> {activity.venue}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                                  <span>
                                    <strong>Horario:</strong> {activity.schedule}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="destacados">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.highlights.map((highlight, index) => (
                      <Card key={`${highlight.name}-${index}`}>
                        <CardContent className="p-4">
                          <div className="flex flex-col gap-3">
                            <div className="h-40 overflow-hidden rounded-md">
                              <Image
                                src={highlight.image}
                                alt={`Fotografía de ${highlight.name} en ${event.title}`}
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-bold">{highlight.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="h-4 w-4 mr-2" />
                              {highlight.date}
                            </div>
                            <p className="text-sm">{highlight.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="preguntas">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {event.faqs.map((faq, index) => (
                          <div
                            key={`${faq.question}-${index}`}
                            className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                          >
                            <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Mapa */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Ubicación</h3>
                <Card>
                  <CardContent className="p-0">
                    <div className="h-[300px] bg-gray-200 dark:bg-gray-800 relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=800&text=Mapa+de+${event.title}`}
                        alt={`Mapa de la ubicación del ${event.title}`}
                        width={800}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-500 dark:text-gray-400">
                          Mapa interactivo (En un caso real, aquí se mostraría un mapa de Google Maps o similar)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reseñas */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Reseñas</h3>
                  <Button variant="outline">Ver todas las reseñas</Button>
                </div>
                <div className="space-y-4">
                  {event.reviews.length > 0 ? (
                    event.reviews.map((review, index) => (
                      <Card key={`${review.name}-${review.date}-${index}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <Image
                                src={review.avatar}
                                alt={`Avatar de ${review.name}`}
                                width={50}
                                height={50}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold">{review.name}</h4>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
                                </div>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="mt-2">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <p>No hay reseñas disponibles</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Columna derecha con eventos relacionados */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Eventos Relacionados</h3>
              <div className="space-y-4">
                {event.relatedEvents.map((relatedEvent) => (
                  <Card key={relatedEvent.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col">
                        <div className="h-32 overflow-hidden rounded-md mb-2">
                          <Image
                            src={relatedEvent.image}
                            alt={`Fotografía de ${relatedEvent.title}`}
                            width={200}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold">{relatedEvent.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{relatedEvent.date}</p>
                        <Link href={`/eventos/${relatedEvent.id}`}>
                          <Button variant="outline" size="sm" className="mt-2">
                            Ver detalles
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
          <Link href="/eventos">
            <Button variant="default" size="sm" className="mt-4 flex md:hidden items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Volver a Eventos
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}