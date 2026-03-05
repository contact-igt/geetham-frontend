import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Rooms from "@/components/sections/Rooms"
import Amenities from "@/components/sections/Amenities"
import Gallery from "@/components/sections/Gallery"
import BookingForm from "@/components/sections/BookingForm"

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
