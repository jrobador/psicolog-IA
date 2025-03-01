"use client"

import { Sun, Moon } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"

interface ThemeToggleProps {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        scale: [1, 1.1, 1],
        rotate: theme === "light" ? [0, 180, 360] : [360, 180, 0],
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={`rounded-full transition-all duration-1000 ${
          theme === "light"
            ? "text-[#B69B7D] hover:text-[#8E7B64] hover:bg-[#FEFBF7]/50 backdrop-blur-sm"
            : "text-indigo-400 hover:text-indigo-200 hover:bg-indigo-950"
        }`}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>
    </motion.div>
  )
}

