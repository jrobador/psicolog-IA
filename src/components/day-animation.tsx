"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  opacityChange: number
  color: string
}

export default function DayAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    function initParticles() {
      particlesRef.current = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

      const warmColors = [
        "#FEFBF7", // Lightest - gradient start
        "#F5E7D3", // Light warm tone
        "#ECD9BC", // Medium warm tone
        "#E8D2B0", // Gradient end
        "#F8F1E4", // Soft warm tone
        "#F1E2CC", // Intermediate warm tone
      ]

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.15 - 0.075,
          speedY: Math.random() * 0.1 - 0.05,
          opacity: Math.random() * 0.25 + 0.1,
          opacityChange: Math.random() * 0.006 - 0.003,
          color: warmColors[Math.floor(Math.random() * warmColors.length)],
        })
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.opacity += particle.opacityChange

        if (particle.opacity <= 0.1 || particle.opacity >= 0.35) {
          particle.opacityChange = -particle.opacityChange
        }

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Create a soft glow effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2)
        gradient.addColorStop(0, particle.color)
        gradient.addColorStop(1, "rgba(254, 251, 247, 0)")

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.globalAlpha = particle.opacity * 0.5
        ctx.fill()

        // Draw the core of the particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

