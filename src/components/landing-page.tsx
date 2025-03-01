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

        <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24 flex flex-col items-center text-center">
          <motion.h2
              className={`font-normal transition-colors duration-1000 mx-auto px-4 
                text-[56px] sm:text-[76px] md:text-[96px] lg:text-[120px] xl:text-[140px]
                leading-[1.1] sm:leading-[1.05] md:leading-[1] lg:leading-[1]
                max-w-[15ch] sm:max-w-[12ch] md:max-w-[12ch] lg:max-w-[12ch]
                tracking-[-0.02em] sm:tracking-[-0.03em] md:tracking-[-0.04em] ${
                theme === "light" ? "text-[#5C4A36]" : "text-indigo-100"
              }`}
              style={{
                fontFamily: '"Gt Super Text", "Times New Roman", serif',
              }}
              initial={false}
              animate={{
                scale: [1, 1.01, 1],
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
            >
              Inteligencia Terapéutica
          </motion.h2>
          <motion.p
            className={`sm:text-xl md:text-2xl lg:text-3xl max-w-[85%] sm:max-w-[75%] md:max-w-3xl 
              mb-8 sm:mb-12 lg:mb-16 mt-6 sm:mt-8 lg:mt-10 transition-colors duration-1000 
              ${theme === "light" ? "text-[#725D45]" : "text-indigo-200"}`}
            initial={false}
            animate={{
              opacity: [0.9, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            Combinando la empatía humana con la inteligencia artificial para brindar un mejor apoyo en materia de salud mental para todos.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={false}
            animate={{
              scale: [1, 1.02, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <Button
              variant="outline"
              size="lg"
              className={`h-14 px-8 text-lg font-medium animate-shimmer bg-[length:200%_100%] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-105 ${
                theme === "light"
                  ? "border-2 border-[#725D45] bg-[linear-gradient(110deg,#5C4A36,45%,#8B7355,55%,#5C4A36)] text-[#FEFBF7] shadow-[0_0_20px_rgba(139,115,85,0.3)] hover:shadow-[0_0_25px_rgba(139,115,85,0.45)] focus:ring-[#725D45] focus:ring-offset-[#FEFBF7]"
                  : "border-2 border-indigo-600 bg-[linear-gradient(110deg,#312e81,45%,#4f46e5,55%,#312e81)] text-indigo-50 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.45)] focus:ring-indigo-400 focus:ring-offset-slate-950"
              }`}
            >
              Comenzar
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
                title: "Insights Potenciados por IA",
                description:
                  "Algoritmos avanzados analizan patrones para proporcionar recomendaciones terapéuticas personalizadas.",
              },
              {
                title: "Conexión Humana",
                description: "Nuestra plataforma mejora la relación terapéutica en lugar de reemplazarla.",
              },
              {
                title: "Soporte accesible",
                description: "Disponible las 24 horas, los 7 días de la semana, lo que hace que el apoyo de salud mental sea accesible cuando lo necesites.",
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

