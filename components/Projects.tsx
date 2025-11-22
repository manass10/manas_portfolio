"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects: Array<{
    title: string
    description: string
    image: string
    tags: string[]
    github: string
    demo?: string
  }> = [
    {
      title: "Passion Beats",
      description:
        "Passion Beats is a Python-based e-commerce website tailored for music enthusiasts, offering a seamless platform to browse and purchase musical instruments. Built with Django, it features user authentication, product listings, and a secure cart and checkout system.",
      image: "/images/passion-beats.jpg",
      tags: ["React", "Next.js", "Bootstrap", "Python"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://passion-beats-demo.com",
    },
    {
      title: "Amazon Clone",
      description:
        "Amazon Clone is a full-stack e-commerce web application replicating core features of Amazon, including user authentication, product browsing, and cart management. Built using React.js, Tailwind CSS, and Supabase for the backend and database.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Next.Js", "Supabase", "CSS"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://amazon-clone-demo.com",
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A selection of my recent work and personal projects. Each project reflects my skills and experience in web
          development.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 pb-6 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <Github size={18} className="mr-1" />
                <span>Code</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
