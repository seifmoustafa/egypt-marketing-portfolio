"use client"

import { useEffect, useState } from "react"
import { sections } from "@/lib/mockdata"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { VisionSection } from "@/components/sections/VisionSection"
import { MissionSection } from "@/components/sections/MissionSection"
import { GoalSection } from "@/components/sections/GoalSection"
import { ValuesSection } from "@/components/sections/ValuesSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { DesignSection } from "@/components/sections/DesignSection"
import { ProductionSection } from "@/components/sections/ProductionSection"
import { DevelopmentSection } from "@/components/sections/DevelopmentSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { WhyUsSection } from "@/components/sections/WhyUsSection"
import { ConclusionSection } from "@/components/sections/ConclusionSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { FinalSection } from "@/components/sections/FinalSection"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("intro")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      const scrollPositionWithOffset = scrollPosition + 100
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPositionWithOffset >= offsetTop && scrollPositionWithOffset < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir="rtl">
      <Header 
        isScrolled={isScrolled} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      <ScrollIndicator />

      <main className="pt-24 md:pt-28">
        <HeroSection scrollToSection={scrollToSection} />
        <VisionSection />
        <MissionSection />
        <GoalSection />
        <ValuesSection />
        <ServicesSection />
        <DesignSection />
        <ProductionSection />
        <DevelopmentSection />
        <PortfolioSection />
        <WhyUsSection />
        <ConclusionSection scrollToSection={scrollToSection} />
        <ContactSection />
        <FinalSection />
      </main>
    </div>
  )
}
