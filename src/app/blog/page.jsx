"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight, User, Tag, TrendingUp, Terminal } from "lucide-react"

export default function Blog() {
  const featuredPost = {
    title: "THE_FUTURE_OF_WEB_DEVELOPMENT_2024",
    excerpt:
      "Exploring quantum computing integration, AI-driven development workflows, and the emergence of neural network-powered user interfaces in modern web applications.",
    date: "2024-01-20",
    readTime: "12 min read",
    category: "FUTURE_TECH",
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
    status: "FEATURED",
  }

  const blogPosts = [
    {
      title: "BUILDING_SCALABLE_REACT_APPLICATIONS",
      excerpt:
        "Advanced patterns and architectural decisions for creating maintainable React applications that can scale with your team and user base.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "REACT",
      image: "/placeholder.svg?height=200&width=400",
      popular: true,
      status: "TRENDING",
    },
    {
      title: "MASTERING_TYPESCRIPT_ADVANCED_PATTERNS",
      excerpt:
        "Deep dive into TypeScript's advanced features, utility types, and design patterns for building robust, type-safe applications.",
      date: "2024-01-12",
      readTime: "15 min read",
      category: "TYPESCRIPT",
      image: "/placeholder.svg?height=200&width=400",
      popular: false,
      status: "TECHNICAL",
    },
    {
      title: "CSS_GRID_VS_FLEXBOX_MATRIX",
      excerpt:
        "Comprehensive analysis of modern CSS layout systems with practical examples and performance considerations for responsive design.",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "CSS",
      image: "/placeholder.svg?height=200&width=400",
      popular: true,
      status: "GUIDE",
    },
    {
      title: "API_DESIGN_PRINCIPLES_2024",
      excerpt:
        "Essential guidelines for creating robust, scalable APIs with modern authentication, rate limiting, and documentation strategies.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "BACKEND",
      image: "/placeholder.svg?height=200&width=400",
      popular: false,
      status: "ARCHITECTURE",
    },
    {
      title: "JAVASCRIPT_PERFORMANCE_OPTIMIZATION",
      excerpt:
        "Latest techniques for improving JavaScript performance, from bundle optimization to runtime efficiency and memory management.",
      date: "2024-01-02",
      readTime: "11 min read",
      category: "JAVASCRIPT",
      image: "/placeholder.svg?height=200&width=400",
      popular: true,
      status: "PERFORMANCE",
    },
    {
      title: "SERVERLESS_ARCHITECTURE_PATTERNS",
      excerpt:
        "Exploring serverless computing paradigms, microservices architecture, and cloud-native development strategies for modern applications.",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "ARCHITECTURE",
      image: "/placeholder.svg?height=200&width=400",
      popular: false,
      status: "CLOUD",
    },
  ]

  const categories = ["ALL", "REACT", "TYPESCRIPT", "CSS", "BACKEND", "JAVASCRIPT", "ARCHITECTURE", "FUTURE_TECH"]

  const getStatusColor = (status) => {
    switch (status) {
      case "FEATURED":
        return "text-yellow-400 bg-yellow-400/20"
      case "TRENDING":
        return "text-red-400 bg-red-400/20"
      case "TECHNICAL":
        return "text-blue-400 bg-blue-400/20"
      case "GUIDE":
        return "text-green-400 bg-green-400/20"
      case "ARCHITECTURE":
        return "text-purple-400 bg-purple-400/20"
      case "PERFORMANCE":
        return "text-orange-400 bg-orange-400/20"
      case "CLOUD":
        return "text-cyan-400 bg-cyan-400/20"
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
              <Terminal className="w-12 h-12 text-green-400" />
              <div>
                <h1 className="text-6xl font-black font-mono text-gray-900">BLOG.EXE</h1>
                <p className="text-green-400/80 font-mono text-lg">
                  <span className="text-gray-500">$</span> cat /dev/thoughts | grep -i "innovation"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden border border-green-500/30 hover:border-green-400/50 transition-all group cursor-pointer">
              <div className="lg:flex">
                <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-gray-800/50 relative overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-green-500/10 group-hover:bg-green-500/20 transition-colors" />
                  <div className="absolute top-6 left-6">
                    <span
                      className={`px-3 py-1 rounded font-mono text-xs font-bold ${getStatusColor(featuredPost.status)}`}
                    >
                      {featuredPost.status}
                    </span>
                  </div>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-green-400/70 text-sm mb-4 font-mono">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{featuredPost.category}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-green-300 transition-colors font-mono">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">{featuredPost.excerpt}</p>

                  <div className="flex items-center text-gray-900 group-hover:text-green-300 transition-colors font-mono">
                    <span className="text-gray-500">$</span>
                    <span className="ml-2 font-semibold">./read_article --full</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded font-mono font-semibold transition-all ${
                    index === 0
                      ? "bg-green-500/30 text-green-400 border border-green-400/50"
                      : "bg-gray-800/50 text-green-400/90 border border-green-500/30 hover:bg-gray-700/50 hover:text-green-400 hover:border-green-400/50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden border border-green-500/30 hover:border-green-400/50 transition-all group cursor-pointer"
              >
                <div className="aspect-video bg-gray-800/50 relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 bg-green-500/10 group-hover:bg-green-500/20 transition-colors" />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded text-xs font-semibold text-green-400 border border-green-500/30 font-mono">
                      {post.category}
                    </span>
                    {post.popular && (
                      <span
                        className={`px-2 py-1 backdrop-blur-sm rounded text-xs font-semibold flex items-center space-x-1 font-mono ${getStatusColor(post.status)}`}
                      >
                        <TrendingUp className="w-3 h-3" />
                        <span>{post.status}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-green-400/60 text-sm mb-3 font-mono">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-300 transition-colors font-mono">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed font-mono text-sm">{post.excerpt}</p>

                  <div className="flex items-center text-gray-900/90 group-hover:text-green-400 transition-colors font-mono">
                    <span className="text-gray-500">$</span>
                    <span className="ml-2 text-sm font-semibold">./continue_reading</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white border border-gray-200 shadow-lg rounded-lg border border-green-500/30 overflow-hidden max-w-4xl mx-auto"
          >
            <div className="bg-gray-800/50 px-6 py-4 border-b border-green-500/30 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-gray-900 text-sm font-mono ml-4">~/newsletter/subscribe</span>
            </div>

            <div className="p-12 text-center">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <User className="w-8 h-8 text-green-400" />
                <h3 className="text-3xl font-bold text-gray-900 font-mono">JOIN_THE_MATRIX/</h3>
              </div>
              <p className="text-green-400/80 mb-8 text-lg max-w-2xl mx-auto font-mono">
                <span className="text-gray-500">$</span> subscribe --newsletter --exclusive_content --weekly_updates
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="user@domain.com"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-green-500/30 rounded text-green-400 placeholder-green-400/60 focus:outline-none focus:border-green-400/70 focus:bg-gray-800/70 transition-all font-mono"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-500/20 text-green-400 font-bold rounded hover:bg-green-500/30 transition-colors border border-green-500/50 font-mono"
                >
                  ./subscribe
                </motion.button>
              </div>
              <p className="text-green-400/60 text-sm mt-4 font-mono">
                <span className="text-gray-500">#</span> No spam. Unsubscribe anytime. Privacy respected.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
