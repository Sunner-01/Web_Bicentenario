"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Utensils } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function GastronomiaPage() {
  const categories = [
    { id: "platos", name: "Platos Típicos" },
    { id: "postres", name: "Postres y Dulces" },
    { id: "restaurantes", name: "Restaurantes" },
  ]

  const gastronomyData = {
    platos: [
      {
        id: 1,
        name: "Pique a lo Macho",
        description:
          "Plato tradicional boliviano que consiste en trozos de carne de res, salchichas, papas fritas, cebolla, tomate y locoto (chile boliviano).",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: ["Carne de res", "Salchichas", "Papas", "Cebolla", "Tomate", "Locoto"],
        where: "Restaurante El Solar, La Taverna, Florin",
        price: "Bs. 45 - 60",
        tags: ["Picante", "Popular", "Tradicional"],
      },
      {
        id: 2,
        name: "Chorizos Chuquisaqueños",
        description:
          "Embutidos tradicionales de la región, elaborados con carne de cerdo y especias locales. Se sirven generalmente con mote (maíz hervido).",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: ["Carne de cerdo", "Especias locales", "Mote (maíz hervido)"],
        where: "Mercado Central, Restaurante El Huerto, Puestos callejeros",
        price: "Bs. 20 - 35",
        tags: ["Tradicional", "Callejero", "Regional"],
      },
      {
        id: 3,
        name: "Mondongo",
        description:
          "Plato tradicional a base de carne de cerdo, especialmente la cabeza, cocido lentamente con especias y servido con mote y papa.",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: ["Cabeza de cerdo", "Especias", "Mote", "Papa"],
        where: "Restaurante El Solar, Mercado Central, La Casa de los Mondongos",
        price: "Bs. 30 - 45",
        tags: ["Tradicional", "Festivo", "Regional"],
      },
      {
        id: 4,
        name: "Picante de Pollo",
        description:
          "Plato picante elaborado con pollo, ají amarillo, cebolla, tomate y especias. Se sirve con arroz y papas.",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: ["Pollo", "Ají amarillo", "Cebolla", "Tomate", "Especias", "Arroz", "Papas"],
        where: "Restaurante El Solar, La Taverna, Mercado Central",
        price: "Bs. 35 - 50",
        tags: ["Picante", "Popular", "Tradicional"],
      },
    ],
    postres: [
      {
        id: 5,
        name: "Chocolates Para Ti",
        description:
          "Famosos chocolates artesanales de Sucre, elaborados con cacao boliviano de alta calidad. Disponibles en diversas presentaciones y sabores.",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: ["Cacao boliviano", "Azúcar", "Leche", "Frutos secos (según variedad)"],
        where: "Tiendas Para Ti en el centro histórico",
        price: "Bs. 15 - 100 (según presentación)",
        tags: ["Artesanal", "Souvenir", "Tradicional"],
      },
      {
        id: 6,
        name: "Cuñapés",
        description:
          "Pequeños panes de queso hechos con almidón de yuca. Son ideales para el desayuno o como merienda.",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: ["Almidón de yuca", "Queso", "Huevo", "Leche"],
        where: "Panaderías del centro, Mercado Central, puestos callejeros",
        price: "Bs. 1 - 2 por unidad",
        tags: ["Desayuno", "Merienda", "Popular"],
      },
      {
        id: 7,
        name: "Empanadas de Queso",
        description:
          "Empanadas horneadas rellenas de queso, típicas de la región. Se sirven calientes y son ideales como aperitivo.",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: ["Harina", "Queso", "Manteca", "Huevo"],
        where: "Panaderías, cafeterías, Mercado Central",
        price: "Bs. 3 - 5 por unidad",
        tags: ["Aperitivo", "Popular", "Tradicional"],
      },
      {
        id: 8,
        name: "Helados Sucre",
        description: "Helados artesanales elaborados con frutas locales y recetas tradicionales.",
        image: "/placeholder.svg?height=200&width=300",
        ingredients: ["Frutas locales", "Leche", "Azúcar", "Crema"],
        where: "Heladerías del centro histórico",
        price: "Bs. 10 - 20",
        tags: ["Refrescante", "Artesanal", "Familiar"],
      },
    ],
    restaurantes: [
      {
        id: 9,
        name: "Restaurante El Solar",
        description: "Ubicado en el centro histórico, ofrece platos tradicionales bolivianos en un ambiente colonial.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Aniceto Arce #28",
        hours: "12:00 - 22:00, todos los días",
        phone: "+591 4 6456789",
        specialties: ["Mondongo", "Picante de Pollo", "Chorizos Chuquisaqueños"],
        price_range: "Bs. 35 - 70",
        tags: ["Tradicional", "Colonial", "Céntrico"],
      },
      {
        id: 10,
        name: "Café Mirador",
        description:
          "Cafetería con vistas panorámicas de la ciudad. Ofrece desayunos, almuerzos ligeros y una amplia variedad de cafés.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Recoleta #302",
        hours: "8:00 - 20:00, de martes a domingo",
        phone: "+591 4 6467890",
        specialties: ["Desayunos bolivianos", "Café de altura", "Pasteles caseros"],
        price_range: "Bs. 20 - 45",
        tags: ["Vistas", "Café", "Desayunos"],
      },
      {
        id: 11,
        name: "La Taverna",
        description:
          "Restaurante internacional con amplia carta de platos bolivianos e internacionales. Ambiente acogedor y servicio de calidad.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Bolívar #465",
        hours: "12:00 - 23:00, todos los días",
        phone: "+591 4 6478901",
        specialties: ["Pique a lo Macho", "Pastas", "Carnes a la parrilla"],
        price_range: "Bs. 40 - 90",
        tags: ["Internacional", "Céntrico", "Elegante"],
      },
      {
        id: 12,
        name: "Florin",
        description: "Bar restaurante con ambiente internacional, buena selección de cervezas y platos para compartir.",
        image: "/placeholder.svg?height=200&width=300",
        address: "Calle Bolívar #567",
        hours: "17:00 - 01:00, de martes a domingo",
        phone: "+591 4 6452839",
        specialties: ["Hamburguesas", "Platos para compartir", "Cervezas artesanales"],
        price_range: "Bs. 30 - 65",
        tags: ["Internacional", "Bar", "Informal"],
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
        <h1 className="text-4xl font-bold mb-2">Gastronomía de Sucre</h1>
        <p className="text-gray-600 dark:text-gray-400">Descubre los sabores tradicionales de la Ciudad Blanca</p>
      </motion.div>

      <Tabs defaultValue="platos" className="w-full">
        <TabsList className="flex justify-center mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="platos">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {gastronomyData.platos.map((dish) => (
              <motion.div key={dish.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">{dish.name}</h3>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      >
                        {dish.tags[0]}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{dish.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                        <Utensils className="h-4 w-4 mr-2 text-green-600 mt-1" />
                        <span>
                          <strong>Ingredientes:</strong> {dish.ingredients.join(", ")}
                        </span>
                      </div>
                      <div className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-purple-600 mt-1" />
                        <span>
                          <strong>Dónde probar:</strong> {dish.where}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {dish.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/gastronomia/${dish.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Vista rápida
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="postres">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {gastronomyData.postres.map((dessert) => (
              <motion.div key={dessert.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={dessert.image || "/placeholder.svg"}
                      alt={dessert.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">{dessert.name}</h3>
                      <Badge
                        variant="outline"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                      >
                        {dessert.tags[0]}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{dessert.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                        <Utensils className="h-4 w-4 mr-2 text-amber-600 mt-1" />
                        <span>
                          <strong>Ingredientes:</strong> {dessert.ingredients.join(", ")}
                        </span>
                      </div>
                      <div className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-purple-600 mt-1" />
                        <span>
                          <strong>Dónde probar:</strong> {dessert.where}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {dessert.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/gastronomia/${dessert.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Vista rápida
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="restaurantes">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {gastronomyData.restaurantes.map((restaurant) => (
              <motion.div key={restaurant.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">{restaurant.name}</h3>
                      <Badge
                        variant="outline"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                      >
                        {restaurant.tags[0]}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{restaurant.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-green-600" />
                        <span>{restaurant.address}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-2 text-amber-600" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Phone className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{restaurant.phone}</span>
                      </div>
                      <div className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                        <Utensils className="h-4 w-4 mr-2 text-purple-600 mt-1" />
                        <span>
                          <strong>Especialidades:</strong> {restaurant.specialties.join(", ")}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {restaurant.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/gastronomia/${restaurant.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Vista rápida
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
