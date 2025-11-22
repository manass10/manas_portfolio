"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="about" className="py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-gray-700 dark:text-gray-300">Manas Salian</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">MS CS @NEU, Software Developer</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm passionate about designing robust software systems and using computer science principles to solve real-world challenges. With a strong foundation in algorithms, data structures, and system design, I focus on building reliable, efficient applications that scale. I enjoy transforming complex requirements into clean, maintainable solutions and continuously improving my craft through hands-on development and emerging CS practices.
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl transform hover:scale-105 transition-all duration-300">
            <Image
              src="/images/profile-photo.jpg"
              alt="Manas Salian - IT Engineer & Data Analyst"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
