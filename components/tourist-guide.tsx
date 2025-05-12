"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MapPin, Calendar, Info, Camera } from "lucide-react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function TouristGuide() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sections = [
    {
      title: "Lugares",
      description: "Descubre los sitios más emblemáticos de Sucre",
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      link: "/lugares",
      features: ["Palacetes históricos", "Catedrales coloniales", "Museos", "Parques y plazas"],
    },
    {
      title: "Eventos",
      description: "Conoce los eventos culturales y festividades",
      icon: <Calendar className="h-8 w-8 text-red-600" />,
      link: "/eventos",
      features: [
        "Festivales internacionales",
        "Celebraciones tradicionales",
        "Eventos culturales",
        "Ferias artesanales",
      ],
    },
    {
      title: "Historia",
      description: "Explora la rica historia de la Capital de Bolivia",
      icon: <Info className="h-8 w-8 text-blue-600" />,
      link: "/historia",
      features: ["Época colonial", "Independencia", "Época republicana", "Patrimonio cultural"],
    },
  ]

  return (
    <div ref={ref} className="container mx-auto py-16 px-4 md:px-6">
      <div className={`text-center mb-12 ${inView ? "animate-fadeIn" : "opacity-0"}`}>
        <h2 className="text-3xl font-bold mb-4 font-courgette">Guía Turística de Sucre</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Todo lo que necesitas saber para disfrutar al máximo tu visita a la Ciudad Blanca de Bolivia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Card
            key={index}
            className={`border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ${
              inView ? "animate-slideIn" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">{section.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2">{section.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{section.description}</p>

              <ul className="space-y-2 mb-6">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={section.link} className="w-full">
                <Button variant="outline" className="w-full">
                  Explorar {section.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        className={`mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-8 text-center ${
          inView ? "animate-fadeIn" : "opacity-0"
        }`}
        style={{ animationDelay: "450ms" }}
      >
        <Camera className="h-12 w-12 mx-auto mb-4 text-amber-600" />
        <h3 className="text-2xl font-bold mb-4">Captura los mejores momentos</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Sucre ofrece paisajes urbanos impresionantes, arquitectura colonial y vistas panorámicas que harán que tus
          fotografías sean inolvidables.
        </p>
        <Link href="/lugares?category=miradores">
          <Button size="lg">Descubrir los mejores miradores</Button>
        </Link>
      </div>
    </div>
  )
}
