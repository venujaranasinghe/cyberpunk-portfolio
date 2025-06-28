"use client"
import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, User, Mail, Github, BookOpen, Wrench, Terminal, Zap, Coffee } from "lucide-react"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(null)
  const [time, setTime] = useState(new Date())
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const leftRotate = useTransform(mouseX, [0, window?.innerWidth || 1920], [-5, 5])
  const rightRotate = useTransform(mouseX, [0, window?.innerWidth || 1920], [5, -5])

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      clearInterval(timer)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <div className="min-h-screen flex overflow-hidden relative bg-black">
      {/* Retro Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, 0.03) 2px,
              rgba(0, 255, 0, 0.03) 4px
            )`,
          }}
        />
      </div>

      {/* Floating Matrix-like Code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500/20 font-mono text-xs"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: -20,
            }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 20 : 1080,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </motion.div>
        ))}
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full border-2 border-green-400 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Left Side - Dark Minimalistic */}
      <motion.div
        className="w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
        style={{ rotateY: leftRotate }}
        whileHover={{ scale: 1.005 }}
        onHoverStart={() => setIsHovering("left")}
        onHoverEnd={() => setIsHovering(null)}
        transition={{ duration: 0.4 }}
      >
        {/* Retro Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Terminal-like Border */}
        <div className="absolute inset-4 border border-green-500/30 rounded-lg" />
        <div className="absolute top-4 left-4 right-4 h-8 bg-gray-800/50 rounded-t-lg flex items-center px-4 space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="text-green-400 text-xs font-mono ml-4">~/portfolio/creative</span>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-white">
          {/* Terminal Time Display */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 right-8 font-mono text-green-400 text-sm"
          >
            {time.toLocaleTimeString()}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-center mb-8"
          >
            {/* Retro Avatar */}
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="relative mb-8">
              <div className="w-32 h-32 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-1">
                  <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-4xl border border-green-500/30">
                    <Terminal className="w-16 h-16 text-green-400" />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-2 border border-green-500/30 rounded-lg"
                />
              </div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-2 -right-2"
              >
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              </motion.div>
            </motion.div>

            {/* Glitch Text Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <h1 className="text-6xl font-black mb-2 font-mono text-green-400 relative">
                Venuja
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  className="absolute inset-0 text-red-500"
                  style={{ transform: "translate(2px, 0)" }}
                >
                  Venuja
                </motion.span>
              </h1>
              <h2 className="text-4xl font-bold mb-6 font-mono text-gray-300">Ranasinghe</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center space-x-2 mb-8"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-lg font-mono text-gray-300">CREATIVE_DEVELOPER.EXE</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-mono text-green-400 text-sm mb-8 max-w-md"
            >
              <span className="text-gray-500">$</span> echo "Crafting digital experiences with code and creativity"
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-3 w-full max-w-sm"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all border border-green-500/30 hover:border-green-400/50 group backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="font-mono text-gray-300">CONTACT</span>
                </div>
                <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            <Link href="/blog">
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all border border-green-500/30 hover:border-green-400/50 group backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-green-400" />
                  <span className="font-mono text-gray-300">BLOG</span>
                </div>
                <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            <Link href="/github">
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all border border-green-500/30 hover:border-green-400/50 group backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-green-400" />
                  <span className="font-mono text-gray-300">GITHUB</span>
                </div>
                <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center space-x-6 text-green-400/80 font-mono text-xs"
          >
            <div className="flex items-center space-x-1">
              <Coffee className="w-3 h-3" />
              <span>CAFFEINE: 100%</span>
            </div>
            <div className="w-1 h-1 bg-green-400/40 rounded-full" />
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>CREATIVITY: MAX</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Code Blocks */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            animate={{
              y: [Math.random() * 100, Math.random() * 100 - 200],
              x: [Math.random() * 50, Math.random() * 50 - 25],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Right Side - Clean White Professional */}
      <motion.div
        className="w-1/2 relative overflow-hidden bg-white"
        style={{ rotateY: rightRotate }}
        whileHover={{ scale: 1.005 }}
        onHoverStart={() => setIsHovering("right")}
        onHoverEnd={() => setIsHovering(null)}
        transition={{ duration: 0.4 }}
      >
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-gray-900" />
            ))}
          </div>
        </div>

        {/* Professional Header */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
          <div className="text-xs text-gray-500 font-mono">PORTFOLIO.2024</div>
          <div className="text-xs text-gray-500 font-mono">EST.2019</div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 pr-64 lg:pr-12 xl:pr-64 text-gray-900">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-24 h-24 mx-auto mb-8 relative"
            >
              <div className="w-full h-full bg-gray-900 rounded-sm flex items-center justify-center text-2xl text-white font-bold font-mono">
                LVR
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-1 border border-gray-200 rounded-sm"
              />
            </motion.div>

            {/* Professional Developer Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-32 right-8 w-48 h-64 hidden lg:block"
            >
              <div className="relative w-full h-full">
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-2xl overflow-hidden border-4 border-gray-900">
                  <img
                    src="/profile.jpg"
                    alt="Alex Chen - Professional Developer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                </div>

                {/* Floating Tech Stack Icons */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 font-bold text-xs border-2 border-gray-200"
                >
                  JS
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xs"
                >
                  TS
                </motion.div>
                <motion.div
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -right-3 w-7 h-7 bg-cyan-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xs"
                >
                  R
                </motion.div>

                {/* Professional Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-mono font-semibold shadow-lg border border-gray-300">
                  FULL_STACK_DEV
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl font-black mb-2 text-gray-900 font-mono"
            >
              PROFESSIONAL
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-bold mb-6 text-gray-600 font-mono"
            >
              PORTFOLIO
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg mb-8 text-gray-700 max-w-md font-mono text-sm"
            >
              SHOWCASING_EXPERTISE.AND_ACHIEVEMENTS();
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-3 w-full max-w-sm"
          >
            <Link href="/portfolio">
              <motion.div
                whileHover={{ x: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 rounded-sm bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200 hover:border-gray-300 group"
              >
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-gray-700" />
                  <span className="font-mono text-gray-900 font-semibold">PORTFOLIO</span>
                </div>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-gray-600" />
              </motion.div>
            </Link>

            <Link href="/about">
              <motion.div
                whileHover={{ x: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 rounded-sm bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200 hover:border-gray-300 group"
              >
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-700" />
                  <span className="font-mono text-gray-900 font-semibold">ABOUT</span>
                </div>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-gray-600" />
              </motion.div>
            </Link>

            <Link href="/skills">
              <motion.div
                whileHover={{ x: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 rounded-sm bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200 hover:border-gray-300 group"
              >
                <div className="flex items-center space-x-3">
                  <Wrench className="w-5 h-5 text-gray-700" />
                  <span className="font-mono text-gray-900 font-semibold">SKILLS</span>
                </div>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-gray-600" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 grid grid-cols-2 gap-6 text-center"
          >
            <div className="p-4 bg-gray-50 rounded-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 font-mono">50+</div>
              <div className="text-xs text-gray-600 font-mono">PROJECTS</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 font-mono">5+</div>
              <div className="text-xs text-gray-600 font-mono">YEARS</div>
            </div>
          </motion.div>
        </div>

        {/* Minimal floating elements */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-6 h-6 bg-gray-100 rounded-sm border border-gray-200"
        />
        <motion.div
          animate={{
            y: [0, 8, 0],
            rotate: [0, -1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-32 left-16 w-4 h-4 bg-gray-200 rounded-sm"
        />
      </motion.div>

      {/* Center Divider with Retro Effect */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-400/60 to-transparent transform -translate-x-px z-30">
        <div className="absolute inset-0 bg-green-400/20 blur-sm" />
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Retro Command Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400/60 text-center z-30 font-mono text-xs"
      >
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          className="mb-2"
        >
          <span className="text-gray-500">$</span> choose_your_path --interactive
        </motion.div>
        <div className="w-px h-8 bg-green-400/40 mx-auto animate-pulse" />
      </motion.div>

      {/* Hover Overlay Effects */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 pointer-events-none z-20 ${
            isHovering === "left"
              ? "bg-gradient-to-r from-green-500/5 via-green-500/10 to-transparent"
              : "bg-gradient-to-l from-gray-500/5 via-gray-300/10 to-transparent"
          }`}
        />
      )}
    </div>
  )
}
