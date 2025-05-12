"use client"

import { useState } from "react"
import { Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ChatbotFloating() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-1/2 right-4 rounded-full w-14 h-14 bg-[#D9D9D9] hover:bg-[#B3B3B3] border border-black shadow-lg z-50 flex items-center justify-center"
      >
        {/* Imagen personalizada */}
        <img
          src="/Img/img_Portada/bot.png"  // Asegúrate de usar la ruta correcta de tu imagen
          alt="Bot Icon"  // Descripción para accesibilidad
          className="absolute w-12 h-12 object-contain"  // Aumenta el tamaño de la imagen sin deformarla
        />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Asistente Turístico</DialogTitle>
            <DialogDescription>Pregúntame sobre lugares turísticos, eventos o historia de Sucre</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col h-[300px]">
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-md mb-4">
              <div className="chat-message bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mb-2 max-w-[80%]">
                ¡Hola! Soy tu asistente virtual para turismo en Sucre. ¿En qué puedo ayudarte?
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Button>Enviar</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
