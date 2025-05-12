import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Camera, Compass, Calendar, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer
      className="text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/Img/img_Portada/black_main_bg.svg?height=500&width=1200')",
      }}
    >
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {/* Turismo Sucre */}
          <div className="text-center sm:text-left max-w-xs">
            <h3 className="text-lg sm:text-xl font-bold mb-4 font-courgette text-[#FFC636]">Turismo Sucre</h3>
            <p className="text-white mb-4">
              Descubre la belleza histórica y cultural de Sucre, la Ciudad Blanca de Bolivia.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <Link href="#" className="text-[#FFC636] hover:text-white transition-colors">
                <Facebook />
              </Link>
              <Link href="#" className="text-[#FFC636] hover:text-white transition-colors">
                <Twitter />
              </Link>
              <Link href="#" className="text-[#FFC636] hover:text-white transition-colors">
                <Instagram />
              </Link>
            </div>
          </div>

          {/* Explora Sucre */}
          <div className="text-center sm:text-left max-w-xs">
            <h3 className="text-lg sm:text-xl font-bold mb-4 font-courgette text-[#FFC636]">Explora Sucre</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lugares" className="text-white hover:text-[#FFC636] transition-colors flex items-center justify-center sm:justify-start gap-2">
                  <Compass className="h-4 w-4" />
                  <span>Lugares Turísticos</span>
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-white hover:text-[#FFC636] transition-colors flex items-center justify-center sm:justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Eventos y Festividades</span>
                </Link>
              </li>
              <li>
                <Link href="/historia" className="text-white hover:text-[#FFC636] transition-colors flex items-center justify-center sm:justify-start gap-2">
                  <Info className="h-4 w-4" />
                  <span>Historia y Cultura</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[#FFC636] transition-colors flex items-center justify-center sm:justify-start gap-2">
                  <Camera className="h-4 w-4" />
                  <span>Galería Fotográfica</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Información Turística */}
          <div className="text-center sm:text-left max-w-xs">
            <h3 className="text-lg sm:text-xl font-bold mb-4 font-courgette text-[#FFC636]">Información Turística</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-white text-sm">Plaza 25 de Mayo, Sucre, Bolivia</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-white text-sm">+591 4 64xxxxx</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white text-sm">info@turismosucre.com</span>
              </li>
            </ul>
            <div className="mt-4 flex justify-center sm:justify-start">
              <Button variant="outline" className="bg-green-700 text-white border-green-600 hover:bg-green-600 w-full sm:w-auto">
                Descargar Mapa Turístico
              </Button>
            </div>
          </div>

          {/* Boletín */}
          <div className="text-center sm:text-left max-w-xs">
            <h3 className="text-lg sm:text-xl font-bold mb-4 font-courgette text-[#FFC636]">Boletín Turístico</h3>
            <p className="text-white mb-4">
              Recibe noticias sobre eventos, promociones y consejos para tu visita a Sucre.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-green-700 border-green-600 text-white placeholder:text-green-300 w-full"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full sm:w-auto">Enviar</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FFC636] mt-8 pt-8 text-center text-white">
          <p>© {new Date().getFullYear()} Turismo Sucre - La Ciudad Blanca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
