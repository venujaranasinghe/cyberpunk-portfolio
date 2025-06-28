"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, GraduationCap, Award, Calendar, MapPin, Mail, Phone, Terminal, Code, Zap } from "lucide-react"

export default function About() {
  const education = [
    {
      degree: "M.S. COMPUTER_SCIENCE",
      school: "STANFORD_UNIVERSITY.EDU",
      year: "2020-2022",
      description:
        "SPECIALIZATION: Machine Learning & Quantum Computing. THESIS: 'Neural Networks in Distributed Systems'",
      gpa: "3.9/4.0",
      status: "COMPLETED",
    },
    {
      degree: "B.S. SOFTWARE_ENGINEERING",
      school: "UC_BERKELEY.EDU",
      year: "2016-2020",
      description: "FOCUS: Full-Stack Development & Cryptography. HONORS: Summa Cum Laude, Phi Beta Kappa",
      gpa: "3.8/4.0",
      status: "COMPLETED",
    },
  ]

  const achievements = [
    "HACKATHON_WINNER: TechCrunch Disrupt 2023",
    "GOOGLE_DEVELOPER_EXPERT: Web Technologies",
    "OPEN_SOURCE_CONTRIBUTOR: 500+ commits",
    "RESEARCH_PUBLISHED: 'Modern Web Architecture Patterns'",
    "TECHNICAL_LEAD: University Developer Collective",
    "CERTIFICATION: AWS Solutions Architect Professional",
  ]

  const experience = [
    {
      title: "SENIOR_FULL_STACK_ENGINEER",
      company: "TECH_INNOVATIONS_INC",
      period: "2022 - PRESENT",
      description:
        "LEADING development of enterprise applications serving 100k+ users. MENTORING junior developers and OPTIMIZING system performance by 40%.",
      status: "ACTIVE",
    },
    {
      title: "SOFTWARE_DEVELOPER",
      company: "DIGITAL_SOLUTIONS_LLC",
      period: "2020 - 2022",
      description:
        "DEVELOPED client-facing applications using React, Node.js, and AWS. COLLABORATED with cross-functional teams on product launches.",
      status: "COMPLETED",
    },
  ]

  const skills = [
    { category: "LANGUAGES", items: ["JavaScript", "TypeScript", "Python", "Solidity", "Rust"] },
    { category: "FRAMEWORKS", items: ["React", "Next.js", "Node.js", "Django", "Vue.js"] },
    { category: "DATABASES", items: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"] },
    { category: "CLOUD", items: ["AWS", "Docker", "Kubernetes", "Serverless"] },
  ]

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
              <h1 className="text-4xl font-black font-mono text-gray-900">ABOUT.EXE</h1>
              <p className="text-gray-900/80 font-mono text-sm">
                <span className="text-gray-500">$</span> cat /usr/local/bio/alex_chen.txt
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center sticky top-8 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <div className="w-32 h-32 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center text-4xl text-gray-900 font-bold font-mono border border-gray-300">
                  AC
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 font-mono">ALEX_CHEN</h3>
                <p className="text-gray-300 mb-4 font-mono text-sm">FULL_STACK_DEVELOPER</p>
                <div className="flex items-center justify-center space-x-1 text-gray-400 text-sm mb-2 font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>SAN_FRANCISCO.CA</span>
                </div>
              </motion.div>

              <div className="space-y-3 text-left font-mono text-sm">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-gray-900" />
                  <span>alex.chen@matrix.dev</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-gray-900" />
                  <span>+1.555.MATRIX</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 pt-6 border-t border-gray-300"
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 font-mono">5+</div>
                    <div className="text-xs text-gray-400 font-mono">YEARS_EXP</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 font-mono">50+</div>
                    <div className="text-xs text-gray-400 font-mono">PROJECTS</div>
                  </div>
                </div>
              </motion.div>

              {/* System Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 pt-6 border-t border-gray-300"
              >
                <div className="text-xs font-mono text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-gray-900">ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AVAILABILITY:</span>
                    <span className="text-gray-900">OPEN</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COFFEE_LEVEL:</span>
                    <span className="text-yellow-400">HIGH</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 font-mono flex items-center space-x-2">
                <Code className="w-6 h-6" />
                <span>BIOGRAPHY.TXT</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed font-mono text-sm">
                <p>
                  <span className="text-gray-500">01:</span> HELLO_WORLD! I'm Alex Chen, a passionate full-stack
                  developer with 5+ years of experience crafting innovative digital solutions. My journey began at UC
                  Berkeley, where I discovered the perfect intersection of logic and creativity in programming.
                </p>
                <p>
                  <span className="text-gray-500">02:</span> SPECIALIZING in modern web technologies, I've worked with
                  diverse teams from early-stage startups to enterprise corporations. My expertise spans React, Node.js,
                  and cloud platforms, but I'm always eager to explore emerging technologies.
                </p>
                <p>
                  <span className="text-gray-500">03:</span> WHEN not coding, you'll find me contributing to open source
                  projects, writing technical articles, or exploring the latest developments in AI and quantum
                  computing. I believe in continuous learning and knowledge sharing within the developer community.
                </p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 font-mono flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span>WORK_EXPERIENCE/</span>
              </h2>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="border-l-4 border-gray-300 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full" />
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm font-mono">{exp.period}</span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-mono ${
                          exp.status === "ACTIVE" ? "text-gray-900 bg-gray-900/20" : "text-gray-400 bg-gray-400/20"
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-gray-900 font-mono">{exp.title}</h3>
                    <p className="text-gray-300 font-medium mb-2 font-mono text-sm">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-mono">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 font-mono flex items-center space-x-2">
                <GraduationCap className="w-6 h-6" />
                <span>EDUCATION/</span>
              </h2>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="border-l-4 border-gray-300 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full" />
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm font-mono">{edu.year}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-900 font-medium text-sm font-mono">GPA: {edu.gpa}</span>
                        <span className="px-2 py-1 bg-gray-900/20 text-gray-900 rounded text-xs font-mono">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-gray-900 font-mono">{edu.degree}</h3>
                    <p className="text-gray-300 font-medium mb-2 font-mono text-sm">{edu.school}</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-mono">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Matrix */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 font-mono flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>SKILL_MATRIX/</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-gray-100 rounded border border-gray-300 p-4"
                  >
                    <h3 className="text-gray-900 font-mono font-bold mb-3">{skillGroup.category}/</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-mono border border-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 font-mono flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span>ACHIEVEMENTS.LOG</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    className="flex items-center space-x-3 p-3 bg-gray-100 rounded border border-gray-300"
                  >
                    <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-mono">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
