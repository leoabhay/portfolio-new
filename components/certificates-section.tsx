"use client"

import { useState } from "react"
import Image from "next/image"
import { useSound } from "@/hooks/use-sound"
import { FileText, Image as ImageIcon, ExternalLink, Download } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const certificates = [
      {
    title: "Basics of Digital Marketing",
    issuer: "Uniathena",
    date: "2024",
    image: "/certificates/digital-marketing.png", // image or pdf
    fileUrl: "/certificates/digital-marketing.png", // image or pdf
    fileType: "image", // "image" or "pdf"
  },
  {
    title: "MERN Stack Internship",
    issuer: "IT Home Pvt. Ltd.",
    date: "2024-2025",
    image: "/certificates/intern.jpg",
    fileUrl: "/certificates/intern.jpg",
    fileType: "image",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2025",
    image: "/certificates/AWS-1.png",
    fileUrl: "/certificates/AWS.pdf",
    fileType: "pdf",
  },
  {
    title: "Registered Engineer Certificate",
    issuer: "Nepal Engineering Council",
    date: "2026",
    image: "/certificates/NEC-Certificate.jpg",
    fileUrl: "/certificates/NEC-Certificate.jpg",
    fileType: "image",
  },
]

export function CertificatesSection() {
  const { playSound } = useSound()
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewCertificate = (cert: (typeof certificates)[0]) => {
    playSound("click", 0.2)
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0b2e]/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            My <span className="gradient-text">Certificates</span>
            <span className="block h-2 w-48 bg-gradient-to-r from-primary-color to-secondary-color mx-auto mt-4 rounded-full" />
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            These are some of the certifications I have earned. I am constantly learning and expanding my skill set.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-xl overflow-hidden flex flex-col"
              onMouseEnter={() => playSound("hover", 0.12)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color/10 to-secondary-color/10 mix-blend-overlay" />
                
                {/* File Type Indicator Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 glass-effect rounded-full flex items-center gap-2 border border-white/10">
                  {cert.fileType === "pdf" ? (
                    <>
                      <FileText className="w-4 h-4 text-red-400" />
                      <span className="text-xs font-semibold text-white/90">PDF</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-4 h-4 text-secondary-color" />
                      <span className="text-xs font-semibold text-white/90">IMG</span>
                    </>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                <p className="text-primary-color font-semibold mb-1">{cert.issuer}</p>
                <p className="text-white/60 text-sm mb-4">{cert.date}</p>
                <div className="mt-auto">
                  <button
                    className="w-full px-8 py-3 bg-gradient-to-r from-primary-color to-accent-color text-white text-base font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,92,246,0.5)] hover:-translate-y-1 text-center flex items-center justify-center gap-2"
                    onClick={() => handleViewCertificate(cert)}
                    onMouseEnter={(e) => {
                      e.stopPropagation()
                      playSound("hover", 0.15)
                    }}
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] glass-effect border-primary-color/30 p-1 md:p-2 overflow-hidden flex flex-col">
          <DialogHeader className="p-4 md:p-6 pb-2 shrink-0 flex flex-row items-center justify-between gap-4">
            <div className="flex-grow text-left">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-white mb-1">
                {selectedCert?.title}
              </DialogTitle>
              <p className="text-primary-color font-semibold">{selectedCert?.issuer} • {selectedCert?.date}</p>
            </div>
            {selectedCert && (
              <a
                href={selectedCert.fileUrl}
                download={selectedCert.title}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary-color to-accent-color text-white text-sm font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,92,246,0.4)] hover:-translate-y-1 shrink-0"
                onClick={() => playSound("click", 0.2)}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}
          </DialogHeader>
          
          <div className="flex-grow w-full px-4 pb-4 md:px-6 md:pb-6 overflow-hidden">
            <div className="w-full h-full rounded-lg overflow-hidden glass-effect border-white/10 relative">
              {selectedCert?.fileType === "pdf" ? (
                <iframe
                  src={`${selectedCert.fileUrl}#toolbar=0`}
                  className="w-full h-full border-none"
                  title={selectedCert.title}
                />
              ) : (
                <div className="relative w-full h-full">
                  {selectedCert && (
                    <Image
                      src={selectedCert.fileUrl}
                      alt={selectedCert.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
