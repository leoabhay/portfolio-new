"use client"

import Image from "next/image"
import { useSound } from "@/hooks/use-sound"

const skills = [
  { name: "Git", icon: "https://img.icons8.com/color/96/git.png" },
  { name: "Node.js", icon: "https://img.icons8.com/color/96/nodejs.png" },
  { name: "React", icon: "https://img.icons8.com/color/96/react-native.png" },
  { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png" },
  { name: "Java", icon: "https://img.icons8.com/color/96/java-coffee-cup-logo.png" },
  { name: "Python", icon: "https://img.icons8.com/color/96/python.png" },
  { name: "TypeScript", icon: "https://img.icons8.com/color/96/typescript.png" },
  { name: "Angular", icon: "https://img.icons8.com/color/96/angularjs.png" },
  { name: "C#", icon: "https://img.icons8.com/color/96/c-sharp-logo.png" },
  { name: "MySQL", icon: "https://img.icons8.com/color/96/mysql-logo.png" },
  { name: "SEO", icon: "https://img.icons8.com/color/96/seo.png" },
]

export function SkillsSection() {
  const { playSound } = useSound()

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#16213e]/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            MY <span className="gradient-text">skills</span>
            <span className="block h-2 w-40 bg-gradient-to-r from-primary-color to-secondary-color mx-auto mt-4 rounded-full" />
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-6 rounded-xl text-center"
              onMouseEnter={() => playSound("hover", 0.12)}
            >
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary-color/20 to-secondary-color/20 rounded-full transition-all duration-300 group-hover:from-primary-color group-hover:to-secondary-color">
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold text-white">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
