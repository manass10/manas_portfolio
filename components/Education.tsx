"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Data Analytics",
      university: "Northeastern University",
      location: "Boston, MA",
      period: "September 2025 - May 2027",
      description:
        "Pursuing advanced studies in data analytics, machine learning, and statistical modeling. Focusing on big data technologies, predictive analytics, and business intelligence solutions.",
      courses: [
        "Foundations of Data Analytics",
        "Data Management and Analysis",
      ],
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      university: "St. Francis Institute of Technology, Mumbai University",
      location: "Mumbai, India",
      period: "April 2020 - May 2024",
      description:
        "Studied core information technology subjects including programming, data structures, software development, and emerging technologies. Participated in various hackathons and coding competitions.",
      courses: [
        "Artificial Intelligence",
        "Software Development",
        "Data Structure Algorithms",
        "Cybersecurity",
        "Python",
        "Ethical Hacking",
        "JavaScript",
        "Augmented Reality Virtual Reality",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My academic background and educational qualifications.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-gray-700 dark:text-gray-300 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              </div>

              <div className="ml-9 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{edu.university}</h4>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>

                <div>
                  <h5 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Key Courses</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-2"></div>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
