"use client"

import { motion } from "framer-motion"
import { Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { contentSections } from "@/lib/mockdata"

export function VisionSection() {
  return (
    <ParallaxSection className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Eye className="w-5 h-5" />
            رؤيتنا للمستقبل
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText>{contentSections.vision.title}</GradientText>
          </h2>
        </motion.div>

        <FloatingCard className="max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-12 md:p-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center font-medium mb-12">
                  {contentSections.vision.content}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />
                <p className="text-xl text-gray-600 text-center leading-relaxed">
                  {contentSections.vision.subtitle}
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </FloatingCard>
      </div>
    </ParallaxSection>
  )
}
