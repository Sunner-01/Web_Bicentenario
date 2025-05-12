import { Sun, Droplets, Wind } from "lucide-react"

export default function WeatherDisplay() {
  // En un caso real, estos datos vendrían de una API
  const weatherData = {
    temp: "18°",
    condition: "Parcialmente nublado",
    humidity: "45%",
    wind: "10 km/h",
    feelsLike: "16°",
  }

  return (
    <div className="absolute top-[17%] right-[3%] flex items-center bg-transparent rounded-lg px-4 py-3 border border-white/20">
      <div className="flex items-center">
        <div className="-mr-2 mb-7">
          <img
            src="/Img/Img_Portada/Tiempo1.png"
            alt="Estado del clima"
            className="h-[115px] object-contain"
          />
        </div>
        <div className="text-black">
          <div className="flex items-end">
            <span className="text-5xl font-bold font-courgette text-black">{weatherData.temp}</span>
            <span className="ml-1 text-2xl font-courgette text-black">{weatherData.condition}</span>
          </div>
          <div className="flex space-x-4 mt-1 text-sm text-black">
            <div className="flex items-center">
              <Droplets className="h-4 w-4 mr-1 text-blue-500" />
              <span>Humedad: {weatherData.humidity}</span>
            </div>
            <div className="flex items-center">
              <Wind className="h-4 w-4 mr-1 text-gray-500" />
              <span>Viento: {weatherData.wind}</span>
            </div>
          </div>
          <div className="text-xs mt-1 text-black">
            <span>Sensación térmica: {weatherData.feelsLike}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
