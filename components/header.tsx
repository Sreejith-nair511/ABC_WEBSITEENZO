"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Github, MessageSquare, Linkedin } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-5">
        <div className="flex items-center justify-between rounded-xl border border-[#00FF9C33] bg-black/40 backdrop-blur-md px-4 py-2">
          <Link href="#home" className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full ring-1 ring-[#00FF9C66]">
              <Image src="/images/logo.jpg" alt="ABC logo" fill className="object-cover" />
            </div>
            <span className="text-sm sm:text-base tracking-tight">ABC Blockchain Club</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#about" className="text-white/80 hover:text-[#00FF9C] transition">About</Link>
            <Link href="#focus" className="text-white/80 hover:text-[#00FF9C] transition">Focus</Link>
            <Link href="#events" className="text-white/80 hover:text-[#00FF9C] transition">Events</Link>
            <Link href="#community" className="text-white/80 hover:text-[#00FF9C] transition">Community</Link>
            <Link href="#team" className="text-white/80 hover:text-[#00FF9C] transition">Team</Link>
            <Link href="#join" className="text-white/80 hover:text-[#00FF9C] transition">Join</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#join">
              <Button
                size="sm"
                className="hidden sm:inline-flex border border-[#00FF9C66] bg-white/10 text-white hover:bg-white/15"
              >
                Join the Club
              </Button>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <Link href="https://discord.com/" target="_blank" aria-label="Discord" className="group">
                <div className="rounded-md border border-[#00FF9C33] bg-white/5 hover:bg-white/10 p-2 transition">
                  <MessageSquare className="size-4 text-[#00FF9C]" />
                </div>
              </Link>
              <Link href="https://github.com/" target="_blank" aria-label="GitHub" className="group">
                <div className="rounded-md border border-[#00FF9C33] bg-white/5 hover:bg-white/10 p-2 transition">
                  <Github className="size-4 text-[#00FF9C]" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn" className="group">
                <div className="rounded-md border border-[#00FF9C33] bg-white/5 hover:bg-white/10 p-2 transition">
                  <Linkedin className="size-4 text-[#00FF9C]" />
                </div>
              </Link>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu" className="hover:bg-white/10">
                    <Menu className="size-5 text-[#00FF9C]" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#0A0A0A]/95 backdrop-blur border-[#00FF9C33]">
                  <SheetHeader>
                    <SheetTitle className="text-[#00FF9C]">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 grid gap-4 text-sm">
                    <Link href="#about" className="opacity-90 hover:text-[#00FF9C]">About</Link>
                    <Link href="#focus" className="opacity-90 hover:text-[#00FF9C]">Focus</Link>
                    <Link href="#events" className="opacity-90 hover:text-[#00FF9C]">Events</Link>
                    <Link href="#community" className="opacity-90 hover:text-[#00FF9C]">Community</Link>
                    <Link href="#team" className="opacity-90 hover:text-[#00FF9C]">Team</Link>
                    <Link href="#join" className="opacity-90 hover:text-[#00FF9C]">Join</Link>
                    <div className="flex gap-4 pt-3">
                      <Link href="https://discord.com/" target="_blank" className="underline underline-offset-4 text-[#00FF9C]">Discord</Link>
                      <Link href="https://github.com/" target="_blank" className="underline underline-offset-4 text-[#00FF9C]">GitHub</Link>
                      <Link href="https://www.linkedin.com/" target="_blank" className="underline underline-offset-4 text-[#00FF9C]">LinkedIn</Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
