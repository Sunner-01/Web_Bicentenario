"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Globe, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ServiciosPage() {
  const categories = [
    { id: "productos", name: "Productos Locales" },
    { id: "artesanias", name: "Artesanías" },
    { id: "servicios", name: "Servicios Turísticos" },
  ]

  const servicesData = {
    productos: [
      {
        id: 1,
        name: "Chocolates Para Ti",
        description:
          "Marca emblemática de chocolates artesanales de Sucre. Fundada en 1985, es reconocida por la calidad de sus productos elaborados con cacao boliviano.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Nicolás Ortiz #38",
        hours: "9:00 - 19:00, todos los días",
        phone: "+591 4 6456789",
        website: "chocolatesparati.com",
        products: ["Bombones", "Tabletas", "Figuras de chocolate"],
        price_range: "Bs. 15 - 100",
        tags: ["Artesanal", "Souvenir", "Tradicional"],
      },
      {
        id: 2,
        name: "Textiles de Tarabuco",
        description:
          "Tejidos tradicionales elaborados en la comunidad de Tarabuco, cerca de Sucre. Destacan por sus colores vibrantes y diseños que narran historias locales.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Mercado Campesino y tiendas de artesanía del centro",
        hours: "8:00 - 18:00, de lunes a sábado",
        phone: "Varios vendedores",
        website: "N/A",
        products: ["Aguayos", "Ponchos", "Tapices"],
        price_range: "Bs. 50 - 500",
        tags: ["Artesanal", "Cultural", "Tradicional"],
      },
      {
        id: 3,
        name: "Miel de Abeja de los Valles",
        description:
          "Miel orgánica producida en los valles cercanos a Sucre. Conocida por su pureza y propiedades medicinales.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Mercado Central y tiendas de productos naturales",
        hours: "7:00 - 19:00, todos los días",
        phone: "Varios vendedores",
        website: "N/A",
        products: ["Miel pura", "Propóleo", "Productos derivados"],
        price_range: "Bs. 30 - 100",
        tags: ["Orgánico", "Natural", "Saludable"],
      },
      {
        id: 4,
        name: "Vinos de Altura",
        description:
          "Vinos producidos en los valles de Chuquisaca, a más de 2000 metros sobre el nivel del mar. Destacan por su sabor único debido a las condiciones de cultivo.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Tiendas especializadas en el centro",
        hours: "10:00 - 20:00, de lunes a sábado",
        phone: "+591 4 6467890",
        website: "vinosdealtura.com",
        products: ["Vino tinto", "Vino blanco", "Singani (destilado de uva)"],
        price_range: "Bs. 50 - 200",
        tags: ["Gourmet", "Regional", "Exclusivo"],
      },
    ],
    artesanias: [
      {
        id: 5,
        name: "Cerámica Tradicional",
        description:
          "Piezas de cerámica elaboradas con técnicas ancestrales. Incluyen vasijas, platos decorativos y figuras que representan la cultura local.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Mercado de Artesanías, Calle Aniceto Arce",
        hours: "9:00 - 18:00, de lunes a sábado",
        phone: "Varios artesanos",
        website: "N/A",
        products: ["Vasijas", "Platos decorativos", "Figuras"],
        price_range: "Bs. 20 - 300",
        tags: ["Artesanal", "Cultural", "Decorativo"],
      },
      {
        id: 6,
        name: "Joyería en Plata",
        description:
          "Joyas artesanales elaboradas en plata, con diseños que combinan elementos tradicionales y contemporáneos. Incluyen pendientes, collares y pulseras.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Tiendas especializadas en el centro histórico",
        hours: "10:00 - 19:00, de lunes a sábado",
        phone: "+591 4 6478901",
        website: "joyeriasucre.com",
        products: ["Pendientes", "Collares", "Pulseras"],
        price_range: "Bs. 50 - 500",
        tags: ["Artesanal", "Lujo", "Souvenir"],
      },
      {
        id: 7,
        name: "Tallados en Madera",
        description:
          "Artesanías en madera que representan elementos de la cultura boliviana. Incluyen máscaras, figuras y utensilios decorativos.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Mercado de Artesanías, Calle Aniceto Arce",
        hours: "9:00 - 18:00, de lunes a sábado",
        phone: "Varios artesanos",
        website: "N/A",
        products: ["Máscaras", "Figuras", "Utensilios decorativos"],
        price_range: "Bs. 30 - 400",
        tags: ["Artesanal", "Cultural", "Decorativo"],
      },
      {
        id: 8,
        name: "Arte en Cuero",
        description:
          "Productos artesanales elaborados en cuero, como bolsos, carteras, cinturones y calzado. Destacan por su calidad y diseños únicos.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Tiendas especializadas en el centro",
        hours: "10:00 - 19:00, de lunes a sábado",
        phone: "+591 4 6489012",
        website: "N/A",
        products: ["Bolsos", "Carteras", "Cinturones", "Calzado"],
        price_range: "Bs. 50 - 600",
        tags: ["Artesanal", "Moda", "Calidad"],
      },
    ],
    servicios: [
      {
        id: 9,
        name: "Tours Guiados",
        description:
          "Recorridos por la ciudad y alrededores con guías locales especializados en historia, arquitectura y cultura.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Oficinas en el centro histórico",
        hours: "8:00 - 18:00, todos los días",
        phone: "+591 4 6490123",
        website: "sucretours.com",
        services: ["Tour Centro Histórico", "Ruta de los Dinosaurios", "Comunidades Indígenas"],
        price_range: "Bs. 50 - 300 por persona",
        tags: ["Turismo", "Cultural", "Educativo"],
      },
      {
        id: 10,
        name: "Clases de Cocina Boliviana",
        description:
          "Talleres donde aprender a preparar platos tradicionales bolivianos con chefs locales. Incluyen visita al mercado para comprar ingredientes.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Condor Café, Calle Calvo #102",
        hours: "10:00 - 14:00, de martes a sábado",
        phone: "+591 4 6401234",
        website: "condorcafe.com",
        services: ["Clases de cocina", "Visita al mercado", "Degustación"],
        price_range: "Bs. 150 - 250 por persona",
        tags: ["Gastronómico", "Cultural", "Experiencia"],
      },
      {
        id: 11,
        name: "Alquiler de Bicicletas",
        description:
          "Servicio de alquiler de bicicletas para explorar la ciudad y sus alrededores de forma independiente y ecológica.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Aniceto Arce #345",
        hours: "8:00 - 18:00, todos los días",
        phone: "+591 4 6412345",
        website: "bikesucre.com",
        services: ["Alquiler por horas", "Alquiler por día", "Tours guiados en bicicleta"],
        price_range: "Bs. 20 - 100",
        tags: ["Aventura", "Ecológico", "Independiente"],
      },
      {
        id: 12,
        name: "Clases de Español",
        description:
          "Cursos de español para extranjeros, con profesores locales y metodología adaptada a diferentes niveles.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Bolívar #678",
        hours: "9:00 - 17:00, de lunes a viernes",
        phone: "+591 4 6423456",
        website: "espanolensucre.com",
        services: ["Clases individuales", "Clases grupales", "Inmersión cultural"],
        price_range: "Bs. 50 - 150 por hora",
        tags: ["Educativo", "Cultural", "Internacional"],
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
    <motion.div className="container mx-auto py-8 mt-[150px]" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Servicios y Productos de Sucre</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Descubre los productos y servicios más destacados de la Ciudad Blanca
        </p>
      </motion.div>

      <Tabs defaultValue="productos" className="w-full">
        <TabsList className="flex justify-center mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="productos">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {servicesData.productos.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">{product.name}</h3>
                      <Badge
                        variant="outline"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                      >
                        {product.tags[0]}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{product.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                        <span>{product.address}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{product.hours}</span>
                      </div>
                      <div className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                        <ShoppingBag className="h-4 w-4 mr-2 text-green-600 mt-1" />
                        <span>
                          <strong>Productos:</strong> {product.products.join(", ")}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {product.website !== "N/A" && (
                        <a
                          href={`https://${product.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full flex items-center gap-1">
                            <Globe className="h-4 w-4 mr-1" />
                            Sitio web
                          </Button>
                        </a>
                      )}
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href={`/servicios/${product.id}`} className="flex-1">
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

        <TabsContent value="artesanias">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {servicesData.artesanias.map((craft) => (
              <motion.div key={craft.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={craft.image || "/placeholder.svg"}
                      alt={craft.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">{craft.name}</h3>
                      <Badge
                        variant="outline"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                      >
                        {craft.tags[0]}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{craft.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                        <span>{craft.address}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{craft.hours}</span>
                      </div>
                      <div className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                        <ShoppingBag className="h-4 w-4 mr-2 text-green-600 mt-1" />
                        <span>
                          <strong>Productos:</strong> {craft.products.join(", ")}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {craft.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href={`/servicios/${craft.id}`} className="flex-1">
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

        <TabsContent value="servicios">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {servicesData.servicios.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-5 md:w-2/3">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-xl">{service.name}</h3>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        >
                          {service.tags[0]}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{service.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                          <span>{service.address}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          <span>{service.hours}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Phone className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{service.phone}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={`https://${service.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full flex items-center gap-1">
                            <Globe className="h-4 w-4 mr-1" />
                            Sitio web
                          </Button>
                        </a>
                        <a href="#" className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            Vista rápida
                          </Button>
                        </a>
                        <Link href={`/servicios/${service.id}`} className="flex-1">
                          <Button size="sm" className="w-full">
                            Ver detalles
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
