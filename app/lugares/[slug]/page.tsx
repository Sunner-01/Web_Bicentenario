"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Ticket,
  Calendar,
  Star,
  Phone,
  Globe,
  Camera,
  ArrowLeft,
  ArrowRight,
  Share2,
  Heart,
  Bookmark,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function PlaceDetailPage({ params }: { params: { slug: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // En un caso real, aquí buscarías los datos del lugar según el slug
  const place = {
    name: "Casa de la Libertad",
    category: "Edificios Históricos",
    description:
      "Edificio histórico donde se firmó el Acta de Independencia de Bolivia en 1825. La Casa de la Libertad es uno de los monumentos históricos más importantes de Bolivia.",
    longDescription:
      "La Casa de la Libertad es uno de los monumentos históricos más importantes de Bolivia. En este edificio se firmó el Acta de Independencia del país el 6 de agosto de 1825. Actualmente funciona como museo y alberga importantes documentos históricos, pinturas y objetos relacionados con la independencia de Bolivia. El edificio fue construido originalmente como parte del conjunto jesuítico en el siglo XVI y ha sido testigo de importantes acontecimientos en la historia del país.",
    address: "Plaza 25 de Mayo, Sucre",
    hours: "Lunes a domingo: 9:00 - 18:00",
    price: "Bs. 15 (extranjeros), Bs. 5 (nacionales)",
    phone: "+591 4 6452246",
    website: "casadelalibertad.gob.bo",
    rating: 4.8,
    reviews: [
      {
        name: "María González",
        date: "15 de marzo, 2023",
        rating: 5,
        comment:
          "Un lugar imprescindible para entender la historia de Bolivia. Las guías son muy profesionales y conocedoras.",
        avatar: "/placeholder.svg?height=50&width=50&text=MG",
      },
      {
        name: "John Smith",
        date: "2 de febrero, 2023",
        rating: 4,
        comment: "Visita muy interesante. El edificio está muy bien conservado y las exhibiciones son informativas.",
        avatar: "/placeholder.svg?height=50&width=50&text=JS",
      },
      {
        name: "Carlos Rodríguez",
        date: "20 de enero, 2023",
        rating: 5,
        comment: "Excelente museo histórico. La Sala de la Independencia es impresionante por su valor histórico.",
        avatar: "/placeholder.svg?height=50&width=50&text=CR",
      },
    ],
    images: [
      "/Img/img_CDL/Casa-de-la-Libertad-1.jpg?height=600&width=800&text=Casa+de+la+Libertad+1",
      "/Img/img_CDL/Casa-de-la-Libertad-6 (1).jpg?height=600&width=800&text=Casa+de+la+Libertad+2",
      "/Img/img_CDL/Casa-de-la-Libertad-9.jpg?height=600&width=800&text=Casa+de+la+Libertad+3",
      "/Img/img_CDL/Casa-de-la-Libertad-A-1.jpg?height=600&width=800&text=Casa+de+la+Libertad+4",
      "/Img/img_CDL/Casa-de-la-Libertad-A-8.jpg?height=600&width=800&text=Casa+de+la+Libertad+5",
    ],
    history:
      "La Casa de la Libertad fue construida originalmente como parte del conjunto jesuítico en el siglo XVI. Tras la expulsión de los jesuitas en 1767, el edificio pasó a ser sede de la Universidad San Francisco Xavier. En 1825, se convirtió en el escenario de la Asamblea Deliberante que declaró la independencia de Bolivia. Desde entonces, ha sido un símbolo de la libertad y la soberanía del país. En 1939, el edificio fue declarado Monumento Nacional y en 1974 se inauguró oficialmente como museo histórico. A lo largo de los años, ha sido restaurado para preservar su valor arquitectónico e histórico, manteniendo elementos originales como los techos de madera, los patios coloniales y las salas donde se desarrollaron importantes acontecimientos históricos.",
    attractions: [
      {
        name: "Sala de la Independencia",
        description: "Donde se firmó el Acta de Independencia de Bolivia el 6 de agosto de 1825.",
        image: "/placeholder.svg?height=300&width=400&text=Sala+de+la+Independencia",
      },
      {
        name: "Galería de Presidentes",
        description: "Colección de retratos de todos los presidentes de Bolivia desde su independencia.",
        image: "/placeholder.svg?height=300&width=400&text=Galería+de+Presidentes",
      },
      {
        name: "Colección de Arte Colonial",
        description: "Pinturas y esculturas de la época colonial, principalmente de temática religiosa.",
        image: "/placeholder.svg?height=300&width=400&text=Arte+Colonial",
      },
      {
        name: "Documentos Históricos",
        description: "Exhibición de documentos originales relacionados con la independencia de Bolivia.",
        image: "/placeholder.svg?height=300&width=400&text=Documentos+Históricos",
      },
      {
        name: "Objetos Personales de Próceres",
        description: "Colección de objetos que pertenecieron a los próceres de la independencia.",
        image: "/placeholder.svg?height=300&width=400&text=Objetos+Personales",
      },
    ],
    events: [
      {
        name: "Conmemoración de la Independencia",
        date: "6 de agosto",
        description: "Ceremonia oficial y actividades culturales para celebrar la independencia de Bolivia.",
        image: "/placeholder.svg?height=200&width=300&text=Conmemoración",
      },
      {
        name: "Noche de Museos",
        date: "18 de mayo",
        description: "Visitas nocturnas guiadas con representaciones históricas y actividades especiales.",
        image: "/placeholder.svg?height=200&width=300&text=Noche+de+Museos",
      },
      {
        name: "Exposiciones Temporales",
        date: "Durante todo el año",
        description: "Exhibiciones especiales sobre diferentes aspectos de la historia boliviana.",
        image: "/placeholder.svg?height=200&width=300&text=Exposiciones",
      },
    ],
    nearbyPlaces: [
      {
        name: "Catedral Metropolitana",
        distance: "100 metros",
        image: "/placeholder.svg?height=150&width=200&text=Catedral",
        slug: "catedral-metropolitana",
      },
      {
        name: "Plaza 25 de Mayo",
        distance: "0 metros (ubicado en la plaza)",
        image: "/placeholder.svg?height=150&width=200&text=Plaza",
        slug: "plaza-25-de-mayo",
      },
      {
        name: "Museo de Arte Indígena ASUR",
        distance: "400 metros",
        image: "/placeholder.svg?height=150&width=200&text=Museo+ASUR",
        slug: "museo-arte-indigena-asur",
      },
    ],
    faqs: [
      {
        question: "¿Se pueden tomar fotografías dentro del museo?",
        answer:
          "Sí, se permite tomar fotografías sin flash en la mayoría de las salas. En algunas exhibiciones especiales puede estar restringido.",
      },
      {
        question: "¿Hay visitas guiadas disponibles?",
        answer:
          "Sí, hay visitas guiadas en español, inglés y francés. Se realizan cada hora y están incluidas en el precio de la entrada.",
      },
      {
        question: "¿Es accesible para personas con movilidad reducida?",
        answer:
          "El museo cuenta con acceso para sillas de ruedas en la planta baja. Sin embargo, algunas áreas del segundo piso no son completamente accesibles debido a la estructura histórica del edificio.",
      },
      {
        question: "¿Cuánto tiempo se recomienda para la visita?",
        answer:
          "Se recomienda dedicar entre 1 y 2 horas para apreciar completamente todas las exhibiciones y salas del museo.",
      },
    ],
    location: {
      lat: -19.035345,
      lng: -65.255788,
    },
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % place.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + place.images.length) % place.images.length)
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
            <div className="mb-4 md:mb-0 mt-[100px]">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Link href="/lugares" className="hover:text-[#FFC636] dark:hover:text-[#FFC636]">
                  Lugares
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href={`/lugares?category=${place.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-[#FFC636] dark:hover:text-[#FFC636]"
                >
                  {place.category}
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-700 dark:text-gray-300">{place.name}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{place.name}</h1>
            </div>
            <div className="flex items-center space-x-2 mt-[70px]">

              <Link href="/lugares">
                <Button variant="default" size="sm" className="hidden md:flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Volver a Lugares
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Galería de imágenes principal */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-xl">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={place.images[currentImageIndex]}
                  alt={`${place.name} - Imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10 backdrop-blur-sm"
                  onClick={prevImage}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10 backdrop-blur-sm"
                  onClick={nextImage}
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {place.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                      }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentImageIndex + 1} / {place.images.length}
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {place.images.slice(0, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-20 overflow-hidden rounded-lg ${index === currentImageIndex ? "ring-2 ring-[#FFC636]" : "opacity-70 hover:opacity-100"
                    }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${place.name} - Miniatura ${index + 1}`}
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
                <Badge className="bg-[#FFC636] text-gray-500 dark:bg-[#FFC636] dark:text-gray-500  mr-2">
                  {place.category}
                </Badge>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{place.rating}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">
                    ({Array.isArray(place.reviews) ? place.reviews.length : 0} reseñas)
                  </span>
                </div>
              </div>

              <p className="text-lg mb-6">{place.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-[#FFC636]" />
                      <span className="font-bold">Dirección:</span>
                    </div>
                    <p>{place.address}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-[#FFC636]" />
                      <span className="font-bold">Horario:</span>
                    </div>
                    <p>{place.hours}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Ticket className="h-5 w-5 text-[#FFC636]" />
                      <span className="font-bold">Precio:</span>
                    </div>
                    <p>{place.price}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-5 w-5 text-[#FFC636]" />
                      <span className="font-bold">Teléfono:</span>
                    </div>
                    <p>{place.phone}</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="historia" className="mb-8">
                <TabsList className="mb-4 flex justify-center">
                  <TabsTrigger value="historia">Historia</TabsTrigger>
                  <TabsTrigger value="atracciones">Atracciones</TabsTrigger>
                  <TabsTrigger value="eventos">Eventos</TabsTrigger>
                  <TabsTrigger value="preguntas">Preguntas frecuentes</TabsTrigger>
                </TabsList>


                <TabsContent value="historia">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Historia de {place.name}</h3>
                      <p className="whitespace-pre-line">{place.history}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="atracciones">
                  <div className="space-y-4">
                    {place.attractions.map((attraction, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/3 h-48 overflow-hidden rounded-md">
                              <img
                                src={attraction.image || "/placeholder.svg"}
                                alt={attraction.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:w-2/3">
                              <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                              <p>{attraction.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="eventos">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {place.events.map((event, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex flex-col gap-3">
                            <div className="h-40 overflow-hidden rounded-md">
                              <img
                                src={event.image || "/placeholder.svg"}
                                alt={event.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-bold">{event.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="h-4 w-4 mr-2" />
                              {event.date}
                            </div>
                            <p className="text-sm">{event.description}</p>
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
                        {place.faqs.map((faq, index) => (
                          <div
                            key={index}
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
              {/* Mapa */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Ubicación</h3>
                <Card>
                  <CardContent className="p-0">
                    <div className="h-[300px] bg-gray-200 dark:bg-gray-800 relative">
                      <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                          place.name
                        )}&output=embed`}
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full border-0"
                      ></iframe>
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
                  {Array.isArray(place.reviews) ? (
                    place.reviews.map((review, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <img
                                src={review.avatar || "/placeholder.svg"}
                                alt={review.name}
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
                                      className={`h-4 w-4 ${i < review.rating ? "text-[#FFC636] fill-[#FFC636]" : "text-gray-300"
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

            <motion.div className="space-y-6" variants={itemVariants}>

              {/* Acciones principales */}
              {/* <Card className="bg-[#FFC636] dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Planifica tu visita</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Reservar visita guiada</Button>
                    <Button variant="outline" className="w-full">
                      Añadir a mi itinerario
                    </Button>
                    <a href={`https://${place.website}`} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Globe className="h-4 w-4" />
                        Visitar sitio web oficial
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card> */}

              {/* Información de visita */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Información de visita</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Duración recomendada:</span> 1-2 horas
                    </div>
                    <div>
                      <span className="font-medium">Visitas guiadas:</span> Disponibles en español e inglés
                    </div>
                    <div>
                      <span className="font-medium">Accesibilidad:</span> Parcialmente accesible para sillas de ruedas
                    </div>
                    <div>
                      <span className="font-medium">Fotografías:</span> Permitidas sin flash
                    </div>
                    <div>
                      <span className="font-medium">Mejor momento para visitar:</span> Por la mañana, para evitar grupos
                      grandes
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lugares cercanos */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Lugares cercanos</h3>
                  <div className="space-y-4">
                    {place.nearbyPlaces.map((nearbyPlace, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={nearbyPlace.image || "/placeholder.svg"}
                            alt={nearbyPlace.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <Link href={`/lugares/${nearbyPlace.slug}`} className="font-medium hover:text-[#FFC636]">
                            {nearbyPlace.name}
                          </Link>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{nearbyPlace.distance}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Compartir */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Compartir este lugar</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-sky-500"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.7-17 8.8 0 0 3.7.9 5-2 0 0-5.2 1.6-6.8-6 1.6.7 3 .5 3 .5-3.7-2.1-2.5-7.6-2.5-7.6 2 2.2 4.8 2.5 4.8 2.5A8 8 0 0 1 2 4s5.2 5.6 11.5 5.6c0 0-1.4-7.5 6.4-8.6 0 0 3 0 4.3 1.9.7-.2 3.8-1.6 3.8-1.6l-2 3.7Z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-[#FFC636]"
                      >
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                        <path d="M18 14h-8"></path>
                        <path d="M15 18h-5"></path>
                        <path d="M10 6h8v4h-8V6Z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-red-500"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Galería completa */}
          <motion.div className="mt-12" variants={itemVariants}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Galería de fotos</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Ver todas las fotos
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {place.images.map((image, index) => (
                <div
                  key={index}
                  className="h-40 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${place.name} - Galería ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Botón de volver para móvil */}
          <motion.div className="mt-8 md:hidden" variants={itemVariants}>
            <Link href="/lugares">
              <Button variant="default" className="w-full flex items-center justify-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver a Lugares
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
