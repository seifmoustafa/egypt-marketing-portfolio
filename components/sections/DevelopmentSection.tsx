"use client"

import { motion } from "framer-motion"
import { Code, CheckCircle, BarChart3, Shield, Eye, Star, TrendingUp, Users, Search, MousePointer, Share2, Camera, Building2, Play, Globe, Smartphone, Database, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { developmentSectionData, developmentServices } from "@/lib/mockdata"

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

export function DevelopmentSection() {
  return (
    <section
      id="development"
      className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <Code className="w-5 h-5 text-blue-400" />
            {developmentSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText gradient="from-blue-400 to-cyan-400">{developmentSectionData.title}</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {developmentSectionData.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {developmentServices.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <FloatingCard key={i} index={i} className="group">
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-500 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="mb-6">
                      {Icon && (
                        <div className="bg-blue-500/20 rounded-full p-4 w-fit mx-auto mb-4">
                          <Icon className="w-12 h-12 text-blue-400" />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">{service.desc}</p>
                    </div>
                    <ul className="space-y-3 flex-grow">
                      {service.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="bg-green-500/20 rounded-full p-1">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <span className="text-sm text-gray-200">{feature}</span>
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
