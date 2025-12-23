export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0b2e]/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl group glass-effect">
              <img
                src="/professional-it-student-portrait.jpg"
                alt="Abhay Chaudhary"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-color/20 to-secondary-color/20 mix-blend-overlay" />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center lg:text-left text-white">
              About <span className="gradient-text">me</span>
              <span className="block h-2 w-40 bg-gradient-to-r from-primary-color to-secondary-color mx-auto lg:mx-0 mt-4 rounded-full" />
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-light-color">IT Engineering Student</h2>
            <p className="text-lg leading-relaxed text-white/70 mb-8">
              Currently, I'm studying Bachelor of Engineering in Information Technology at NCIT. I'm passionate about
              creating innovative solutions and developing applications that make a difference. With expertise in
              full-stack development, I love bringing ideas to life through clean code and intuitive user experiences.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-12 py-4 glass-effect border border-primary-color/50 text-white text-lg font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-primary-color hover:border-primary-color hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(139,92,246,0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
