"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
  Calendar,
  Terminal,
  Zap,
  Coffee,
} from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState([
    "CONTACT_SYSTEM v2.4.1 initialized...",
    "Awaiting user input...",
  ])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate terminal output
    setTerminalOutput((prev) => [
      ...prev,
      `$ send_message --to=alex.chen@matrix.dev`,
      `Encrypting message...`,
      `Establishing secure connection...`,
      `Message sent successfully!`,
      `Response time: <24 hours`,
    ])

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Terminal className="w-12 h-12 text-gray-900" />
              <div>
                <h1 className="text-6xl font-black font-mono text-gray-900">CONTACT.EXE</h1>
                <p className="text-gray-900/80 font-mono text-lg">
                  <span className="text-gray-500">$</span> ./establish_connection --secure
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-300 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-900 text-sm font-mono ml-4">~/contact/message_form</span>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 font-mono">SEND_MESSAGE/</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900/90 mb-3 font-mono">FULL_NAME:</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400/70 focus:bg-gray-50 transition-all font-mono"
                        placeholder="your_name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900/90 mb-3 font-mono">
                        EMAIL_ADDRESS:
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400/70 focus:bg-gray-50 transition-all font-mono"
                        placeholder="user@domain.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900/90 mb-3 font-mono">SUBJECT:</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400/70 focus:bg-gray-50 transition-all font-mono"
                      placeholder="project_collaboration"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900/90 mb-3 font-mono">MESSAGE_BODY:</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400/70 focus:bg-gray-50 transition-all resize-none font-mono"
                      placeholder="Hello Alex, I would like to discuss..."
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500/20 hover:bg-green-500/30 disabled:bg-green-500/10 text-gray-900 font-bold py-4 px-6 rounded transition-all flex items-center justify-center space-x-3 border border-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed font-mono"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-green-400/30 border-t-green-400 rounded-full animate-spin" />
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>./send --encrypted</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information & Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-300 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-900 text-sm font-mono ml-4">~/contact/info</span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 font-mono">CONTACT_INFO/</h3>
                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 text-gray-900/90 hover:text-gray-900 transition-colors"
                    >
                      <div className="p-3 bg-gray-800/50 rounded border border-gray-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="font-mono">
                        <p className="font-semibold text-sm">EMAIL:</p>
                        <p className="text-gray-900/80">alex.chen@matrix.dev</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 text-gray-900/90 hover:text-gray-900 transition-colors"
                    >
                      <div className="p-3 bg-gray-800/50 rounded border border-gray-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="font-mono">
                        <p className="font-semibold text-sm">PHONE:</p>
                        <p className="text-gray-900/80">+1.555.MATRIX</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 text-gray-900/90 hover:text-gray-900 transition-colors"
                    >
                      <div className="p-3 bg-gray-800/50 rounded border border-gray-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="font-mono">
                        <p className="font-semibold text-sm">LOCATION:</p>
                        <p className="text-gray-900/80">SAN_FRANCISCO.CA</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-mono">SOCIAL_NETWORKS/</h3>
                <div className="grid grid-cols-3 gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="p-4 bg-gray-800/50 rounded border border-gray-300 hover:border-gray-400/50 transition-colors flex flex-col items-center space-y-2 text-gray-900/90 hover:text-gray-900"
                  >
                    <Linkedin className="w-8 h-8" />
                    <span className="text-sm font-mono">LINKEDIN</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="p-4 bg-gray-800/50 rounded border border-gray-300 hover:border-gray-400/50 transition-colors flex flex-col items-center space-y-2 text-gray-900/90 hover:text-gray-900"
                  >
                    <Github className="w-8 h-8" />
                    <span className="text-sm font-mono">GITHUB</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="p-4 bg-gray-800/50 rounded border border-gray-300 hover:border-gray-400/50 transition-colors flex flex-col items-center space-y-2 text-gray-900/90 hover:text-gray-900"
                  >
                    <Twitter className="w-8 h-8" />
                    <span className="text-sm font-mono">TWITTER</span>
                  </motion.a>
                </div>
              </div>

              {/* Terminal Output */}
              <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-300 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-900 text-sm font-mono ml-4">~/contact/terminal</span>
                </div>

                <div className="p-6 bg-black/50 font-mono text-sm">
                  {terminalOutput.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-green-400 mb-1"
                    >
                      {line}
                    </motion.div>
                  ))}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="inline-block w-2 h-4 bg-green-400 ml-1"
                  />
                </div>
              </div>

              {/* Status */}
              <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-mono">SYSTEM_STATUS/</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-gray-900/90 font-mono text-sm">STATUS: ONLINE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-gray-900" />
                    <span className="text-gray-900/80 font-mono text-sm">RESPONSE_TIME: {"<"}24_HOURS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-4 h-4 text-gray-900" />
                    <span className="text-gray-900/80 font-mono text-sm">CAFFEINE_LEVEL: OPTIMAL</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-gray-900" />
                    <span className="text-gray-900/80 font-mono text-sm">AVAILABILITY: OPEN_FOR_PROJECTS</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-800/50 rounded border border-gray-300">
                  <p className="text-gray-900/90 text-sm leading-relaxed font-mono">
                    <span className="text-gray-500">$</span> echo "Ready to collaborate on your next big idea. Let's
                    build something extraordinary together!"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 font-mono">COLLABORATION_PROTOCOL/</h3>
              <p className="text-gray-900/80 mb-8 text-lg max-w-2xl mx-auto font-mono">
                <span className="text-gray-500">$</span> ./initiate_project --innovative --scalable --impactful
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-900 font-semibold py-3 px-8 rounded border border-gray-300 transition-colors font-mono"
                  >
                    ./view_portfolio
                  </motion.button>
                </Link>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:alex.chen@matrix.dev"
                  className="bg-green-500/20 text-gray-900 font-semibold py-3 px-8 rounded hover:bg-green-500/30 transition-colors border border-green-500/50 font-mono"
                >
                  ./email_direct
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
