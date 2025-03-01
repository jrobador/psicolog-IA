"use client"

import { useState, useEffect } from "react"
import { Brain } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import ThemeToggle from "@/src/components/theme-toggle"
import DayAnimation from "@/src/components/day-animation"
import NightAnimation from "@/src/components/night-animation"
import { AnimatePresence, motion } from "framer-motion"

export default function LandingPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Background layers with transitions */}
      <div className="fixed inset-0">
        <motion.div
          initial={false}
          animate={{
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-[#FEFBF7] to-[#E8D2B0]"
        />
        <motion.div
          initial={false}
          animate={{
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-slate-950"
        />
      </div>

      {/* Animated particle systems */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-0"
        >
          {theme === "light" ? <DayAnimation /> : <NightAnimation />}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative z-10"
      >
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2"
            initial={false}
            animate={{
              scale: [1, 1.02, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <Brain
              className={`h-8 w-8 transition-colors duration-1000 ${
                theme === "light" ? "text-[#725D45]" : "text-indigo-400"
              }`}
            />
            <h1
              className={`text-2xl font-bold transition-colors duration-1000 ${
                theme === "light" ? "text-[#5C4A36]" : "text-indigo-200"
              }`}
            >
              Psicolog.IA
            </h1>
          </motion.div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </header>

        <main className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
          <motion.h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-1000 ${
              theme === "light" ? "text-[#5C4A36]" : "text-indigo-100"
            }`}
            initial={false}
            animate={{
              scale: [1, 1.01, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            Inteligencia Terapéutica
          </motion.h2>
          <motion.p
            className={`text-xl md:text-2xl max-w-3xl mb-12 transition-colors duration-1000 ${
              theme === "light" ? "text-[#725D45]" : "text-indigo-200"
            }`}
            initial={false}
            animate={{
              opacity: [0.9, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            Combinando la empatía humana con la inteligencia artificial para brindar un mejor apoyo en materia de salud mental para todos.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={false}
            animate={{
              scale: [1, 1.02, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <Button
              size="lg"
              className={`transition-all duration-1000 ${
                theme === "light"
                  ? "bg-[#B69B7D] hover:bg-[#A38B70] text-[#FEFBF7] shadow-lg hover:shadow-xl"
                  : "bg-indigo-700 hover:bg-indigo-800 text-indigo-50"
              }`}
            >
              Empezar
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`transition-all duration-1000 ${
                theme === "light"
                  ? "border-[#B69B7D] text-[#5C4A36] hover:bg-[#B69B7D] hover:text-[#FEFBF7] shadow-lg hover:shadow-xl"
                  : "border-indigo-400 text-indigo-400 hover:bg-indigo-950"
              }`}
            >
              Más información
            </Button>
          </motion.div>
        </main>

        <section className="container mx-auto px-4 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={false}
            animate={{
              opacity: [0.9, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            {[
              {
                title: "Información basada en inteligencia artificial",
                description:
                  "Algoritmos avanzados analizan patrones para proporcionar recomendaciones terapéuticas personalizadas.",
              },
              {
                title: "Conexión Humana",
                description: "Nuestra plataforma mejora la relación terapéutica en lugar de reemplazarla.",
              },
              {
                title: "Soporte accesible",
                description: "Disponible las 24 horas, los 7 días de la semana, lo que hace que el apoyo de salud mental sea accesible siempre que lo necesite.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  scale: [1, 1.01, 1],
                  transition: { duration: 1.5, delay: index * 0.1, ease: "easeInOut" },
                }}
                className={`p-6 rounded-lg transition-all duration-1000 ${
                  theme === "light"
                    ? "bg-gradient-to-br from-[#FEFBF7]/90 to-[#F5E7D3]/80 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(182,155,125,0.2)] hover:shadow-[0_4px_24px_-4px_rgba(182,155,125,0.3)]"
                    : "bg-slate-900/80 shadow-lg shadow-indigo-900/20"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-1000 ${
                    theme === "light" ? "text-[#5C4A36]" : "text-indigo-300"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`transition-colors duration-1000 ${
                    theme === "light" ? "text-[#725D45]" : "text-indigo-200"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <footer className="py-8">
          <div className="container mx-auto px-4 text-center">
            <p
              className={`transition-colors duration-1000 ${theme === "light" ? "text-[#725D45]" : "text-indigo-300"}`}
            >
              © {new Date().getFullYear()} Psicolog-IA. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}

