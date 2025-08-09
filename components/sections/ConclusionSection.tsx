"use client"

import { motion } from "framer-motion"
import { Rocket, ArrowRight } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { contentSections, conclusionSectionData } from "@/lib/mockdata"

interface ConclusionSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function ConclusionSection({ scrollToSection }: ConclusionSectionProps) {
  return (
    <section
      id="conclusion"
      className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            <GradientText gradient="from-white to-gray-300">{contentSections.conclusion.title}</GradientText>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mb-8 leading-relaxed">
            {contentSections.conclusion.content}
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
            {contentSections.conclusion.subtitle}
          </p>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4">{conclusionSectionData.callToActionTitle}</h3>
            <p className="text-xl text-blue-300 mb-12">{conclusionSectionData.callToActionSubtitle}</p>

            <MagneticButton
              onClick={() => scrollToSection("contact")}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-16 py-8 rounded-full text-xl font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-500"
            >
              <span className="flex items-center gap-4">
                <Rocket className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                {conclusionSectionData.startProjectButton}
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
