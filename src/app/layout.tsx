'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import NavMobile from '@/components/NavMobile'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showNav, setShowNav] = useState(false)

  return (
    <html lang="en">
      <body>
        <Nav openNav={() => setShowNav(true)} />
        <NavMobile showNav={showNav} closeNav={() => setShowNav(false)} />
        {children}
      </body>
    </html>
  )
}
