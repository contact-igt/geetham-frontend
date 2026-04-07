"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Instagram, Facebook, Youtube } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Rooms", href: "/#rooms" },
    { label: "Amenities", href: "/#amenities" },
    { label: "Gallery", href: "/#gallery" },
]

export default function Navbar() {
    const pathname = usePathname()
    const isInnerPage = pathname !== "/"

    // Default to true on inner pages so text is visible immediately
    const [scrolled, setScrolled] = useState(isInnerPage)
    const [active, setActive] = useState("Home")
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (isInnerPage) return // keep it in scrolled state on inner pages
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)

        // Initial check
        if (!isInnerPage) {
            setScrolled(window.scrollY > 50)
        }

        return () => window.removeEventListener("scroll", handleScroll)
    }, [isInnerPage])

    // Automatically update active link on scroll
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-120px 0px -60% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const matchingLink = NAV_LINKS.find(link => link.href.includes(`#${id}`));
                    if (matchingLink) {
                        setActive(matchingLink.label);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = document.querySelectorAll("section[id]");
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label?: string) => {
        const isHashLink = href.startsWith("/#") || href.startsWith("#")

        if (isHashLink) {
            // If on an inner page, let the Next.js Link handle the raw navigation to Home.
            if (isInnerPage) return;

            e.preventDefault()
            const targetId = href.replace("/#", "").replace("#", "")
            const element = document.getElementById(targetId)

            if (element) {
                const yOffset = -100
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset
                window.scrollTo({ top: y, behavior: "smooth" })
            }
            if (label) setActive(label)
            setMobileOpen(false)

            // Force hash update even if same to ensure browser records a "scroll" state
            if (window.location.hash !== href.replace("/", "")) {
                history.pushState(null, "", href)
            }
        }
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? "py-3 lg:py-4 bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-sm"
                    : "py-6 lg:py-7 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between">
                        {/* ── Logo ── */}
                        <Link href="/#home" onClick={(e) => handleScrollTo(e, "/#home", "Home")} className="relative z-50 flex items-center gap-3 group">
                            <div className="relative">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Geetham Womens Hostel"
                                    width={scrolled ? 145 : 160}
                                    height={scrolled ? 41 : 45}
                                    className={`transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
                                />
                            </div>
                        </Link>

                        {/* ── Desktop Navigation ── */}
                        <div className="hidden lg:flex items-center gap-10">
                            {/* Links */}
                            <ul className="flex items-center gap-9">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href, link.label)}
                                            className="group relative py-2"
                                        >
                                            <span
                                                className={`font-sans text-[0.95rem] font-bold tracking-wide transition-colors duration-300 ${active === link.label
                                                    ? "text-[#e91e63]"
                                                    : scrolled
                                                        ? "text-zinc-700 group-hover:text-zinc-900"
                                                        : "text-white/90 group-hover:text-white"
                                                    }`}
                                            >
                                                {link.label}
                                            </span>
                                            {/* Animated underline */}
                                            <span
                                                className="absolute bottom-0 left-2 right-2 h-[3px] rounded-full transition-all duration-300"
                                                style={{
                                                    background: "linear-gradient(to right, #e91e63, #ff5c8d)",
                                                    opacity: active === link.label ? 1 : 0,
                                                    transform: active === link.label ? "scaleX(1)" : "scaleX(0)",
                                                }}
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Action Area */}
                            <div className={`flex items-center gap-7 pl-7 border-l transition-colors duration-300 ${scrolled ? "border-zinc-200" : "border-white/20"}`}>
                                {/* Phone */}
                                <a
                                    href="tel:+919344382988"
                                    className="flex items-center gap-3 group"
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm group-hover:bg-[#e91e63]/20 group-hover:border-[#e91e63]/30 ${scrolled ? "bg-zinc-100 border border-zinc-200" : "bg-white/15 border border-white/20"}`}>
                                        <Phone className={`w-4 h-4 group-hover:text-[#e91e63] transition-colors ${scrolled ? "text-zinc-600" : "text-white"}`} />
                                    </div>
                                    <span className={`font-sans font-bold text-[0.95rem] transition-colors ${scrolled ? "text-zinc-800 group-hover:text-zinc-900" : "text-white/90 group-hover:text-white"}`}>
                                        +91 93443 82988
                                    </span>
                                </a>

                                {/* Enquiry CTA */}
                                <Link
                                    href="/#contact"
                                    onClick={(e) => handleScrollTo(e, "/#contact")}
                                    className="relative inline-flex items-center gap-2 font-sans font-bold text-[0.95rem] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(233,30,99,0.35)]"
                                    style={{ padding: "10px 24px", background: "#e91e63", color: "#fff" }}
                                >
                                    <span className="relative z-10">Enquiry Now</span>
                                    <span className="absolute inset-0 bg-white/20 -translate-x-full hover:translate-x-full transition-transform duration-500 skew-x-12" />
                                </Link>
                            </div>
                        </div>

                        {/* ── Mobile Menu Toggle ── */}
                        <button
                            className={`lg:hidden relative z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${mobileOpen
                                ? "bg-white border-zinc-200 text-zinc-800 shadow-md"
                                : scrolled
                                    ? "bg-zinc-100 border-zinc-200 text-zinc-800"
                                    : "bg-white/15 border-white/20 text-white"
                                }`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Mobile Menu Overlay ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 lg:hidden flex flex-col"
                    >
                        {/* ── Glass Backdrop ── */}
                        <div
                            className="absolute inset-0 bg-white/70 backdrop-blur-2xl"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* ── Close Button ── */}
                        <motion.button
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white border border-zinc-200 text-zinc-800 flex items-center justify-center shadow-xl z-20"
                            onClick={() => setMobileOpen(false)}
                        >
                            <X className="w-7 h-7" />
                        </motion.button>

                        {/* ── Content Wrapper ── */}
                        <div className="relative z-10 flex flex-col h-full pt-32 pb-12 px-10 overflow-hidden">

                            {/* Background Watermark */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none select-none opacity-[0.03]">
                                <span className="font-display font-black text-[15rem] leading-none text-zinc-900">GEETHAM</span>
                            </div>

                            {/* Navigation Links */}
                            <ul className="flex flex-col gap-6 mb-16 relative">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-4"
                                            onClick={(e) => handleScrollTo(e, link.href, link.label)}
                                        >
                                            <span className={`w-2 h-2 rounded-full transition-all duration-300 ${active === link.label ? "bg-[#e91e63] scale-150" : "bg-zinc-200"}`} />
                                            <span className={`font-display font-bold text-[1.75rem] leading-tight transition-colors ${active === link.label ? "text-[#e91e63]" : "text-zinc-800"}`}>
                                                {link.label}
                                            </span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Contact & Social Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-auto space-y-10"
                            >
                                <div className="space-y-6">
                                    <p className="font-sans font-bold text-zinc-400 uppercase tracking-widest text-[0.7rem]">Get in Touch</p>
                                    <a href="tel:+919344382988" className="flex items-center gap-5 text-zinc-800 group">
                                        <div className="w-12 h-12 rounded-2xl bg-[#e91e63]/5 flex items-center justify-center group-hover:bg-[#e91e63]/10 transition-colors">
                                            <Phone className="w-5 h-5 text-[#e91e63]" />
                                        </div>
                                        <span className="font-sans font-bold text-[1.2rem] tracking-tight">+91 93443 82988</span>
                                    </a>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <Link
                                        href="/#contact"
                                        className="relative bg-[#e91e63] text-white font-sans font-black text-center py-4 rounded-2xl text-[1rem] shadow-[0_12px_24px_rgba(233,30,99,0.3)] hover:shadow-[0_15px_30px_rgba(233,30,99,0.4)] transition-all active:scale-[0.98]"
                                        onClick={(e) => handleScrollTo(e, "/#contact")}
                                    >
                                        Enquire Now
                                    </Link>

                                    <div className="flex items-center justify-center gap-6 py-4">
                                        {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                                            <a key={idx} href="#" className="w-12 h-12 rounded-2xl border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[#e91e63] hover:border-[#e91e63]/30 hover:bg-[#e91e63]/5 transition-all">
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
