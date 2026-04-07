"use client"

import Image from "next/image"
import Link from "next/link"
import { BedDouble, Users, Users2, CheckCircle2, ArrowRight, Wifi, Shield, Utensils, Wind } from "lucide-react"
import { handleSmoothScroll } from "@/utils/scroll"

const ROOMS = [
    {
        id: "two-sharing", type: "Two Sharing", icon: BedDouble,
        image: "/assets/pic3.jpg", tag: "Most Popular", tagColor: "#e11d48",
        accent: "#e11d48", accentLight: "#fff1f2", accentBorder: "#fecdd3",
        description: "A bright, spacious room designed for two, offering complete privacy and comfort with dedicated storage and natural lighting. Perfect for women who value personal space without compromise.",
        features: ["Attached Wardrobe", "Personal Study Desk", "High-Speed Wi-Fi", "AC / Non-AC"],
        perks: [
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Shield, label: "24/7 Security" },
            { icon: Utensils, label: "Meals Included" },
        ],
    },
    {
        id: "three-sharing", type: "Three Sharing", icon: Users,
        image: "/assets/pic20.jpg", tag: "Best Value", tagColor: "#0284c7",
        description: "A well-ventilated three-occupant room with ample space for everyone — a great balance between comfort and affordability.",
        features: ["Shared Wardrobe Space", "Common Study Area", "High-Speed Wi-Fi", "Fan + Ventilation"],
        perks: [
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Shield, label: "24/7 Security" },
            { icon: Wind, label: "Ventilated" },
        ],
    },
    {
        id: "four-sharing", type: "Four Sharing", icon: Users2,
        image: "/assets/pic6.jpg", tag: "Budget Friendly", tagColor: "#16a34a",
        accent: "#16a34a", accentLight: "#f0fdf4", accentBorder: "#bbf7d0",
        description: "An economical four-occupant room perfect for students focused on IAS preparation, with all essential amenities included.",
        features: ["Individual Bed Space", "Shared Storage", "High-Speed Wi-Fi", "Fan Cooling"],
        perks: [
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Shield, label: "24/7 Security" },
            { icon: Utensils, label: "Meals Available" },
        ],
    },
]

export default function Rooms() {
    const featured = ROOMS[0]
    const rest = ROOMS.slice(1)

    return (
        <section id="rooms" className="relative overflow-hidden bg-white">

            <div className="absolute top-0 inset-x-0 h-[480px] pointer-events-none"
                style={{ background: "linear-gradient(180deg, #fef2f5 0%, transparent 100%)" }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-14 py-28 lg:py-36 relative z-10">

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px] bg-[#e11d48]" />
                            <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.32em] text-[#e11d48]">Our Rooms</span>
                        </div>
                        <h2 className="font-display font-bold text-zinc-900"
                            style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
                            Choose Your{" "}
                            <span style={{
                                background: "linear-gradient(90deg, #e11d48, #f43f5e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>Perfect Room.</span>
                        </h2>
                    </div>
                    <p className="font-sans text-zinc-500 text-[1.05rem] leading-[1.8] max-w-xs lg:text-right lg:pb-1 shrink-0">
                        AC &amp; Non-AC rooms — bright, ventilated, and meticulously maintained.
                    </p>
                </div>

                {/* ── FEATURED CARD (Two Sharing — Most Popular) ── */}
                <div className="group relative rounded-[2.2rem] overflow-hidden border border-rose-100 shadow-[0_8px_50px_rgba(225,29,72,0.08)] mb-6 hover:shadow-[0_20px_70px_rgba(225,29,72,0.14)] transition-shadow duration-500">
                    <div className="flex flex-col lg:flex-row min-h-[420px]">

                        {/* Image side */}
                        <div className="relative lg:w-[52%] min-h-[300px] lg:min-h-0 overflow-hidden">
                            <Image src={featured.image} alt={featured.type} fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 lg:to-white/30 pointer-events-none" />

                            {/* Tag */}
                            <div className="absolute top-6 left-6">
                                <span className="font-sans font-bold text-[0.7rem] uppercase tracking-[0.2em] px-4 py-2 rounded-full text-white shadow-lg"
                                    style={{ background: "linear-gradient(135deg, #e11d48, #f43f5e)" }}>
                                    ⭐ {featured.tag}
                                </span>
                            </div>
                        </div>

                        {/* Content side */}
                        <div className="lg:w-[48%] flex flex-col justify-center px-8 lg:px-12 py-10 bg-white">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                                    style={{ background: featured.accentLight, border: `1px solid ${featured.accentBorder}` }}>
                                    <featured.icon className="w-5 h-5" style={{ color: featured.accent }} />
                                </div>
                                <h3 className="font-display font-bold text-zinc-900 text-[2rem] leading-none">{featured.type}</h3>
                            </div>

                            <p className="font-sans text-zinc-500 text-[1rem] leading-[1.8] mb-7 max-w-md">{featured.description}</p>

                            {/* Feature checklist — 2 col */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                                {featured.features.map(f => (
                                    <div key={f} className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: featured.accent }} />
                                        <span className="font-sans text-zinc-700 text-[0.9rem] font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Perks row */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {featured.perks.map(p => (
                                    <div key={p.label} className="flex items-center gap-2 px-4 py-2 rounded-xl text-[0.8rem] font-semibold font-sans"
                                        style={{ background: featured.accentLight, color: featured.accent, border: `1px solid ${featured.accentBorder}` }}>
                                        <p.icon className="w-3.5 h-3.5" />
                                        {p.label}
                                    </div>
                                ))}
                            </div>

                            <Link href="/#contact"
                                onClick={(e) => handleSmoothScroll(e, "/#contact")}
                                className="inline-flex items-center gap-2 font-sans font-bold text-[0.97rem] px-8 py-4 rounded-xl text-white w-fit transition-all hover:shadow-[0_8px_24px_rgba(225,29,72,0.3)] hover:-translate-y-0.5"
                                style={{ background: "linear-gradient(135deg, #e11d48, #f43f5e)" }}>
                                Enquire About This Room <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── OTHER TWO CARDS ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rest.map((room) => (
                        <div key={room.id}
                            className="group relative flex flex-col rounded-[2rem] overflow-hidden border border-zinc-100 bg-white shadow-sm hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400">

                            {/* Image */}
                            <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
                                <Image src={room.image} alt={room.type} fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                                <div className="absolute top-5 left-5">
                                    <span className="font-sans font-bold text-[0.68rem] uppercase tracking-[0.18em] px-4 py-1.5 rounded-full text-white shadow-md"
                                        style={{ background: room.tagColor }}>{room.tag}</span>
                                </div>

                                <div className="absolute bottom-4 right-5 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-md"
                                    style={{ background: room.accentLight, border: `1px solid ${room.accentBorder}` }}>
                                    <room.icon className="w-5 h-5" style={{ color: room.accent }} />
                                </div>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col flex-1 p-7">
                                <h3 className="font-display font-bold text-zinc-900 text-[1.6rem] mb-3">{room.type}</h3>
                                <p className="font-sans text-zinc-500 text-[0.97rem] leading-[1.75] mb-6">{room.description}</p>

                                {/* Features 2-col */}
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                                    {room.features.map(f => (
                                        <div key={f} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: room.accent }} />
                                            <span className="font-sans text-zinc-600 text-[0.85rem] font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Perks */}
                                <div className="flex flex-wrap gap-2 mb-7">
                                    {room.perks.map(p => (
                                        <div key={p.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.75rem] font-semibold font-sans"
                                            style={{ background: room.accentLight, color: room.accent, border: `1px solid ${room.accentBorder}` }}>
                                            <p.icon className="w-3 h-3" />
                                            {p.label}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-5 border-t border-zinc-100">
                                    <Link href="/#contact"
                                        onClick={(e) => handleSmoothScroll(e, "/#contact")}
                                        className="flex items-center justify-center gap-2 w-full font-sans font-bold text-[0.95rem] py-3.5 rounded-xl border-2 transition-all"
                                        style={{
                                            borderColor: room.accentBorder,
                                            color: room.accent,
                                            backgroundColor: room.accentLight,
                                        }}>
                                        Book This Room <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Bottom CTA Strip ── */}
                <div className="mt-10 relative rounded-[1.8rem] overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-12 py-8 border"
                    style={{ background: "linear-gradient(135deg, #fff1f2 0%, #fff5f7 100%)", borderColor: "#fecdd3" }}>

                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                            style={{ background: "linear-gradient(135deg, #e11d48, #f43f5e)" }}>
                            <BedDouble className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="font-display font-bold text-zinc-900 text-[1.25rem] leading-tight">400+ Beds · AC &amp; Non-AC Available</p>
                            <p className="font-sans text-zinc-500 text-[0.95rem] mt-0.5">All rooms include daily housekeeping &amp; 24/7 security.</p>
                        </div>
                    </div>

                    <Link href="/#contact"
                        onClick={(e) => handleSmoothScroll(e, "/#contact")}
                        className="shrink-0 flex items-center gap-2 font-sans font-bold text-[1rem] px-8 py-4 rounded-xl text-white transition-all hover:shadow-[0_8px_30px_rgba(225,29,72,0.3)] hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(135deg, #e11d48, #f43f5e)" }}>
                        Check Availability <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    )
}
