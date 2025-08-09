"use client"

import { motion } from "framer-motion"
import { Sparkles, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { designServices, designSectionData } from "@/lib/mockdata"

export function DesignSection() {
  return (
    <section id="design" className="py-32 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Sparkles className="w-5 h-5" />
            {designSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText gradient="from-purple-600 to-indigo-600">{designSectionData.title}</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {designSectionData.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designServices.map((service, i) => {
            return (
              <FloatingCard key={i} index={i} className="group">
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-purple-100 text-sm">{service.desc}</p>
                  </div>
                  <CardContent className="p-8">
                    <ul className="space-y-3">
                      {service.items?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-purple-100 rounded-full p-1 mt-1">
                            <CheckCircle className="w-3 h-3 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FloatingCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
