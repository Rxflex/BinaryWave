# 🌊 BinaryWave

A beautiful, customizable React component that creates flowing waves of binary digits (0s and 1s). Perfect for adding a digital ocean effect to your applications.

![BinaryWave Demo](https://raw.githubusercontent.com/Rxflex/BinaryWave/main/demo.gif)

## ✨ Features

- 🌊 **Realistic Wave Physics** - Multi-layered wave system with natural motion
- 🎨 **Fully Customizable** - Colors, speed, density, wave patterns, and more
- 📱 **Responsive** - Works on all screen sizes
- ⚡ **High Performance** - Optimized Canvas rendering
- 🎭 **Multiple Presets** - Ocean, Storm, Matrix, and more
- 🔧 **TypeScript Support** - Full type safety
- 🎯 **Zero Dependencies** - Only requires React

## 🚀 Installation

### Option 1: Using shadcn/ui (Recommended)

\`\`\`bash
npx shadcn@latest add https://raw.githubusercontent.com/Rxflex/BinaryWave/main/registry.json
\`\`\`

### Option 2: Using npm

\`\`\`bash
npm install binary-wave-react
\`\`\`

### Option 3: Manual Installation

1. Copy the component file to your project:

\`\`\`bash
curl -o src/components/ui/binary-wave.tsx https://raw.githubusercontent.com/Rxflex/BinaryWave/main/src/components/binary-wave.tsx
\`\`\`

2. Import and use:

\`\`\`tsx
import BinaryWave from '@/components/ui/binary-wave'
\`\`\`

## 📖 Usage

### Basic Usage

\`\`\`tsx
import BinaryWave from '@/components/ui/binary-wave'

export default function App() {
  return (
    <div className="w-full h-screen">
      <BinaryWave />
    </div>
  )
}
\`\`\`

### Advanced Usage

\`\`\`tsx
import BinaryWave from '@/components/ui/binary-wave'

export default function App() {
  return (
    <BinaryWave
      width={800}
      height={400}
      density={200}
      speed={0.5}
      waveAmplitude={60}
      waveFrequency={0.015}
      fontSize={14}
      colors={{
        background: "#000000",
        primary: "#00ff41",
        secondary: "#008f11"
      }}
      className="rounded-lg border"
    />
  )
}
\`\`\`

### Using Presets

\`\`\`tsx
import BinaryWave, { presets } from '@/components/ui/binary-wave'

export default function App() {
  return (
    <BinaryWave
      {...presets.ocean}
      width={1200}
      height={600}
    />
  )
}
\`\`\`

## 🎛️ API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`width\` | \`number\` | \`800\` | Canvas width in pixels |
| \`height\` | \`number\` | \`400\` | Canvas height in pixels |
| \`density\` | \`number\` | \`100\` | Number of binary digits (50-300) |
| \`speed\` | \`number\` | \`1\` | Animation speed multiplier (0.1-3) |
| \`waveAmplitude\` | \`number\` | \`50\` | Wave height in pixels (0-100) |
| \`waveFrequency\` | \`number\` | \`0.02\` | Wave frequency (0.005-0.05) |
| \`fontSize\` | \`number\` | \`14\` | Font size of digits (8-24) |
| \`colors\` | \`object\` | \`{...}\` | Color configuration |
| \`colors.background\` | \`string\` | \`"#000000"\` | Background color |
| \`colors.primary\` | \`string\` | \`"#ffffff"\` | Color for "1" digits |
| \`colors.secondary\` | \`string\` | \`"#888888"\` | Color for "0" digits |
| \`className\` | \`string\` | \`""\` | Additional CSS classes |

### Presets

\`\`\`tsx
import { presets } from '@/components/ui/binary-wave'

// Available presets:
presets.screenshot  // Classic black & white
presets.ocean      // Blue ocean waves
presets.matrix     // Green Matrix style
presets.storm      // Chaotic storm effect
presets.calm       // Gentle calm waves
\`\`\`

## 🎨 Examples

### Matrix Effect
\`\`\`tsx
<BinaryWave
  density={200}
  speed={1.5}
  colors={{
    background: "#000000",
    primary: "#00ff41",
    secondary: "#008f11"
  }}
/>
\`\`\`

### Ocean Waves
\`\`\`tsx
<BinaryWave
  density={150}
  speed={0.6}
  waveAmplitude={80}
  colors={{
    background: "#001122",
    primary: "#00ddff",
    secondary: "#0088bb"
  }}
/>
\`\`\`

### Calm Digital Sea
\`\`\`tsx
<BinaryWave
  density={100}
  speed={0.3}
  waveAmplitude={30}
  waveFrequency={0.025}
  colors={{
    background: "#000808",
    primary: "#88ffff",
    secondary: "#446666"
  }}
/>
\`\`\`

## 🎯 Use Cases

- **Hero Sections** - Eye-catching backgrounds
- **Loading Screens** - Animated loading states  
- **Tech Presentations** - Digital/cyber themes
- **Data Visualization** - Abstract data flow
- **Gaming UI** - Sci-fi interface elements
- **Portfolio Sites** - Creative developer showcases

## 🛠️ Development

### Local Development

\`\`\`bash
git clone https://github.com/Rxflex/BinaryWave.git
cd BinaryWave
npm install
npm run dev
\`\`\`

### Building

\`\`\`bash
npm run build
\`\`\`

### Testing

\`\`\`bash
npm run test
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by digital ocean and matrix rain effects
- Built with React and HTML5 Canvas
- Compatible with shadcn/ui design system

## 📞 Support

- 🐛 [Report Issues](https://github.com/Rxflex/BinaryWave/issues)
- 💬 [Discussions](https://github.com/Rxflex/BinaryWave/discussions)
- ⭐ [Star on GitHub](https://github.com/Rxflex/BinaryWave)

---

Made with ❤️ by [Rxflex](https://github.com/Rxflex)
\`\`\`
