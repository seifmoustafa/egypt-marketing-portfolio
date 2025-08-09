"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { contentSections, missionSectionData } from "@/lib/mockdata"

export function MissionSection() {
  return (
    <section id="mission" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50/50 to-teal-50/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Target className="w-5 h-5" />
            {missionSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold">
            <GradientText gradient="from-green-600 to-teal-600">{contentSections.mission.title}</GradientText>
          </h2>
        </motion.div>

        <FloatingCard className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-white to-green-50/50 border-0 shadow-2xl">
            <CardContent className="p-12 md:p-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-2xl md:text-3xl text-gray-700 text-center font-medium mb-10">
                  {contentSections.mission.content}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-10 rounded-full" />
                <p className="text-xl text-gray-600 text-center leading-relaxed">
                  {contentSections.mission.subtitle}
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </FloatingCard>
      </div>
    </section>
  )
}
