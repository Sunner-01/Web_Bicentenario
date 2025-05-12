import type React from "react"
import type { Metadata } from "next"
import { Inter, Courgette } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ChatbotFloating from "@/components/chatbot-floating"
import RadialMenu from "@/components/radial-menu"

const inter = Inter({ subsets: ["latin"] })
const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-courgette",
})

export const metadata: Metadata = {
  title: "Turismo Sucre - La Ciudad Blanca",
  description: "Descubre la belleza histórica y cultural de Sucre, Bolivia - La Ciudad Blanca",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} ${courgette.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatbotFloating />
          <RadialMenu />
        </ThemeProvider>
      </body>
    </html>
  )
}
