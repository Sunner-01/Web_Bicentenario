"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SpainFlag, UKFlag, FranceFlag, GermanyFlag } from "@/components/icons/flags"

interface LanguageSelectorProps {
  className?: string
}

export default function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const [language, setLanguage] = useState("es")

  const languages = [
    { code: "es", name: "Español", flag: <SpainFlag /> },
    { code: "en", name: "English", flag: <UKFlag /> },
    { code: "fr", name: "Français", flag: <FranceFlag /> },
    { code: "de", name: "Deutsch", flag: <GermanyFlag /> },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center space-x-1 px-2 py-1 rounded hover:bg-purple-800 ${className}`}>
        <Globe className="h-5 w-5 mr-1" />
        <span className="flex items-center">{languages.find((lang) => lang.code === language)?.flag}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="cursor-pointer flex items-center"
          >
            <span className="mr-2 flex items-center">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
