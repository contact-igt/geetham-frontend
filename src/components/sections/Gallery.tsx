"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const GALLERY_IMAGES = [
    { src: "/assets/pic19.jpg", alt: "Two Sharing Premium Room", span: "lg:col-span-2 lg:row-span-2" },
    { src: "/assets/pic12.jpg", alt: "Dormitory Accommodation", span: "" },
    { src: "/assets/pic21.jpg", alt: "Hygienic Bathroom Facilities", span: "" },
    { src: "/assets/pic20.jpg", alt: "Three Sharing Spacious Room", span: "" },
    { src: "/assets/pic2.jpg", alt: "Geetham Hostel Building Entrance", span: "" },
    { src: "/assets/pic24.png", alt: "Hostel Street View in Ambattur", span: "" },
    { src: "/assets/pic16.jpg", alt: "Common Entertainment Area", span: "" },
    {
        src: "/assets/pic10.jpg",
        alt: "Dining Area with Seating Arrangement",
        span: "",
    },
    {
        src: "/assets/pic23.jpg",
        alt: "Laundry and Washing Facilities",
        span: "",
    },
    {
        src: "/assets/pic11.jpg",
        alt: "Outdoor Relaxation Space",
        span: "",
    },
]

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation()
        setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1) : null))
    }

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        setSelectedIndex((prev) => (prev !== null ? (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1) : null))
    }

    return (
        <section id="gallery" className="relative overflow-hidden py-32 bg-[#fffafb]">

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 mix-blend-multiply"
                style={{ background: "radial-gradient(circle, #fce7ef 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 mix-blend-multiply"
                style={{ background: "radial-gradient(circle, #f9a8d4 0%, transparent 60%)" }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-20">
                    <div>
                        <div className="flex items-center gap-4 mb-7">
                            <div className="w-12 h-[2px] bg-gradient-to-r from-[#e11d48] to-[#e11d48]/20" />
                            <span className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.3em] text-[#e11d48]">Photo Gallery</span>
                        </div>
                        <h2 className="font-display font-bold text-zinc-900 mb-2" style={{ fontSize: "clamp(3rem, 5vw, 4.2rem)", lineHeight: 1.05 }}>
                            A Glimpse of{" "}
                            <span className="block text-gradient-rose">Life at Geetham</span>
                        </h2>
                    </div>
                    <p className="font-sans text-zinc-500 text-[1.15rem] leading-[1.8] max-w-md sm:text-right pb-3">
                        Real spaces, real comfort — see what daily life looks like at our premium hostel in Ambattur.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-6 lg:gap-8">
                    {GALLERY_IMAGES.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedIndex(i)}
                            className={`group relative overflow-hidden rounded-[1.5rem] ${img.span} border border-zinc-200 bg-zinc-100 shadow-sm cursor-pointer`}
                            style={{ height: img.span.includes("row-span-2") ? "500px" : "240px" }}
                        >
                            <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-[1s] group-hover:scale-[1.05]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                                <span className="font-sans font-bold text-[1.05rem] text-white tracking-wide block leading-tight">{img.alt}</span>
                                <span className="font-sans text-[0.75rem] uppercase tracking-widest text-[#fb7185] font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">View Full Size</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Lightbox Modal ── */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center transition-opacity duration-300"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Controls */}
                    <div className="absolute top-8 right-8 z-50 flex items-center gap-6">
                        <span className="font-sans text-zinc-400 font-bold tracking-widest uppercase text-sm">
                            {selectedIndex + 1} / {GALLERY_IMAGES.length}
                        </span>
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                            className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center hover:bg-[#e91e63] hover:border-[#e91e63] hover:text-white transition-colors text-zinc-700"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <button
                        onClick={handlePrevious}
                        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center hover:bg-[#e91e63] hover:border-[#e91e63] hover:text-white transition-colors z-50 text-zinc-700"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center hover:bg-[#e91e63] hover:border-[#e91e63] hover:text-white transition-colors z-50 text-zinc-700"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Image Container */}
                    <div className="relative w-[90vw] h-[80vh] max-w-6xl flex items-center justify-center p-4 select-none" onClick={(e) => e.stopPropagation()}>
                        <div className="relative w-full h-full shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden border border-zinc-200">
                            <Image
                                src={GALLERY_IMAGES[selectedIndex].src}
                                alt={GALLERY_IMAGES[selectedIndex].alt}
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </div>
                        <div className="absolute bottom-[-3rem] left-0 right-0 text-center">
                            <h3 className="font-display font-medium text-zinc-600 text-xl tracking-wide">{GALLERY_IMAGES[selectedIndex].alt}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
