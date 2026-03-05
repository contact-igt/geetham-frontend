import Image from "next/image"
import Link from "next/link"
import { BedDouble, Users, Users2, CheckCircle2 } from "lucide-react"

const ROOMS = [
    {
        id: "two-sharing", type: "Two Sharing", icon: BedDouble,
        image: "/assets/gallery2.png", tag: "Most Popular", tagColor: "#e11d48",
        description: "A bright, spacious room designed for two, offering complete privacy and comfort with dedicated storage and natural lighting.",
        features: ["Attached Wardrobe", "Personal Study Desk", "High-Speed Wi-Fi", "AC / Non-AC"],
    },
    {
        id: "three-sharing", type: "Three Sharing", icon: Users,
        image: "/assets/gallery3.png", tag: "Best Value", tagColor: "#0284c7",
        description: "A well-ventilated three-occupant room with ample space for everyone — a great balance between comfort and affordability.",
        features: ["Shared Wardrobe Space", "Common Study Area", "High-Speed Wi-Fi", "Fan + Ventilation"],
    },
    {
        id: "four-sharing", type: "Four Sharing", icon: Users2,
        image: "/assets/gallery1.png", tag: "Budget Friendly", tagColor: "#16a34a",
        description: "An economical four-occupant room perfect for students focused on IAS preparation, with all essential amenities included.",
        features: ["Individual Bed Space", "Shared Storage", "High-Speed Wi-Fi", "Fan Cooling"],
    },
]

export default function Rooms() {
    return (
        <section id="rooms" className="relative overflow-hidden py-32 bg-[#050505]">

            {/* Subtle radial glow top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(225,29,72,0.06) 0%, transparent 70%)" }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">

                {/* ── Header ── */}
                <div className="flex flex-col items-start mb-16 lg:mb-20">
                    <div className="flex items-center gap-4 mb-7">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#e11d48] to-[#e11d48]/20" />
                        <span className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#fda4af]">Our Rooms</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 w-full">
                        <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", lineHeight: 1.05, maxWidth: 600 }}>
                            Choose Your{" "}
                            <span className="text-gradient-rose">Perfect Room</span>
                        </h2>
                        <p className="font-sans text-white/60 text-[1.1rem] font-medium leading-[1.8] max-w-sm sm:text-right pb-2 shrink-0">
                            AC & Non-AC rooms available — bright, ventilated, and meticulously maintained.
                        </p>
                    </div>
                </div>

                {/* ── Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-10">
                    {ROOMS.map((room) => (
                        <div key={room.id} className="group flex flex-col rounded-[1.8rem] overflow-hidden bg-[#09090b] border border-white/10 glass-card-hover shadow-2xl">

                            {/* Image Header */}
                            <div className="relative h-64 sm:h-72 overflow-hidden shrink-0">
                                <Image src={room.image} alt={room.type} fill className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.08]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

                                {/* Tag */}
                                <div className="absolute top-6 left-6">
                                    <span className="font-sans font-bold text-[0.7rem] uppercase tracking-[0.2em] px-4 py-2 rounded-full text-white shadow-xl"
                                        style={{ background: room.tagColor }}>{room.tag}</span>
                                </div>

                                {/* Icon */}
                                <div className="absolute bottom-5 right-6 w-14 h-14 rounded-[1rem] flex items-center justify-center glass-card border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
                                    <room.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="flex flex-col flex-1 p-6 sm:p-8 pt-5 text-center sm:text-left">
                                <h3 className="font-display font-bold text-white text-[1.6rem] mb-4">{room.type}</h3>
                                <p className="font-sans text-white/60 text-[1.05rem] leading-[1.7] mb-8 min-h-[85px]">{room.description}</p>

                                {/* Features */}
                                <div className="grid grid-cols-1 gap-y-4 mb-9 mx-auto sm:mx-0 text-left">
                                    {room.features.map((f) => (
                                        <div key={f} className="flex items-start gap-3.5">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-3 h-3 text-[#fb7185]" />
                                            </div>
                                            <span className="font-sans text-white/80 font-medium text-[0.95rem]">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <div className="mt-auto pt-6 border-t border-white/10 w-full">
                                    <Link href="#contact"
                                        className="flex items-center justify-center w-full font-sans font-bold text-[1.05rem] py-4 rounded-xl border-2 border-white/10 text-white hover:text-white transition-all bg-white/5 hover:bg-[#e11d48] hover:border-[#e11d48] shadow-lg">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Bottom Banner ── */}
                <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 sm:px-10 py-8 rounded-[1.5rem] glass-card border-white/10 overflow-hidden relative shadow-2xl text-center lg:text-left">

                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-rose hidden lg:block" />
                    <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-rose lg:hidden block" />

                    <div className="flex flex-col sm:flex-row items-center gap-6 z-10 w-full lg:w-auto">
                        <div className="w-16 h-16 rounded-[1rem] flex items-center justify-center shrink-0 bg-[#e11d48]/15 border border-[#e11d48]/30">
                            <BedDouble className="w-7 h-7 text-[#fb7185]" />
                        </div>
                        <div>
                            <p className="font-display font-bold text-white text-[1.2rem] sm:text-[1.4rem] mb-1.5">400+ Beds · AC & Non-AC Available</p>
                            <p className="font-sans text-white/60 text-[1rem] sm:text-[1.05rem]">All rooms include daily housekeeping & 24/7 security.</p>
                        </div>
                    </div>

                    <div className="z-10 shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
                        <Link href="#contact"
                            className="flex items-center justify-center w-full font-sans font-bold text-[1.05rem] px-9 py-4.5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(225,29,72,0.4)] bg-gradient-rose text-white border border-white/10">
                            Check Availability
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
