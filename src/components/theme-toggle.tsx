"use client"

import { useTheme } from "../contexts/theme-context"
import { useSound } from "../hooks/use-sound"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { playSound } = useSound()

  const handleToggle = () => {
    playSound("click", 0.3)
    toggleTheme()
  }

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={() => playSound("hover", 0.1)}
      className="relative w-14 h-7 glass-card rounded-full p-1 transition-all duration-300 hover:border-primary-color group"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute w-5 h-5 rounded-full bg-gradient-to-br from-primary-color to-secondary-color shadow-lg transition-transform duration-300 ${
          theme === "dark" ? "translate-x-0" : "translate-x-7"
        }`}
      />
      <div className="flex items-center justify-between px-0.5">
        <span className={`text-xs transition-opacity ${theme === "dark" ? "opacity-100" : "opacity-40"}`}>🌙</span>
        <span className={`text-xs transition-opacity ${theme === "light" ? "opacity-100" : "opacity-40"}`}>☀️</span>
      </div>
    </button>
  )
}
