import WeatherDisplay from "./weather-display"

export default function Hero() {
  return (
    <div className="relative">
      {/* Fondo de imagen */}
      <div
        className="relative bg-cover bg-center min-h-[675px]"
        style={{ backgroundImage: "url('/Img/img_Portada/main_bg.svg?height=500&width=1200')" }}
      >
        {/* Información del clima */}
        <WeatherDisplay />

        {/* Título y subtítulo */}
        <div className="z-10 absolute top-[29%] left-[28%]">
          <div className="mb-0">
            <h1 className="text-[140px] leading-none text-black font-courgette">Sucre</h1>
          </div>
          <div className="inline-block mt-[-40px] transform translate-x-[70%]">
            <p className="text-3xl text-black font-courgette">Ciudad blanca</p>
          </div>
        </div>


        {/* Silueta de edificios históricos */}
        <div className="absolute bottom-0 left-0 right-0 w-full pr-3 pl-1 mb-3">
          <div className="relative w-full">
            <img
              src="/Img/img_Portada/edif1.webp?height=256&width=1432"
              alt="Silueta de edificios históricos de Sucre"
              className="w-full h-auto block"
            />
          </div>
        </div>

      </div>

      {/* Línea divisoria delgada */}
      <div className="h-4 bg-black dark:bg-gray-900"
        style={{ backgroundImage: "url('/Img/img_Portada/black_main_bg.svg?height=500&width=1200')" }}></div>
    </div>
  )
}
