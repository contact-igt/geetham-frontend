"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react"

const SLIDES = [
    { src: "/assets/herobanner1.png", alt: "Geetham Womens Hostel – Common Area", tag: "Premium Living Spaces" },
    { src: "/assets/herobanner2.png", alt: "Geetham Womens Hostel – Room View", tag: "Luxurious Rooms" },
    { src: "/assets/gallery2.png", alt: "Geetham Womens Hostel – Twin Sharing", tag: "Spacious Accommodation" },
]

const STATS = [
    { value: "400+", label: "Beds" },
    { value: "2016", label: "Est. Since" },
    { value: "1000+", label: "Residents" },
    { value: "10+", label: "Years" },
]

export default function Hero() {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)

    const goTo = useCallback((idx: number) => {
        if (animating) return
        setAnimating(true)
        setCurrent(idx)
        setTimeout(() => setAnimating(false), 800)
    }, [animating])

    const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])
    const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo])

    useEffect(() => {
        const t = setInterval(next, 5500)
        return () => clearInterval(t)
    }, [next])

    return (
        <section id="home" className="relative w-full h-screen min-h-[1000px] overflow-hidden bg-[#050505]">

            {/* Slides Background */}
            {SLIDES.map((slide, i) => (
                <div key={i} className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out"
                    style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
                    <Image src={slide.src} alt={slide.alt} fill priority={i === 0} className="object-cover object-center"
                        style={{ transform: i === current ? "scale(1.06)" : "scale(1)", transition: "transform 6s ease-out" }} />
                </div>
            ))}

            {/* Dark premium overlay — True Black gradient fading from bottom left to top right */}
            <div className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to top right, #050505 0%, rgba(5,5,5,0.92) 30%, rgba(5,5,5,0.4) 65%, transparent 100%)" }} />
            <div className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, transparent 20%)" }} />

            {/* Vertical slider controls (Keep these absolute on the right) */}
            <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-6">
                <button onClick={prev} className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white/80 hover:text-white transition-all shadow-xl group">
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <div className="flex flex-col gap-3 py-2">
                    {SLIDES.map((_, i) => (
                        <button key={i} onClick={() => goTo(i)} className="rounded-full transition-all duration-400"
                            style={{
                                width: 4,
                                height: i === current ? 32 : 8,
                                background: i === current ? "#f43f5e" : "rgba(255,255,255,0.2)",
                                boxShadow: i === current ? "0 0 15px rgba(244,63,94,0.6)" : "none"
                            }} />
                    ))}
                </div>
                <button onClick={next} className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white/80 hover:text-white transition-all shadow-xl group">
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>

            {/* ── Main Content Container ── */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end pb-0">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-14 flex flex-col pt-32 pb-12 lg:pb-16 min-h-full justify-end">

                    {/* Left Aligned Content Stack */}
                    <div className="flex flex-col w-full lg:w-[70%] xl:w-[65%] gap-8 lg:gap-10">

                        {/* Top Tags/Eyebrow Row */}
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full glass-card text-white bg-[#e11d48]/20 border border-[#fb7185]/30 shadow-[0_0_20px_rgba(225,29,72,0.2)]">
                                {SLIDES[current].tag}
                            </span>
                            <div className="hidden sm:flex items-center gap-2 font-sans text-[0.8rem] uppercase tracking-widest font-bold text-white/80">
                                <Star className="w-3.5 h-3.5 fill-[#fb7185] text-[#fb7185]" />
                                Premium Stay
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="font-display font-bold leading-[0.95] tracking-tight text-shadow-xl text-white">
                            <span className="block leading-[1.05]" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>Your Perfect</span>
                            <span className="block text-gradient-rose leading-[1.05]" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>Home Away</span>
                            <span className="block leading-[1.05]" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>From Home.</span>
                        </h1>

                        {/* Paragraph */}
                        <p className="font-sans text-white/80 leading-[1.8] text-[1.1rem] md:text-[1.2rem] max-w-xl">
                            Since 2016, Geetham Women's Hostel delivers luxurious rooms, homely food & 24/7 security — exclusively for women IAS aspirants and working professionals.
                        </p>

                        {/* Actions & Location */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
                                <Link href="#contact"
                                    className="group relative inline-flex items-center justify-center font-sans font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(225,29,72,0.4)] border border-white/10 w-full sm:w-auto"
                                    style={{ padding: "18px 36px", fontSize: "1.05rem", background: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)", color: "#fff" }}>
                                    <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-[150%]">Book Your Stay</span>
                                    <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0 text-white z-10">
                                        Enquire Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </span>
                                    <span className="absolute inset-0 bg-[#be123c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                                <Link href="#rooms"
                                    className="inline-flex items-center justify-center font-sans font-bold text-white/90 rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all glass-card w-full sm:w-auto"
                                    style={{ padding: "18px 32px", fontSize: "1.05rem" }}>
                                    View Rooms
                                </Link>
                            </div>

                            {/* Location Chip moved inline */}
                            <div className="flex items-center justify-center sm:justify-start gap-3 font-sans font-medium text-[1rem] text-white/80 sm:ml-4 sm:border-l sm:border-white/10 sm:pl-8 mt-2 sm:mt-0">
                                <MapPin className="w-5 h-5 text-[#fb7185] shrink-0" />
                                Ambattur, Chennai
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Stats Strip (Full Width Bottom) ── */}
                <div className="w-full bg-[#050505]/40 backdrop-blur-md border-t border-white/10 relative z-30">
                    <div className="max-w-7xl mx-auto px-6 lg:px-14">
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            {STATS.map((s, i) => (
                                <div key={i} className="py-6 sm:py-8 flex flex-col items-center justify-center gap-1.5"
                                    style={{
                                        borderLeft: i === 0 || i === 2 ? "none" : "1px solid rgba(255,255,255,0.06)"
                                    }}>
                                    <span className="font-display font-bold leading-none text-gradient-rose" style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}>
                                        {s.value}
                                    </span>
                                    <span className="font-sans text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.25em] text-white/50 text-center">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
