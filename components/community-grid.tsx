"use client"

import { motion } from "motion/react"
import Image from "next/image"

const logos = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  src: `/placeholder.svg?height=120&width=240&query=dao%20partner%20logo%20cyberpunk%20green%20${i + 1}`,
  alt: `Community logo ${i + 1}`,
}))

export default function CommunityGrid() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      role="list"
      aria-label="Community logos"
    >
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          role="listitem"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="group relative rounded-xl border border-[#00FF9C33] bg-white/5 p-4 backdrop-blur
          hover:border-[#00FF9C] hover:shadow-[0_0_30px_-8px_rgba(0,255,156,0.5)] transition"
        >
          <div className="relative aspect-[2.8/1]">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition 
            bg-[radial-gradient(70%_70%_at_50%_50%,rgba(0,255,156,0.18),transparent)]" />
        </motion.div>
      ))}
    </div>
  )
}
