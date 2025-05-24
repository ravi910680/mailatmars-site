"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuresMenuGrouped = {
  Product: [
    { label: "Campaigns", desc: "Send cold emails.", href: "/lead-discovery" },
    { label: "Discover", desc: "Find B2B leads.", href: "/lead-discovery" },
    { label: "Domain Search", desc: "Find email addresses of a company.", href: "/domain-search" },
    { label: "Email Finder", desc: "Find any professional's email address.", href: "/professional-email-finder" },
    { label: "Email Verifier", desc: "Check the validity of an email address.", href: "/advanced-email-verifier" },
    { label: "Signals", desc: "Find prospects using intent data.", href: "/data-enrichment-suite" },
    { label: "TechLookup", desc: "List websites by tech usage.", href: "/website-technology-checker" },
  ],
  "Data Platform": [
    { label: "Data Platform", desc: "Industry-leading B2B email data at scale.", href: "/data-platform" },
    { label: "Bulk tasks", desc: "Find or verify email addresses in bulk.", href: "/bulk-email-finder" },
    { label: "API", desc: "Integrate Hunter into your workflow.", href: "/developer-api-hub" },
  ],
  Integrations: [
    { label: "Integrations", desc: "Connect to your favorite application.", href: "/developer-api-hub" },
    { label: "Browser extension", desc: "Find emails while you're browsing.", href: "/browser-extension" },
    { label: "Google Sheets add-on", desc: "Verify emails in Google Sheets.", href: "/google-sheets-addon" },
  ],
}

const menuData: Record<"Resources" | "Company" | "Legal", { label: string; href: string }[]> = {
  Resources: [
    { label: "Blogs", href: "/blogs" },
    { label: "Customer Stories", href: "/customer-stories" },
    { label: "Templates", href: "/templates" },
    { label: "Help Center", href: "/help-center" },
  ],
  Company: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Data", href: "/our-data" },
    { label: "Careers", href: "/careers" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(prev => (prev === menu ? null : menu))
  }

  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white rounded-full shadow-md px-6 py-6">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src="/logo.png" alt="Exellius Logo" width={120} height={40} priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-900">
            {["Features", "Pricing Page", "Support", ...Object.keys(menuData)].map(label => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => toggleDropdown(label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {label === "Pricing Page" ? (
                  <Link href="/pricing" className="flex items-center gap-1 hover:text-purple-600 p-2">Pricing</Link>
                ) : label === "Support" ? (
                  <Link href="/contact-us" className="flex items-center gap-1 hover:text-purple-600 p-2">Support</Link>
                ) : (
                  <span className="flex items-center gap-1 cursor-pointer hover:text-purple-600 p-2">
                    {label}
                    <ChevronDown size={14} />
                  </span>
                )}

                {label === "Features" && activeDropdown === label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md rounded-md z-50 w-[720px] grid grid-cols-3 gap-6 after:content-[''] after:absolute after:top-4 after:right-0 after:h-[90%] after:w-px after:bg-gray-200">
                    {Object.entries(featuresMenuGrouped).map(([section, items]) => (
                      <div key={section} className="border-r border-gray-200 pr-4 p-4">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-5">{section}</h4>
                        <ul className="space-y-2">
                          {items.map(item => (
                            <li key={item.href}>
                              <Link href={item.href} className="block text-sm text-gray-800 hover:text-purple-600 mb-4">
                                <div className="font-medium">{item.label}</div>
                                <div className="text-sm text-gray-400">{item.desc}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {label !== "Features" && label !== "Pricing Page" && label !== "Support" && activeDropdown === label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md rounded-md p-2 w-48 z-50">
                    {menuData[label as keyof typeof menuData].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-1 text-sm text-gray-700 hover:text-purple-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Button variant="outline" className="text-sm px-4 py-2">Book a Demo</Button>
            <Button className="text-sm px-4 py-2">Create Account</Button>
          </div>

          <div className="flex lg:hidden">
            <Menu size={24} className="text-gray-700 cursor-pointer" onClick={() => setMobileOpen(true)} />
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-[9999] p-4 pt-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Link href="/">
                <Image src="/logo.png" alt="Exellius Logo" width={100} height={36} />
              </Link>
              <X size={24} className="text-gray-700 cursor-pointer" onClick={() => setMobileOpen(false)} />
            </div>

            {["Features", "Pricing Page", "Support", ...Object.keys(menuData)].map(label => (
              <div key={label} className="mb-2">
                {label === "Pricing Page" ? (
                  <Link href="/pricing" className="block text-gray-800 py-2">Pricing</Link>
                ) : label === "Support" ? (
                  <Link href="/contact-us" className="block text-gray-800 py-2">Support</Link>
                ) : label === "Features" ? (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer text-gray-800 py-2"
                      onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === label ? null : label)}
                    >
                      Features
                      <ChevronDown size={16} className={`transform transition-transform ${mobileSubmenuOpen === label ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    {mobileSubmenuOpen === label && (
                      <div className="pl-4 border-l border-gray-200 mt-2">
                        {Object.entries(featuresMenuGrouped).map(([section, items]) => (
                          <div key={section} className="mb-4">
                            <p className="text-xs uppercase text-gray-400 font-semibold mb-2">{section}</p>
                            <ul className="space-y-1">
                              {items.map(item => (
                                <li key={item.href}>
                                  <Link href={item.href} className="block text-sm text-gray-700 hover:text-purple-600">
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer text-gray-800 py-2"
                      onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === label ? null : label)}
                    >
                      {label}
                      <ChevronDown size={16} className={`transform transition-transform ${mobileSubmenuOpen === label ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    {mobileSubmenuOpen === label && (
                      <div className="pl-4 border-l border-gray-200 mt-2">
                        {(menuData[label as keyof typeof menuData] || []).map(item => (
                          <Link key={item.href} href={item.href} className="block text-sm text-gray-700 py-1 hover:text-purple-600">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button variant="outline" className="w-full">Book a Demo</Button>
            <Button className="w-full">Create Account</Button>
          </div>
        </div>
      )}
    </>
  )
}
