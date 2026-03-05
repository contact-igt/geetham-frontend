import Image from "next/image"
import {
    Shield, Wifi, Utensils, Wind, Droplets,
    BookOpen, Shirt, Tv, ParkingCircle, Clock,
    Lock, HeartPulse
} from "lucide-react"

const AMENITIES = [
    { icon: Shield, label: "24/7 Security", desc: "Round-the-clock CCTV surveillance & guards" },
    { icon: Wifi, label: "Free Wi-Fi", desc: "Unlimited high-speed internet across all floors" },
    { icon: Utensils, label: "Homely Food", desc: "Nutritious home-cooked meals thrice daily" },
    { icon: Wind, label: "AC & Non-AC", desc: "Air-conditioned & well-ventilated rooms" },
    { icon: Droplets, label: "Water Heater", desc: "24/7 hot water supply in all bathrooms" },
    { icon: BookOpen, label: "Study Area", desc: "Dedicated quiet study zones for IAS aspirants" },
    { icon: Shirt, label: "Washing Machine", desc: "In-house washing facility for all residents" },
    { icon: HeartPulse, label: "Daily Cleaning", desc: "Regularly sanitised rooms & common spaces" },
    { icon: Tv, label: "TV Lounge", desc: "Shared entertainment area with cable TV" },
    { icon: Lock, label: "Secure Storage", desc: "Individual lockable wardrobes & safe storage" },
    { icon: ParkingCircle, label: "Parking Space", desc: "Dedicated two-wheeler parking available" },
    { icon: Clock, label: "Flexible Timings", desc: "Reasonable curfew with secure entry/exit" },
]

export default function Amenities() {
    return (
        <section id="amenities" className="relative overflow-hidden py-32 bg-[#fafafa] border-y border-zinc-200/50">

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(225,29,72,0.02) 0%, transparent 70%)" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">

                {/* ── Header Area ── */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex items-center gap-4 mb-7">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#e11d48]/50" />
                        <span className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#e11d48]">World-Class Facilities</span>
                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#e11d48]/50" />
                    </div>
                    <h2 className="font-display font-bold text-zinc-900 mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", lineHeight: 1.05 }}>
                        Everything You Need,<br />
                        <span className="text-gradient-rose">All In One Place</span>
                    </h2>
                    <p className="font-sans text-zinc-500 text-[1.1rem] sm:text-[1.2rem] leading-[1.8] max-w-2xl mx-auto mb-10">
                        At Geetham, we have thoughtfully planned every facility a woman needs to stay comfortably — from round-the-clock security and homely food to free Wi-Fi and washing machines.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {["Safe", "Comfortable", "Affordable Stay"].map((tag) => (
                            <span key={tag} className="font-sans text-[0.75rem] sm:text-[0.8rem] uppercase tracking-widest font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#e11d48]/20 text-[#e11d48] bg-white shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ── Featured Image & Callout ── */}
                <div className="relative h-[400px] sm:h-[480px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-white mb-20 border border-zinc-100">
                    <Image src="/assets/gallery5.png" alt="Modern facilities at Geetham Hostel" fill className="object-cover transition-transform duration-[1s] hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div>
                            <p className="font-display font-bold text-white text-[1.6rem] sm:text-[2rem] mb-2 leading-tight">Modern & Clean Facilities</p>
                            <p className="font-sans text-white/80 text-[1rem] sm:text-[1.1rem] font-medium max-w-lg">Experience hygienic, well-maintained bathrooms with 24/7 water heaters and dedicated laundry areas.</p>
                        </div>

                        <div className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-4">
                            <span className="font-display font-bold text-white text-[2.5rem] sm:text-[3rem] leading-none">12+</span>
                            <span className="font-sans text-rose-200 text-[0.75rem] sm:text-[0.85rem] font-bold uppercase tracking-[0.2em] leading-tight">Premium<br />Amenities</span>
                        </div>
                    </div>
                </div>

                {/* ── Amenities Grid (Redesigned) ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {AMENITIES.map((item) => (
                        <div key={item.label} className="group flex items-start gap-6 p-8 rounded-[1.5rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(225,29,72,0.08)] transition-all duration-400 border border-zinc-100 relative overflow-hidden -translate-y-0 hover:-translate-y-1.5">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-rose scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                            <div className="w-16 h-16 rounded-[1.2rem] flex items-center justify-center bg-zinc-50 border border-zinc-100 shrink-0 group-hover:bg-[#e11d48]/10 group-hover:border-[#e11d48]/20 transition-all duration-400">
                                <item.icon className="w-7 h-7 text-[#e11d48] group-hover:scale-110 transition-transform duration-400" />
                            </div>

                            <div className="pt-1">
                                <h4 className="font-sans font-extrabold text-zinc-900 text-[1.2rem] mb-2">{item.label}</h4>
                                <p className="font-sans text-zinc-500 text-[0.95rem] leading-[1.6] font-medium">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
