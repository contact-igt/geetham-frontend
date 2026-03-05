import Image from "next/image"
import { CheckCircle2, Award, Users, Building2, MapPin, Quote } from "lucide-react"

const HIGHLIGHTS = [
    "Luxurious rooms with great ventilation",
    "24/7 day & night security with CCTV",
    "Homely food at affordable cost",
    "Located near IAS Academies, Ambattur",
    "Friendly management & prompt service",
    "Cool AC & Non-AC rooms available",
]

const PILLARS = [
    { icon: Building2, value: "400+", label: "Bed Capacity", color: "bg-blue-50 text-blue-600" },
    { icon: Users, value: "1000+", label: "Residents Served", color: "bg-amber-50 text-amber-600" },
    { icon: Award, value: "10+", label: "Years of Trust", color: "bg-emerald-50 text-emerald-600" },
]

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden py-32 lg:py-48 bg-white">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-[#e91e63]/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* ── Left Content (Span 7) ── */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#e91e63]/5 border border-[#e91e63]/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#e91e63] animate-pulse" />
                            <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#e91e63]">Premium Women's Hostel</span>
                        </div>

                        <h2 className="font-display font-bold text-zinc-900 mb-8 lg:mb-10" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05 }}>
                            A Safe Space to <br />
                            <span className="text-gradient-rose">Grow & Succeed.</span>
                        </h2>

                        <div className="space-y-6 lg:space-y-8 font-sans text-zinc-600 text-[1.1rem] lg:text-[1.15rem] leading-[1.8] max-w-2xl mb-10 lg:mb-12">
                            <p>
                                Established in <span className="font-bold text-zinc-900 border-b-2 border-[#e91e63]/20">2016</span>, Geetham Women&apos;s Hostel was founded with a singular mission: to provide a secure, comfortable, and empowering environment for women IAS aspirants and working professionals.
                            </p>
                            <p>
                                Located in the heart of Ambattur&apos;s educational hub, we understand that a peaceful environment is crucial for your success. Our facilities are designed to feel less like a hostel and more like a <span className="font-bold text-zinc-900">home away from home</span>.
                            </p>
                        </div>

                        {/* Interactive Highlights */}
                        <div className="grid sm:grid-cols-2 gap-y-5 lg:gap-y-6 gap-x-6 lg:gap-x-10 mb-12 lg:mb-16">
                            {HIGHLIGHTS.map((h) => (
                                <div key={h} className="group flex items-start sm:items-center gap-4 transition-transform duration-300 hover:translate-x-2">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center shrink-0 group-hover:border-[#e91e63]/30 group-hover:bg-[#e91e63]/5 transition-all mt-1 sm:mt-0">
                                        <CheckCircle2 className="w-5 h-5 text-[#e91e63]" />
                                    </div>
                                    <span className="font-sans text-zinc-700 text-[1rem] lg:text-[1.05rem] font-semibold leading-snug">{h}</span>
                                </div>
                            ))}
                        </div>

                        {/* Pillars/Stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-10 border-t border-zinc-100">
                            {PILLARS.map((p) => (
                                <div key={p.label} className="flex flex-col gap-2 relative">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${p.color} flex items-center justify-center mb-1 sm:mb-2`}>
                                        <p.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <span className="font-display font-bold text-zinc-900 text-[1.4rem] sm:text-[1.8rem] leading-none">{p.value}</span>
                                    <span className="font-sans text-[0.6rem] sm:text-[0.7rem] font-bold uppercase tracking-widest text-zinc-400 leading-tight">{p.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right Visuals (Span 5) ── */}
                    <div className="lg:col-span-5 order-1 lg:order-2 relative mt-8 lg:mt-0">
                        {/* The "Editorial" Frame */}
                        <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] z-20 group">
                            <Image
                                src="/assets/herobanner1.png"
                                alt="Modern Life at Geetham"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                            {/* Floating Address Overlay */}
                            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#e91e63] flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(233,30,99,0.3)]">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-widest text-zinc-400 mb-1">Our Location</p>
                                        <p className="font-sans text-zinc-900 font-bold text-[0.85rem] sm:text-[0.95rem] leading-tight">
                                            Coromandel Town,SIDCO,<br />
                                            Ambattur, Chennai
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Overlapping Image */}
                        <div className="absolute -bottom-16 -left-16 w-64 h-80 rounded-[2rem] overflow-hidden border-[10px] border-white shadow-2xl z-30 hidden xl:block">
                            <Image
                                src="/assets/herobanner2.png"
                                alt="Room Details"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Geometric Decoration */}
                        <div className="absolute -top-10 -right-5 sm:-right-10 w-24 sm:w-40 h-24 sm:h-40 border-[8px] sm:border-[15px] border-[#e91e63]/10 rounded-full z-10 pointer-events-none" />

                        {/* Quote Floating Element */}
                        <div className="absolute top-1/4 -right-12 w-24 h-24 rounded-3xl bg-gradient-rose flex items-center justify-center shadow-xl z-30 transform rotate-12 hidden lg:flex">
                            <Quote className="w-10 h-10 text-white fill-white/20" />
                        </div>
                    </div>

                </div>

                {/* Bottom Wide Quote */}
                <div className="mt-24 lg:mt-48 relative p-8 lg:p-20 rounded-[2.5rem] lg:rounded-[3rem] bg-zinc-950 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full"
                            style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #e91e63 0%, transparent 50%)" }} />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <div className="w-16 h-1 w-20 bg-[#e91e63] mx-auto mb-8 sm:mb-10 rounded-full" />
                        <h3 className="font-display font-medium text-white italic leading-snug mb-10 sm:mb-12" style={{ fontSize: "clamp(1.4rem, 4vw, 2.5rem)" }}>
                            &quot;Geetham is more than just a hostel; it&apos;s a curated living experience designed for the modern woman who refuses to compromise on safety or style.&quot;
                        </h3>
                        <div className="flex flex-col items-center">
                            <span className="font-sans font-bold text-[#e91e63] uppercase tracking-[0.3em] text-[0.7rem] sm:text-[0.8rem] mb-2">The Geetham Promise</span>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map(i => (
                                    < Award key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
