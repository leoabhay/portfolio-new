"use client"

import type React from "react"

import { useState } from "react"
import { useSound } from "@/hooks/use-sound"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const { playSound } = useSound()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mblkyypq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        form.reset()
        setIsSubmitted(true)
        setIsError(false)
        playSound("success", 0.4)
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setIsError(true)
        setIsSubmitted(false)
        playSound("error", 0.4)
      }
    } catch (error) {
      setIsError(true)
      setIsSubmitted(false)
      playSound("error", 0.4)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#16213e]/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Contact <span className="gradient-text">me</span>
            <span className="block h-2 w-40 bg-gradient-to-r from-primary-color to-secondary-color mx-auto mt-4 rounded-full" />
          </h1>
        </div>

        <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Send me a message</h2>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onFocus={() => playSound("click", 0.1)}
                className="w-full px-6 py-4 text-base glass-effect border border-white/20 rounded-lg transition-all duration-300 focus:border-primary-color focus:outline-none focus:ring-4 focus:ring-primary-color/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onFocus={() => playSound("click", 0.1)}
                className="w-full px-6 py-4 text-base glass-effect border border-white/20 rounded-lg transition-all duration-300 focus:border-primary-color focus:outline-none focus:ring-4 focus:ring-primary-color/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                onFocus={() => playSound("click", 0.1)}
                className="w-full px-6 py-4 text-base glass-effect border border-white/20 rounded-lg transition-all duration-300 focus:border-primary-color focus:outline-none focus:ring-4 focus:ring-primary-color/20 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                onFocus={() => playSound("click", 0.1)}
                className="w-full px-6 py-4 text-base glass-effect border border-white/20 rounded-lg resize-vertical transition-all duration-300 focus:border-primary-color focus:outline-none focus:ring-4 focus:ring-primary-color/20 text-white placeholder:text-white/50"
              />
            </div>

            <button
              type="submit"
              onMouseEnter={() => playSound("hover", 0.15)}
              className="w-full px-12 py-4 bg-gradient-to-r from-primary-color to-accent-color text-white text-lg font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(139,92,246,0.5)]"
            >
              Send Message
            </button>

            {isSubmitted && (
              <div className="text-center text-green-400 font-bold mt-4 p-4 glass-effect border border-green-400/30 rounded-lg">
                Thank you! Your message has been sent.
              </div>
            )}

            {isError && (
              <div className="text-center text-red-400 font-bold mt-4 p-4 glass-effect border border-red-400/30 rounded-lg">
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
