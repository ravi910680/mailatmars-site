"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(prev => (prev === menu ? null : menu))
  }

  const menuItems = ["Features Pages", "Resources", "Company", "Support", "Pricing", "System", "Legal"]

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white rounded-full shadow-md px-6 py-6">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Exellius Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-900">
          {menuItems.map(label => (
            <div
              key={label}
              className="relative cursor-pointer hover:text-purple-600"
              onMouseEnter={() => toggleDropdown(label)}
              onMouseLeave={() => toggleDropdown("")}
            >
              <span className="flex items-center gap-1">
                {label}
                {["Features Pages", "Resources", "Company", "Support", "System", "Legal"].includes(label) && (
                  <ChevronDown size={14} />
                )}
              </span>

              {activeDropdown === label && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md p-2 w-40 z-50">
                  <p className="text-sm text-gray-600">Coming soon...</p>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex gap-2">
          <Button variant="outline" className="text-sm px-4 py-2">Book a Demo</Button>
          <Button className="text-sm px-4 py-2">Create Account</Button>
        </div>

        {/* Mobile menu icon */}
        <div className="flex lg:hidden">
          <Menu size={24} className="text-gray-700 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
