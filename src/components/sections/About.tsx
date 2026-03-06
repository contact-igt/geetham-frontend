"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, Utensils, Wifi, Wind, BookOpen, Clock, Star, ArrowRight, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { handleSmoothScroll } from "@/utils/scroll"

const FEATURES = [
    { icon: Shield, title: "24/7 Security", desc: "Full-time guards, CCTV surveillance and secure entry — your safety is our first priority." },
    { icon: Utensils, title: "Homely Food", desc: "Fresh, nutritious home-cooked meals served three times a day at affordable rates." },
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Reliable broadband throughout the premises so you can study and connect without interruption." },
    { icon: Wind, title: "AC & Non-AC Rooms", desc: "Choose climate-controlled or ventilated rooms to suit your comfort and budget." },
    { icon: BookOpen, title: "Near IAS Academies", desc: "Steps away from top coaching centres in Ambattur — your preparation starts at the door." },
    { icon: Clock, title: "Prompt Management", desc: "Responsive, friendly staff available around the clock for any need or concern." },
]

// target: number to count to, suffix: string appended after (e.g. "+"), duration: ms
const STATS = [
    { target: 400, suffix: "+", label: "Beds Available" },
    { target: 1000, suffix: "+", label: "Residents Served" },
    { target: 10, suffix: "+", label: "Years of Trust" },
    { target: 2016, suffix: "", label: "Established" },
]

function useCountUp(target: number, duration = 1800, trigger: boolean) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!trigger) return
        let start = 0
        const step = Math.ceil(target / (duration / 16))
        const timer = setInterval(() => {
            start += step
            if (start >= target) { setCount(target); clearInterval(timer) }
            else setCount(start)
        }, 16)
        return () => clearInterval(timer)
    }, [trigger, target, duration])
    return count
}

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const [triggered, setTriggered] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setTriggered(true); obs.disconnect() }
        }, { threshold: 0.3 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    const count = useCountUp(target, 1800, triggered)
    return (
        <div ref={ref} className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 shadow-sm hover:border-rose-200 transition-colors">
            <p className="font-display font-bold text-[#e11d48] text-[1.6rem] leading-none mb-1">
                {count.toLocaleString()}{suffix}
            </p>
            <p className="font-sans text-[0.6rem] font-bold uppercase tracking-widest text-zinc-400">{label}</p>
        </div>
    )
}

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-white">

            {/* ── TOP: Light editorial split — content left + full-bleed photo right ── */}
            <div className="flex flex-col lg:flex-row min-h-[560px] border-b border-zinc-100">

                {/* Left: White content panel */}
                <div className="relative lg:w-[50%] flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20 py-20 lg:py-28 bg-white overflow-hidden">

                    {/* Soft rose background glow */}
                    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none opacity-30"
                        style={{ background: "radial-gradient(circle, #fce7ef 0%, transparent 70%)" }} />

                    <div className="relative z-10">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-[#e11d48]" />
                            <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#e11d48]">About Geetham</span>
                        </div>

                        {/* Headline */}
                        <h2 className="font-display font-bold text-zinc-900 mb-6"
                            style={{ fontSize: "clamp(2.6rem, 4.5vw, 4.4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
                            A Safe Space<br />
                            to Grow &amp; {" "}
                            <span style={{
                                background: "linear-gradient(90deg, #e11d48, #f43f5e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>Succeed.</span>
                        </h2>

                        <p className="font-sans text-zinc-500 text-[1.02rem] leading-[1.85] max-w-md mb-10">
                            Since <strong className="text-zinc-900">2016</strong>, Geetham Women&apos;s Hostel has been the trusted home for IAS aspirants and working women across Chennai — where safety, comfort, and community come first.
                        </p>

                        {/* Animated stat grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {STATS.map((s) => (
                                <StatCard key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Full-bleed photo */}
                <div className="relative lg:w-[50%] min-h-[380px] lg:min-h-0 overflow-hidden">
                    <Image
                        src="/assets/gen_about1.png"
                        alt="Geetham Women's Hostel"
                        fill
                        className="object-cover object-center"
                    />
                    {/* Rose tint overlay on the left edge (blends into white panel) */}
                    <div className="absolute inset-0 pointer-events-none hidden lg:block"
                        style={{ background: "linear-gradient(to right, rgba(255,255,255,0.12) 0%, transparent 25%)" }} />
                    {/* Bottom shade for badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating year badge — top left */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-white/20">
                        <p className="font-sans text-[0.58rem] font-bold uppercase tracking-widest text-zinc-400">Established</p>
                        <p className="font-display font-bold text-[#e11d48] text-[1.6rem] leading-none">2016</p>
                    </div>

                    {/* Floating trust badge — bottom right */}
                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-1 mb-1.5">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-3 h-3 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                        <p className="font-sans text-[0.6rem] font-bold uppercase tracking-widest text-zinc-400">Trusted by</p>
                        <p className="font-display font-bold text-zinc-900 text-[1.2rem] leading-tight">1000+ Women</p>
                    </div>
                </div>
            </div>

            {/* ── MIDDLE: Our Story — rose to white gradient panel ── */}
            <div className="relative overflow-hidden"
                style={{ background: "linear-gradient(180deg, #fff1f2 0%, #ffffff 100%)" }}>

                {/* Subtle soft rose glow top-right */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
                    style={{ background: "radial-gradient(circle, #fce7ef 0%, transparent 70%)" }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Story text */}
                        <div>
                            <div className="flex items-center gap-3 mb-7">
                                <div className="w-10 h-[2px] bg-[#e11d48]" />
                                <span className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#e11d48]">Our Story</span>
                            </div>
                            <h3 className="font-display font-bold text-zinc-900 mb-6"
                                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.1 }}>
                                More Than a Hostel —<br />It&apos;s a{" "}
                                <span style={{
                                    background: "linear-gradient(90deg, #e11d48, #f43f5e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}>Community.</span>
                            </h3>
                            <div className="space-y-5 font-sans text-zinc-600 text-[1.05rem] leading-[1.85] mb-10">
                                <p>
                                    Founded in <strong className="text-zinc-900">2016</strong>, Geetham Women&apos;s Hostel was built with one purpose — to give every woman a place where she feels completely at home. Safe, cared for, and ready to conquer her goals.
                                </p>
                                <p>
                                    Located in the heart of <strong className="text-zinc-900">Ambattur, Chennai</strong>, we sit minutes away from leading IAS coaching centres and the SIDCO Industrial Estate, making us the perfect base for both students and professionals.
                                </p>
                                <p>
                                    With over a thousand residents served across a decade, our legacy is built on trust, warmth, and results. We don&apos;t just offer beds — we offer belonging.
                                </p>
                            </div>

                            {/* Location chip */}
                            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full mb-10"
                                style={{ background: "rgba(225,29,72,0.04)", border: "1px solid rgba(225,29,72,0.1)" }}>
                                <MapPin className="w-4 h-4 text-[#e11d48] shrink-0" />
                                <span className="font-sans text-[0.9rem] font-semibold text-zinc-700">Coromandel Town, SIDCO, Ambattur, Chennai - 600098</span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/#contact"
                                    onClick={(e) => handleSmoothScroll(e, "/#contact")}
                                    className="inline-flex items-center gap-2 font-sans font-bold text-[1rem] px-7 py-4 rounded-xl text-white transition-all hover:shadow-[0_8px_24px_rgba(225,29,72,0.25)]"
                                    style={{ background: "linear-gradient(135deg, #e11d48, #f43f5e)" }}>
                                    Enquire Now <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="/#rooms"
                                    onClick={(e) => handleSmoothScroll(e, "/#rooms")}
                                    className="inline-flex items-center gap-2 font-sans font-bold text-[1rem] px-7 py-4 rounded-xl text-zinc-700 bg-white border border-rose-100 hover:bg-rose-50 hover:text-rose-600 transition-all">
                                    View Rooms
                                </Link>
                            </div>
                        </div>

                        {/* Photo with floating badges */}
                        <div className="relative">
                            <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(225,29,72,0.08)]">
                                <Image src="/assets/gen_about2.png" alt="Students at Geetham Hostel" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-transparent" />
                                {/* Rose tint on edges */}
                                <div className="absolute inset-0 pointer-events-none"
                                    style={{ background: "linear-gradient(135deg, rgba(225,29,72,0.1) 0%, transparent 50%)" }} />
                            </div>

                            {/* Tagline badge — top right */}
                            <div className="absolute -top-6 -right-4 lg:-right-8 bg-white/95 backdrop-blur-md rounded-3xl px-5 py-4 shadow-xl border border-rose-100 max-w-[180px]">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                                    style={{ background: "linear-gradient(135deg, #fff1f2, #fce7ef)", border: "1px solid #fecdd3" }}>
                                    <span className="text-[1.1rem]">🎓</span>
                                </div>
                                <p className="font-display font-bold text-zinc-900 text-[1rem] leading-tight mb-1">IAS Aspirants&apos;<br />First Choice</p>
                                <p className="font-sans text-[0.65rem] text-zinc-500 leading-tight">Near top coaching centres in Ambattur</p>
                            </div>

                            {/* Rose year badge — bottom left */}
                            <div className="absolute -bottom-5 -left-4 lg:-left-8 rounded-3xl p-5 shadow-xl text-white"
                                style={{ background: "linear-gradient(135deg, #e11d48, #f43f5e)" }}>
                                <p className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-white/80">Since</p>
                                <p className="font-display font-bold text-[2rem] leading-none">2016</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ── BOTTOM: Features Bento Grid ── */}
            <div className="bg-[#fdf4f7] border-t border-rose-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-14 py-24 lg:py-28">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px] bg-[#e91e63]" />
                            <span className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#e91e63]">Why Choose Us</span>
                            <div className="w-8 h-[2px] bg-[#e91e63]" />
                        </div>
                        <h3 className="font-display font-bold text-zinc-900" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
                            Everything You Need,<br />
                            <span className="text-gradient-rose">All in One Place.</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {FEATURES.map((f, i) => (
                            <div key={f.title}
                                className="group relative bg-white rounded-[1.8rem] p-7 lg:p-8 shadow-sm border border-zinc-100 hover:border-rose-200 hover:shadow-[0_12px_40px_rgba(225,29,72,0.10)] transition-all duration-300 overflow-hidden">
                                {/* Subtle corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: "radial-gradient(circle at top right, rgba(225,29,72,0.06), transparent 70%)" }} />

                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                                    style={{ background: "linear-gradient(135deg, rgba(225,29,72,0.1), rgba(244,63,94,0.06))", border: "1px solid rgba(225,29,72,0.15)" }}>
                                    <f.icon className="w-6 h-6 text-[#e11d48]" />
                                </div>

                                <h4 className="font-display font-bold text-zinc-900 text-[1.2rem] mb-3">{f.title}</h4>
                                <p className="font-sans text-zinc-500 text-[0.95rem] leading-[1.75]">{f.desc}</p>

                                {/* Indent number */}
                                <span className="absolute bottom-6 right-7 font-display font-bold text-[2.5rem] text-zinc-100 pointer-events-none select-none leading-none">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
