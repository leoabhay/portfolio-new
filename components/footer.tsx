"use client"

import Image from "next/image"
import Link from "next/link"
import { useSound } from "@/hooks/use-sound"

export function Footer() {
  const { playSound } = useSound()

  const socialLinks = [
    {
      name: "Facebook",
      icon: "https://img.icons8.com/fluency/96/facebook-new.png",
      url: "https://www.facebook.com/abhaychaudhary1303",
    },
    {
      name: "Instagram",
      icon: "https://img.icons8.com/fluency/96/instagram-new.png",
      url: "https://www.instagram.com/leo_abhay/",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/fluency/96/github.png",
      url: "https://github.com/leoabhay",
    },
    {
      name: "LinkedIn",
      icon: "https://img.icons8.com/fluency/96/linkedin.png",
      url: "https://www.linkedin.com/in/abhay-chaudhary-95b751181/",
    },
  ]

  return (
    <footer className="py-16 glass-effect border-t border-white/10 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-primary-color">A</span>bh
            <span className="text-primary-color">a</span>y <span className="text-secondary-color">C</span>ha
            <span className="text-secondary-color">u</span>dhar
            <span className="text-secondary-color">y</span>
          </h1>

          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(139,92,246,0.3)]"
                onClick={() => playSound("click", 0.2)}
                onMouseEnter={() => playSound("hover", 0.12)}
              >
                <Image
                  src={social.icon || "/placeholder.svg"}
                  alt={social.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-white/60 pt-8 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Abhay Chaudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
