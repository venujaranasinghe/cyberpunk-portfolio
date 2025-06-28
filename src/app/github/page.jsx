"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Github, Star, GitFork, Calendar, Code, Users, TrendingUp, ExternalLink, Award } from "lucide-react"

export default function GitHubPage() {
  const stats = [
    { label: "PUBLIC_REPOS", value: "47", icon: <Code className="w-6 h-6" />, change: "+3_THIS_MONTH" },
    { label: "FOLLOWERS", value: "1.8K", icon: <Users className="w-6 h-6" />, change: "+150_THIS_MONTH" },
    { label: "FOLLOWING", value: "285", icon: <Users className="w-6 h-6" />, change: "+12_THIS_MONTH" },
    { label: "TOTAL_STARS", value: "3.2K", icon: <Star className="w-6 h-6" />, change: "+240_THIS_MONTH" },
  ]

  const repositories = [
    {
      name: "NEURAL_UI_FRAMEWORK",
      description:
        "Revolutionary React UI framework with AI-powered component generation, quantum-inspired state management, and neural network optimization.",
      language: "TypeScript",
      stars: 1247,
      forks: 189,
      watchers: 78,
      updated: "2024-01-18",
      topics: ["react", "ai", "neural-networks", "ui-framework", "quantum-computing"],
      featured: true,
      status: "ACTIVE",
    },
    {
      name: "QUANTUM_FULLSTACK_BOILERPLATE",
      description:
        "Next-generation full-stack application template with quantum encryption, distributed computing, and self-healing architecture.",
      language: "JavaScript",
      stars: 892,
      forks: 156,
      watchers: 45,
      updated: "2024-01-15",
      topics: ["fullstack", "quantum", "encryption", "distributed", "self-healing"],
      featured: true,
      status: "PRODUCTION",
    },
    {
      name: "MATRIX_PORTFOLIO_ENGINE",
      description:
        "Cyberpunk-inspired portfolio template with terminal aesthetics, retro animations, and nostalgic design patterns for developers.",
      language: "TypeScript",
      stars: 634,
      forks: 234,
      watchers: 67,
      updated: "2024-01-12",
      topics: ["portfolio", "cyberpunk", "terminal", "retro", "animations"],
      featured: true,
      status: "FEATURED",
    },
    {
      name: "BLOCKCHAIN_API_GATEWAY",
      description:
        "Decentralized API gateway with smart contract integration, cryptocurrency payments, and distributed load balancing.",
      language: "Solidity",
      stars: 445,
      forks: 89,
      watchers: 34,
      updated: "2024-01-10",
      topics: ["blockchain", "api", "smart-contracts", "cryptocurrency", "decentralized"],
      featured: false,
      status: "BETA",
    },
    {
      name: "CYBERPUNK_MOBILE_SUITE",
      description:
        "Cross-platform mobile development suite with AR integration, biometric security, and quantum-encrypted communications.",
      language: "Dart",
      stars: 378,
      forks: 67,
      watchers: 23,
      updated: "2024-01-08",
      topics: ["mobile", "ar", "biometric", "quantum", "cross-platform"],
      featured: false,
      status: "DEVELOPMENT",
    },
    {
      name: "RETRO_ANALYTICS_DASHBOARD",
      description:
        "Nostalgic analytics platform with terminal-style interface, real-time data streams, and vintage visualization components.",
      language: "Vue",
      stars: 289,
      forks: 45,
      watchers: 18,
      updated: "2024-01-05",
      topics: ["analytics", "retro", "terminal", "visualization", "real-time"],
      featured: false,
      status: "ARCHIVED",
    },
  ]

  const languageColors = {
    TypeScript: "#2b7489",
    JavaScript: "#f1e05a",
    Vue: "#4FC08D",
    Dart: "#00B4AB",
    Solidity: "#AA6746",
    Python: "#3572A5",
    Rust: "#dea584",
  }

  const achievements = [
    {
      title: "ARCTIC_CODE_VAULT_CONTRIBUTOR",
      description: "Code preserved in the GitHub Arctic Code Vault for future generations",
      icon: "🏔️",
    },
    {
      title: "QUANTUM_PULL_SHARK",
      description: "Opened pull requests across multiple quantum computing repositories",
      icon: "🦈",
    },
    {
      title: "NEURAL_NETWORK_PIONEER",
      description: "Early adopter and contributor to AI/ML open source projects",
      icon: "🧠",
    },
    {
      title: "CYBERPUNK_DEVELOPER",
      description: "Created retro-futuristic applications with nostalgic aesthetics",
      icon: "🤖",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "ACTIVE":
        return "text-green-400 bg-green-400/20"
      case "PRODUCTION":
        return "text-blue-400 bg-blue-400/20"
      case "FEATURED":
        return "text-yellow-400 bg-yellow-400/20"
      case "BETA":
        return "text-purple-400 bg-purple-400/20"
      case "DEVELOPMENT":
        return "text-orange-400 bg-orange-400/20"
      case "ARCHIVED":
        return "text-gray-400 bg-gray-400/20"
      default:
        return "text-gray-400 bg-gray-400/20"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
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

      {/* Matrix Grid Background */}
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

      <div className="min-h-screen relative z-20">
        <div className="container mx-auto px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-gray-900 hover:text-green-300 transition-colors font-mono"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>cd ../home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Github className="w-12 h-12 text-gray-900" />
              <div>
                <h1 className="text-6xl font-black font-mono text-gray-900">GITHUB.EXE</h1>
                <p className="text-green-400/80 font-mono text-lg">@ALEXCHEN_MATRIX</p>
              </div>
            </div>
            <p className="text-green-400/80 max-w-2xl mx-auto font-mono">
              <span className="text-gray-500">$</span> git log --oneline --graph --all
            </p>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 text-center hover:border-green-400/50 transition-all"
              >
                <div className="flex justify-center mb-4 text-gray-900">{stat.icon}</div>
                <div className="text-3xl font-black text-gray-900 mb-2 font-mono">{stat.value}</div>
                <div className="text-sm text-green-400/80 mb-2 font-mono">{stat.label}</div>
                <div className="text-xs text-green-300 font-mono">{stat.change}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-3 mb-8">
              <Award className="w-6 h-6 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900 font-mono">FEATURED_REPOSITORIES/</h2>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {repositories
                .filter((repo) => repo.featured)
                .map((repo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 hover:border-green-400/50 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-300 transition-colors font-mono">
                        {repo.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-mono font-bold ${getStatusColor(repo.status)}`}
                        >
                          {repo.status}
                        </span>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={`https://github.com/alexchen/${repo.name}`}
                          className="p-2 bg-gray-800/50 rounded hover:bg-gray-700/50 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-green-400" />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 leading-relaxed font-mono">{repo.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {repo.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-gray-800/50 rounded border border-green-500/30 text-xs text-green-400 font-mono"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-green-400/70 font-mono">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: languageColors[repo.language] || "#888" }}
                          />
                          <span>{repo.language}</span>
                        </div>

                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stars}</span>
                        </div>

                        <div className="flex items-center space-x-1">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(repo.updated).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Other Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3 font-mono">
              <Code className="w-6 h-6" />
              <span>OTHER_PROJECTS/</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repositories
                .filter((repo) => !repo.featured)
                .map((repo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:border-green-400/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-300 transition-colors font-mono">
                        {repo.name}
                      </h3>
                      <Github className="w-5 h-5 text-green-400/60" />
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 font-mono">
                      {repo.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-2 py-1 bg-gray-800/50 rounded text-xs text-green-400/80 font-mono"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800/50 rounded text-xs text-green-400/80 font-mono">
                          +{repo.topics.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-green-400/70 font-mono">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: languageColors[repo.language] || "#888" }}
                          />
                          <span>{repo.language}</span>
                        </div>

                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stars}</span>
                        </div>
                      </div>

                      <span className={`px-2 py-1 rounded text-xs font-mono ${getStatusColor(repo.status)}`}>
                        {repo.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Contribution Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gray-900/50 backdrop-blur-md rounded-lg border border-green-500/30 p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center space-x-2 font-mono">
              <TrendingUp className="w-6 h-6" />
              <span>CONTRIBUTION_MATRIX/</span>
            </h3>
            <div className="grid grid-cols-7 gap-1 mb-6">
              {Array.from({ length: 365 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (index % 50) * 0.01 }}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.6
                      ? "bg-green-400"
                      : Math.random() > 0.4
                        ? "bg-green-600"
                        : Math.random() > 0.2
                          ? "bg-green-700"
                          : "bg-gray-800"
                  }`}
                />
              ))}
            </div>
            <p className="text-green-400/70 text-sm font-mono">3,247 CONTRIBUTIONS IN THE LAST YEAR</p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gray-900/50 backdrop-blur-md rounded-lg border border-green-500/30 p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center space-x-2 font-mono">
              <Award className="w-6 h-6" />
              <span>ACHIEVEMENTS.LOG</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded border border-green-500/20"
                >
                  <div className="text-2xl flex-shrink-0">{achievement.icon}</div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1 font-mono text-sm">{achievement.title}</h4>
                    <p className="text-green-400/70 text-sm font-mono">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/alexchen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-bold py-4 px-8 rounded border border-green-500/50 transition-colors font-mono"
            >
              <Github className="w-8 h-8" />
              <span className="text-lg">./visit_full_profile</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
