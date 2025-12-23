"use client"

import { useSound } from "../hooks/use-sound"

const projects = [
  {
    title: "Abhay Icecream Recipes",
    description: "A simple web app built using Node.js.",
    image: "/ice-cream-recipes-app.jpg",
    link: "https://abhayicecreams.onrender.com/",
  },
  {
    title: "Weather App",
    description: "A simple weather app built using Node.js.",
    image: "/weather-app-interface.png",
    link: "https://weatherbyabhay.onrender.com/",
  },
  {
    title: "Admin Panel",
    description: "A simple admin panel built using Node.js.",
    image: "/admin-dashboard-interface.png",
    link: "https://github.com/leoabhay/admin-panel---meaningby",
  },
  {
    title: "Khana Khajana",
    description: "A recipe finder web app built using MERN.",
    image: "/recipe-finder-app.png",
    link: "https://github.com/leoabhay/khana",
  },
  {
    title: "Blog",
    description: "A simple blog site built using Node.js.",
    image: "/blog-website-interface.jpg",
    link: "https://github.com/leoabhay/node-workshop",
  },
  {
    title: "Flappy Bird",
    description: "A simple game using JavaScript.",
    image: "/generic-flying-game.png",
    link: "https://leoabhay.github.io/flappy-bird/",
  },
  {
    title: "Movie Search",
    description: "A simple website built using React.",
    image: "/movie-search-app.jpg",
    link: "https://github.com/leoabhay/movie-search",
  },
  {
    title: "Currency Converter",
    description: "A simple web app built using JavaScript.",
    image: "/currency-converter-app.jpg",
    link: "https://leoabhay.github.io/currency-converter",
  },
  {
    title: "Shopping Cart",
    description: "A simple web app built using React.",
    image: "/shopping-cart-interface.jpg",
    link: "https://github.com/leoabhay/shopping-cart",
  },
  {
    title: "Portfolio",
    description: "A simple portfolio made using HTML and CSS.",
    image: "/portfolio-website-showcase.png",
    link: "https://github.com/leoabhay/portfolio",
  },
  {
    title: "Real-Time Chat App",
    description: "A simple real time chat app made using Node.js and socket.io.",
    image: "/chat-app-interface.png",
    link: "https://real-time-chat-app-49zt.onrender.com",
  },
  {
    title: "CampusEase",
    description: "A college automation system made using MEAN and python.",
    image: "/college-management-system.jpg",
    link: "https://github.com/leoabhay/CampusEase-frontend",
  },
]

export function ProjectsSection() {
  const { playSound } = useSound()

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0b2e]/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            My <span className="gradient-text">Projects</span>
            <span className="block h-2 w-40 bg-gradient-to-r from-primary-color to-secondary-color mx-auto mt-4 rounded-full" />
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-xl overflow-hidden flex flex-col"
              onMouseEnter={() => playSound("hover", 0.12)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color/10 to-secondary-color/10 mix-blend-overlay" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h1 className="text-2xl font-bold mb-3 text-white">{project.title}</h1>
                <p className="text-base text-white/70 mb-6 flex-grow">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-primary-color to-accent-color text-white text-base font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,92,246,0.5)] hover:-translate-y-1 text-center"
                  onClick={() => playSound("click", 0.25)}
                  onMouseEnter={(e) => {
                    e.stopPropagation()
                    playSound("hover", 0.15)
                  }}
                >
                  Click Here
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
