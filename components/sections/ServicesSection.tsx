"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Search, CheckCircle, BarChart3, Shield, Eye, Star, TrendingUp, MousePointer, Share2, Camera, Building2, Play, Globe, Code, Smartphone, Database, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { servicesSectionData, mainServices } from "@/lib/mockdata"

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

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Briefcase className="w-5 h-5" />
            {servicesSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText>{servicesSectionData.title}</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {servicesSectionData.subtitle}
          </p>
        </motion.div>

        {/* Featured Services */}
        <div className="space-y-20">
          {/* Consulting Service */}
          <FloatingCard className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 rounded-full p-3">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold">{mainServices[0].title}</h3>
                  </div>
                  <p className="text-xl text-blue-100 leading-relaxed">{mainServices[0].desc}</p>
                </div>
                <CardContent className="p-12">
                  <div className="space-y-6">
                    {mainServices[0].items?.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-2">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </FloatingCard>

          {/* SEO Service */}
          <FloatingCard className="max-w-7xl mx-auto" delay={0.2}>
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-0 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <CardContent className="p-12 order-2 lg:order-1">
                  <div className="space-y-6">
                    {mainServices[1].items?.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-full p-2">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-12 flex flex-col justify-center order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 rounded-full p-3">
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold">{mainServices[1].title}</h3>
                  </div>
                  <p className="text-xl text-green-100 leading-relaxed">{mainServices[1].desc}</p>
                </div>
              </div>
            </Card>
          </FloatingCard>

          {/* Other Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.slice(2).map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <FloatingCard key={i} index={i} className="group">
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                    <CardContent className="p-0">
                      {/* Header with Icon and Title - Fixed Height */}
                      <div className={`bg-gradient-to-br ${service.color} text-white p-8 relative overflow-hidden h-48 flex flex-col justify-center`}>
                        {/* Enhanced Background Pattern */}
                        <div className="absolute inset-0 bg-black/15"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                        
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
                      
                      {/* Content Area */}
                      <div className="p-8 bg-gradient-to-b from-white to-gray-50">
                        <div className="space-y-4">
                          {service.items?.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-full p-2.5 mt-0.5 flex-shrink-0 shadow-lg">
                                <CheckCircle className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-base text-gray-900 leading-relaxed font-semibold">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FloatingCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
