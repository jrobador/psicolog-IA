"use client"

import { useEffect, useRef } from "react"

interface Sparkle {
  x: number
  y: number
  size: number
  opacity: number
  pulse: number
  pulseSpeed: number
  color: string
}

export default function NightAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparklesRef = useRef<Sparkle[]>([])
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initSparkles()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Initialize sparkles
    function initSparkles() {
      sparklesRef.current = []
      const sparkleCount = Math.floor((canvas.width * canvas.height) / 10000) // Adjust density

      for (let i = 0; i < sparkleCount; i++) {
        const coolColors = [
          "#c7d2fe", // Indigo 100
          "#a5b4fc", // Indigo 200
          "#818cf8", // Indigo 300
          "#6366f1", // Indigo 400
          "#4f46e5", // Indigo 500
        ]

        sparklesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          pulse: 0,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          color: coolColors[Math.floor(Math.random() * coolColors.length)],
        })
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparklesRef.current.forEach((sparkle) => {
        // Update pulse
        sparkle.pulse += sparkle.pulseSpeed

        // Calculate current opacity based on pulse
        const currentOpacity = sparkle.opacity * (0.5 + 0.5 * Math.sin(sparkle.pulse))

        // Draw sparkle with glow effect
        ctx.beginPath()

        // Outer glow
        const gradient = ctx.createRadialGradient(sparkle.x, sparkle.y, 0, sparkle.x, sparkle.y, sparkle.size * 3)
        gradient.addColorStop(0, sparkle.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.globalAlpha = currentOpacity * 0.3
        ctx.arc(sparkle.x, sparkle.y, sparkle.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Inner bright core
        ctx.beginPath()
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2)
        ctx.fillStyle = sparkle.color
        ctx.globalAlpha = currentOpacity
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

