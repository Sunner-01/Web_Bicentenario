"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, AlertTriangle, Droplets, Wind } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Modificar el InfoBar para mostrar solo el clima de Sucre y eliminar el diálogo del chatbot
export default function InfoBar() {
  const weatherData = {
    city: "Sucre",
    temp: "22°C",
    condition: "Soleado",
    icon: <Sun className="h-8 w-8 text-yellow-500" />,
    humidity: "45%",
    wind: "10 km/h",
  }

  return (
    <div
      className="text-white py-4"
      style={{ backgroundImage: "url('/Img/img_Portada/black_main_bg.svg?height=500&width=1200')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Aquí va tu contenido */}
        </div>
      </div>
    </div>
  )
  
}
