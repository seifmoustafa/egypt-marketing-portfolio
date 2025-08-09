"use client"

import { motion } from "framer-motion"
import { Heart, BarChart3, Shield, Eye, Star, TrendingUp, Users, Search, MousePointer, Share2, Camera, Building2, Play, Globe, Code, Smartphone, Database, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { companyValues, valuesSectionData } from "@/lib/mockdata"

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

export function ValuesSection() {
  return (
    <section
      id="values"
      className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <Heart className="w-5 h-5 text-red-400" />
            {valuesSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText gradient="from-white to-gray-300">{valuesSectionData.title}</GradientText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {companyValues.map((value, i) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap]
            return (
              <FloatingCard key={i} index={i} className="group">
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-500 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="mb-6">
                      {Icon && (
                        <div className="relative">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30"
                          />
                          <div className="relative bg-white/10 rounded-full p-4 w-fit mx-auto">
                            <Icon className={`w-12 h-12 ${value.color}`} />
                          </div>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-grow">{value.desc}</p>
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
