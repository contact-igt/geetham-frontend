"use client"

import Image from "next/image"
import Link from "next/link"
import {
    Shield, Wifi, Utensils, Wind, Droplets,
    BookOpen, Shirt, Tv, ParkingCircle, Clock,
    Lock, HeartPulse, ArrowRight
} from "lucide-react"
import { handleSmoothScroll } from "@/utils/scroll"

const AMENITIES = [
    { icon: Shield, label: "24/7 Security", desc: "CCTV & guards at all entry points round the clock.", color: "#e11d48", bg: "#fff1f2", border: "#fecdd3" },
    { icon: Utensils, label: "Homely Food", desc: "Fresh South Indian meals, three times daily.", color: "#f97316", bg: "#fff7ed", border: "#fed7aa" },
    { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Unlimited broadband across all floors.", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
    { icon: Wind, label: "AC & Non-AC Rooms", desc: "Climate-controlled or ventilated rooms.", color: "#0284c7", bg: "#eff6ff", border: "#bfdbfe" },
    { icon: Droplets, label: "24/7 Hot Water", desc: "Instant hot water geysers in every bathroom.", color: "#0891b2", bg: "#ecfeff", border: "#a5f3fc" },
    { icon: BookOpen, label: "Study Zones", desc: "Quiet reading rooms for IAS preparation.", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
    { icon: Shirt, label: "Laundry Access", desc: "In-house washing machines — no need to go out.", color: "#db2777", bg: "#fdf2f8", border: "#fbcfe8" },
    { icon: HeartPulse, label: "Daily Housekeeping", desc: "Rooms sanitised and cleaned every day.", color: "#e11d48", bg: "#fff1f2", border: "#fecdd3" },
    { icon: Tv, label: "TV Lounge", desc: "Comfortable shared lounge with cable TV.", color: "#9333ea", bg: "#faf5ff", border: "#e9d5ff" },
    { icon: Lock, label: "Secure Storage", desc: "Individual lockable wardrobes for every resident.", color: "#b45309", bg: "#fffbeb", border: "#fde68a" },
    { icon: ParkingCircle, label: "Two-Wheeler Parking", desc: "Dedicated secure two-wheeler parking area.", color: "#0f766e", bg: "#f0fdfa", border: "#99f6e4" },
    { icon: Clock, label: "Flexible Timings", desc: "Reasonable curfew with secure entry & exit.", color: "#4f46e5", bg: "#eef2ff", border: "#c7d2fe" },
]

export default function Amenities() {
    return (
        <section id="amenities" className="relative overflow-hidden bg-white">

            {/* ── TOP HEADER BAND ── */}
            <div className="bg-[#fdf4f7] border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-14 py-14 lg:py-20">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-8 h-[2px] bg-[#e11d48]" />
                                <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.32em] text-[#e11d48]">World-Class Facilities</span>
                            </div>
                            <h2 className="font-display font-bold text-zinc-900"
                                style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
                                Everything You Need,<br />
                                <span style={{
                                    background: "linear-gradient(90deg, #e11d48, #f43f5e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}>All In One Place.</span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-start lg:items-end gap-4">
                            <p className="font-sans text-zinc-500 text-[1.05rem] leading-[1.8] max-w-xs lg:text-right">
                                Every convenience, thoughtfully planned — so you can focus on what matters most.
                            </p>
                            {/* 3 quick stat pills */}
                            <div className="flex gap-3 flex-wrap">
                                {[["12+", "Amenities"], ["400+", "Beds"], ["24/7", "Support"]].map(([n, t]) => (
                                    <div key={t} className="flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 bg-white shadow-sm">
                                        <span className="font-display font-bold text-[#e11d48] text-[1.1rem] leading-none">{n}</span>
                                        <span className="font-sans text-[0.7rem] font-bold uppercase tracking-widest text-zinc-400">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MAIN BODY: Full Width Centered Grid Layout ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16 lg:py-24">

                {/* ── Top Description ── */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="font-sans text-zinc-500 text-[1.1rem] leading-[1.8]">
                        Every detail of our hostel is designed to provide maximum comfort, security, and convenience to our residents. We ensure a premium living experience tailored for modern women and aspirants.
                    </p>
                </div>

                {/* ── Amenities Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {AMENITIES.map((a, i) => (
                        <div key={a.label}
                            className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default overflow-hidden flex flex-col"
                            style={{
                                background: a.bg,
                                borderColor: a.border,
                            }}>

                            {/* Subtle Background Tint on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" style={{ background: a.color }} />

                            {/* Large watermark number */}
                            <span className="absolute bottom-1 right-4 font-display font-bold text-[4rem] leading-none pointer-events-none select-none opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#e11d48]">
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            <div className="flex items-start gap-4 mb-4 relative z-10">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                                    style={{ background: a.bg, border: `1px solid ${a.border}` }}>
                                    <a.icon className="w-5 h-5" style={{ color: a.color }} />
                                </div>
                                <h4 className="font-sans font-extrabold text-zinc-800 text-[1rem] leading-snug pt-1">{a.label}</h4>
                            </div>

                            {/* Text */}
                            <p className="font-sans text-zinc-500 text-[0.85rem] leading-[1.7] relative z-10">{a.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <Link href="/#contact"
                        onClick={(e) => handleSmoothScroll(e, "/#contact")}
                        className="inline-flex items-center gap-2 font-sans font-bold text-[1.05rem] px-8 py-4 rounded-xl text-white transition-all hover:shadow-[0_8px_24px_rgba(225,29,72,0.3)] hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(135deg, #e11d48, #f43f5e)" }}>
                        Experience It Yourself <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

        </section>
    )
}
