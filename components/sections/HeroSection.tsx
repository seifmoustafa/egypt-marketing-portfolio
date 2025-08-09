"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Crown, Rocket, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/ui/floating-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { GradientText } from "@/components/ui/gradient-text"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { companyInfo, heroSectionData, contentSections } from "@/lib/mockdata"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])

  return (
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
  )
}
