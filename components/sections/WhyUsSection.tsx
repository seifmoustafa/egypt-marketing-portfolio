"use client"

import { motion } from "framer-motion"
import { Diamond, BarChart3, Shield, Eye, Star, TrendingUp, Users, Search, MousePointer, Share2, Camera, Building2, Play, Globe, Code, Smartphone, Database, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { GradientText } from "@/components/ui/gradient-text"
import { whyUsSectionData, performanceMetrics, caseStudies } from "@/lib/mockdata"

const iconMap = {
  BarChart3,
  Shield,
  Eye,
  Star,
  TrendingUp,
  Users,
  Search,
  MousePointer,
  Share2,
  Camera,
  Building2,
  Play,
  Globe,
  Monitor: Code,
  Smartphone,
  Database,
  Phone,
  Mail,
  MapPin,
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-32 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Diamond className="w-5 h-5" />
            {whyUsSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText gradient="from-green-600 to-blue-600">{whyUsSectionData.title}</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{whyUsSectionData.subtitle}</p>
        </motion.div>

        {/* Performance Metrics */}
        <FloatingCard className="max-w-7xl mx-auto mb-20">
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-2xl">
            <CardContent className="p-12 md:p-16">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
                <GradientText>{whyUsSectionData.metricsTitle}</GradientText>
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {performanceMetrics.map((metric, i) => {
                  const Icon = iconMap[metric.icon as keyof typeof iconMap]
                  return (
                    <FloatingCard key={i} index={i} className="group">
                      <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center">
                        <CardContent className="p-8">
                          <div className="mb-6">
                            {Icon && (
                              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-4 w-fit mx-auto mb-4">
                                <Icon className={`w-10 h-10 ${metric.color}`} />
                              </div>
                            )}
                            <AnimatedCounter
                              end={Number.parseInt(metric.value.replace(/[^\d]/g, "")) || 0}
                              suffix={metric.value.replace(/[\d]/g, "")}
                              className={`block text-4xl font-bold ${metric.color} mb-2`}
                            />
                          </div>
                          <h4 className="font-bold text-gray-800 mb-2">{metric.title}</h4>
                          <p className="text-sm text-gray-600">{metric.desc}</p>
                        </CardContent>
                      </Card>
                    </FloatingCard>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </FloatingCard>

        {/* Case Studies */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <FloatingCard key={i} index={i} className="group">
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className={`${study.color} text-white p-8 text-center`}>
                  <div className="text-5xl mb-4">{study.icon}</div>
                  <h3 className="text-2xl font-bold">{study.title}</h3>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed">{study.desc}</p>
                </CardContent>
              </Card>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  )
}
