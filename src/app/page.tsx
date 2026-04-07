import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Rooms from "@/components/sections/Rooms"
import Amenities from "@/components/sections/Amenities"
import Gallery from "@/components/sections/Gallery"
import BookingForm from "@/components/sections/BookingForm"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.geethamhostels.in",
  },
  openGraph: {
    url: "https://www.geethamhostels.in",
  },
}


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <BookingForm />
    </div>
  )
}
