import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PlaceCategory from "@/components/place-category"
import {
  Building2,
  Church,
  LandmarkIcon,
  LandmarkIcon as Monument,
  Building,
  SquareParkingIcon as ParkSquare,
  Trees,
} from "lucide-react"

export default function LugaresPage() {
 const categories = [
    { id: "palacetes", name: "Palacetes", icon: <Building2 className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: "catedrales", name: "Catedrales", icon: <Church className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: "museos", name: "Museos", icon: <LandmarkIcon className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: "monumentos", name: "Monumentos Históricos", icon: <Monument className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: "edificios", name: "Edificios Históricos", icon: <Building className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: "plazas", name: "Plazas y Plazuelas", icon: <ParkSquare className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: "parques", name: "Parques", icon: <Trees className="h-4 w-4 sm:h-5 sm:w-5" /> },
  ];

  const placesData = {
    palacetes: [
      {
        name: "Casa de la Libertad",
        image: "/placeholder.svg?height=200&width=300",
        description: "Edificio histórico donde se firmó el Acta de Independencia de Bolivia en 1825.",
        details:
          "La Casa de la Libertad es uno de los monumentos históricos más importantes de Bolivia. En este edificio se firmó el Acta de Independencia del país el 6 de agosto de 1825.",
        address: "Plaza 25 de Mayo, Sucre",
        hours: "Lunes a domingo: 9:00 - 18:00",
        price: "Bs. 15 (extranjeros), Bs. 5 (nacionales)",
      },
      {
        name: "Palacio de la Glorieta",
        image: "/placeholder.svg?height=200&width=300",
        description: "Castillo de estilo ecléctico construido a finales del siglo XIX.",
        details:
          "El Palacio de la Glorieta es un castillo de estilo ecléctico construido por Francisco Argandoña y su esposa Clotilde Urioste. Combina estilos arquitectónicos europeos como el gótico, renacentista y bizantino.",
        address: "Zona La Glorieta, a 5 km de Sucre",
        hours: "Martes a domingo: 9:00 - 17:00",
        price: "Bs. 20",
      },
      {
        name: "Castillo del Príncipe",
        image: "/placeholder.svg?height=200&width=300",
        description: "Mansión histórica con arquitectura europea del siglo XIX.",
        details:
          "El Castillo del Príncipe es una mansión histórica que refleja la influencia europea en la arquitectura de Sucre durante el siglo XIX.",
        address: "Calle Aniceto Arce, Sucre",
        hours: "Lunes a sábado: 10:00 - 16:00",
        price: "Bs. 15",
      },
      {
        name: "Palacio Arzobispal",
        image: "/placeholder.svg?height=200&width=300",
        description: "Sede del Arzobispado de Sucre con impresionante arquitectura colonial.",
        details:
          "El Palacio Arzobispal es un edificio histórico que alberga la sede del Arzobispado de Sucre. Destaca por su arquitectura colonial y sus patios interiores.",
        address: "Plaza 25 de Mayo, Sucre",
        hours: "Lunes a viernes: 9:00 - 12:00 y 15:00 - 17:00",
        price: "Entrada gratuita",
      },
      {
        name: "Mansión Argandoña",
        image: "/placeholder.svg?height=200&width=300",
        description: "Elegante residencia de la familia Argandoña con influencias europeas.",
        details:
          "La Mansión Argandoña es una elegante residencia que perteneció a la familia Argandoña, una de las más influyentes de Sucre durante el siglo XIX. Su arquitectura muestra claras influencias europeas.",
        address: "Calle Bolívar, Sucre",
        hours: "Martes a domingo: 10:00 - 18:00",
        price: "Bs. 10",
      },
      {
        name: "Casa Dorada",
        image: "/placeholder.svg?height=200&width=300",
        description: "Antigua residencia con fachada decorada con pan de oro.",
        details:
          "La Casa Dorada es una antigua residencia colonial conocida por su fachada decorada con pan de oro, lo que le da su característico brillo dorado. En su interior alberga una colección de arte colonial.",
        address: "Calle Audiencia, Sucre",
        hours: "Miércoles a lunes: 9:00 - 17:00",
        price: "Bs. 12",
      },
    ],
    catedrales: [
      {
        name: "Catedral Metropolitana",
        image: "/placeholder.svg?height=200&width=300",
        description: "Principal templo católico de Sucre, construido en estilo neoclásico.",
        details:
          "La Catedral Metropolitana de Sucre es el principal templo católico de la ciudad. Su construcción comenzó en 1559 y fue finalizada en 1712. Destaca por su arquitectura neoclásica y su imponente fachada blanca.",
        address: "Plaza 25 de Mayo, Sucre",
        hours: "Lunes a sábado: 8:00 - 12:00 y 15:00 - 18:00, Domingo: 8:00 - 12:00",
        price: "Entrada gratuita (Museo: Bs. 10)",
      },
      {
        name: "Basílica de San Francisco",
        image: "/placeholder.svg?height=200&width=300",
        description: "Templo franciscano con una de las torres más altas de la ciudad.",
        details:
          "La Basílica de San Francisco es un importante templo franciscano construido en el siglo XVI. Destaca por su torre campanario, una de las más altas de Sucre, y su museo de arte religioso.",
        address: "Calle Aniceto Arce, Sucre",
        hours: "Lunes a sábado: 9:00 - 12:00 y 14:30 - 17:30",
        price: "Bs. 10",
      },
      {
        name: "Iglesia de San Miguel",
        image: "/placeholder.svg?height=200&width=300",
        description: "Templo jesuita con impresionante retablo dorado.",
        details:
          "La Iglesia de San Miguel fue construida por los jesuitas en el siglo XVII. Su interior alberga un impresionante retablo dorado y una colección de pinturas religiosas de la escuela cuzqueña.",
        address: "Calle Grau, Sucre",
        hours: "Lunes a viernes: 9:00 - 12:00 y 15:00 - 18:00",
        price: "Entrada gratuita",
      },
      {
        name: "Iglesia de Santo Domingo",
        image: "/placeholder.svg?height=200&width=300",
        description: "Templo dominico con arquitectura colonial y torre campanario.",
        details:
          "La Iglesia de Santo Domingo fue fundada por la orden dominica en el siglo XVI. Destaca por su arquitectura colonial, su torre campanario y su colección de arte religioso.",
        address: "Calle Bolívar, Sucre",
        hours: "Martes a domingo: 8:30 - 11:30 y 15:00 - 17:30",
        price: "Entrada gratuita",
      },
      {
        name: "Iglesia de La Merced",
        image: "/placeholder.svg?height=200&width=300",
        description: "Templo mercedario con importante colección de arte sacro.",
        details:
          "La Iglesia de La Merced fue construida por la orden mercedaria en el siglo XVI. Su interior alberga una importante colección de arte sacro y su arquitectura es un ejemplo del barroco colonial.",
        address: "Calle Azurduy, Sucre",
        hours: "Lunes a sábado: 9:00 - 12:00 y 15:00 - 18:00",
        price: "Entrada gratuita",
      },
    ],
    museos: [
      {
        name: "Museo de la Casa de la Libertad",
        image: "/placeholder.svg?height=200&width=300",
        description: "Museo histórico donde se firmó el Acta de Independencia de Bolivia.",
        details:
          "El Museo de la Casa de la Libertad alberga importantes documentos históricos, incluyendo el Acta de Independencia de Bolivia. También cuenta con una colección de pinturas, muebles y objetos de la época colonial y republicana.",
        address: "Plaza 25 de Mayo, Sucre",
        hours: "Lunes a domingo: 9:00 - 18:00",
        price: "Bs. 15 (extranjeros), Bs. 5 (nacionales)",
      },
      {
        name: "Museo de Arte Indígena ASUR",
        image: "/placeholder.svg?height=200&width=300",
        description: "Colección de textiles y arte indígena de la región.",
        details:
          "El Museo de Arte Indígena ASUR exhibe una impresionante colección de textiles tradicionales de las comunidades indígenas de la región. También ofrece demostraciones de técnicas de tejido y talleres.",
        address: "Calle San Alberto, Sucre",
        hours: "Lunes a viernes: 8:30 - 12:00 y 14:30 - 18:00, Sábado: 9:00 - 12:00",
        price: "Bs. 25",
      },
      {
        name: "Museo de Historia Natural",
        image: "/placeholder.svg?height=200&width=300",
        description: "Colección de fósiles, minerales y especímenes de flora y fauna.",
        details:
          "El Museo de Historia Natural alberga una extensa colección de fósiles, minerales y especímenes de flora y fauna de Bolivia. Destaca su colección paleontológica con fósiles de dinosaurios encontrados en la región.",
        address: "Calle Dalence, Sucre",
        hours: "Lunes a viernes: 8:30 - 12:00 y 14:30 - 18:00, Sábado: 9:00 - 12:00",
        price: "Bs. 10",
      },
      {
        name: "Museo del Tesoro",
        image: "/placeholder.svg?height=200&width=300",
        description: "Colección de joyas, orfebrería y objetos preciosos de la época colonial.",
        details:
          "El Museo del Tesoro exhibe una impresionante colección de joyas, orfebrería y objetos preciosos de la época colonial. Incluye piezas de oro, plata y piedras preciosas utilizadas en ceremonias religiosas.",
        address: "Catedral Metropolitana, Plaza 25 de Mayo, Sucre",
        hours: "Lunes a sábado: 9:00 - 12:00 y 14:30 - 17:30",
        price: "Bs. 20",
      },
      {
        name: "Museo Textil Etnográfico",
        image: "/placeholder.svg?height=200&width=300",
        description: "Colección de textiles tradicionales de diferentes regiones de Bolivia.",
        details:
          "El Museo Textil Etnográfico alberga una colección de textiles tradicionales de diferentes regiones de Bolivia. Muestra técnicas de tejido, diseños y significados culturales de los textiles indígenas.",
        address: "Calle Audiencia, Sucre",
        hours: "Martes a domingo: 9:00 - 12:00 y 14:00 - 17:00",
        price: "Bs. 15",
      },
    ],
    monumentos: [
      {
        name: "Monumento a la Libertad",
        image: "/placeholder.svg?height=200&width=300",
        description: "Monumento en honor a la independencia de Bolivia.",
        details:
          "El Monumento a la Libertad fue erigido en conmemoración de la independencia de Bolivia. Representa figuras alegóricas de la libertad y héroes de la independencia.",
        address: "Plaza Libertad, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
      {
        name: "Monumento a los Héroes de la Independencia",
        image: "/placeholder.svg?height=200&width=300",
        description: "Homenaje a los próceres de la independencia boliviana.",
        details:
          "El Monumento a los Héroes de la Independencia honra a los próceres que lucharon por la independencia de Bolivia. Incluye estatuas de figuras como Simón Bolívar, Antonio José de Sucre y Juana Azurduy.",
        address: "Avenida de las Américas, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
      {
        name: "Monumento a Pedro Anzúrez",
        image: "/placeholder.svg?height=200&width=300",
        description: "Estatua del fundador de la ciudad de La Plata (actual Sucre).",
        details:
          "El Monumento a Pedro Anzúrez honra al fundador de la ciudad de La Plata, actual Sucre. La estatua representa al conquistador español que estableció la ciudad en 1538.",
        address: "Plaza Anzúrez, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
      {
        name: "Monumento a Juana Azurduy",
        image: "/placeholder.svg?height=200&width=300",
        description: "Homenaje a la heroína de la independencia boliviana.",
        details:
          "El Monumento a Juana Azurduy honra a esta importante heroína de la independencia boliviana. La estatua la representa montada a caballo, simbolizando su valentía y liderazgo en las luchas por la independencia.",
        address: "Plaza Juana Azurduy, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
      {
        name: "Mausoleo de Mariscal Sucre",
        image: "/placeholder.svg?height=200&width=300",
        description: "Tumba del Mariscal Antonio José de Sucre, prócer de la independencia.",
        details:
          "El Mausoleo de Mariscal Sucre alberga los restos del Mariscal Antonio José de Sucre, prócer de la independencia y primer presidente de Bolivia. El monumento incluye esculturas y relieves que narran su vida y hazañas.",
        address: "Catedral Metropolitana, Plaza 25 de Mayo, Sucre",
        hours: "Lunes a sábado: 9:00 - 12:00 y 14:30 - 17:30",
        price: "Bs. 10",
      },
    ],
    edificios: [
      {
        name: "Tribunal Supremo de Justicia",
        image: "/placeholder.svg?height=200&width=300",
        description: "Sede del máximo tribunal de justicia de Bolivia.",
        details:
          "El Tribunal Supremo de Justicia es la sede del máximo tribunal de justicia de Bolivia. El edificio, de estilo neoclásico, fue construido a principios del siglo XX y destaca por su imponente fachada y escalinata.",
        address: "Plaza 25 de Mayo, Sucre",
        hours: "Lunes a viernes: 8:30 - 12:00 y 14:30 - 18:30 (exterior)",
        price: "No aplica (exterior)",
      },
      {
        name: "Universidad San Francisco Xavier",
        image: "/placeholder.svg?height=200&width=300",
        description: "Una de las universidades más antiguas de América.",
        details:
          "La Universidad San Francisco Xavier, fundada en 1624, es una de las universidades más antiguas de América. Su edificio principal, de estilo colonial, alberga un importante patrimonio histórico y cultural.",
        address: "Calle Estudiantes, Sucre",
        hours: "Lunes a viernes: 8:00 - 18:00 (exterior)",
        price: "No aplica (exterior)",
      },
      {
        name: "Teatro Gran Mariscal",
        image: "/placeholder.svg?height=200&width=300",
        description: "Teatro histórico con arquitectura neoclásica.",
        details:
          "El Teatro Gran Mariscal es un importante centro cultural de Sucre. Construido a principios del siglo XX, destaca por su arquitectura neoclásica, su elegante sala principal y sus detalles ornamentales.",
        address: "Calle Aniceto Arce, Sucre",
        hours: "Visitas: Lunes a viernes: 9:00 - 12:00 y 15:00 - 18:00",
        price: "Bs. 10",
      },
      {
        name: "Prefectura de Chuquisaca",
        image: "/placeholder.svg?height=200&width=300",
        description: "Sede del gobierno departamental con arquitectura republicana.",
        details:
          "La Prefectura de Chuquisaca es la sede del gobierno departamental. El edificio, de estilo republicano, fue construido a finales del siglo XIX y destaca por su fachada ornamentada y su patio central.",
        address: "Plaza 25 de Mayo, Sucre",
        hours: "Lunes a viernes: 8:30 - 12:00 y 14:30 - 18:30 (exterior)",
        price: "No aplica (exterior)",
      },
      {
        name: "Alcaldía Municipal",
        image: "/placeholder.svg?height=200&width=300",
        description: "Sede del gobierno municipal con arquitectura colonial.",
        details:
          "La Alcaldía Municipal de Sucre es la sede del gobierno municipal. El edificio, de estilo colonial, destaca por su balcón corrido, sus arcos y su patio central con fuente ornamental.",
        address: "Plaza 25 de Mayo, Sucre",
        hours: "Lunes a viernes: 8:30 - 12:00 y 14:30 - 18:30 (exterior)",
        price: "No aplica (exterior)",
      },
    ],
    plazas: [
      {
        name: "Plaza 25 de Mayo",
        image: "/placeholder.svg?height=200&width=300",
        description: "Plaza principal de Sucre, rodeada de edificios históricos.",
        details:
          "La Plaza 25 de Mayo es la plaza principal de Sucre. Está rodeada de importantes edificios históricos como la Catedral Metropolitana, la Casa de la Libertad, la Alcaldía y la Prefectura. Su diseño incluye jardines, fuentes y el Monumento a la Libertad en el centro.",
        address: "Centro Histórico, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
      {
        name: "Plaza Anzúrez",
        image: "/placeholder.svg?height=200&width=300",
        description: "Plaza dedicada al fundador de la ciudad.",
        details:
          "La Plaza Anzúrez está dedicada a Pedro Anzúrez, fundador de la ciudad. Cuenta con jardines, bancas y el monumento al conquistador español en el centro.",
        address: "Barrio San Roque, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
      {
        name: "Plaza Libertad",
        image: "/placeholder.svg?height=200&width=300",
        description: "Plaza conmemorativa de la independencia boliviana.",
        details:
          "La Plaza Libertad conmemora la independencia de Bolivia. Cuenta con jardines, áreas de descanso y el Monumento a la Libertad como elemento central.",
        address: "Avenida de las Américas, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
      {
        name: "Plazuela San Francisco",
        image: "/placeholder.svg?height=200&width=300",
        description: "Pequeña plaza frente a la Basílica de San Francisco.",
        details:
          "La Plazuela San Francisco es una pequeña plaza ubicada frente a la Basílica de San Francisco. Es un espacio tranquilo con bancas, árboles y una fuente central.",
        address: "Calle Aniceto Arce, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
      {
        name: "Plaza Estudiantes",
        image: "/placeholder.svg?height=200&width=300",
        description: "Plaza cercana a la Universidad San Francisco Xavier.",
        details:
          "La Plaza Estudiantes es un espacio público cercano a la Universidad San Francisco Xavier. Es un punto de encuentro para estudiantes y cuenta con áreas verdes, bancas y monumentos dedicados a académicos destacados.",
        address: "Calle Estudiantes, Sucre",
        hours: "Acceso libre las 24 horas",
        price: "Entrada gratuita",
      },
    ],
    parques: [
      {
        name: "Parque Bolívar",
        image: "/placeholder.svg?height=200&width=300",
        description: "Extenso parque urbano con áreas verdes y recreativas.",
        details:
          "El Parque Bolívar es uno de los principales espacios verdes de Sucre. Cuenta con extensas áreas verdes, senderos para caminar, juegos infantiles, un lago artificial y monumentos dedicados a Simón Bolívar y otros próceres.",
        address: "Avenida de las Américas, Sucre",
        hours: "6:00 - 20:00, todos los días",
        price: "Entrada gratuita",
      },
      {
        name: "Parque Cretácico",
        image: "/placeholder.svg?height=200&width=300",
        description: "Parque paleontológico con huellas de dinosaurios.",
        details:
          "El Parque Cretácico es un parque paleontológico que alberga una de las colecciones de huellas de dinosaurios más grandes del mundo. Incluye réplicas de dinosaurios a tamaño real, un museo y miradores con vistas panorámicas.",
        address: "Cal Orck'o, a 5 km de Sucre",
        hours: "Martes a domingo: 9:00 - 17:00",
        price: "Bs. 30 (extranjeros), Bs. 15 (nacionales)",
      },
      {
        name: "Parque Simón Bolívar",
        image: "/placeholder.svg?height=200&width=300",
        description: "Parque con monumentos dedicados al Libertador.",
        details:
          "El Parque Simón Bolívar está dedicado al Libertador de América. Cuenta con jardines, fuentes, un monumento ecuestre de Bolívar y áreas de descanso.",
        address: "Avenida Bolívar, Sucre",
        hours: "6:00 - 20:00, todos los días",
        price: "Entrada gratuita",
      },
      {
        name: "Parque Zenón Iturralde",
        image: "/placeholder.svg?height=200&width=300",
        description: "Parque urbano con áreas deportivas y recreativas.",
        details:
          "El Parque Zenón Iturralde es un espacio recreativo que cuenta con canchas deportivas, juegos infantiles, áreas verdes y espacios para picnic.",
        address: "Zona Norte, Sucre",
        hours: "6:00 - 20:00, todos los días",
        price: "Entrada gratuita",
      },
      {
        name: "Jardín Botánico",
        image: "/placeholder.svg?height=200&width=300",
        description: "Colección de plantas nativas y exóticas de Bolivia.",
        details:
          "El Jardín Botánico de Sucre alberga una extensa colección de plantas nativas y exóticas de Bolivia. Incluye secciones dedicadas a plantas medicinales, cactáceas, orquídeas y árboles nativos.",
        address: "Zona La Glorieta, Sucre",
        hours: "Martes a domingo: 8:00 - 17:00",
        price: "Bs. 10",
      },
    ],
  }

  return (
    <div className="container mx-auto py-8 mt-[150px]">
      <h1 className="text-4xl font-bold text-center mb-8">Lugares Turísticos de Sucre</h1>

      <Tabs defaultValue="palacetes" className="w-full">
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

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <PlaceCategory title={category.name} places={placesData[category.id as keyof typeof placesData]} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
