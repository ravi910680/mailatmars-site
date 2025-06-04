"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  ChevronDown,
  Menu,
  X,
  LayoutTemplate,
  Paintbrush2,
  
  Code,
  Users2,
  Eye,
  
  Link as LinkIcon,
  Server,
  Smile,
  FlaskConical,
  Repeat,
  Send,
  BarChart,
  Clock,
  Globe,
} from "lucide-react"

const featuresMenuGrouped = {
  "Design like a Pro": [
    { label: "Drag and drop builder", href: "/drag-n-drop", icon: LayoutTemplate },
    { label: "In-Built text editor", href: "/text-editor", icon: Paintbrush2 },
    { label: "Custom HTML editor", href: "/custom-html", icon: Code },
  ],
  "Target audience": [
    { label: "Segmentation", href: "/segmentation", icon: Users2 },
    { label: "Contact monitoring", href: "/contact-monitoring", icon: Eye },
   
    
  ],
  "Improve engagement": [
    { label: "Custom domains", href: "/custom-domain", icon: LinkIcon },
    { label: "Dedicated IP", href: "/dedicated-ip", icon: Server },
    { label: "Personalisation", href: "/email-personalisation", icon: Smile },
  ],
  "Enhance communication": [
    { label: "A/B testing", href: "/ab-testing", icon: FlaskConical },
    { label: "Drip campaign", href: "/drip-campaign", icon: Repeat },
    { label: "SMTP services", href: "/smtp-service", icon: Send },
  ],
  "Track metrics": [
    { label: "Advanced reports", href: "/advanced-report", icon: BarChart },
    { label: "Timestamp", href: "/time-stamp", icon: Clock },
    { label: "Deliver by time zone", href: "/delivery-by-timezone", icon: Globe },
  ],
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(prev => (prev === menu ? null : menu))
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 transition-colors duration-300  ${
        scrolled ? 'bg-white border-b-2' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <Link href="/">
            <Image
              src="/mailatmars-logo.png"
              alt="MailatMars Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-md font-medium text-[#40129b]">
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("Features")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center gap-1 text-gray-800 cursor-pointer hover:text-[#6c3cbe] p-2">
                Features
                <ChevronDown size={14} />
              </span>

              {activeDropdown === "Features" && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-xl p-6 w-[720px] grid grid-cols-3 gap-6 z-50">
                  {Object.entries(featuresMenuGrouped).map(([section, items]) => (
                    <div key={section}>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-4">{section}</h4>
                      <ul className="space-y-3">
                        {items.map(({ href, label, icon: Icon }) => (
                          <li key={href}>
                            <Link href={href} className="flex items-center gap-4 font-semibold text-gray-800 hover:text-[#6c3cbe] pt-2 pb-2">
                              <Icon size={14} /> {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="hover:text-[#6c3cbe] p-2 text-gray-800">Pricing</Link>
            <Link href="https://mailatmars.document360.io/v1/en" className="hover:text-[#6c3cbe] p-2 text-gray-800">Resource</Link>
            <Link href="https://wa.me/917016992938" className="hover:text-[#6c3cbe] p-2 text-gray-800">Contact us</Link>
          </nav>

          <div className="hidden md:flex gap-2">
            <Link
  href="https://calendly.com/ravi-mailatmars/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm px-4 py-2  text-black hover:bg-white rounded-md inline-flex items-center justify-center"
>
  Book a Demo
</Link>

            <Link
  href="https://account-v2.mailatmars.com/account/create"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm px-4 py-2 bg-[#6c3cbe] text-white hover:opacity-90 rounded-md inline-flex items-center justify-center"
>
  Create Account
</Link>

          </div>

          <div className="flex lg:hidden">
            <Menu size={24} className="text-[#40129b]" onClick={() => setMobileOpen(true)} />
          </div>
        </div>

        {mobileOpen && (
          <div className="fixed inset-0 bg-white z-[9999] p-6  flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-12">
                <Link href="/">
                  <Image
                    src="/mailatmars-logo.png"
                    alt="MailatMars Logo"
                    width={100}
                    height={36}
                  />
                </Link>
                <X size={24} className="text-gray-700 cursor-pointer" onClick={() => setMobileOpen(false)} />
              </div>

              <div className="space-y-4">
                <div>
                  <div
                    className="flex items-center justify-between text-[#40129b] font-semibold cursor-pointer"
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "Features" ? null : "Features")}
                  >
                    Features
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${mobileSubmenuOpen === "Features" ? 'rotate-180' : ''}`}
                    />
                  </div>
                  {mobileSubmenuOpen === "Features" && (
                    <div className="mt-3 space-y-4 pl-3">
                      {Object.entries(featuresMenuGrouped).map(([section, items]) => (
                        <div key={section}>
                          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">{section}</p>
                          <ul className="space-y-1">
                            {items.map(({ href, label, icon: Icon }) => (
                              <li key={href}>
                                <Link href={href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#6c3cbe]">
                                  <Icon size={14} /> {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/pricing" className="block text-[#40129b] font-semibold">Pricing</Link>
                <Link href="/contact" className="block text-[#40129b] font-semibold">Contact</Link>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
             <Link
  href="https://calendly.com/ravi-mailatmars/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm px-4 py-2  text-black hover:bg-white rounded-md inline-flex items-center justify-center"
>
  Book a Demo
</Link>

              <Link
  href="https://account-v2.mailatmars.com/account/create"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm px-4 py-2 bg-[#6c3cbe] text-white hover:opacity-90 rounded-md inline-flex items-center justify-center"
>
  Create Account
</Link>

            </div>
          </div>
        )}
      </header>
    </div>
  )
}
