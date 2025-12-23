"use client"

import { useEffect, useRef } from "react"
import { useSound } from "@/hooks/use-sound"
import Image from "next/image"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { playSound } = useSound()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create particles
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(78, 205, 196, ${particle.opacity})`
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a0b2e] to-[#16213e] animate-gradient-shift" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-color/20 via-transparent to-secondary-color/20 opacity-50" />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-color/30 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-color/30 rounded-full blur-[100px] animate-pulse-slow animation-delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-4xl">
            <div className="space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-white/80 animate-fade-in-up">Hello,</h2>
              <div className="flex items-center gap-4 animate-fade-in-up animation-delay-200">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none">My Name is</h1>
              </div>
              <div className="flex items-center gap-6 animate-fade-in-up animation-delay-400">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text leading-none animate-gradient-x">
                  Abhay
                </h1>
                <div className="hidden md:block w-32 h-2 bg-gradient-to-r from-primary-color to-secondary-color rounded-full animate-pulse" />
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl font-light leading-relaxed animate-fade-in-up animation-delay-600">
              IT Engineer | Web Developer | Tech Enthusiast
            </p>

            <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-800">
              <a
                href="#contact"
                className="group relative inline-block px-10 py-4 glass-effect text-white text-lg font-semibold uppercase tracking-wide rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] overflow-hidden"
                onClick={(e) => {
                  e.preventDefault()
                  playSound("whoosh", 0.3)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setTimeout(() => playSound("scroll", 0.2), 100)
                }}
                onMouseEnter={() => playSound("hover", 0.15)}
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-color to-accent-color opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#projects"
                className="inline-block px-10 py-4 glass-effect border-2 border-secondary-color text-secondary-color text-lg font-semibold uppercase tracking-wide rounded-full transition-all duration-300 hover:bg-secondary-color hover:text-white hover:scale-110 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
                onClick={(e) => {
                  e.preventDefault()
                  playSound("whoosh", 0.3)
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  setTimeout(() => playSound("scroll", 0.2), 100)
                }}
                onMouseEnter={() => playSound("hover", 0.15)}
              >
                View Work
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center animate-fade-in-up animation-delay-1000">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[400px] h-[400px] border-4 border-primary-color/30 rounded-full animate-spin-slow" />
              <div className="absolute w-[350px] h-[350px] border-4 border-secondary-color/30 rounded-full animate-spin-reverse" />
              <div className="absolute w-[450px] h-[450px] border-2 border-accent-color/20 rounded-full animate-pulse-slow" />
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-color via-accent-color to-secondary-color rounded-full opacity-75 blur-2xl animate-gradient-x group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-8 border-white/10 shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color/40 to-secondary-color/40 mix-blend-overlay z-10" />
                <Image
                  src="/abhay.jpg"
                  alt="Abhay - IT Engineer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full scale-110 hover:scale-125 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine" />
              </div>

              <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary-color rounded-full blur-xl opacity-60 animate-pulse-slow" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary-color rounded-full blur-xl opacity-60 animate-pulse-slow animation-delay-1000" />

              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 glass-effect rounded-full border border-primary-color/30 animate-bounce-slow">
                <span className="text-sm font-semibold text-white">💻 Developer</span>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 glass-effect rounded-full border border-secondary-color/30 animate-bounce-slow animation-delay-500">
                <span className="text-sm font-semibold text-white">👨‍💻 IT Engineer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-sm font-light uppercase tracking-widest">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
