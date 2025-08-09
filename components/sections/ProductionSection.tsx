"use client"

import { motion } from "framer-motion"
import { Video, CheckCircle, BarChart3, Shield, Eye, Star, TrendingUp, Users, Search, MousePointer, Share2, Camera, Building2, Play, Globe, Code, Smartphone, Database, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { productionSectionData, productionServices } from "@/lib/mockdata"

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

export function ProductionSection() {
  return (
    <section id="production" className="py-32 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-lg border border-red-200">
            <Video className="w-6 h-6" />
            {productionSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText gradient="from-red-600 via-pink-600 to-rose-600">{productionSectionData.title}</GradientText>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            {productionSectionData.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productionServices.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <FloatingCard key={i} index={i} className="group">
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  {/* Enhanced Header with Fixed Height */}
                  <div className={`bg-gradient-to-br ${service.color} text-white p-8 relative overflow-hidden h-52 flex flex-col justify-center`}>
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-black/15"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                    
                    {/* Floating Particles */}
                    {[...Array(3)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                          left: `${20 + idx * 30}%`,
                          top: `${20 + idx * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 2 + idx * 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: idx * 0.3,
                        }}
                      />
                    ))}

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/30">
                          {Icon && <Icon className="w-8 h-8 text-white drop-shadow-xl" />}
                        </div>
                        <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-xl">{service.title}</h3>
                      </div>
                      <p className="text-white text-lg leading-relaxed drop-shadow-lg font-medium">{service.desc}</p>
                    </div>
                  </div>

                  {/* Enhanced Content Area */}
                  <CardContent className="p-8 bg-gradient-to-b from-white to-gray-50">
                    <div className="space-y-4">
                      {service.items?.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                        >
                          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-full p-2.5 mt-0.5 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-base text-gray-900 leading-relaxed font-semibold group-hover:text-gray-800 transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
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
