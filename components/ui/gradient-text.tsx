"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export function GradientText({
  children,
  className = "",
  gradient = "from-blue-600 via-purple-600 to-indigo-600",
}: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold ${className}`}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      style={{ backgroundSize: "200% 200%" }}
    >
      {children}
    </motion.span>
  )
}
