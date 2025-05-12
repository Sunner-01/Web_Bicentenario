import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Music, Star } from "lucide-react"
import EventCategory from "@/components/event-category"

export default function EventosPage() {
  const categories = [
    { id: "festivales", name: "Festivales", icon: <Star className="h-5 w-5" /> },
    { id: "culturales", name: "Eventos Culturales", icon: <Music className="h-5 w-5" /> },
    { id: "tradicionales", name: "Celebraciones Tradicionales", icon: <Calendar className="h-5 w-5" /> },
  ]

  return (
    <div className="container mx-auto py-8 mt-[150px]">
      <h1 className="text-4xl font-bold text-center mb-2">Eventos en Sucre</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Descubre los eventos más importantes y tradicionales de la Ciudad Blanca
      </p>

      <Tabs defaultValue="festivales" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2 data-[state=active]:text-[#FFC636] data-[state=active]:border-[#FFC636]"
            >
              <span className="[&>*]:data-[state=active]:text-[#FFC636]">{category.icon}</span>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="festivales">
          <EventCategory
            title="Festivales"
            events={[
              {
                id: 1,
                title: "Festival Internacional de la Cultura",
                description:
                  "Evento cultural que reúne artistas nacionales e internacionales en diversas disciplinas como música, danza, teatro, cine y artes plásticas.",
                image: "/placeholder.svg?height=300&width=500",
                date: "Julio - Agosto",
                location: "Diversos escenarios de la ciudad",
                duration: "2 semanas",
              },
              {
                id: 2,
                title: "Carnaval de Sucre",
                description:
                  "El carnaval de Sucre es una de las celebraciones más coloridas y alegres de Bolivia. Durante una semana, la ciudad se llena de música, bailes tradicionales y comparsas que recorren las calles.",
                image: "/placeholder.svg?height=300&width=500",
                date: "Febrero (fecha móvil)",
                location: "Centro histórico de Sucre",
                duration: "1 semana",
              },
              {
                id: 3,
                title: "Festival de Cine de Sucre",
                description:
                  "Festival anual que presenta lo mejor del cine boliviano e internacional, con proyecciones, talleres y charlas con directores.",
                image: "/placeholder.svg?height=300&width=500",
                date: "Octubre",
                location: "Teatro Gran Mariscal y otros espacios",
                duration: "10 días",
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="culturales">
          <EventCategory
            title="Eventos Culturales"
            events={[
              {
                id: 4,
                title: "Feria del Libro de Sucre",
                description:
                  "Evento literario que reúne a escritores, editoriales y lectores en torno a presentaciones de libros, conferencias y talleres.",
                image: "/placeholder.svg?height=300&width=500",
                date: "Mayo",
                location: "Casa de la Cultura",
                duration: "1 semana",
              },
              {
                id: 5,
                title: "Encuentro de Teatro",
                description:
                  "Festival que presenta obras de teatro de compañías locales e internacionales en diferentes espacios de la ciudad.",
                image: "/placeholder.svg?height=300&width=500",
                date: "Septiembre",
                location: "Teatro Municipal y plazas públicas",
                duration: "10 días",
              },
              {
                id: 6,
                title: "Exposición de Arte Contemporáneo",
                description:
                  "Muestra de arte contemporáneo que exhibe obras de artistas bolivianos y latinoamericanos en diferentes disciplinas.",
                image: "/placeholder.svg?height=300&width=500",
                date: "Noviembre",
                location: "Museo de Arte Contemporáneo",
                duration: "1 mes",
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="tradicionales">
          <EventCategory
            title="Celebraciones Tradicionales"
            events={[
              {
                id: 7,
                title: "Entrada de la Virgen de Guadalupe",
                description:
                  "Festividad religiosa en honor a la patrona de Sucre. Incluye una gran procesión con danzas folclóricas, bandas de música y trajes tradicionales que recorren las principales calles de la ciudad.",
                image: "/placeholder.svg?height=300&width=500",
                date: "8 de septiembre",
                location: "Desde la Catedral hasta la Basílica de San Francisco",
                duration: "1 día",
              },
              {
                id: 8,
                title: "Aniversario de Sucre",
                description:
                  "Celebración del aniversario de la fundación de la ciudad con desfiles cívicos, eventos culturales, conciertos y actividades recreativas para toda la familia.",
                image: "/placeholder.svg?height=300&width=500",
                date: "25 de mayo",
                location: "Plaza 25 de Mayo y principales avenidas",
                duration: "1 semana",
              },
              {
                id: 9,
                title: "Semana Santa en Sucre",
                description:
                  "Celebración religiosa con procesiones, representaciones de la Pasión de Cristo y ceremonias tradicionales que atraen a fieles y turistas.",
                image: "/placeholder.svg?height=300&width=500",
                date: "Marzo - Abril (fecha móvil)",
                location: "Iglesias y calles del centro histórico",
                duration: "1 semana",
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
