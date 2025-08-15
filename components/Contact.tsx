"use client"

import { motion } from "framer-motion"
import { Github, LinkedinIcon, Mail, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "manassalian2310@gmail.com"
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email: ", err)
    }
  }

  const contactInfo = [
    {
      platform: "Email",
      value: email,
      icon: <Mail size={20} />,
      action: copyEmail,
      isEmail: true,
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/manas",
      icon: <LinkedinIcon size={20} />,
      link: "https://www.linkedin.com/in/manas-salian/",
    },
    {
      platform: "GitHub",
      value: "github.com/manass10",
      icon: <Github size={20} />,
      link: "https://github.com/manass10",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out to me through any of the platforms below. I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6"
      >
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mb-4 text-gray-700 dark:text-gray-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{item.platform}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-3">{item.value}</p>

            {item.isEmail ? (
              <button
                onClick={item.action}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            ) : (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Visit Profile
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-16 text-gray-600 dark:text-gray-400"
      >
        <p>© {new Date().getFullYear()} Manas Salian. All rights reserved.</p>
      </motion.div>
    </section>
  )
}
