"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react"
import { handleSmoothScroll } from "@/utils/scroll"

const QUICK_LINKS = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Rooms", href: "/#rooms" },
    { label: "Amenities", href: "/#amenities" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
]

const ROOM_TYPES = [
    { label: "Two Sharing", href: "/#rooms" },
    { label: "Three Sharing", href: "/#rooms" },
    { label: "Four Sharing", href: "/#rooms" },
]

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-zinc-900 border-t border-white/10">

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-rose" />

            {/* Subtle background glow */}
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(225,29,72,0.04) 0%, transparent 70%)" }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-10 relative z-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 mb-24">

                    {/* ── Brand Column ── */}
                    <div className="lg:col-span-1 flex flex-col items-start pr-6">
                        <Link href="/#home" className="inline-block mb-8">
                            <Image src="/assets/logo.png" alt="Geetham Womens Hostel" width={160} height={45} className="brightness-0 invert opacity-95 hover:opacity-100 transition-opacity" />
                        </Link>
                        <p className="font-sans text-white/60 text-[1.1rem] leading-[1.8] mb-10">
                            Premium women&apos;s accommodation in Ambattur, Chennai. Exclusively for IAS aspirants and working women since 2016.
                        </p>
                        <div className="flex items-center gap-4">
                            {[{ Icon: Instagram, href: "#" }, { Icon: Facebook, href: "#" }, { Icon: Youtube, href: "#" }].map(({ Icon }, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-[1rem] flex items-center justify-center transition-all duration-300 border border-white/10 bg-white/5 hover:bg-[#e11d48] hover:border-[#e11d48] group shadow-lg">
                                    <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Quick Links ── */}
                    <div className="lg:pl-8">
                        <h4 className="font-sans font-bold text-white text-[0.95rem] uppercase tracking-[0.2em] mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="font-sans text-white/50 hover:text-[#fb7185] transition-colors text-[0.95rem] flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#fb7185] transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Rooms & Hours ── */}
                    <div>
                        <h4 className="font-sans font-bold text-white text-[0.95rem] uppercase tracking-[0.2em] mb-8">Our Rooms</h4>
                        <ul className="space-y-4 mb-12">
                            {ROOM_TYPES.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="font-sans text-white/50 hover:text-[#fb7185] transition-colors text-[0.95rem] flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#fb7185] transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-sans font-bold text-white text-[0.95rem] uppercase tracking-[0.2em] mb-5">Office Hours</h4>
                        <div className="font-sans text-white/60 text-[1.05rem] leading-[1.8] font-medium">
                            <p className="flex justify-between max-w-[240px] mb-2"><span className="text-white/80">Mon – Sat</span> <span>9 AM – 7 PM</span></p>
                            <p className="flex justify-between max-w-[240px]"><span className="text-white/80">Sunday</span> <span>10 AM – 4 PM</span></p>
                        </div>
                    </div>

                    {/* ── Contact Details ── */}
                    <div>
                        <h4 className="font-sans font-bold text-white text-[0.95rem] uppercase tracking-[0.2em] mb-8">Contact Us</h4>
                        <div className="flex flex-col gap-7">
                            {/* Phone Numbers - Split for separate interaction */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-[1rem] border border-white/10 bg-white/5 flex items-center justify-center shrink-0 shadow-md">
                                    <Phone className="w-5 h-5 text-white/70" />
                                </div>
                                <div className="flex flex-col pt-0.5 space-y-2">
                                    <a href="tel:+919344382988" className="font-sans text-white/95 font-bold text-[1.1rem] hover:text-[#fb7185] transition-colors leading-tight inline-block">
                                        +91 93443 82988
                                    </a>
                                    <a href="tel:+919842765530" className="font-sans text-white/60 font-medium text-[1rem] hover:text-[#fb7185] transition-colors inline-block">
                                        +91 98427 65530
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <a href="mailto:geethamhostel.in@gmail.com" className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-[1rem] border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#e11d48]/15 group-hover:border-[#e11d48]/30 transition-all shadow-md">
                                    <Mail className="w-5 h-5 text-white/70 group-hover:text-[#fb7185] transition-colors" />
                                </div>
                                <span className="font-sans text-white/80 font-medium text-[1.05rem] group-hover:text-[#fb7185] transition-colors mt-3">geethamhostel.in@gmail.com</span>
                            </a>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-[1rem] border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[#fb7185]" />
                                </div>
                                <p className="font-sans text-white/70 font-medium text-[1rem] leading-[1.8] pt-1">
                                    24, 25, Coromandel Town,<br />SIDCO Industrial Estate,<br />
                                    Ambattur, Chennai - 600098
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 mt-8">
                    <p className="font-sans text-white/50 font-medium text-[0.95rem] text-center sm:text-left tracking-wide">
                        © {new Date().getFullYear()} Geetham Women&apos;s Hostel. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
                        <span className="font-sans text-white/40 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.2em] font-bold">Safe</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185]" />
                        <span className="font-sans text-white/40 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.2em] font-bold">Comfortable</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185]" />
                        <span className="font-sans text-white/40 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.2em] font-bold">Affordable</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
