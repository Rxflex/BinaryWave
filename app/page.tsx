"use client"

import { useState } from "react"
import DigitalBinaryWave from "@/components/digital-binary-wave"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Page() {
  const [config, setConfig] = useState({
    density: 200,
    speed: 0.3,
    waveAmplitude: 60,
    waveFrequency: 0.008,
    fontSize: 12,
    colors: {
      background: "#000000",
      primary: "#ffffff",
      secondary: "#cccccc",
    },
  })

  const presets = [
    {
      name: "Screenshot Style",
      config: {
        density: 200,
        speed: 0.3,
        waveAmplitude: 60,
        waveFrequency: 0.008,
        fontSize: 12,
        colors: {
          background: "#000000",
          primary: "#ffffff",
          secondary: "#cccccc",
        },
      },
    },
    {
      name: "Ocean Waves",
      config: {
        density: 180,
        speed: 0.6,
        waveAmplitude: 80,
        waveFrequency: 0.015,
        fontSize: 16,
        colors: {
          background: "#001122",
          primary: "#00ddff",
          secondary: "#0088bb",
        },
      },
    },
    {
      name: "Digital Tsunami",
      config: {
        density: 250,
        speed: 1.2,
        waveAmplitude: 120,
        waveFrequency: 0.008,
        fontSize: 14,
        colors: {
          background: "#000011",
          primary: "#00ff88",
          secondary: "#004444",
        },
      },
    },
    {
      name: "Calm Sea",
      config: {
        density: 120,
        speed: 0.4,
        waveAmplitude: 40,
        waveFrequency: 0.025,
        fontSize: 18,
        colors: {
          background: "#000808",
          primary: "#88ffff",
          secondary: "#446666",
        },
      },
    },
    {
      name: "Storm",
      config: {
        density: 300,
        speed: 2.5,
        waveAmplitude: 100,
        waveFrequency: 0.012,
        fontSize: 12,
        colors: {
          background: "#111111",
          primary: "#ffffff",
          secondary: "#666666",
        },
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white">Digital Binary Wave</h1>
          <p className="text-gray-400">Customizable flowing sea of 0s and 1s</p>
        </div>

        {/* Main Wave Display */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex justify-center">
              <DigitalBinaryWave
                width={800}
                height={400}
                density={config.density}
                speed={config.speed}
                waveAmplitude={config.waveAmplitude}
                waveFrequency={config.waveFrequency}
                fontSize={config.fontSize}
                colors={config.colors}
                className="border border-gray-600 rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Controls */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Controls</CardTitle>
              <CardDescription>Customize the binary wave effect</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Presets */}
              <div className="space-y-2">
                <Label className="text-white">Presets</Label>
                <div className="grid grid-cols-2 gap-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => setConfig(preset.config)}
                      className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Density */}
              <div className="space-y-2">
                <Label className="text-white">Density: {config.density}</Label>
                <Slider
                  value={[config.density]}
                  onValueChange={(value) => setConfig((prev) => ({ ...prev, density: value[0] }))}
                  max={300}
                  min={50}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Speed */}
              <div className="space-y-2">
                <Label className="text-white">Speed: {config.speed}</Label>
                <Slider
                  value={[config.speed]}
                  onValueChange={(value) => setConfig((prev) => ({ ...prev, speed: value[0] }))}
                  max={3}
                  min={0.1}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Wave Amplitude */}
              <div className="space-y-2">
                <Label className="text-white">Wave Amplitude: {config.waveAmplitude}</Label>
                <Slider
                  value={[config.waveAmplitude]}
                  onValueChange={(value) => setConfig((prev) => ({ ...prev, waveAmplitude: value[0] }))}
                  max={100}
                  min={0}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Wave Frequency */}
              <div className="space-y-2">
                <Label className="text-white">Wave Frequency: {config.waveFrequency}</Label>
                <Slider
                  value={[config.waveFrequency]}
                  onValueChange={(value) => setConfig((prev) => ({ ...prev, waveFrequency: value[0] }))}
                  max={0.05}
                  min={0.005}
                  step={0.005}
                  className="w-full"
                />
              </div>

              {/* Wave Layers */}
              <div className="space-y-2">
                <Label className="text-white">Wave Complexity</Label>
                <p className="text-xs text-gray-400">Higher values create more complex wave patterns</p>
                <Slider
                  value={[config.waveFrequency * 1000]}
                  onValueChange={(value) => setConfig((prev) => ({ ...prev, waveFrequency: value[0] / 1000 }))}
                  max={50}
                  min={5}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Font Size */}
              <div className="space-y-2">
                <Label className="text-white">Font Size: {config.fontSize}</Label>
                <Slider
                  value={[config.fontSize]}
                  onValueChange={(value) => setConfig((prev) => ({ ...prev, fontSize: value[0] }))}
                  max={24}
                  min={8}
                  step={1}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Color Controls */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Colors</CardTitle>
              <CardDescription>Customize the color scheme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white">Background Color</Label>
                <Input
                  type="color"
                  value={config.colors.background}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      colors: { ...prev.colors, background: e.target.value },
                    }))
                  }
                  className="w-full h-10"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white">Primary Color (1s)</Label>
                <Input
                  type="color"
                  value={config.colors.primary}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      colors: { ...prev.colors, primary: e.target.value },
                    }))
                  }
                  className="w-full h-10"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white">Secondary Color (0s)</Label>
                <Input
                  type="color"
                  value={config.colors.secondary}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      colors: { ...prev.colors, secondary: e.target.value },
                    }))
                  }
                  className="w-full h-10"
                />
              </div>

              {/* Small Preview */}
              <div className="mt-6">
                <Label className="text-white mb-2 block">Preview</Label>
                <DigitalBinaryWave
                  width={300}
                  height={150}
                  density={config.density / 2}
                  speed={config.speed}
                  waveAmplitude={config.waveAmplitude / 2}
                  waveFrequency={config.waveFrequency}
                  fontSize={config.fontSize - 2}
                  colors={config.colors}
                  className="border border-gray-600 rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Example */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Usage Example</CardTitle>
            <CardDescription>How to use the DigitalBinaryWave component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
              {`import DigitalBinaryWave from '@/components/digital-binary-wave'

export default function MyComponent() {
  return (
    <DigitalBinaryWave
      width={800}
      height={400}
      density={150}
      speed={1}
      waveAmplitude={30}
      waveFrequency={0.02}
      fontSize={14}
      colors={{
        background: "#000000",
        primary: "#00ff41",
        secondary: "#008f11"
      }}
    />
  )
}`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
