"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, Instagram, Facebook } from "lucide-react"

export default function BookingForm() {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: "", phone: "", email: "", room: "", location: "Ambattur", message: "" })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="contact" className="relative overflow-hidden bg-white">

            <div className="max-w-[1440px] mx-auto lg:flex min-h-[850px]">

                {/* ── Left Panel (Contact Info) ── */}
                <div className="lg:w-[40%] bg-zinc-950 p-8 sm:p-12 lg:p-20 relative flex flex-col justify-between overflow-hidden">
                    {/* Background Graphic */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border-[40px] border-[#e91e63]" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-1 bg-[#e91e63] rounded-full" />
                            <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.3em] text-[#e91e63]">Contact Us</span>
                        </div>

                        <h2 className="font-display font-bold text-white mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
                            Let&apos;s Build Your <br />
                            <span className="text-[#e91e63]">Future Together.</span>
                        </h2>

                        <div className="space-y-12">
                            {/* Contact items */}
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#e91e63] group-hover:border-[#e91e63] transition-all duration-300 shadow-lg">
                                    <Phone className="w-6 h-6 text-[#e91e63] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="font-sans text-white/40 text-[0.7rem] uppercase tracking-widest font-bold mb-2">Direct Line</p>
                                    <a href="tel:+919344382988" className="font-sans text-white font-bold text-[1.1rem] sm:text-[1.2rem] hover:text-[#e91e63] transition-colors block leading-tight">+91 93443 82988</a>
                                    <a href="tel:+919842765530" className="font-sans text-white/60 text-[0.95rem] sm:text-[1rem] font-medium hover:text-[#e91e63] transition-colors mt-1 block">+91 98427 65530</a>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#e91e63] group-hover:border-[#e91e63] transition-all duration-300 shadow-lg">
                                    <Mail className="w-6 h-6 text-[#e91e63] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="font-sans text-white/40 text-[0.7rem] uppercase tracking-widest font-bold mb-2">Support Email</p>
                                    <a href="mailto:geethamhostel.in@gmail.com" className="font-sans text-white font-bold text-[1rem] sm:text-[1.1rem] hover:text-[#e91e63] transition-colors">geethamhostel.in@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#e91e63] group-hover:border-[#e91e63] transition-all duration-300 shadow-lg">
                                    <MapPin className="w-6 h-6 text-[#e91e63] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="font-sans text-white/40 text-[0.7rem] uppercase tracking-widest font-bold mb-3">Hostel Location</p>
                                    <p className="font-sans text-white/80 text-[0.95rem] sm:text-[1.05rem] leading-[1.6] font-medium">
                                        24, 25, Coromandel Town,<br />
                                        SIDCO Industrial Estate,<br />
                                        Ambattur, Chennai - 600098
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#e91e63] group-hover:border-[#e91e63] transition-all duration-300 shadow-lg">
                                    <Clock className="w-6 h-6 text-[#e91e63] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="font-sans text-white/40 text-[0.7rem] uppercase tracking-widest font-bold mb-2">Visiting Hours</p>
                                    <p className="font-sans text-white font-bold text-[0.95rem] sm:text-[1rem]">Mon – Sat: 9 AM – 7 PM</p>
                                    <p className="font-sans text-white/60 text-[0.85rem] sm:text-[0.9rem] mt-1 italic">Sunday by appointment only</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 pt-10 sm:pt-16 flex items-center gap-6 border-t border-white/10 mt-10 sm:mt-16">
                        <span className="font-sans text-white/40 text-[0.7rem] font-bold uppercase tracking-widest">Follow Us</span>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e91e63] transition-colors border border-white/10">
                                <Instagram className="w-4.5 h-4.5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e91e63] transition-colors border border-white/10">
                                <Facebook className="w-4.5 h-4.5 text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Right Panel (Form) ── */}
                <div className="lg:w-[60%] p-8 sm:p-12 lg:p-24 bg-white flex flex-col justify-center">

                    {submitted ? (
                        <div className="text-center py-16 sm:py-20 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-zinc-50 border-2 border-dashed border-zinc-100 flex flex-col items-center">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#e91e63]/10 border-4 border-white shadow-xl flex items-center justify-center mb-8">
                                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#e91e63]" />
                            </div>
                            <h3 className="font-display font-bold text-zinc-900 text-[1.8rem] sm:text-[2.2rem] mb-4">Message Received!</h3>
                            <p className="font-sans text-zinc-500 text-[1rem] sm:text-[1.15rem] max-w-sm leading-relaxed mb-10">
                                Our admissions team will reach out to you within 24 hours to schedule a visit or answer your questions.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="font-sans font-bold text-[#e91e63] px-6 sm:px-8 py-3 rounded-xl border border-[#e91e63]/20 hover:bg-[#e91e63]/5 transition-colors"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <div className="max-w-2xl mx-auto w-full">
                            <h3 className="font-display font-bold text-zinc-900 text-[1.8rem] sm:text-[2rem] lg:text-[2.5rem] mb-4">Request a Call Back</h3>
                            <p className="font-sans text-zinc-500 text-[1rem] sm:text-[1.1rem] mb-10 sm:mb-12">
                                Ready for a premium hostel experience? Fill in the details below and we&apos;ll handle the rest.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <input
                                            name="name" type="text" required value={form.name} onChange={handleChange}
                                            placeholder=" "
                                            className="peer w-full font-sans text-zinc-900 font-semibold text-[1.05rem] bg-transparent border-b-2 border-zinc-200 py-3 outline-none transition-all focus:border-[#e91e63] placeholder-transparent"
                                        />
                                        <label className="absolute left-0 top-3 font-sans font-bold text-zinc-400 text-[0.8rem] uppercase tracking-widest transition-all peer-placeholder-shown:text-[1rem] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[0.7rem] peer-focus:text-[#e91e63] pointer-events-none">Full Name *</label>
                                    </div>
                                    <div className="group relative">
                                        <input
                                            name="phone" type="tel" required value={form.phone} onChange={handleChange}
                                            placeholder=" "
                                            className="peer w-full font-sans text-zinc-900 font-semibold text-[1.05rem] bg-transparent border-b-2 border-zinc-200 py-3 outline-none transition-all focus:border-[#e91e63] placeholder-transparent"
                                        />
                                        <label className="absolute left-0 top-3 font-sans font-bold text-zinc-400 text-[0.8rem] uppercase tracking-widest transition-all peer-placeholder-shown:text-[1rem] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[0.7rem] peer-focus:text-[#e91e63] pointer-events-none">Phone Number *</label>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <input
                                        name="email" type="email" value={form.email} onChange={handleChange}
                                        placeholder=" "
                                        className="peer w-full font-sans text-zinc-900 font-semibold text-[1.05rem] bg-transparent border-b-2 border-zinc-200 py-3 outline-none transition-all focus:border-[#e91e63] placeholder-transparent"
                                    />
                                    <label className="absolute left-0 top-3 font-sans font-bold text-zinc-400 text-[0.8rem] uppercase tracking-widest transition-all peer-placeholder-shown:text-[1rem] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[0.7rem] peer-focus:text-[#e91e63] pointer-events-none">Email Address</label>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="group relative border-b-2 border-zinc-200 pt-2 transition-all group-focus-within:border-[#e91e63]">
                                        <label className="block font-sans font-bold text-zinc-400 text-[0.7rem] uppercase tracking-widest mb-1">Room Sharing *</label>
                                        <select
                                            name="room" required value={form.room} onChange={handleChange}
                                            className="w-full font-sans text-zinc-900 font-semibold text-[1.05rem] bg-transparent py-3 outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="">Choose preference</option>
                                            <option value="two">Two Sharing</option>
                                            <option value="three">Three Sharing</option>
                                            <option value="four">Four Sharing</option>
                                        </select>
                                    </div>
                                    <div className="group relative border-b-2 border-zinc-100 pt-2 opacity-60">
                                        <label className="block font-sans font-bold text-zinc-400 text-[0.7rem] uppercase tracking-widest mb-1">Location</label>
                                        <div className="font-sans text-zinc-500 font-semibold text-[1.05rem] py-3">Ambattur - SIDCO</div>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <textarea
                                        name="message" value={form.message} onChange={handleChange}
                                        placeholder=" " rows={3}
                                        className="peer w-full font-sans text-zinc-900 font-semibold text-[1.05rem] bg-transparent border-b-2 border-zinc-200 py-3 outline-none transition-all focus:border-[#e91e63] placeholder-transparent resize-none"
                                    />
                                    <label className="absolute left-0 top-3 font-sans font-bold text-zinc-400 text-[0.8rem] uppercase tracking-widest transition-all peer-placeholder-shown:text-[1rem] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[0.7rem] peer-focus:text-[#e91e63] pointer-events-none">Additional Requirements (e.g. AC/Fridge)</label>
                                </div>

                                <button type="submit"
                                    className="group relative w-full inline-flex items-center justify-center gap-4 py-5 rounded-2xl bg-[#050505] text-white font-sans font-bold text-[1.1rem] overflow-hidden transition-all duration-300 hover:bg-[#e91e63] hover:shadow-[0_20px_40px_rgba(233,30,99,0.35)] shadow-xl active:scale-95"
                                >
                                    <span className="relative z-10">Submit Enquiry</span>
                                    <Send className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                            </form>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}
