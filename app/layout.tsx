import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manas Salian | MS CS @NEU | Software Developer | Data Analyst",
  description: "Portfolio of Manas Salian - Software Developer and Data Analyst specializing in full-stack web development, data analytics, business intelligence, and software solutions. Located in Mumbai, India with expertise in React, Python, SQL, Power BI, and Tableau.",
  keywords: ["Software Developer", "Data Analyst", "Full-Stack Developer", "Web Developer", "Data Science", "Business Intelligence", "Power BI", "Tableau", "Python", "React", "Node.js", "SQL"],
  authors: [{ name: "Manas Salian" }],
  openGraph: {
    title: "Manas Salian | MS CS @NEU | Software Developer & Data Analyst",
    description: "Professional portfolio showcasing full-stack development and data analytics expertise",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


