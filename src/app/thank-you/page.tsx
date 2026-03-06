import Link from "next/link"
import { CheckCircle2, Phone, Home, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Enquiry Submitted",
    description: "Thank you for your enquiry. Our team will reach out to you within 24 hours.",
    robots: { index: false, follow: false },
    alternates: { canonical: "https://www.geethamhostels.in/thank-you" },
    openGraph: { url: "https://www.geethamhostels.in/thank-you" },
}

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-40 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(37,211,102,0.05) 0%, transparent 70%)" }} />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
            </div>



            {/* Card */}
            <div className="relative z-10 w-full max-w-lg bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-10 sm:p-14 flex flex-col items-center text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

                {/* Icon */}
                <div className="w-24 h-24 rounded-full bg-emerald-500/15 border-[3px] border-emerald-500/30 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(37,211,102,0.2)]">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400" strokeWidth={1.5} />
                </div>

                <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-4">Enquiry Received</span>

                <h1 className="font-display font-bold text-zinc-900 mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1 }}>
                    Thank You for<br />Reaching Out!
                </h1>

                <p className="font-sans text-zinc-600 text-[1.05rem] leading-[1.8] max-w-sm mb-10">
                    Your enquiry has been recorded in our system. Our admissions team will personally call you back within <strong className="text-zinc-900">24 hours</strong>.
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-zinc-200 mb-10" />

                {/* CTA links */}
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link
                        href="/"
                        className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border border-zinc-200 bg-zinc-100 text-zinc-800 font-sans font-bold text-[1rem] hover:bg-zinc-200 transition-all"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <a
                        href="https://wa.me/918939929055"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-500 text-white font-sans font-bold text-[1rem] hover:bg-emerald-600 transition-all shadow-[0_8px_20px_rgba(37,211,102,0.3)]"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                    </a>
                </div>

                {/* Phone */}
                <p className="mt-8 font-sans text-zinc-400 text-[0.9rem]">
                    Need immediate help?{" "}
                    <a href="tel:+919344382988" className="text-[#e91e63] font-bold hover:underline">
                        +91 93443 82988
                    </a>
                </p>
            </div>

            {/* Footer note */}
            <p className="mt-10 font-sans text-zinc-400 text-[0.8rem] text-center relative z-10">
                © {new Date().getFullYear()} Geetham Women&apos;s Hostel, Ambattur, Chennai.
            </p>
        </main>
    )
}
