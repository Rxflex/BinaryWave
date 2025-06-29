"use client"

import { useEffect, useRef, useState } from "react"

interface DigitalBinaryWaveProps {
  width?: number
  height?: number
  density?: number
  speed?: number
  colors?: {
    background?: string
    primary?: string
    secondary?: string
  }
  waveAmplitude?: number
  waveFrequency?: number
  fontSize?: number
  className?: string
}

interface BinaryDigit {
  x: number
  y: number
  value: string
  opacity: number
  speed: number
  phase: number
}

export default function DigitalBinaryWave({
  width = 800,
  height = 400,
  density = 100,
  speed = 1,
  colors = {
    background: "#000000",
    primary: "#ffffff",
    secondary: "#888888",
  },
  waveAmplitude = 50,
  waveFrequency = 0.02,
  fontSize = 14,
  className = "",
}: DigitalBinaryWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [digits, setDigits] = useState<BinaryDigit[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Initialize binary digits
    const newDigits: BinaryDigit[] = []
    const cols = Math.floor(width / (fontSize * 0.8))
    const rows = Math.floor(height / fontSize)

    for (let i = 0; i < density; i++) {
      newDigits.push({
        x: Math.random() * width,
        y: Math.random() * height,
        value: Math.random() > 0.5 ? "1" : "0",
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * speed + 0.5,
        phase: Math.random() * Math.PI * 2,
      })
    }

    setDigits(newDigits)

    let time = 0

    const animate = () => {
      ctx.fillStyle = colors.background || "#000000"
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px 'Courier New', monospace`
      ctx.textAlign = "center"

      newDigits.forEach((digit, index) => {
        // Более плавная волновая система как на скриншоте
        const primaryWave = Math.sin(digit.x * waveFrequency + time * 0.008) * waveAmplitude
        const secondaryWave = Math.sin(digit.x * waveFrequency * 1.7 + time * 0.012) * (waveAmplitude * 0.4)
        const tertiaryWave = Math.sin(digit.x * waveFrequency * 0.3 + time * 0.006) * (waveAmplitude * 0.8)

        // Комбинированная волна с более мягкими переходами
        const combinedWave = primaryWave + secondaryWave + tertiaryWave

        // Очень медленное вертикальное движение
        const verticalFlow = Math.sin(time * 0.003 + index * 0.05) * 5

        // Медленное горизонтальное движение
        digit.x -= digit.speed * speed * 0.5

        // Финальная Y позиция
        const currentY = digit.y + combinedWave + verticalFlow

        // Эффект глубины как на скриншоте
        const depth = (Math.sin(digit.x * 0.003 + time * 0.004) + 1) * 0.5
        const depthScale = 0.7 + depth * 0.3
        const currentFontSize = fontSize * depthScale

        // Сброс позиции
        if (digit.x < -fontSize * 3) {
          digit.x = width + fontSize + Math.random() * 200
          digit.y = Math.random() * height
          digit.value = Math.random() > 0.5 ? "1" : "0"
          digit.opacity = Math.random() * 0.6 + 0.4
          digit.speed = Math.random() * speed + 0.2
        }

        // Прозрачность как на скриншоте - более мягкие переходы
        const waveIntensity = (Math.sin(combinedWave * 0.01) + 1) * 0.5
        const baseOpacity = 0.4 + waveIntensity * 0.6
        const depthOpacity = 0.3 + depth * 0.7
        const finalOpacity = digit.opacity * baseOpacity * depthOpacity

        // Цвет - белый и светло-серый как на скриншоте
        const color = digit.value === "1" ? colors.primary || "#ffffff" : colors.secondary || "#cccccc"

        // Легкое размытие для дальних элементов
        if (depth < 0.4) {
          ctx.filter = "blur(0.5px)"
        } else {
          ctx.filter = "none"
        }

        ctx.font = `${currentFontSize}px 'Courier New', monospace`
        ctx.fillStyle = `${color}${Math.floor(finalOpacity * 255)
          .toString(16)
          .padStart(2, "0")}`

        // Рендер без лишних эффектов для чистоты как на скриншоте
        ctx.fillText(digit.value, digit.x, currentY)

        // Обновление фазы
        digit.phase += 0.005 * speed

        // Редкое изменение цифр
        if (Math.random() < 0.0005) {
          digit.value = Math.random() > 0.5 ? "1" : "0"
        }
      })

      // Сброс фильтра
      ctx.filter = "none"

      time += 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [width, height, density, speed, colors, waveAmplitude, waveFrequency, fontSize])

  return (
    <canvas
      ref={canvasRef}
      className={`${className}`}
      style={{
        display: "block",
        background: colors.background,
      }}
    />
  )
}
