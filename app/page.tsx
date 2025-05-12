import Hero from "@/components/hero"
import InfoBar from "@/components/info-bar"
import FeaturedPlaces from "@/components/featured-places"
import FeaturedEvents from "@/components/featured-events"
import TouristGuide from "@/components/tourist-guide"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <InfoBar />
      <FeaturedPlaces />
      <FeaturedEvents />
      <TouristGuide />
      <TestimonialSection />
    </div>
  )
}
