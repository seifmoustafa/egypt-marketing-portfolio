"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GradientText } from "@/components/ui/gradient-text"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { companyInfo, finalSectionData } from "@/lib/mockdata"

export function FinalSection() {
  return (
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
  )
}
