"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, ArrowRight, Rocket } from "lucide-react"
import Image from "next/image"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { sections, companyInfo, headerTexts } from "@/lib/mockdata"

interface HeaderProps {
  isScrolled: boolean
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function Header({ isScrolled, activeSection, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          {/* Logo - First Component with Responsive Design */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
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
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              />

              {/* Logo Container with Responsive Design */}
              <div
                className={`relative transition-all duration-500 ${
                  isScrolled
                    ? "bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg sm:shadow-xl border border-gray-200/50"
                    : "bg-white/25 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-5 shadow-xl sm:shadow-2xl border border-white/40"
                }`}
              >
                <Image
                  src="/logo-transparent.png"
                  alt={companyInfo.name}
                  width={160}
                  height={100}
                  className={`transition-all duration-500 ${
                    isScrolled 
                      ? "h-6 sm:h-8 lg:h-10 w-auto" 
                      : "h-8 sm:h-10 lg:h-12 w-auto"
                  }`}
                  priority
                />

                {/* Enhanced Sparkle Effects */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
                />
              </div>
            </div>

            {/* Company Name - Responsive Visibility */}
            <div className="hidden md:block">
              <motion.h1
                className={`font-bold transition-all duration-500 ${
                  isScrolled
                    ? "text-base sm:text-lg lg:text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    : "text-lg sm:text-xl lg:text-2xl text-white drop-shadow-2xl"
                }`}
                whileHover={{ scale: 1.02 }}
                style={{ textShadow: isScrolled ? "none" : "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                {companyInfo.name}
              </motion.h1>
              <motion.p
                className={`text-xs sm:text-sm font-medium transition-all duration-500 ${
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

          {/* Responsive Desktop Navigation */}
          <nav className="hidden xl:flex items-center flex-1 justify-center mx-2">
            <div
              className={`flex items-center gap-1 xl:gap-1.5 rounded-full px-2 xl:px-3 py-1.5 xl:py-2 transition-all duration-500 overflow-hidden ${
                isScrolled
                  ? "bg-gray-50/80 backdrop-blur-xl shadow-lg border border-gray-200/50"
                  : "bg-white/25 backdrop-blur-2xl shadow-xl border border-white/40"
              }`}
            >
              {sections.slice(0, 8).map((s, i) => (
                <motion.button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-medium xl:font-semibold transition-all duration-300 relative overflow-hidden group ${
                    activeSection === s.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm"
                      : isScrolled
                        ? "text-gray-700 hover:bg-white hover:shadow-sm"
                        : "text-white hover:bg-white/30 drop-shadow-lg"
                  }`}
                  whileHover={{ scale: 1.02 }}
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
                  <span className="relative z-10 truncate max-w-[70px] xl:max-w-none">{s.title}</span>
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Compact Contact Button - Responsive */}
          <div className="flex flex-shrink-0">
            <MagneticButton
              onClick={() => scrollToSection("contact")}
              className={`group relative overflow-hidden rounded-full font-medium shadow-sm transition-all duration-500 ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 hover:shadow-blue-500/30 text-xs"
                  : "bg-white/30 backdrop-blur-xl border border-white/50 text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 hover:bg-white/40 shadow-white/20 text-xs"
              }`}
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              <span
                className="relative z-10 flex items-center gap-1 sm:gap-1.5"
                style={{
                  textShadow: isScrolled ? "none" : "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden lg:inline">{headerTexts.contactButton}</span>
                <span className="lg:hidden">اتصل</span>
              </span>

              {/* Shine Effect */}
              <motion.div
                animate={{ x: [-100, 200] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
              />
            </MagneticButton>
          </div>

          {/* Responsive Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
              isScrolled
                ? "bg-white shadow-lg sm:shadow-xl border border-gray-200/50"
                : "bg-white/30 backdrop-blur-xl border border-white/50 sm:border-2 shadow-xl sm:shadow-2xl"
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
                    onClick={() => {
                      scrollToSection(s.id)
                      setIsMenuOpen(false)
                    }}
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
                    onClick={() => {
                      scrollToSection("contact")
                      setIsMenuOpen(false)
                    }}
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
  )
}
