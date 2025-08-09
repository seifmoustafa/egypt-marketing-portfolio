"use client"

import { useEffect, useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Eye,
  Target,
  Heart,
  Users,
  Briefcase,
  Code,
  Video,
  Award,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Search,
  MousePointer,
  Share2,
  Camera,
  Smartphone,
  Database,
  Building2,
  Star,
  ArrowRight,
  Play,
  Calendar,
  Sparkles,
  Rocket,
  Crown,
  Diamond,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { FloatingCard } from "@/components/ui/floating-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { GradientText } from "@/components/ui/gradient-text"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ParallaxSection } from "@/components/ui/parallax-section"
import {
  sections,
  portfolioData,
  companyValues,
  mainServices,
  productionServices,
  developmentServices,
  performanceMetrics,
  caseStudies,
  contactInfo,
  socialLinks,
  contentSections,
  companyInfo,
  headerTexts,
  heroSectionData,
  servicesSectionData,
  productionSectionData,
  developmentSectionData,
  portfolioSectionData,
  whyUsSectionData,
  conclusionSectionData,
  contactSectionData,
  finalSectionData,
} from "@/lib/mockdata"
import { ScrollIndicator } from "@/components/scroll-indicator"

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

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("intro")
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      const scrollPositionWithOffset = scrollPosition + 100
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPositionWithOffset >= offsetTop && scrollPositionWithOffset < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir="rtl">
      {/* Ultra Premium Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-3xl shadow-2xl border-b border-gray-200/50 py-3"
            : "bg-black/20 backdrop-blur-2xl py-6 border-b border-white/10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo with Better Visibility */}
            <motion.div
              className="flex items-center gap-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative group">
                {/* Animated Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                />

                {/* Logo Container with Enhanced Design */}
                <div
                  className={`relative transition-all duration-500 ${
                    isScrolled
                      ? "bg-white rounded-2xl p-3 shadow-xl border border-gray-200/50"
                      : "bg-white/25 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border border-white/40"
                  }`}
                >
                  <Image
                    src="/logo-transparent.png"
                    alt={companyInfo.name}
                    width={140}
                    height={90}
                    className={`transition-all duration-500 ${isScrolled ? "h-10 w-auto" : "h-14 w-auto"}`}
                  />

                  {/* Sparkle Effect */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80"
                  />
                </div>
              </div>

              {/* Enhanced Company Name with Better Contrast */}
              <div className="hidden md:block">
                <motion.h1
                  className={`font-bold transition-all duration-500 whitespace-nowrap ${
                    isScrolled
                      ? "text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                      : "text-xl text-white drop-shadow-2xl"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  style={{ textShadow: isScrolled ? "none" : "0 2px 4px rgba(0,0,0,0.5)" }}
                >
                  {companyInfo.name}
                </motion.h1>
                <motion.p
                  className={`text-sm font-medium transition-all duration-500 whitespace-nowrap ${
                    isScrolled ? "text-blue-600" : "text-blue-200 drop-shadow-lg"
                  }`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ textShadow: isScrolled ? "none" : "0 1px 2px rgba(0,0,0,0.5)" }}
                >
                  {companyInfo.tagline}
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation with Better Visibility */}
            <nav className="hidden xl:flex items-center gap-2">
              <div
                className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 ${
                  isScrolled
                    ? "bg-gray-50/80 backdrop-blur-xl shadow-xl border border-gray-200/50"
                    : "bg-white/25 backdrop-blur-2xl shadow-2xl border border-white/40"
                }`}
              >
                {sections.slice(0, 8).map((s, i) => (
                  <motion.button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group whitespace-nowrap ${
                      activeSection === s.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : isScrolled
                          ? "text-gray-700 hover:bg-white hover:shadow-md"
                          : "text-white hover:bg-white/30 drop-shadow-lg"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      textShadow: isScrolled || activeSection === s.id ? "none" : "0 1px 2px rgba(0,0,0,0.5)",
                    }}
                  >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                    <span className="relative z-10">{s.title}</span>
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Enhanced CTA Button with Better Visibility */}
            <div className="hidden lg:flex">
              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className={`group relative overflow-hidden rounded-full font-bold shadow-2xl transition-all duration-500 ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 hover:shadow-blue-500/30"
                    : "bg-white/30 backdrop-blur-xl border-2 border-white/50 text-white px-10 py-5 hover:bg-white/40 shadow-white/20"
                }`}
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                <span
                  className="relative z-10 flex items-center gap-3 whitespace-nowrap"
                  style={{
                    textShadow: isScrolled ? "none" : "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  {headerTexts.contactButton}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>

                {/* Shine Effect */}
                <motion.div
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                />
              </MagneticButton>
            </div>

            {/* Enhanced Mobile Menu Button with Better Visibility */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`xl:hidden relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? "bg-white shadow-xl border border-gray-200/50"
                  : "bg-white/30 backdrop-blur-xl border-2 border-white/50 shadow-2xl"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className={`absolute w-6 h-0.5 rounded-full top-2 transition-colors duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white drop-shadow-lg"
                  }`}
                  style={{
                    filter: isScrolled ? "none" : "drop-shadow(0 1px 1px rgba(0,0,0,0.5))",
                  }}
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`absolute w-6 h-0.5 rounded-full top-4 transition-colors duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white drop-shadow-lg"
                  }`}
                  style={{
                    filter: isScrolled ? "none" : "drop-shadow(0 1px 1px rgba(0,0,0,0.5))",
                  }}
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className={`absolute w-6 h-0.5 rounded-full top-6 transition-colors duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white drop-shadow-lg"
                  }`}
                  style={{
                    filter: isScrolled ? "none" : "drop-shadow(0 1px 1px rgba(0,0,0,0.5))",
                  }}
                />
              </div>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="xl:hidden mt-4 bg-white/95 backdrop-blur-3xl rounded-3xl mx-4 shadow-2xl border border-gray-200/50 overflow-hidden"
              >
                <div className="p-6">
                  {sections.map((s, i) => (
                    <motion.button
                      key={s.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full text-right p-4 rounded-2xl font-semibold transition-all duration-300 mb-2 relative overflow-hidden group ${
                        activeSection === s.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      whileHover={{ scale: 1.02, x: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <span className="relative z-10">{s.title}</span>
                    </motion.button>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <MagneticButton
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <Rocket className="w-5 h-5" />
                        ابدأ رحلتك معنا
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </MagneticButton>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <ScrollIndicator />

      <main className="pt-24 md:pt-28">
        {/* Revolutionary Hero Section */}
        <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
          />

          {/* Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="relative inline-block group  mt-24">
                {/* Enhanced Rotating Glow */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />

                {/* Pulsing Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 border-2 border-white/30 rounded-3xl"
                />

                <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl">
                  <Image
                    src="/logo-transparent.png"
                    alt={companyInfo.name}
                    width={600}
                    height={300}
                    className="h-32 md:h-48 w-auto mx-auto filter drop-shadow-2xl"
                  />

                  {/* Floating Sparkles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 2) * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                <span className="block">{heroSectionData.welcomeText}</span>
                <GradientText className="text-5xl md:text-8xl" gradient="from-blue-400 via-purple-400 to-pink-400">
                  {heroSectionData.companyNameDisplay}
                </GradientText>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              {contentSections.intro.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-500"
              >
                <span className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  {heroSectionData.startJourneyButton}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection("services")}
                className="group bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-6 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-500"
              >
                <span className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  {heroSectionData.discoverServicesButton}
                </span>
              </MagneticButton>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-20 items-stretch"
            >
              <FloatingCard className="group h-full">
                <Card className="h-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-500">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      {heroSectionData.sinceYear} <AnimatedCounter end={companyInfo.foundedYear} />
                    </h3>
                    <p className="text-gray-300">{companyInfo.tagline}</p>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard className="group h-full" delay={0.1}>
                <Card className="h-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-500">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      {heroSectionData.moreThan} <AnimatedCounter end={companyInfo.totalProjects} suffix="+" /> {heroSectionData.projectText}
                    </h3>
                    <p className="text-gray-300">{heroSectionData.marketDescription}</p>
                  </CardContent>
                </Card>
              </FloatingCard>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Vision Section - Premium Design */}
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

        {/* Mission Section */}
        <section id="mission" className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50/50 to-teal-50/50" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <Target className="w-5 h-5" />
                مهمتنا الأساسية
              </div>
              <h2 className="text-5xl md:text-7xl font-bold">
                <GradientText gradient="from-green-600 to-teal-600">{contentSections.mission.title}</GradientText>
              </h2>
            </motion.div>

            <FloatingCard className="max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-white to-green-50/50 border-0 shadow-2xl">
                <CardContent className="p-12 md:p-16">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-2xl md:text-3xl text-gray-700 text-center font-medium mb-10">
                      {contentSections.mission.content}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-10 rounded-full" />
                    <p className="text-xl text-gray-600 text-center leading-relaxed">
                      {contentSections.mission.subtitle}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </FloatingCard>
          </div>
        </section>

        {/* Goal Section */}
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

        {/* Values Section - Creative Layout */}
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
                قيمنا الجوهرية
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                <GradientText gradient="from-white to-gray-300">القيم التي نؤمن بها</GradientText>
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

        {/* Services Section - Revolutionary Design */}
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
                        <div className={`bg-gradient-to-r ${service.color} text-white p-8`}>
                          <div className="flex items-center gap-3 mb-4">
                            {Icon && <Icon className="w-8 h-8" />}
                            <h3 className="text-xl font-bold">{service.title}</h3>
                          </div>
                        </div>
                        <CardContent className="p-8">
                          <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                        </CardContent>
                      </Card>
                    </FloatingCard>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Production Section */}
        <section id="production" className="py-32 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-3 bg-red-100 text-red-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <Video className="w-5 h-5" />
                {productionSectionData.badge}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                <GradientText gradient="from-red-600 to-pink-600">{productionSectionData.title}</GradientText>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {productionSectionData.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productionServices.map((service, i) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <FloatingCard key={i} index={i} className="group">
                    <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                      <div className={`${service.color} text-white p-8`}>
                        <div className="flex items-center gap-3 mb-4">
                          {Icon && <Icon className="w-8 h-8" />}
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-white/90 text-sm">{service.desc}</p>
                      </div>
                      <CardContent className="p-8">
                        <ul className="space-y-3">
                          {service.items?.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="bg-green-100 rounded-full p-1 mt-1">
                                <CheckCircle className="w-3 h-3 text-green-600" />
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

        {/* Development Section */}
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

        {/* Portfolio Section */}
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
                إنجازاتنا
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                <GradientText gradient="from-yellow-600 to-orange-600">سابقة أعمالنا</GradientText>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                على مدار أكثر من {companyInfo.totalProjects} مشروع في السوق المصري والعربي
              </p>
            </motion.div>

            <FloatingCard className="max-w-7xl mx-auto">
              <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-0 shadow-2xl">
                <CardContent className="p-12 md:p-16">
                  <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
                    عملنا مع مجموعة واسعة من العملاء في مختلف القطاعات، مما أكسبنا خبرة عملية عميقة، ومهارة في تخصيص
                    الحلول التسويقية بما يتناسب مع طبيعة كل نشاط.
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

        {/* Why Us Section */}
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

        {/* Conclusion Section */}
        <section
          id="conclusion"
          className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-12">
                <GradientText gradient="from-white to-gray-300">{contentSections.conclusion.title}</GradientText>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mb-8 leading-relaxed">
                {contentSections.conclusion.content}
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
                {contentSections.conclusion.subtitle}
              </p>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-4">{conclusionSectionData.callToActionTitle}</h3>
                <p className="text-xl text-blue-300 mb-12">{conclusionSectionData.callToActionSubtitle}</p>

                <MagneticButton
                  onClick={() => scrollToSection("contact")}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-16 py-8 rounded-full text-xl font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-500"
                >
                  <span className="flex items-center gap-4">
                    <Rocket className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                    {conclusionSectionData.startProjectButton}
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </span>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
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

        {/* Final Section */}
        <section
          id="final"
          className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative inline-block mb-12">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-30"
                />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <Image
                    src="/logo-transparent.png"
                    alt={companyInfo.name}
                    width={400}
                    height={200}
                    className="h-20 md:h-24 w-auto mx-auto"
                  />
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                <GradientText gradient="from-white to-gray-300">{companyInfo.name}</GradientText>
              </h2>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-2xl font-bold text-blue-300 mb-6">"{companyInfo.tagline}"</p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {finalSectionData.motto}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                {finalSectionData.socialPlatforms.map((platform, i) => (
                  <MagneticButton
                    key={i}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    {platform}
                  </MagneticButton>
                ))}
              </div>

              <div className="pt-12 border-t border-white/20">
                <p className="text-gray-400 text-lg mb-4">{finalSectionData.footerText}</p>
                <p className="text-gray-500 text-sm">© 2024 {companyInfo.name}. {finalSectionData.copyrightText}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
