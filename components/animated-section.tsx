"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  once?: boolean
}

const variants: Variants = {
  hidden: (custom: { y: number }) => ({ opacity: 0, y: custom?.y ?? 24, scale: 0.98 }),
  show: { opacity: 1, y: 0, scale: 1, transition: { ease: [0.22, 1, 0.36, 1] } },
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      custom={{ y }}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
