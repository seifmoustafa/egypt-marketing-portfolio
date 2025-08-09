"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { GradientText } from "@/components/ui/gradient-text"
import { companyInfo, portfolioData, portfolioSectionData } from "@/lib/mockdata"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Award className="w-5 h-5" />
            {portfolioSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText gradient="from-yellow-600 to-orange-600">{portfolioSectionData.title}</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {portfolioSectionData.subtitle.replace('{totalProjects}', companyInfo.totalProjects.toString())}
          </p>
        </motion.div>

        <FloatingCard className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-0 shadow-2xl">
            <CardContent className="p-12 md:p-16">
              <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
                {portfolioSectionData.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {portfolioData.slice(0, 8).map((item, i) => (
                  <FloatingCard key={i} index={i} className="group">
                    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center">
                      <CardContent className="p-6">
                        <div
                          className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        >
                          <AnimatedCounter end={item.count} className="text-white text-xl font-bold" />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-1">{item.sector}</h3>
                        <p className="text-xs text-gray-600">مشروع</p>
                      </CardContent>
                    </Card>
                  </FloatingCard>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-16 p-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl"
              >
                <p className="text-lg text-center text-gray-700 font-medium">
                  {portfolioSectionData.conclusionText}
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </FloatingCard>
      </div>
    </section>
  )
}
