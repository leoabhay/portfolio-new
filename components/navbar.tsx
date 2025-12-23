"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useSound } from "@/hooks/use-sound"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { playSound } = useSound()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    playSound("click")
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
      setTimeout(() => playSound("scroll", 0.2), 100)
    }
  }

  const toggleMenu = () => {
    playSound("click", 0.2)
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-effect shadow-lg" : "bg-transparent backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link
            href="#hero"
            className="text-2xl font-bold tracking-wider text-white"
            onClick={(e) => handleClick(e, "#hero")}
          >
            <span className="text-primary-color">A</span>B<span className="text-primary-color">H</span>A
            <span className="text-primary-color">Y</span> <span className="text-secondary-color">C</span>HAU
            <span className="text-secondary-color">D</span>HAR<span className="text-secondary-color">Y</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  onMouseEnter={() => playSound("hover", 0.1)}
                  className={cn(
                    "text-lg font-medium text-white/90 transition-all duration-300 relative py-2",
                    "hover:text-primary-color",
                    'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-color after:to-secondary-color after:transition-all after:duration-300',
                    "hover:after:w-full",
                    activeSection === link.href.slice(1) && "text-primary-color after:w-full",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button className="flex flex-col gap-1.5 z-50" onClick={toggleMenu} aria-label="Toggle menu">
              <span
                className={cn(
                  "block w-8 h-0.5 bg-white transition-all duration-300",
                  isOpen && "rotate-45 translate-y-2",
                )}
              />
              <span className={cn("block w-8 h-0.5 bg-white transition-all duration-300", isOpen && "opacity-0")} />
              <span
                className={cn(
                  "block w-8 h-0.5 bg-white transition-all duration-300",
                  isOpen && "-rotate-45 -translate-y-2",
                )}
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "fixed top-20 left-0 w-full h-[calc(100vh-5rem)] glass-effect transition-all duration-500 md:hidden",
              "flex items-center justify-center",
              isOpen ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <ul className="flex flex-col items-center gap-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={cn(
                      "text-3xl font-medium text-white transition-all duration-300 relative",
                      "hover:text-primary-color",
                      'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-color after:to-secondary-color after:transition-all after:duration-300',
                      "hover:after:w-full",
                      activeSection === link.href.slice(1) && "text-primary-color after:w-full",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
