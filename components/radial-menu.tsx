"use client"

import { useState } from "react"
import { AlertTriangle, Moon, Plus, HelpCircle, Utensils, ShoppingBag, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function RadialMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [emergencyDialogOpen, setEmergencyDialogOpen] = useState(false)
  const [nightlifeDialogOpen, setNightlifeDialogOpen] = useState(false)
  const [thingsToDoDialogOpen, setThingsToDoDialogOpen] = useState(false)
  const [gastronomyDialogOpen, setGastronomyDialogOpen] = useState(false)
  const [servicesDialogOpen, setServicesDialogOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Definir posiciones en un círculo alrededor del botón central
  const menuItems = [
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      label: "Emergencias",
      onClick: () => setEmergencyDialogOpen(true),
      position: "translate-y-[-120px] translate-x-[0px]",
      color: "bg-[#FFC636] text-black hover:bg-[#e6b400]",
    },
    {
      icon: <Moon className="h-5 w-5" />,
      label: "Vida Nocturna",
      onClick: () => window.location.href = '/vida-nocturna',
      position: "translate-y-[-100px] translate-x-[-40px]",
      color: "bg-[#FFC636] text-black hover:bg-[#e6b400]",
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: "Qué hacer",
      onClick: () => setThingsToDoDialogOpen(true),
      position: "translate-y-[-60px] translate-x-[-70px]",
      color: "bg-[#FFC636] text-black hover:bg-[#e6b400]",
    },
    {
      icon: <Utensils className="h-5 w-5" />,
      label: "Gastronomía",
      onClick: () => window.location.href = '/gastronomia',
      position: "translate-y-[-20px] translate-x-[-60px]",
      color: "bg-[#FFC636] text-black hover:bg-[#e6b400]",
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      label: "Servicios",
      onClick: () => window.location.href = '/servicios',
      position: "translate-y-[20px] translate-x-[-40px]",
      color: "bg-[#FFC636] text-black hover:bg-[#e6b400]",
    },
  ];

  return (
    <>
      <div className="fixed right-4 top-1/3 z-50">
        {/* Botón central gris */}
        <Button
          onClick={toggleMenu}
          className={`rounded-full w-12 h-12 mr-1 bg-[#D9D9D9] border border-black hover:bg-gray-300 shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <Plus className="h-6 w-6" />
        </Button>

        {/* Botones radiales amarillos */}
        <div className="relative">
          {menuItems.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={item.onClick}
                    className={`absolute rounded-full w-10 h-10 ${item.color} shadow-md flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? item.position
                        : "translate-y-0 translate-x-0 opacity-0 pointer-events-none"
                    }`}
                    style={{ left: "2px", top: "2px" }}
                  >
                    {item.icon}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* Emergency Dialog */}
      <Dialog open={emergencyDialogOpen} onOpenChange={setEmergencyDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center text-red-600">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Números de Emergencia
            </DialogTitle>
            <DialogDescription>Contactos importantes para situaciones de emergencia en Sucre</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Card className="border-red-200 dark:border-red-900">
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-3">
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
                      className="text-red-600 dark:text-red-300"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Policía</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Emergencias policiales</div>
                  </div>
                </div>
                <div className="font-bold text-xl">110</div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-900">
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full mr-3">
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
                      className="text-orange-600 dark:text-orange-300"
                    >
                      <path d="M8 17.9H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v9.9c0 1.1-.9 2-2 2h-2"></path>
                      <path d="M10 18v-2c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v2"></path>
                      <path d="M12 12v-2"></path>
                      <path d="M12 4v2"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Bomberos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Incendios y rescates</div>
                  </div>
                </div>
                <div className="font-bold text-xl">119</div>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-900">
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
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
                      className="text-green-600 dark:text-green-300"
                    >
                      <path d="M22 11h-4c-1.5 0-3 .5-3 2 0 1.5 1.5 2 3 2h4v-4Z"></path>
                      <path d="M9 11H5c-1.5 0-3 .5-3 2 0 1.5 1.5 2 3 2h4"></path>
                      <path d="M14 6v4"></path>
                      <path d="M14 14v4"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Ambulancia</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Emergencias médicas</div>
                  </div>
                </div>
                <div className="font-bold text-xl">118</div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-900">
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
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
                      className="text-blue-600 dark:text-blue-300"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m12 16 4-4-4-4"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Turismo Seguro</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Asistencia al turista</div>
                  </div>
                </div>
                <div className="font-bold text-xl">800-14-0081</div>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <span className="font-bold">Importante:</span> En caso de emergencia, mantén la calma y proporciona tu
                ubicación exacta.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Nightlife Dialog */}
      <Dialog open={nightlifeDialogOpen} onOpenChange={setNightlifeDialogOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center text-purple-600">
              <Moon className="h-5 w-5 mr-2" />
              Vida Nocturna en Sucre
            </DialogTitle>
            <DialogDescription>Descubre los mejores lugares para disfrutar de la noche en Sucre</DialogDescription>
          </DialogHeader>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Lugares destacados</h3>
            <Link href="/vida-nocturna">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                Ver todos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="bares" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="bares">Bares y Pubs</TabsTrigger>
              <TabsTrigger value="discotecas">Discotecas</TabsTrigger>
              <TabsTrigger value="peñas">Peñas Folclóricas</TabsTrigger>
            </TabsList>

            <TabsContent value="bares" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=128&width=256"
                      alt="Joy Ride Café"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Joy Ride Café</h3>
                      <Badge
                        variant="outline"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                      >
                        Popular
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Bar con ambiente internacional, música en vivo y amplia selección de bebidas.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Calle Nicolás Ortiz #14</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/vida-nocturna/joy-ride-cafe" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=128&width=256"
                      alt="Florin Bar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Florin Bar</h3>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      >
                        Recomendado
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Bar acogedor con buena comida, cervezas artesanales y ambiente relajado.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Calle Bolívar #567</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/vida-nocturna/florin-bar" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-md">
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <span className="font-bold">Consejo:</span> La mayoría de los bares en Sucre cierran alrededor de las
                  2:00 AM. Los jueves, viernes y sábados son los días más animados.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="discotecas" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=128&width=256"
                      alt="Discoteca Mitos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Discoteca Mitos</h3>
                      <Badge
                        variant="outline"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                      >
                        Popular
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      La discoteca más grande de Sucre con música variada y ambiente juvenil.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Av. Hernando Siles #234</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/vida-nocturna/discoteca-mitos" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=128&width=256"
                      alt="La Posada"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">La Posada</h3>
                      <Badge
                        variant="outline"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                      >
                        Música latina
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Club nocturno con énfasis en música latina y ambiente internacional.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Calle Junín #789</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/vida-nocturna/la-posada" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="peñas" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=128&width=256"
                      alt="Peña Jatun Ayllu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Peña Jatun Ayllu</h3>
                      <Badge
                        variant="outline"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                      >
                        Tradicional
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Auténtica peña folclórica con música y danzas tradicionales bolivianas.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Calle Audiencia #123</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/vida-nocturna/pena-jatun-ayllu" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=128&width=256"
                      alt="Peña Misk'i Takiy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Peña Misk'i Takiy</h3>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      >
                        Recomendado
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Peña con show folclórico y comida típica boliviana.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Calle Potosí #456</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/vida-nocturna/pena-miski-takiy" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-md">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <span className="font-bold">Consejo cultural:</span> Las peñas folclóricas son una excelente manera de
                  conocer la música y danzas tradicionales de Bolivia. Muchas incluyen cena y show.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Things to Do Dialog */}
      <Dialog open={thingsToDoDialogOpen} onOpenChange={setThingsToDoDialogOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center text-blue-600">
              <HelpCircle className="h-5 w-5 mr-2" />
              Qué hacer en Sucre
            </DialogTitle>
            <DialogDescription>Actividades recomendadas para disfrutar de tu visita</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <Card className="overflow-hidden border-blue-200 dark:border-blue-900">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Tour Centro Histórico"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 md:w-2/3">
                  <h3 className="font-bold text-lg mb-2">Tour por el Centro Histórico</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Recorre las calles coloniales y visita los principales monumentos históricos de la ciudad.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Duración: 3 horas
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Dificultad: Fácil
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      Guía disponible
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden border-green-200 dark:border-green-900">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Parque Cretácico"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 md:w-2/3">
                  <h3 className="font-bold text-lg mb-2">Visita al Parque Cretácico</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Conoce las huellas de dinosaurios y las réplicas a tamaño real de estos fascinantes animales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Duración: 2 horas
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Dificultad: Fácil
                    </Badge>
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                      Ideal para familias
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden border-amber-200 dark:border-amber-900">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Mercado Central"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 md:w-2/3">
                  <h3 className="font-bold text-lg mb-2">Compras en el Mercado Central</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Adquiere artesanías, textiles y productos locales en el colorido mercado de la ciudad.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Duración: Flexible
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Dificultad: Fácil
                    </Badge>
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                      Experiencia cultural
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <span className="font-bold">Consejo de viaje:</span> La mayoría de las atracciones turísticas en Sucre
                están ubicadas en el centro histórico y son accesibles a pie. Para visitar el Parque Cretácico, puedes
                tomar un taxi o un bus turístico.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Gastronomy Dialog */}
      <Dialog open={gastronomyDialogOpen} onOpenChange={setGastronomyDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center text-green-600">
              <Utensils className="h-5 w-5 mr-2" />
              Gastronomía de Sucre
            </DialogTitle>
            <DialogDescription>Descubre los sabores tradicionales de la Ciudad Blanca</DialogDescription>
          </DialogHeader>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Lugares destacados</h3>
            <Link href="/gastronomia">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                Ver todos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="platos" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="platos" className="data-[state=active]:text-[#FFC636]">
                Platos Típicos
              </TabsTrigger>
              <TabsTrigger value="postres" className="data-[state=active]:text-[#FFC636]">
                Postres y Dulces
              </TabsTrigger>
              <TabsTrigger value="restaurantes" className="data-[state=active]:text-[#FFC636]">
                Restaurantes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="platos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="h-40 overflow-hidden rounded-md mb-3">
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Pique a lo Macho"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Pique a lo Macho</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Plato tradicional boliviano que consiste en trozos de carne de res, salchichas, papas fritas,
                      cebolla, tomate y locoto (chile boliviano).
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/gastronomia/pique-a-lo-macho" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="h-40 overflow-hidden rounded-md mb-3">
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Chorizos Chuquisaqueños"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Chorizos Chuquisaqueños</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Embutidos tradicionales de la región, elaborados con carne de cerdo y especias locales. Se sirven
                      generalmente con mote (maíz hervido).
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/gastronomia/chorizos-chuquisaquenos" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="postres">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="h-40 overflow-hidden rounded-md mb-3">
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Chocolates Para Ti"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Chocolates Para Ti</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Famosos chocolates artesanales de Sucre, elaborados con cacao boliviano de alta calidad.
                      Disponibles en diversas presentaciones y sabores.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/gastronomia/chocolates-para-ti" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="h-40 overflow-hidden rounded-md mb-3">
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Cuñapés"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Cuñapés</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Pequeños panes de queso hechos con almidón de yuca. Son ideales para el desayuno o como merienda.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/gastronomia/cunapes" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="restaurantes">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                    <div className="h-32 w-full md:w-48 overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=128&width=192"
                        alt="Restaurante El Solar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Restaurante El Solar</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Ubicado en el centro histórico, ofrece platos tradicionales bolivianos en un ambiente colonial.
                      </p>
                      <div className="mt-2 text-sm">
                        <div>
                          <span className="font-medium">Dirección:</span> Calle Aniceto Arce #28
                        </div>
                        <div>
                          <span className="font-medium">Horario:</span> 12:00 - 22:00, todos los días
                        </div>
                        <div>
                          <span className="font-medium">Especialidad:</span> Mondongo y Picante de Pollo
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <a href="#" className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            Vista rápida
                          </Button>
                        </a>
                        <Link href="/gastronomia/restaurante-el-solar" className="flex-1">
                          <Button size="sm" className="w-full">
                            Ver detalles
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                    <div className="h-32 w-full md:w-48 overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=128&width=192"
                        alt="Café Mirador"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Café Mirador</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Cafetería con vistas panorámicas de la ciudad. Ofrece desayunos, almuerzos ligeros y una amplia
                        variedad de cafés.
                      </p>
                      <div className="mt-2 text-sm">
                        <div>
                          <span className="font-medium">Dirección:</span> Recoleta #302
                        </div>
                        <div>
                          <span className="font-medium">Horario:</span> 8:00 - 20:00, de martes a domingo
                        </div>
                        <div>
                          <span className="font-medium">Especialidad:</span> Desayunos bolivianos y café de altura
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <a href="#" className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            Vista rápida
                          </Button>
                        </a>
                        <Link href="/gastronomia/cafe-mirador" className="flex-1">
                          <Button size="sm" className="w-full">
                            Ver detalles
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Services Dialog */}
      <Dialog open={servicesDialogOpen} onOpenChange={setServicesDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center text-amber-600">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Servicios y Productos de Sucre
            </DialogTitle>
            <DialogDescription>Descubre los productos y servicios más destacados de la Ciudad Blanca</DialogDescription>
          </DialogHeader>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Lugares destacados</h3>
            <Link href="/servicios">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                Ver todos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="productos" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="productos" className="data-[state=active]:text-[#FFC636]">
                Productos Locales
              </TabsTrigger>
              <TabsTrigger value="artesanias" className="data-[state=active]:text-[#FFC636]">
                Artesanías
              </TabsTrigger>
              <TabsTrigger value="servicios" className="data-[state=active]:text-[#FFC636]">
                Servicios Turísticos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="productos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="h-40 overflow-hidden rounded-md mb-3">
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Chocolates Para Ti"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Chocolates Para Ti</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Marca emblemática de chocolates artesanales de Sucre. Fundada en 1985, es reconocida por la
                      calidad de sus productos elaborados con cacao boliviano.
                    </p>
                    <div className="mt-3 text-sm">
                      <div>
                        <span className="font-medium">Tienda principal:</span> Calle Nicolás Ortiz #38
                      </div>
                      <div>
                        <span className="font-medium">Productos destacados:</span> Bombones, tabletas y figuras de
                        chocolate
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/servicios/chocolates-para-ti" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="h-40 overflow-hidden rounded-md mb-3">
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Tarabuco Textiles"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Textiles de Tarabuco</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Tejidos tradicionales elaborados en la comunidad de Tarabuco, cerca de Sucre. Destacan por sus
                      colores vibrantes y diseños que narran historias locales.
                    </p>
                    <div className="mt-3 text-sm">
                      <div>
                        <span className="font-medium">Dónde comprar:</span> Mercado Campesino y tiendas de artesanía del
                        centro
                      </div>
                      <div>
                        <span className="font-medium">Productos destacados:</span> Aguayos, ponchos y tapices
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/servicios/textiles-tarabuco" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="artesanias">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="h-40 overflow-hidden rounded-md mb-3">
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Cerámica"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Cerámica Tradicional</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Piezas de cerámica elaboradas con técnicas ancestrales. Incluyen vasijas, platos decorativos y
                      figuras que representan la cultura local.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/servicios/ceramica-tradicional" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="h-40 overflow-hidden rounded-md mb-3">
                      <img
                        src="/placeholder.svg?height=160&width=300"
                        alt="Joyería"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Joyería en Plata</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Joyas artesanales elaboradas en plata, con diseños que combinan elementos tradicionales y
                      contemporáneos. Incluyen pendientes, collares y pulseras.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a href="#" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Vista rápida
                        </Button>
                      </a>
                      <Link href="/servicios/joyeria-plata" className="flex-1">
                        <Button size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="servicios">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                    <div className="h-32 w-full md:w-48 overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=128&width=192"
                        alt="Tours Guiados"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Tours Guiados</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Recorridos por la ciudad y alrededores con guías locales especializados en historia,
                        arquitectura y cultura.
                      </p>
                      <div className="mt-2 text-sm">
                        <div>
                          <span className="font-medium">Empresas recomendadas:</span> Sucre Tours, Descubre Sucre
                        </div>
                        <div>
                          <span className="font-medium">Tours populares:</span> Centro Histórico, Ruta de los
                          Dinosaurios, Comunidades Indígenas
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <a href="#" className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            Vista rápida
                          </Button>
                        </a>
                        <Link href="/servicios/tours-guiados" className="flex-1">
                          <Button size="sm" className="w-full">
                            Ver detalles
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                    <div className="h-32 w-full md:w-48 overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=128&width=192"
                        alt="Clases de Cocina"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Clases de Cocina Boliviana</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Talleres donde aprender a preparar platos tradicionales bolivianos con chefs locales. Incluyen
                        visita al mercado para comprar ingredientes.
                      </p>
                      <div className="mt-2 text-sm">
                        <div>
                          <span className="font-medium">Dónde reservar:</span> Condor Café, Cultura Cocina
                        </div>
                        <div>
                          <span className="font-medium">Duración:</span> 3-4 horas, incluye degustación
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <a href="#" className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            Vista rápida
                          </Button>
                        </a>
                        <Link href="/servicios/clases-cocina" className="flex-1">
                          <Button size="sm" className="w-full">
                            Ver detalles
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}
