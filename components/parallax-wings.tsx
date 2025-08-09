"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

type ParallaxWingsProps = {
  intensity?: number
  className?: string
}

export default function ParallaxWings({ intensity = 40, className }: ParallaxWingsProps) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, intensity])
  const y2 = useTransform(scrollY, [0, 600], [0, -intensity * 0.7])
  const rot1 = useTransform(scrollY, [0, 600], [0, 6])
  const rot2 = useTransform(scrollY, [0, 600], [0, -4])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}>
      <motion.div
        style={{ y: y1, rotate: rot1 }}
        className="absolute -top-24 -right-28 opacity-[0.05] md:opacity-[0.08]"
        aria-hidden="true"
      >
        <Image
          src="/wing-transparent.png"
          alt=""
          width={700}
          height={700}
          className="w-[380px] md:w-[520px] lg:w-[680px]"
        />
      </motion.div>
      <motion.div
        style={{ y: y2, rotate: rot2 }}
        className="absolute -bottom-32 -left-28 opacity-[0.05] md:opacity-[0.08]"
        aria-hidden="true"
      >
        <Image
          src="/wing-transparent.png"
          alt=""
          width={700}
          height={700}
          className="w-[340px] md:w-[480px] lg:w-[640px] -scale-x-100"
        />
      </motion.div>
    </div>
  )
}
