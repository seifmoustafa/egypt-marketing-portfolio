"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { contentSections } from "@/lib/mockdata"

export function GoalSection() {
  return (
    <section id="goal" className="py-32 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Zap className="w-5 h-5" />
            هدفنا الاستراتيجي
          </div>
          <h2 className="text-5xl md:text-7xl font-bold">
            <GradientText gradient="from-purple-600 to-pink-600">{contentSections.goal.title}</GradientText>
          </h2>
        </motion.div>

        <FloatingCard className="max-w-6xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-2xl">
            <CardContent className="p-12 md:p-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-12">
                  {contentSections.goal.content}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-12 rounded-full" />
                <p className="text-xl text-gray-600 leading-relaxed">{contentSections.goal.subtitle}</p>
              </motion.div>
            </CardContent>
          </Card>
        </FloatingCard>
      </div>
    </section>
  )
}
