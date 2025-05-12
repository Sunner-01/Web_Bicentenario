import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HistoriaPage() {
  const periodos = [
    {
      id: "fundacion",
      title: "Fundación y Época Colonial",
      events: [
        {
          id: 1,
          title: "Fundación de La Plata (Sucre)",
          year: "1538",
          description:
            "Fundada por Pedro Anzúrez bajo el nombre de La Plata, la ciudad fue establecida como un importante centro administrativo colonial.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 2,
          title: "Creación de la Real Audiencia de Charcas",
          year: "1559",
          description:
            "Establecimiento de la Real Audiencia de Charcas, uno de los más importantes tribunales judiciales y administrativos del Imperio Español en América del Sur.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 3,
          title: "Fundación de la Universidad San Francisco Xavier",
          year: "1624",
          description:
            "Se funda la Universidad San Francisco Xavier, una de las universidades más antiguas de América, que convirtió a Sucre en un importante centro intelectual.",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
    },
    {
      id: "independencia",
      title: "Independencia",
      events: [
        {
          id: 4,
          title: "Primer Grito Libertario de América",
          year: "25 de mayo de 1809",
          description:
            "La Revolución de Chuquisaca, considerada el primer grito libertario de América Latina, marcó el inicio del proceso independentista en la región.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 5,
          title: "Batalla de La Florida",
          year: "1814",
          description:
            "Importante batalla por la independencia donde las fuerzas patriotas enfrentaron al ejército realista en las cercanías de Sucre.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 6,
          title: "Firma del Acta de Independencia",
          year: "6 de agosto de 1825",
          description:
            "En la Casa de la Libertad se firmó el Acta de Independencia de Bolivia, declarando la independencia del Alto Perú y creando la República de Bolivia.",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
    },
    {
      id: "republicana",
      title: "Época Republicana",
      events: [
        {
          id: 7,
          title: "Sucre como Capital de Bolivia",
          year: "1826",
          description:
            "La ciudad es nombrada capital de la nueva República de Bolivia y renombrada en honor al Mariscal Antonio José de Sucre.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 8,
          title: "Guerra Federal",
          year: "1898-1899",
          description:
            "Conflicto civil entre conservadores (Sucre) y liberales (La Paz) que resultó en el traslado de la sede de gobierno a La Paz, aunque Sucre mantuvo el título de capital constitucional.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          id: 9,
          title: "Declaración como Patrimonio Cultural de la Humanidad",
          year: "1991",
          description:
            "La UNESCO declara el centro histórico de Sucre como Patrimonio Cultural de la Humanidad por su excepcional arquitectura colonial bien preservada.",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto py-8 mt-[150px]">
      <h1 className="text-4xl font-bold text-center mb-2">Historia de Sucre</h1>
      <p className="text-center text-gray-600 mb-8">
        Descubre los acontecimientos históricos más importantes de la Capital de Bolivia
      </p>

      <Tabs defaultValue="fundacion" className="w-full">
        <TabsList className="flex justify-center mb-8">
          {periodos.map((periodo) => (
            <TabsTrigger key={periodo.id} value={periodo.id}>
              {periodo.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {periodos.map((periodo) => (
          <TabsContent key={periodo.id} value={periodo.id}>
            <div className="space-y-8">
              {periodo.events.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <div className="text-lg font-semibold text-green-700 mb-4">{event.year}</div>
                      <p className="text-gray-700">{event.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Preguntas frecuentes sobre este período</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cuáles fueron las figuras más importantes de este período?</AccordionTrigger>
                  <AccordionContent>
                    Durante este período destacaron personalidades como Antonio José de Sucre, Juana Azurduy, y otros
                    líderes que contribuyeron significativamente a la historia de Sucre y Bolivia.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Qué impacto tuvo este período en la arquitectura de Sucre?</AccordionTrigger>
                  <AccordionContent>
                    Este período dejó un legado arquitectónico importante que se refleja en los edificios históricos,
                    iglesias y plazas que hoy forman parte del patrimonio cultural de la ciudad.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Cómo influyó este período en la cultura actual de Sucre?</AccordionTrigger>
                  <AccordionContent>
                    Las tradiciones, festividades y expresiones culturales actuales de Sucre tienen sus raíces en este
                    período histórico, que definió la identidad cultural de la ciudad.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
