"use client"

import Image from "next/image"
import { useSound } from "@/hooks/use-sound"

const projects = [
  {
    title: "Abhay Icecream Recipes",
    description: "A simple web app built using Node.js.",
    image: "/icecream.png",
    link: "https://abhayicecreams.onrender.com/",
  },
  {
    title: "Weather App",
    description: "A simple weather app built using Node.js.",
    image: "/weather.png",
    link: "https://weatherbyabhay.onrender.com/",
  },
  {
    title: "Inventory Management System",
    description: "A minor college project made using PHP.",
    image: "/inventory.png",
    link: "https://github.com/leoabhay/Inventory-Management-System",
  },
  // {
  //   title: "Meaning By",
  //   description: "A simple e-dictionary web app built using React and Python.",
  //   image: "/meaningby.png",
  //   link: "https://github.com/leoabhay/MeaningBy",
  // },
  // {
  //   title: "Rock Paper Scissors",
  //   description: "A simple game using JavaScript.",
  //   image: "/rock.png",
  //   link: "https://leoabhay.github.io/Rock-paper-scissors/",
  // },
  // {
  //   title: "Tic Tac Toe",
  //   description: "A simple game using Java.",
  //   image: "/tictactoe.png",
  //   link: "https://github.com/leoabhay/TicTacToe",
  // },
  // {
  //   title: "Ping Pong",
  //   description: "A simple game using JavaScript.",
  //   image: "/ping.png",
  //   link: "https://github.com/leoabhay/PingPong",
  // },
  {
    title: "URL Shortener",
    description: "A simple URL shortener built using Node.js.",
    image: "/url.png",
    link: "https://github.com/leoabhay/url-shortner",
  },
  {
    title: "Admin Panel",
    description: "A simple admin panel built using Node.js.",
    image: "/adminpanel.png",
    link: "https://github.com/leoabhay/admin-panel---meaningby",
  },
  {
    title: "Khana Khajana",
    description: "A minor college project made using MERN.",
    image: "/khanakhajana.png",
    link: "https://github.com/leoabhay/khana",
  },
  {
    title: "Blog",
    description: "A simple blog site built using Node.js.",
    image: "/blog.png",
    link: "https://github.com/leoabhay/node-workshop",
  },
  {
    title: "Flappy Bird",
    description: "A simple game using JavaScript.",
    image: "/flappybird.png",
    link: "https://leoabhay.github.io/flappy-bird/",
  },
  {
    title: "Portfolio",
    description: "A simple portfolio made using HTML and CSS.",
    image: "/portfolio.png",
    link: "https://github.com/leoabhay/portfolio",
  },
  {
    title: "Movie Search",
    description: "A simple website built using React.",
    image: "/moviesearch.png",
    link: "https://github.com/leoabhay/movie-search",
  },
  {
    title: "Currency Converter",
    description: "A simple web app built using JavaScript.",
    image: "/currency.png",
    link: "https://leoabhay.github.io/currency-converter",
  },
  {
    title: "Shopping Cart",
    description: "A simple web app built using React.",
    image: "/shoppingcart.png",
    link: "https://github.com/leoabhay/shopping-cart",
  },
  {
    title: "Real-Time Chat App",
    description: "A simple real time chat app made using Node.js and socket.io.",
    image: "/chat.png",
    link: "https://real-time-chat-app-49zt.onrender.com",
  },
  {
    title: "Portfolio",
    description: "My own portfolio website.",
    image: "/portfolio1.png",
    link: "https://github.com/leoabhay/portfolio-new",
  },
    {
    title: "Bike Hub",
    description: "A bike management website built using Nodejs.",
    image: "/bike.png",
    link: "https://github.com/leoabhay/BikeHub",
  },
  {
    title: "Campus Ease",
    description: "A major college project made using MEAN and Python.",
    image: "/campusease.png",
    link: "https://github.com/leoabhay/CampusEase-frontend",
  },
  {
    title: "Face Recognition Attendance System",
    description: "A project made using Python.",
    image: "/face.png",
    link: "https://github.com/leoabhay/face-recognition-attendance",
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
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
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
