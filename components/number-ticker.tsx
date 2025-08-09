"use client"

import { useEffect, useRef, useState } from "react"

type NumberTickerProps = {
  value: string | number
  duration?: number
  className?: string
}

export default function NumberTicker({ value, duration = 1200, className }: NumberTickerProps) {
  const [display, setDisplay] = useState<string>(typeof value === "number" ? String(value) : value)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const targetStr = String(value)
    const match = targetStr.match(/^(\d+(\.\d+)?)(.*)$/)
    const numeric = match ? Number.parseFloat(match[1]) : 0
    const suffix = match ? match[3] : ""

    const start = performance.now()
    const startVal = 0

    const step = (now: number) => {
      const elapsed = now - start
      const p = Math.min(1, elapsed / duration)
      const ease = 1 - Math.pow(1 - p, 3) // easeOutCubic
      const current = startVal + (numeric - startVal) * ease

      // Keep decimals if original had them
      const decimals = match && match[2] && match[2].includes(".") ? match[2].split(".")[1].length : 0
      setDisplay(`${current.toFixed(decimals)}${suffix}`)

      if (p < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [value, duration])

  return <span className={className}>{display}</span>
}
