import { Header } from "@/components/landing/Header"
import { HeroSection } from "@/components/landing/HeroSection"
import { AboutSection } from "@/components/landing/AboutSection"
import { ActivitiesSection } from "@/components/landing/ActivitiesSection"
import { JoinSection } from "@/components/landing/JoinSection"
import { Footer } from "@/components/landing/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  )
}
