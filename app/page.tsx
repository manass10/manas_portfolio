import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  )
}
