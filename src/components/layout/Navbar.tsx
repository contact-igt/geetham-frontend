"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState("Home")
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Automatically update active link on scroll
    useEffect(() => {
        const observerOptions = {
            root: null,
            // Offset logic: trigger when a section top passes the navbar (approx 100px) 
            // and don't trigger until it takes up a good chunk of the screen.
            rootMargin: "-120px 0px -60% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const matchingLink = NAV_LINKS.find(link => link.href === `#${id}`);
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
        if (href.startsWith("#")) {
            e.preventDefault()
            const targetId = href.replace("#", "")
            const element = document.getElementById(targetId)
            if (element) {
                // Offset for fixed navbar (approx 100px)
                const yOffset = -100
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset
                window.scrollTo({ top: y, behavior: "smooth" })
            }
            if (label) setActive(label)
            setMobileOpen(false)
            history.pushState(null, "", href)
        }
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? "py-3 lg:py-4 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "py-6 lg:py-7 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between">
                        {/* ── Logo ── */}
                        <Link href="#home" onClick={(e) => handleScrollTo(e, "#home", "Home")} className="relative z-50 flex items-center gap-3 group">
                            <div className="relative">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Geetham Womens Hostel"
                                    width={scrolled ? 145 : 170}
                                    height={scrolled ? 41 : 48}
                                    className="transition-all duration-300"
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
                                                className={`font-sans text-[1.05rem] font-bold tracking-wide transition-colors duration-300 ${active === link.label ? "text-[#e91e63]" : "text-white/80 group-hover:text-white"
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
                            <div className="flex items-center gap-7 pl-7 border-l border-white/20">
                                {/* Phone */}
                                <a
                                    href="tel:+919344382988"
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 group-hover:bg-[#e91e63]/20 group-hover:border-[#e91e63]/40 transition-all shadow-sm">
                                        <Phone className="w-4.5 h-4.5 text-white/80 group-hover:text-[#ff5c8d] transition-colors" />
                                    </div>
                                    <span className="font-sans font-bold text-[1.05rem] text-white/95 group-hover:text-white transition-colors">
                                        +91 93443 82988
                                    </span>
                                </a>

                                {/* Enquiry CTA */}
                                <Link
                                    href="#contact"
                                    onClick={(e) => handleScrollTo(e, "#contact")}
                                    className="relative inline-flex items-center gap-2 font-sans font-bold text-[1.05rem] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(233,30,99,0.4)]"
                                    style={{ padding: "12px 28px", background: "#e91e63", color: "#fff" }}
                                >
                                    <span className="relative z-10">Enquiry Now</span>
                                    <span className="absolute inset-0 bg-white/20 -translate-x-full hover:translate-x-full transition-transform duration-500 skew-x-12" />
                                </Link>
                            </div>
                        </div>

                        {/* ── Mobile Menu Toggle ── */}
                        <button
                            className="lg:hidden relative z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white"
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

            {/* ── Mobile Menu Drawer ── */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop overlay */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setMobileOpen(false)}
                />

                {/* Sliding Panel */}
                <div
                    className="absolute top-0 right-0 bottom-0 w-[320px] max-w-[85vw] flex flex-col pt-28 pb-10 px-10 transition-transform duration-300 bg-[#09090b]"
                    style={{
                        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
                        borderLeft: "1px solid rgba(255,255,255,0.05)"
                    }}
                >
                    <ul className="flex flex-col gap-8 flex-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="font-display font-bold text-[2rem] text-white/90 hover:text-[#e91e63] transition-colors"
                                    onClick={(e) => handleScrollTo(e, link.href, link.label)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col gap-6 pt-10 mt-auto border-t border-white/10">
                        <a href="tel:+919344382988" className="flex items-center gap-4 text-white">
                            <Phone className="w-5 h-5 text-[#e91e63]" />
                            <span className="font-sans font-bold text-[1.2rem]">+91 93443 82988</span>
                        </a>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center font-sans font-bold text-[1.1rem] rounded-xl py-4"
                            style={{ background: "#e91e63", color: "#fff" }}
                            onClick={(e) => handleScrollTo(e, "#contact")}
                        >
                            Enquiry Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
