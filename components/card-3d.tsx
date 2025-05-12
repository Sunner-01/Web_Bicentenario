"use client"

import type React from "react"
import { useState, useRef, type ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface Card3DProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties // Agregar el prop style
}

export default function Card3D({ children, className = "", style }: Card3DProps) {
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 })
  const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 5
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 5

    // Calculate glare position
    const glareX = ((mouseX - rect.left) / rect.width) * 100
    const glareY = ((mouseY - rect.top) / rect.height) * 100

    setTransform({
      x: rotateX,
      y: rotateY,
      scale: 1.05,
    })

    setGlare({
      x: glareX,
      y: glareY,
      opacity: 0.15,
    })
  }

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, scale: 1 })
    setGlare({ x: 0, y: 0, opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-300 ease-out perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `scale(${transform.scale}) rotateX(${transform.x}deg) rotateY(${transform.y}deg)`,
        zIndex: transform.scale > 1 ? 10 : 1,
        ...style, // Aplica el estilo adicional (como animationDelay) aquí
      }}
    >
      <Card
       className="relative overflow-hidden shadow-lg transition-shadow duration-300 ease-out h-full"
       style={{
        boxShadow:
          transform.scale > 1
            ? `0 ${Math.abs(transform.y) * 0.4 + 8}px ${Math.abs(transform.y) * 0.4 + 16}px rgba(0, 0, 0, 0.08)`
            : "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}      
      >
        {children}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
        />
      </Card>
    </div>
  )
}
