"use client"

import { motion } from "framer-motion"
import { Briefcase, Code } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      name: "React",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
          <path
            d="M12 1c6.065 0 11 4.935 11 11s-4.935 11-11 11S1 18.065 1 12 5.935 1 12 1z"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="0.5"
          />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
            transform="rotate(120 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="22" height="22" x="1" y="1" rx="2" fill="#F7DF1E" />
          <path
            d="M7.5 15.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5v-5h-1.5v5c0 .5-.5 1-1 1s-1-.5-1-1v-5H7.5v5zm6-5h1.5v5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-.5-.5-1-1-1s-1 .5-1 1c0 .5-.5 1-1 1s-1-.5-1-1v-5z"
            fill="#000"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="22" height="22" x="1" y="1" rx="2" fill="#3178C6" />
          <path
            d="M12 7h4v1.5h-1.25V16h-1.5V8.5H12V7zm-2.5 2c.5 0 1 .5 1 1v.5h-1V10c0-.25-.25-.5-.5-.5s-.5.25-.5.5c0 .25.25.5.75.75l.5.25c.75.5 1 1 1 1.75 0 1-.75 1.75-1.75 1.75S7.25 14.5 7.25 13.5V13h1v.25c0 .5.25.75.75.75s.75-.25.75-.75c0-.25-.25-.5-.75-.75l-.5-.25C7.75 11.5 7.5 11 7.5 10.25 7.5 9.25 8.25 8.5 9.25 8.5z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Python",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <defs>
            <linearGradient id="python-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3776ab" />
              <stop offset="100%" stopColor="#4b8bbe" />
            </linearGradient>
            <linearGradient id="python-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd43b" />
              <stop offset="100%" stopColor="#ffe873" />
            </linearGradient>
          </defs>
          <path
            d="M12 2c-2.5 0-4.5.5-6 1.5C4.5 4.5 4 6 4 7.5v2c0 1.5.5 3 2 4 1.5 1 3.5 1.5 6 1.5s4.5-.5 6-1.5c1.5-1 2-2.5 2-4v-2c0-1.5-.5-3-2-4C16.5 2.5 14.5 2 12 2z"
            fill="url(#python-gradient-1)"
          />
          <path
            d="M12 9c-2.5 0-4.5.5-6 1.5C4.5 11.5 4 13 4 14.5v2c0 1.5.5 3 2 4 1.5 1 3.5 1.5 6 1.5s4.5-.5 6-1.5c1.5-1 2-2.5 2-4v-2c0-1.5-.5-3-2-4C16.5 9.5 14.5 9 12 9z"
            fill="url(#python-gradient-2)"
          />
          <circle cx="9" cy="6" r="1" fill="white" />
          <circle cx="15" cy="18" r="1" fill="white" />
        </svg>
      ),
    },
    {
      name: "C/C++",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 6h3c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5z"
            fill="#00599C"
          />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fill="white"
            fontSize="8"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            C++
          </text>
        </svg>
      ),
    },
    {
      name: "SQL",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="22" height="22" x="1" y="1" rx="2" fill="#336791" />
          <path d="M7 8h10v1H7V8zm0 2h10v1H7v-1zm0 2h10v1H7v-1zm0 2h6v1H7v-1z" fill="white" />
          <text
            x="12"
            y="18"
            textAnchor="middle"
            fill="white"
            fontSize="6"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            SQL
          </text>
        </svg>
      ),
    },
    {
      name: "MongoDB",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z"
            fill="#47A248"
          />
          <path
            d="M12.5 22.118c-.305-.398-.595-.853-.895-1.308v-.001c-.015-.026-.029-.052-.043-.077-.83-1.154-1.779-2.65-1.779-5.108 0-2.1.61-3.5 1.365-4.8.755-1.3 1.654-2.4 1.654-4.2 0-1.26-.786-2.3-1.654-3.4-.868-1.1-1.365-2.5-1.365-4.6 0-.9.786-1.8 1.654-2.4.868-.6 1.365-1.4 1.365-2.4 0-.5-.393-.9-.786-1.2-.393-.3-.786-.7-.786-1.2 0-.3.196-.6.393-.8.197-.2.393-.5.393-.8 0-.2-.098-.4-.196-.5-.098-.1-.196-.3-.196-.5 0-.1.049-.2.098-.3.049-.1.098-.2.098-.3 0-.05-.025-.1-.049-.15-.024-.05-.049-.1-.049-.15 0-.025.012-.05.025-.075.013-.025.025-.05.025-.075 0-.012-.006-.025-.012-.037-.006-.012-.012-.025-.012-.037 0-.006.003-.012.006-.019.003-.006.006-.012.006-.019 0-.003-.002-.006-.003-.009-.001-.003-.003-.006-.003-.009 0-.002.001-.003.002-.005.001-.002.002-.003.002-.005 0-.001-.001-.002-.001-.003 0-.001-.001-.002-.001-.003 0 0 0-.001.001-.001 0 0 0-.001.001-.001 0 0 0 0 0 0 0 0 0 0 0 0z"
            fill="#4DB33D"
          />
        </svg>
      ),
    },
    {
      name: "Angular",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M12 2L2.5 6.5l1.5 13L12 22l8-2.5 1.5-13L12 2z" fill="#DD0031" />
          <path d="M12 2v20l8-2.5 1.5-13L12 2z" fill="#C3002F" />
          <path d="M12 5.5L8.5 16h2l.75-2.5h3.5L15.5 16h2L12 5.5zm0 3.5l1.25 3.5h-2.5L12 9z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Django",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="22" height="22" x="1" y="1" rx="2" fill="#092E20" />
          <path d="M8 6h2v8c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-1.1.9-2 2-2zm6 0h2v12h-2V6zm-3 4h2v8h-2v-8z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Flask",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
            fill="#000000"
          />
        </svg>
      ),
    },
    {
      name: "Power BI",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="22" height="22" x="1" y="1" rx="2" fill="#F2C811" />
          <path d="M6 8h3v8H6V8zm4-2h3v10h-3V6zm4-2h3v12h-3V4z" fill="#333333" />
        </svg>
      ),
    },
    {
      name: "HTML5",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M3.345 21.601l1.838-20.462h13.634l-1.838 20.462-8.317 2.304z" fill="#E34F26" />
          <path d="M12 22.164l6.728-1.866 1.582-17.298H12z" fill="#EF652A" />
          <path d="M12 9.778H8.495l-.245-2.749H12V4.533H5.357l.063.711.651 7.301H12z" fill="#EBEBEB" />
          <path d="M12 16.658l-.012.003-3.102-.837-.198-2.224H6.19l.389 4.366 5.708 1.584.013-.004z" fill="#EBEBEB" />
          <path
            d="M11.991 9.778v2.496h3.263l-.308 3.44-2.955.796v2.588l5.429-1.506.04-.448.623-6.966.065-.7z"
            fill="white"
          />
          <path d="M11.991 4.533v2.496h6.399l.053-.596.121-1.343.063-.557z" fill="white" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M3.345 21.601l1.838-20.462h13.634l-1.838 20.462-8.317 2.304z" fill="#1572B6" />
          <path d="M12 22.164l6.728-1.866 1.582-17.298H12z" fill="#33A9DC" />
          <path d="M12 9.778H8.495l-.245-2.749H12V4.533H5.357l.063.711.651 7.301H12z" fill="#EBEBEB" />
          <path d="M12 16.658l-.012.003-3.102-.837-.198-2.224H6.19l.389 4.366 5.708 1.584.013-.004z" fill="#EBEBEB" />
          <path
            d="M11.991 9.778v2.496h3.263l-.308 3.44-2.955.796v2.588l5.429-1.506.04-.448.623-6.966.065-.7z"
            fill="white"
          />
          <path d="M11.991 4.533v2.496h6.399l.053-.596.121-1.343.063-.557z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            fill="#06B6D4"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.6.065-.037.15-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242L11.13 1.584c-.081-.047-.189-.047-.271 0L2.063 6.68C1.98 6.729 1.926 6.825 1.926 6.921v10.15c0 .097.054.189.137.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.255-.253h1.114c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.171 18.73C.448 18.335 0 17.569 0 16.728V6.578c0-.84.448-1.607 1.171-2.001L9.966.501C10.67.123 11.33.123 12.034.501l8.795 5.076c.723.394 1.171 1.161 1.171 2.001v10.15c0 .841-.448 1.607-1.171 2.002l-8.795 5.076c-.281.163-.601.247-.922.247l-.114-.001z"
            fill="#339933"
          />
          <path
            d="M10.114 13.394c0-.926-.534-1.168-1.681-1.168-.694 0-1.015.156-1.015.695 0 .329.127.556.831.556.704 0 1.865-.312 1.865-1.083zm3.762-2.532c-.471 0-.766.203-.766.695 0 .463.295.627.766.627s.766-.164.766-.627c0-.492-.295-.695-.766-.695z"
            fill="#339933"
          />
        </svg>
      ),
    },
    {
      name: "Next.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="11" fill="#000" />
          <path d="M9.5 9.5v7h1v-5.5l4.5 5.5h1.5L11 11l5-5h-1.5L9.5 9.5z" fill="#fff" />
          <path d="M18.5 5.5L9.5 16.5v-7l9-4z" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Git",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
            fill="#F05032"
          />
        </svg>
      ),
    },
    {
      name: "Postman",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path
            d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4z"
            fill="white"
          />
          <path
            d="M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
            fill="#FF6C37"
          />
        </svg>
      ),
    },
    {
      name: "Supabase",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12V23.604a.396.396 0 0 0 .716.233L21.797 11.576l.401-.562a1.04 1.04 0 0 0-.836-1.66z"
            fill="#3ECF8E"
          />
        </svg>
      ),
    },
  ]

  const experiences = [
    {
      title: "Marketing Intern",
      company: "Great Manager Institute",
      period: "Oct 2024 - Mar 2025",
      location: "Mumbai, India",
      description: [
        "Conducted comprehensive analysis of large-scale marketing campaign data to identify user engagement patterns, supporting outreach initiatives for over 50,000+ users.",
        "Developed interactive dashboards using Power BI and Tableau to monitor key metrics including click-through rates, conversion rates, and user retention, resulting in 30% improvement in reporting efficiency.",
        "Executed A/B testing strategies and performed data segmentation using Excel and SQL to pinpoint high-performing audience demographics and optimize targeting.",
        "Provided actionable insights to marketing and product teams through comprehensive reports using Power BI, Tableau, SQL, and Excel, leading to a 15% increase in ROI within 3 months.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Prodigy Infotech",
      period: "Jun 2024 - Aug 2024",
      description: [
        "Completed hands-on tasks and mini-projects as part of a structured internship program focused on real-world problem-solving using Python and web development.",
        "Developed interactive web-based projects including a Weather App, Stopwatch, and Tic-Tac-Toe Game using HTML, CSS, and JavaScript.",
        "Applied core concepts of frontend development, improved UI/UX understanding, and enhanced debugging skills.",
        "Collaborated with a virtual team, submitted projects on time, and received feedback to iterate on solutions.",
        "Strengthened skills in version control (GitHub) and gained exposure to professional workflows in tech internships.",
      ],
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
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My technical skills and professional experience in the field of web development and design.
        </p>
      </motion.div>

      <div className="space-y-16">
        {/* Technical Skills Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
            <Code className="mr-2" size={20} />
            Technical Skills
          </h3>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex flex-col items-center justify-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-16 h-16 mb-2 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    {skill.logo}
                  </div>
                  <span className="text-sm text-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
            <Briefcase className="mr-2" size={20} />
            Work Experience
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 pb-4"
              >
                <div className="flex flex-wrap items-center text-gray-700 dark:text-gray-300 font-medium mb-2">
                  <span>{exp.period}</span>
                  {exp.location && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.company}</p>
                <div className="space-y-2">
                  {exp.description.map((point, pointIndex) => (
                    <p key={pointIndex} className="text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
