"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Terminal, Award, Zap } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "NEURAL_NETWORK_DASHBOARD",
      description:
        "Advanced AI-powered analytics platform with real-time data visualization, machine learning insights, and predictive modeling capabilities.",
      tech: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      featured: true,
      year: "2024",
      status: "ACTIVE",
    },
    {
      title: "BLOCKCHAIN_VOTING_SYSTEM",
      description:
        "Decentralized voting platform built on Ethereum with smart contracts, ensuring transparency and security in digital democracy.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      featured: true,
      year: "2024",
      status: "DEPLOYED",
    },
    {
      title: "QUANTUM_COMMERCE_ENGINE",
      description:
        "Next-generation e-commerce platform with quantum-inspired algorithms for personalized shopping experiences and inventory optimization.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      featured: true,
      year: "2023",
      status: "PRODUCTION",
    },
    {
      title: "CYBERPUNK_SOCIAL_HUB",
      description:
        "Retro-futuristic social media platform with end-to-end encryption, decentralized architecture, and nostalgic 80s aesthetics.",
      tech: ["Vue.js", "Express.js", "MySQL", "Socket.io", "AWS"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      featured: false,
      year: "2023",
      status: "BETA",
    },
    {
      title: "MATRIX_FITNESS_TRACKER",
      description:
        "Immersive fitness tracking application with AR integration, biometric analysis, and gamified workout experiences.",
      tech: ["React Native", "Firebase", "ARKit", "TensorFlow Lite"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      featured: false,
      year: "2023",
      status: "ACTIVE",
    },
    {
      title: "RETRO_REAL_ESTATE_MATRIX",
      description:
        "Nostalgic real estate platform with virtual reality tours, AI-powered property matching, and retro terminal interface.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Three.js", "WebXR"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      live: "#",
      featured: false,
      year: "2022",
      status: "ARCHIVED",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "ACTIVE":
        return "text-green-400 bg-green-400/20"
      case "DEPLOYED":
        return "text-blue-400 bg-blue-400/20"
      case "PRODUCTION":
        return "text-purple-400 bg-purple-400/20"
      case "BETA":
        return "text-yellow-400 bg-yellow-400/20"
      case "ARCHIVED":
        return "text-gray-400 bg-gray-400/20"
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
      <div className="bg-gray-100 border-b border-gray-300">
        <div className="container mx-auto px-6 py-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors font-mono"
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
              <h1 className="text-4xl font-black font-mono text-gray-900">PORTFOLIO.EXE</h1>
              <p className="text-gray-600 font-mono text-sm">
                <span className="text-gray-500">$</span> ls -la /projects/featured/
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-20">
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-6 h-6 text-gray-900" />
            <h2 className="text-2xl font-bold text-gray-900 font-mono">FEATURED_PROJECTS/</h2>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-all group backdrop-blur-sm"
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-gray-800/50 relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      <div className="absolute inset-0 bg-green-500/10 group-hover:bg-green-500/20 transition-colors" />
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-mono font-bold ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </span>
                        <span className="px-2 py-1 bg-gray-800/80 text-gray-900 rounded text-xs font-mono">
                          {project.year}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          className="p-2 bg-gray-800/80 rounded hover:bg-gray-700/80 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-900" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          className="p-2 bg-gray-800/80 rounded hover:bg-gray-700/80 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-900" />
                        </motion.a>
                      </div>
                    </div>

                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors font-mono">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/50 text-gray-900 rounded border border-gray-300 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-gray-900 font-mono text-sm">
                        <span className="text-gray-500">$</span>
                        <span className="ml-2">./deploy --production</span>
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                          className="ml-2 w-2 h-4 bg-green-400"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <div className="flex items-center space-x-3 mb-8">
            <Zap className="w-6 h-6 text-gray-900" />
            <h2 className="text-2xl font-bold text-gray-900 font-mono">OTHER_PROJECTS/</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-all group backdrop-blur-sm"
                >
                  <div className="aspect-video bg-gray-800/50 relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                    />
                    <div className="absolute inset-0 bg-green-500/10 group-hover:bg-green-500/20 transition-colors" />
                    <div className="absolute top-3 left-3 flex space-x-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-mono font-bold ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex space-x-2">
                      <a
                        href={project.github}
                        className="p-1.5 bg-gray-800/80 rounded hover:bg-gray-700/80 transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-900" />
                      </a>
                      <a
                        href={project.live}
                        className="p-1.5 bg-gray-800/80 rounded hover:bg-gray-700/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-900" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 font-mono">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed font-mono line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800/50 text-gray-900 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800/50 text-gray-900 rounded text-xs font-mono">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center bg-gray-900/50 rounded-lg p-12 border border-green-500/30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-4 text-green-400 font-mono">COLLABORATION_REQUEST.SH</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-mono text-sm">
            <span className="text-gray-500">$</span> echo "Ready to build the future together? Let's create something
            extraordinary."
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500/20 text-green-400 px-8 py-4 rounded border border-green-500/50 font-mono font-semibold hover:bg-green-500/30 transition-colors"
            >
              ./contact --now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
