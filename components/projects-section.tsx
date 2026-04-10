"use client"

import Image from "next/image"
import { useSound } from "@/hooks/use-sound"
import { Github } from "lucide-react"


const projects = [
  {
    title: "Icecream",
    description: "A simple web app built using Node.js.",
    image: "/images/icecream.png",
    link: "https://abhayicecreams.onrender.com/",
    github: "https://github.com/leoabhay/icecream",
    tags: ["Nodejs", "EJS", "CSS"],
  },

  // {
  //   title: "Weather App",
  //   description: "A simple weather app built using Node.js.",
  //   image: "/images/weather.png",
  //   link: "https://weatherbyabhay.onrender.com/",
  //   github: "https://github.com/leoabhay/weather-app",
  // },
  {
    title: "Habibi IMS",
    description: "A minor college project I of NCIT related to inventory management made using PHP.",
    image: "/images/inventory.png",
    link: "https://imsprojectncit.infinityfree.me/?i=1",
    github: "https://github.com/leoabhay/Inventory-Management-System",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
  },

  {
    title: "Mountara",
    description: "A simple tourism web app built using HTML, CSS and JS.",
    image: "/images/mountara.png",
    link: "https://leoabhay.github.io/Mountara/",
    github: "https://github.com/leoabhay/Mountara",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Vertex",
    description: "A simple educational consultancy web app built using HTML, CSS and JS.",
    image: "/images/vertex.png",
    link: "https://leoabhay.github.io/Vertex-Consultancy/",
    github: "https://github.com/leoabhay/Vertex-Consultancy",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "OmniKit",
    description: "A simple toolkit web app built using HTML, CSS and JS.",
    image: "/images/omnikit.png",
    link: "https://leoabhay.github.io/OmniKit/",
    github: "https://github.com/leoabhay/OmniKit",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Wearix",
    description: "A simple fashion e-commerce web app built using HTML, CSS and JS.",
    image: "/images/wearix.png",
    link: "https://leoabhay.github.io/Wearix/",
    github: "https://github.com/leoabhay/wearix",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Meaning By",
    description: "A simple e-dictionary web app built using React and Python.",
    image: "/images/meaningby.png",
    link: "https://meaningby.netlify.app/",
    github: "https://github.com/leoabhay/MeaningBy",
    tags: ["React", "Django", "API"],
  },

  {
    title: "Sano URL",
    description: "A simple URL shortener built using Node.js.",
    image: "/images/SanoURL.png",
    link: "https://sanourl-36uo.onrender.com/",
    github: "https://github.com/leoabhay/SanoURL",
    tags: ["Nodejs", "MongoDB", "EJS"],
  },

  // {
  //   title: "Blog",
  //   description: "A simple blog site built using Node.js.",
  //   image: "/images/blog.png",
  //   link: "https://github.com/leoabhay/node-workshop",
  //   github: "https://github.com/leoabhay/node-workshop",
  // },
  {
    title: "Khana Khajana",
    description: "A minor college project II of NCIT related to recipe finder made using MERN.",
    image: "/images/khanakhajana.png",
    link: "https://khanakhajanancit.netlify.app/",
    github: "https://github.com/leoabhay/Khana-Khajana-frontend",
    tags: ["MERN", "Redux", "Tailwind"],
  },

  {
    title: "Trade Sim",
    description: "A simple stock market simulator web app built using MERN.",
    image: "/images/tradesim.png",
    link: "https://tradesim-abhay.netlify.app/",
    github: "https://github.com/leoabhay/TradeSim",
    tags: ["MERN", "Socket.io", "Recharts"],
  },

  {
    title: "Flappy Bird",
    description: "A simple game using JavaScript.",
    image: "/images/flappybird.png",
    link: "https://leoabhay.github.io/flappy-bird/",
    github: "https://github.com/leoabhay/flappy-bird",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Movie Search",
    description: "A simple website built using React.",
    image: "/images/moviesearch.png",
    link: "https://abhaymoviesearch.vercel.app/",
    github: "https://github.com/leoabhay/Movie-Search",
    tags: ["React"],
  },

  {
    title: "Shopping Cart",
    description: "A simple web app built using React.",
    image: "/images/shoppingcart.png",
    link: "https://abhayshoppingcart.vercel.app/",
    github: "https://github.com/leoabhay/Shopping-Cart",
    tags: ["React", "Redux"],
  },

  {
    title: "Portfolio",
    description: "My own portfolio website.",
    image: "/images/portfolio1.png",
    link: "https://github.com/leoabhay/portfolio-new",
    github: "https://github.com/leoabhay/portfolio-new",
    tags: ["Nextjs", "Tailwind"],
  },

  {
    title: "Bike Hub",
    description: "A bike management website built using Nodejs.",
    image: "/images/bikehub.png",
    link: "https://bikehub-szae.onrender.com",
    github: "https://github.com/leoabhay/BikeHub",
    tags: ["Nodejs", "EJS", "MongoDB"],
  },

  {
    title: "Campus Ease",
    description: "A major college project of NCIT related to campus automation made using MEAN and Python.",
    image: "/images/campusease.png",
    link: "https://campuseasencit.netlify.app/",
    github: "https://github.com/leoabhay/CampusEase-frontend",
    tags: ["MEAN", "Python"],
  },

  {
    title: "Attendify",
    description: "A face recognition based attendance management system made using Python and React.",
    image: "/images/face-attendance.png",
    link: "https://github.com/leoabhay/Attendify",
    github: "https://github.com/leoabhay/Attendify",
    tags: ["Python", "OpenCV", "React"],
  },

  {
    title: "One Piece",
    description: "A one piece fan website made using Typescript.",
    image: "/images/onepiece.png",
    link: "https://onee-piecee.netlify.app/",
    github: "https://github.com/leoabhay/One-Piece",
    tags: ["TypeScript", "Tailwind"],
  },

  {
    title: "Chat Bot",
    description: "A simple AI chatbot for customer support made using Python and TypeScript.",
    image: "/images/chatbot.png",
    link: "https://abhaychatbot.vercel.app/",
    github: "https://github.com/leoabhay/Chatbot",
    tags: ["Python", "TypeScript", "Flask"],
  },

  {
    title: "Shop Hub",
    description: "A shop management website made using MERN.",
    image: "/images/shophub.png",
    link: "https://shophubby.netlify.app/",
    github: "https://github.com/leoabhay/Shop-Hub",
    tags: ["MERN", "Khalti", "JWT"],
  },

  {
    title: "Easy Lib",
    description: "A project used for library management using MERN.",
    image: "/images/easylib.png",
    link: "https://easylib.netlify.app/",
    github: "https://github.com/leoabhay/EasyLib",
    tags: ["MERN", "JWT", "Auth0"],
  },

  {
    title: "Anonymous Confessions",
    description: "A confession website made using MERN.",
    image: "/images/confession.png",
    link: "https://anony-confession.netlify.app/",
    github: "https://github.com/leoabhay/Anonymous-Confession",
    tags: ["MERN", "Cloudinary"],
  },

  // {
  //   title: "SchoolHub",
  //   description: "A project used for school management using MERN.",
  //   image: "/images/schoolhub.png",
  //   link: "https://schoolhub.netlify.app/",
  //   github: "https://github.com/leoabhay/School-Hub",
  // },
  // {
  //   title: "ContentHub",
  //   description: "A project used for content management using MERN.",
  //   image: "/images/contenthub.png",
  //   link: "https://contenthub.netlify.app/",
  //   github: "https://github.com/leoabhay/Content-Hub",
  // },
  {
    title: "Leo Messi",
    description: "A lionel messi fan website made using React.",
    image: "/images/leo-messi.png",
    link: "https://leoabhay.netlify.app/",
    github: "https://github.com/leoabhay/Lionel-Messi",
    tags: ["React", "Tailwind"],
  },

  {
    title: "FC Vorpal Reapers",
    description: "A imaginary football team website of my own made using MERN.",
    image: "/images/vorpal.png",
    link: "https://vorpalreapers.netlify.app/",
    github: "https://github.com/leoabhay/FC-Vorpal-Reapers",
    tags: ["MERN", "Tailwind"],
  },

  {
    title: "Record Kotha",
    description: "A project used for keeping the personal records made using MERN.",
    image: "/images/record.png",
    link: "https://record-kotha.vercel.app/",
    github: "https://github.com/leoabhay/Record-Kotha",
    tags: ["MERN", "JWT", "Nodemailer"],
  },

  {
    title: "Fit Pro",
    description: "A project used for fitness made using Typescript.",
    image: "/images/FitPro.png",
    link: "https://fitpro-abhay.vercel.app/",
    github: "https://github.com/leoabhay/FitPro",
    tags: ["TypeScript", "IndexedDB", "Tailwind"],
  },

  {
    title: "Spec Sync",
    description: "A project used for virtual try on of eye wears using AI and ML.",
    image: "/images/specsync.png",
    link: "https://github.com/leoabhay/Spec-Sync",
    github: "https://github.com/leoabhay/Spec-Sync",
    tags: ["AI", "ML", "Python", "JavaScript"],
  },

  {
    title: "Suyog Dental Clinic",
    description: "A project used for dental clinic using React.",
    image: "/images/dental.png",
    link: "https://suyogdentalclinic.netlify.app/",
    github: "https://github.com/leoabhay/Suyog-Dental-Clinic",
    tags: ["React", "Tailwind"],
  },

  {
    title: "Chat App",
    description: "A project used for chatting using Nodejs.",
    image: "/images/chat-app.png",
    link: "https://chat-app-j590.onrender.com",
    github: "https://github.com/leoabhay/Chat-App",
    tags: ["Nodejs", "Socket.io", "EJS"],
  },

  {
    title: "Task Manager",
    description: "A task manager web app made using MERN.",
    image: "/images/task-manager.png",
    link: "https://abhaytaskmanager.netlify.app/",
    github: "https://github.com/leoabhay/Task-Manager",
    tags: ["MERN", "MongoDB"],
  },

  {
    title: "Sync Board",
    description: "A project used for real-time collaboration using MERN.",
    image: "/images/syncboard.png",
    link: "https://syncboard-abhay.netlify.app/",
    github: "https://github.com/leoabhay/Sync-Board",
    tags: ["MERN", "Socket.io", "Canvas"],
  },

  {
    title: "Goal AI",
    description: "A project used for smarter football analysis using Yolo.",
    image: "/images/goalai.png",
    link: "https://github.com/leoabhay/Goal-AI",
    github: "https://github.com/leoabhay/Goal-AI",
    tags: ["Yolo", "Python"],
  },

  {
    title: "Futsal Flow",
    description: "A project used for futsal management using MERN.",
    image: "/images/futsalflow.png",
    link: "https://futsalflow.netlify.app/",
    github: "https://github.com/leoabhay/Futsal-Flow",
    tags: ["MERN", "MongoDB"],
  },

  {
    title: "Insight AI",
    description: "A project used for dashboard analytics using Fast API and Pandas.",
    image: "/images/insight.png",
    link: "https://github.com/leoabhay/Insight-AI",
    github: "https://github.com/leoabhay/Insight-AI",
    tags: ["Typescript", "FastAPI", "Pandas", "Numpy"],
  },

  {
    title: "Epoch",
    description: "A time temporal puzzle game made using React.",
    image: "/images/epoch.png",
    link: "https://epochbyabhay.vercel.app/",
    github: "https://github.com/leoabhay/epoch",
    tags: ["React", "Tailwind"],
  },

]

export function ProjectsSection() {
  const { playSound } = useSound()

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1a0b2e]/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            My <span className="gradient-text">Projects</span>
            <span className="block h-2 w-40 bg-linear-to-r from-primary-color to-secondary-color mx-auto mt-4 rounded-full" />
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
                <div className="absolute inset-0 bg-linear-to-br from-primary-color/10 to-secondary-color/10 mix-blend-overlay" />
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] border border-white/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      playSound("click", 0.2)
                    }}
                    onMouseEnter={() => playSound("hover", 0.1)}
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <div className="p-6 flex flex-col grow">
                <h1 className="text-2xl font-bold mb-3 text-white">{project.title}</h1>
                <p className="text-base text-white/70 mb-4 grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary-color/90 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}

                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-linear-to-r from-primary-color to-accent-color text-white text-base font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,92,246,0.5)] hover:-translate-y-1 text-center"
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
