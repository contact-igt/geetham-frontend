import Link from "next/link"
import Image from "next/image"
import { XCircle, Phone, Home, RotateCcw } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Submission Failed | Geetham Womens Hostel",
    description: "We couldn't record your enquiry. Please try again or contact us directly.",
}

export default function SubmissionFailedPage() {
    return (
        <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)" }} />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            </div>

            {/* Logo */}
            <Link href="/" className="mb-14 relative z-10">
                <Image src="/assets/logo.png" alt="Geetham Womens Hostel" width={160} height={45} className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </Link>

            {/* Card */}
            <div className="relative z-10 w-full max-w-lg bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 sm:p-14 flex flex-col items-center text-center backdrop-blur-sm shadow-[0_40px_80px_rgba(0,0,0,0.5)]">

                {/* Icon */}
                <div className="w-24 h-24 rounded-full bg-red-500/15 border-[3px] border-red-500/30 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                    <XCircle className="w-12 h-12 text-red-400" strokeWidth={1.5} />
                </div>

                <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.3em] text-red-400 mb-4">Submission Failed</span>

                <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1 }}>
                    Something Went<br />Wrong
                </h1>

                <p className="font-sans text-white/60 text-[1.05rem] leading-[1.8] max-w-sm mb-10">
                    We couldn&apos;t record your enquiry due to a network issue. Please try again or contact us directly — we&apos;re happy to help!
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 mb-10" />

                {/* CTA links */}
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link
                        href="/#contact"
                        className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#e91e63] text-white font-sans font-bold text-[1rem] hover:bg-[#d01757] transition-all shadow-[0_8px_20px_rgba(233,30,99,0.3)]"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Try Again
                    </Link>
                    <Link
                        href="/"
                        className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border border-white/10 bg-white/5 text-white font-sans font-bold text-[1rem] hover:bg-white/10 transition-all"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>

                {/* Direct phone */}
                <div className="mt-8 flex items-center gap-3 flex-wrap justify-center">
                    <Phone className="w-4 h-4 text-[#e91e63]" />
                    <a href="tel:+919344382988" className="font-sans text-white/70 font-bold text-[1.05rem] hover:text-[#e91e63] transition-colors">
                        +91 93443 82988
                    </a>
                    <span className="text-white/20">|</span>
                    <a href="tel:+919842765530" className="font-sans text-white/50 font-medium text-[1rem] hover:text-[#e91e63] transition-colors">
                        +91 98427 65530
                    </a>
                </div>
            </div>

            {/* Footer note */}
            <p className="mt-10 font-sans text-white/25 text-[0.8rem] text-center relative z-10">
                © {new Date().getFullYear()} Geetham Women&apos;s Hostel, Ambattur, Chennai.
            </p>
        </main>
    )
}
