'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSelector from '@/components/language-selector'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [opacity, setOpacity] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const isInicio = pathname === '/'
  const isSpecialSection = ['/lugares', '/eventos', '/historia'].includes(pathname || '')
  const isScrolled = opacity > 0

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isInicio) {
      const handleScroll = () => {
        const scrollY = window.scrollY
        const maxScroll = 100
        const newOpacity = Math.min(scrollY / maxScroll, 1)
        setOpacity(newOpacity)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      setOpacity(1)
    }
  }, [pathname, isInicio])

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/lugares', label: 'Lugares' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/historia', label: 'Historia' },
  ]

  const isActive = (path: string) => pathname === path

  const showDark = isDarkMode && (!isInicio || isScrolled)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300"
      style={{
        backgroundColor: isSpecialSection
          ? showDark ? '#000000' : '#FFFFFF'
          : showDark
          ? `rgba(0, 0, 0, ${opacity})`
          : `rgba(255, 255, 255, ${opacity})`,
        color: showDark ? '#FFFFFF' : '#000000',
        boxShadow:
          isSpecialSection || opacity > 0
            ? showDark
              ? '0 4px 12px rgba(255, 255, 255, 0.15)' // sombra blanca más fuerte
              : '0 4px 12px rgba(0, 0, 0, 0.06)'       // sombra negra normal
            : 'none',
        height: '100px',
      }}
    >
      <div className="container h-full px-4">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full space-x-4">
            <div className="relative h-[95px] mt-2 mb-2 sm:h-[95px] sm:mt-2 sm:mb-2">
              <img
                src={
                  showDark
                    ? "/Img/img_nav/DinoLogo1blc.webp"
                    : "/Img/img_nav/DinoLogo1.webp"
                }
                alt="Logo dinosaurio"
                className="object-contain h-full w-full mobile:h-[60px]"
              />
            </div>
            <div className="flex flex-col justify-end items-center h-full mb-4 mobile:mb-2">
              <div className="h-[45px] w-[115px] mobile:h-[30px] mobile:w-[80px]">
                <img
                  src={
                    showDark
                      ? "/Img/img_nav/Logo2blc.webp"
                      : "/Img/img_nav/Logo2.webp"
                  }
                  alt="200"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[25px] w-[130px] mt-[3px] mobile:h-[18px] mobile:w-[90px]">
                <img
                  src="/Img/img_nav/Logo3.webp"
                  alt="Años de libertad"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Link>

          {/* Botón hamburguesa */}
          <button className="lg:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <X size={32} color={showDark ? '#FFFFFF' : '#000000'} />
              : <Menu size={32} color={showDark ? '#FFFFFF' : '#000000'} />}
          </button>

          {/* Menú móvil */}
          <div
            className={`fixed top-[100px] right-0 h-screen transform transition-transform duration-300 ease-in-out ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            } w-[60%] p-4 flex flex-col gap-6 z-40 lg:hidden`}
            style={{
              backgroundColor: showDark ? '#000000' : '#FFFFFF',
              color: showDark ? '#FFFFFF' : '#000000',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xl font-medium font-courgette ${
                  isActive(item.href)
                    ? 'text-[#FF0000] border-b-2 border-[#FF0000]'
                    : 'hover:text-[#FF0000]'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div onClick={() => setMenuOpen(false)}>
              <ThemeToggle />
            </div>

            <div onClick={() => setMenuOpen(false)}>
              <LanguageSelector />
            </div>
          </div>

          {/* Menú desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl font-medium font-courgette ${
                  isActive(item.href)
                    ? 'text-[#FF0000] border-b-2 border-[#FF0000]'
                    : 'hover:text-[#FF0000]'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}
