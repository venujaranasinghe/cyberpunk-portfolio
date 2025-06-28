"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
  Wrench,
  Zap,
  Star,
  Terminal,
  Code,
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND_DEVELOPMENT",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 95, years: "4+ years", status: "EXPERT" },
        { name: "TypeScript", level: 90, years: "3+ years", status: "ADVANCED" },
        { name: "Tailwind CSS", level: 92, years: "3+ years", status: "EXPERT" },
        { name: "Vue.js", level: 80, years: "2+ years", status: "PROFICIENT" },
        { name: "JavaScript ES6+", level: 95, years: "5+ years", status: "EXPERT" },
      ],
    },
    {
      title: "BACKEND_DEVELOPMENT",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js/Express", level: 90, years: "4+ years", status: "EXPERT" },
        { name: "Python/Django", level: 85, years: "3+ years", status: "ADVANCED" },
        { name: "REST APIs", level: 95, years: "5+ years", status: "EXPERT" },
        { name: "GraphQL", level: 80, years: "2+ years", status: "PROFICIENT" },
        { name: "Microservices", level: 75, years: "2+ years", status: "PROFICIENT" },
      ],
    },
    {
      title: "DATABASE_SYSTEMS",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 88, years: "4+ years", status: "ADVANCED" },
        { name: "MongoDB", level: 85, years: "3+ years", status: "ADVANCED" },
        { name: "Redis", level: 75, years: "2+ years", status: "PROFICIENT" },
        { name: "Firebase", level: 80, years: "3+ years", status: "PROFICIENT" },
        { name: "AWS RDS", level: 82, years: "3+ years", status: "ADVANCED" },
      ],
    },
    {
      title: "MOBILE_DEVELOPMENT",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native", level: 80, years: "2+ years", status: "PROFICIENT" },
        { name: "Flutter", level: 70, years: "1+ year", status: "LEARNING" },
        { name: "PWA Development", level: 85, years: "3+ years", status: "ADVANCED" },
        { name: "Expo", level: 82, years: "2+ years", status: "PROFICIENT" },
      ],
    },
    {
      title: "DEVOPS_CLOUD",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 80, years: "3+ years", status: "PROFICIENT" },
        { name: "AWS/EC2", level: 75, years: "2+ years", status: "PROFICIENT" },
        { name: "Vercel/Netlify", level: 90, years: "4+ years", status: "EXPERT" },
        { name: "CI/CD", level: 78, years: "2+ years", status: "PROFICIENT" },
        { name: "Git/GitHub", level: 95, years: "5+ years", status: "EXPERT" },
      ],
    },
    {
      title: "DESIGN_UI_UX",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "UI/UX Design", level: 85, years: "4+ years", status: "ADVANCED" },
        { name: "Figma", level: 88, years: "3+ years", status: "ADVANCED" },
        { name: "Responsive Design", level: 95, years: "5+ years", status: "EXPERT" },
        { name: "Animation/Motion", level: 80, years: "2+ years", status: "PROFICIENT" },
      ],
    },
  ]

  const certifications = [
    {
      name: "AWS_CERTIFIED_DEVELOPER",
      issuer: "AMAZON_WEB_SERVICES",
      year: "2023",
      badge: "☁️",
      status: "ACTIVE",
    },
    {
      name: "GOOGLE_CLOUD_PROFESSIONAL",
      issuer: "GOOGLE_CLOUD_PLATFORM",
      year: "2022",
      badge: "🌐",
      status: "ACTIVE",
    },
    {
      name: "REACT_DEVELOPER_CERTIFIED",
      issuer: "META_PLATFORMS",
      year: "2021",
      badge: "⚛️",
      status: "ACTIVE",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "EXPERT":
        return "text-green-400 bg-green-400/20"
      case "ADVANCED":
        return "text-blue-400 bg-blue-400/20"
      case "PROFICIENT":
        return "text-yellow-400 bg-yellow-400/20"
      case "LEARNING":
        return "text-purple-400 bg-purple-400/20"
      default:
        return "text-gray-400 bg-gray-400/20"
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Retro Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(34, 197, 94, 0.03) 2px,
              rgba(34, 197, 94, 0.03) 4px
            )`,
          }}
        />
      </div>

      {/* Terminal Header */}
      <div className="bg-gray-900 border-b border-green-500/30">
        <div className="container mx-auto px-6 py-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-700 transition-colors font-mono"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>cd ../home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <Terminal className="w-8 h-8 text-gray-900" />
            <div>
              <h1 className="text-4xl font-black font-mono text-gray-900">SKILLS.EXE</h1>
              <p className="text-gray-900/80 font-mono text-sm">
                <span className="text-gray-500">$</span> ./analyze --skills --expertise --level
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-20">
        {/* Skills Matrix */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gray-800/50 rounded-lg text-gray-900 border border-green-500/30">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-mono">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 font-mono text-sm">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400 font-mono">{skill.years}</span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-mono font-bold ${getStatusColor(skill.status)}`}
                        >
                          {skill.status}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-3 border border-green-500/20">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full shadow-sm"
                      />
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">PROFICIENCY</span>
                      <span className="text-gray-900 font-bold">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12 backdrop-blur-sm"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Star className="w-6 h-6 text-gray-900" />
            <h2 className="text-2xl font-bold text-gray-900 font-mono">CERTIFICATIONS/</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center p-6 bg-gray-800/50 rounded-lg border border-green-500/20"
              >
                <div className="text-4xl mb-4">{cert.badge}</div>
                <h3 className="font-bold text-gray-900 mb-2 font-mono text-sm">{cert.name}</h3>
                <p className="text-gray-300 text-sm mb-1 font-mono">{cert.issuer}</p>
                <div className="flex items-center justify-center space-x-2">
                  <p className="text-gray-400 text-xs font-mono">{cert.year}</p>
                  <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded text-xs font-mono">
                    {cert.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Environment */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12 backdrop-blur-sm"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Code className="w-6 h-6 text-gray-900" />
            <h2 className="text-2xl font-bold text-gray-900 font-mono">DEV_ENVIRONMENT/</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "VS_CODE",
              "WEBSTORM",
              "POSTMAN",
              "GITHUB",
              "GITLAB",
              "JIRA",
              "SLACK",
              "DISCORD",
              "NOTION",
              "LINEAR",
              "FIGMA",
              "ADOBE_XD",
              "PHOTOSHOP",
              "TERMINAL",
              "NPM",
              "YARN",
              "WEBPACK",
              "VITE",
              "ESLINT",
              "PRETTIER",
              "DOCKER",
              "KUBERNETES",
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.02 }}
                className="bg-gray-800/50 rounded-lg p-4 text-center text-sm font-mono border border-green-500/20 hover:border-green-400/50 hover:bg-gray-700/50 transition-colors"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Specs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gray-50 border border-gray-200 rounded-lg p-8 backdrop-blur-sm"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Zap className="w-6 h-6 text-gray-900" />
            <h2 className="text-2xl font-bold text-gray-900 font-mono">SYSTEM_SPECS/</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded border border-green-500/20 p-4">
              <h3 className="text-gray-900 font-mono font-bold mb-2">HARDWARE/</h3>
              <div className="text-gray-300 font-mono text-xs space-y-1">
                <div>CPU: M2_MAX_12_CORE</div>
                <div>RAM: 32GB_UNIFIED</div>
                <div>STORAGE: 1TB_SSD</div>
                <div>GPU: 38_CORE_GPU</div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded border border-green-500/20 p-4">
              <h3 className="text-gray-900 font-mono font-bold mb-2">SOFTWARE/</h3>
              <div className="text-gray-300 font-mono text-xs space-y-1">
                <div>OS: MACOS_SONOMA</div>
                <div>SHELL: ZSH_OH_MY_ZSH</div>
                <div>EDITOR: VSCODE_INSIDERS</div>
                <div>BROWSER: CHROME_DEV</div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded border border-green-500/20 p-4">
              <h3 className="text-gray-900 font-mono font-bold mb-2">PRODUCTIVITY/</h3>
              <div className="text-gray-300 font-mono text-xs space-y-1">
                <div>WPM: 85_TYPING_SPEED</div>
                <div>COFFEE: 4_CUPS_DAY</div>
                <div>MUSIC: LO_FI_HIP_HOP</div>
                <div>FOCUS: POMODORO_25MIN</div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded border border-green-500/20 p-4">
              <h3 className="text-gray-900 font-mono font-bold mb-2">METRICS/</h3>
              <div className="text-gray-300 font-mono text-xs space-y-1">
                <div>COMMITS: 2847_THIS_YEAR</div>
                <div>UPTIME: 99.9_PERCENT</div>
                <div>BUGS: MINIMAL_IMPACT</div>
                <div>LEARNING: CONTINUOUS</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
