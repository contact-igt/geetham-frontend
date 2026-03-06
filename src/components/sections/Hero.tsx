"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, ArrowRight, MapPin } from "lucide-react"
import { handleSmoothScroll } from "@/utils/scroll"

const SLIDES = [
    { image: "/assets/gen_hero1.png", alt: "Geetham Womens Hostel – Common Area", tag: "Premium Living Spaces" },
    { image: "/assets/gen_hero2.png", alt: "Geetham Womens Hostel – Room View", tag: "Luxurious Rooms" },
    { image: "/assets/gen_hero3.png", alt: "Geetham Womens Hostel – Twin Sharing", tag: "Spacious Accommodation" },
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
        <section id="home" className="relative w-full h-[750px] lg:h-screen lg:min-h-[800px] overflow-hidden">

            {/* ── Slides ── */}
            {SLIDES.map((slide, i) => (
                <div key={i} className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
                    style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
                    <Image
                        src={slide.image} alt={slide.alt} fill priority={i === 0}
                        className="object-cover object-center"
                        style={{ transform: i === current ? "scale(1.06)" : "scale(1)", transition: "transform 7s ease-out" }}
                    />
                </div>
            ))}

            {/* ── Deep rose-to-plum gradient overlay ── */}
            {/* Covers the whole section with a rich tinted colour wash */}
            <div className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(109,10,60,0.85) 0%, rgba(190,18,60,0.70) 45%, rgba(244,63,94,0.40) 100%)" }} />
            {/* Bottom-up dark fade so text is crisp */}
            <div className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(60,5,30,0.95) 0%, rgba(60,5,30,0.60) 35%, transparent 70%)" }} />
            {/* Top edge subtle darkening for navbar contrast */}
            <div className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, rgba(40,3,20,0.50) 0%, transparent 20%)" }} />

            {/* ── Vertical Slider Controls ── */}
            <div className="absolute right-7 lg:right-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-5">
                <button onClick={prev}
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white transition-all shadow-lg group">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <div className="flex flex-col gap-3 py-1">
                    {SLIDES.map((_, i) => (
                        <button key={i} onClick={() => goTo(i)}
                            className="rounded-full transition-all duration-500"
                            style={{
                                width: 3,
                                height: i === current ? 28 : 7,
                                background: i === current ? "#fff" : "rgba(255,255,255,0.30)",
                                boxShadow: i === current ? "0 0 10px rgba(255,255,255,0.6)" : "none"
                            }} />
                    ))}
                </div>
                <button onClick={next}
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white transition-all shadow-lg group">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>

            {/* ── Main Content ── */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-14 pb-0 min-h-full flex flex-col justify-end">

                    <div className="flex flex-col w-full lg:w-[68%] xl:w-[60%] gap-7 lg:gap-8 pb-12 lg:pb-16">

                        {/* Eyebrow */}
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-[#b02c54] text-white border border-white/30 shadow-md">
                                {SLIDES[current].tag}
                            </span>
                            <div className="hidden sm:flex items-center gap-2 font-sans text-[0.8rem] uppercase tracking-[0.2em] font-bold text-white/90">
                                <Star className="w-4 h-4 fill-[#ffffff] text-[#ffffff]" />
                                Premium Stay
                            </div>
                        </div>

                        {/* Heading — pure white */}
                        <h1 className="font-display font-bold leading-[1.02] tracking-tight text-white" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
                            <span className="block" style={{ fontSize: "clamp(2.6rem, 7vw, 5.8rem)", lineHeight: 1 }}>Your Perfect</span>
                            <span className="block" style={{
                                fontSize: "clamp(2.6rem, 7vw, 5.8rem)",
                                lineHeight: 1,
                                background: "linear-gradient(90deg, #fda4af 0%, #f9a8d4 50%, #e879a0 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>Home Away</span>
                            <span className="block" style={{ fontSize: "clamp(2.6rem, 7vw, 5.8rem)", lineHeight: 1 }}>From Home.</span>
                        </h1>

                        {/* Paragraph */}
                        <p className="font-sans text-white/75 leading-[1.8] text-[1.05rem] md:text-[1.15rem] max-w-xl" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
                            Since 2016, Geetham Women&apos;s Hostel delivers luxurious rooms, homely food &amp; 24/7 security — exclusively for women IAS aspirants and working professionals.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <Link href="/#contact"
                                onClick={(e) => handleSmoothScroll(e, "/#contact")}
                                className="group relative inline-flex items-center justify-center font-sans font-bold rounded-xl overflow-hidden transition-all duration-400 hover:shadow-[0_8px_36px_rgba(253,164,175,0.45)] w-full sm:w-auto"
                                style={{ padding: "17px 36px", fontSize: "1.05rem", background: "linear-gradient(135deg, #fff 0%, #fce7f3 100%)", color: "#9d1a4a" }}>
                                <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-[150%]">Book Your Stay</span>
                                <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0 z-10 gap-2" style={{ color: "#9d1a4a" }}>
                                    Enquire Now <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                            <Link href="/#rooms"
                                onClick={(e) => handleSmoothScroll(e, "/#rooms")}
                                className="inline-flex items-center justify-center font-sans font-bold text-white rounded-xl border border-white/25 hover:bg-white/15 transition-all backdrop-blur-sm w-full sm:w-auto"
                                style={{ padding: "17px 30px", fontSize: "1.05rem" }}>
                                View Rooms
                            </Link>

                            {/* Location */}
                            <div className="flex items-center justify-center sm:justify-start gap-2.5 font-sans font-medium text-[0.9rem] text-white/60 sm:ml-2 sm:border-l sm:border-white/20 sm:pl-6 shrink-0">
                                <MapPin className="w-4 h-4 text-[#fda4af] shrink-0" />
                                Ambattur, Chennai
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
