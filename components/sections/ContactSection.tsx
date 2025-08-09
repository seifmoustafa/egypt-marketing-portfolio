"use client"

import { motion } from "framer-motion"
import { Phone, BarChart3, Shield, Eye, Star, TrendingUp, Users, Search, MousePointer, Share2, Camera, Building2, Play, Globe, Code, Smartphone, Database, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { contactSectionData, contactInfo, socialLinks } from "@/lib/mockdata"

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

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Phone className="w-5 h-5" />
            {contactSectionData.badge}
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <GradientText>{contactSectionData.title}</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {contactSectionData.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {contactInfo.map((contact, i) => {
            const Icon = iconMap[contact.icon as keyof typeof iconMap]
            return (
              <FloatingCard key={i} index={i} className="group">
                <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      {Icon && (
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-4 w-fit mx-auto mb-4">
                          <Icon className={`w-12 h-12 ${contact.color}`} />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{contact.title}</h3>
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 mb-2">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </FloatingCard>
            )
          })}
        </div>

        <FloatingCard className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-0 shadow-2xl">
            <CardContent className="p-12 md:p-16 text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-12">تابعنا على وسائل التواصل الاجتماعي</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                {socialLinks.map((social, i) => (
                  <MagneticButton
                    key={i}
                    className={`${social.color} px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300`}
                  >
                    {social.name} - {social.handle}
                  </MagneticButton>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-700 mt-12 font-medium"
              >
                نحن لا ننتظر الفرص… نحن نخلقها.
              </motion.p>
            </CardContent>
          </Card>
        </FloatingCard>
      </div>
    </section>
  )
}
