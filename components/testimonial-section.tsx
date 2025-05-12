"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Send, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer"

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "María González",
      location: "Argentina",
      comment:
        "Sucre es una ciudad hermosa con una arquitectura colonial impresionante. La gente es muy amable y la comida es deliciosa. Definitivamente volveré.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "John Smith",
      location: "Estados Unidos",
      comment:
        "Me encantó la tranquilidad de Sucre y su clima perfecto. Los museos son fascinantes y el centro histórico es muy pintoresco.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sophie Dubois",
      location: "Francia",
      comment:
        "Una joya escondida en Sudamérica. La Casa de la Libertad y el Parque Cretácico son visitas obligadas. Recomiendo Sucre a todos los viajeros.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newComment, setNewComment] = useState({
    name: "",
    location: "",
    comment: "",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  })

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmitComment = () => {
    if (newComment.name && newComment.location && newComment.comment) {
      setTestimonials([...testimonials, newComment])
      setNewComment({
        name: "",
        location: "",
        comment: "",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      })
      setIsDialogOpen(false)
    }
  }

  const handleRatingChange = (rating: number) => {
    setNewComment({ ...newComment, rating })
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div ref={ref} className={`text-center mb-12 ${inView ? "animate-fadeIn" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold mb-4 font-courgette">Lo que dicen nuestros visitantes</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experiencias de viajeros que han descubierto la belleza y encanto de Sucre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 ${inView ? "animate-slideIn" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 transform transition-transform duration-300 hover:scale-110">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      } transition-colors duration-300`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic transform transition-all duration-300 hover:scale-105">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button onClick={() => setIsDialogOpen(true)} className="bg-amber-500 hover:bg-amber-600 text-black">
            Compartir tu experiencia
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Comparte tu experiencia</DialogTitle>
              <DialogDescription>
                Cuéntanos cómo fue tu visita a Sucre y ayuda a otros viajeros a planificar su viaje.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nombre
                </label>
                <Input
                  id="name"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-1">
                  País / Ciudad
                </label>
                <Input
                  id="location"
                  value={newComment.location}
                  onChange={(e) => setNewComment({ ...newComment, location: e.target.value })}
                  placeholder="De dónde eres"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium mb-1">
                  Comentario
                </label>
                <Textarea
                  id="comment"
                  value={newComment.comment}
                  onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                  placeholder="Comparte tu experiencia en Sucre"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Calificación</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          rating <= newComment.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  <X className="h-4 w-4 mr-2" />
                  Cancelar
                </Button>
                <Button onClick={handleSubmitComment}>
                  <Send className="h-4 w-4 mr-2" />
                  Enviar comentario
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
