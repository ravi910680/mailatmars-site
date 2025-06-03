"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand and Social */}
        <div>
          <p className="text-sm text-gray-300 mb-4">
            
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#"><Instagram className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="#"><Twitter className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="#"><Linkedin className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="#"><Facebook className="w-5 h-5 text-[#9856F2]" /></Link>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Products</h4>
          <div className="w-20 h-1 bg-white rounded mb-5 mt-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/drip-campaign">Email Campaign</Link></li>
            <li><Link href="/drip-campaign">Drip campaign</Link></li>
            <li><Link href="/advanced-report">Campaign analysis</Link></li>
            <li><Link href="/smtp-service">SMTP service</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Resources</h4>
          <div className="w-20 h-1 bg-white rounded mb-5 mt-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="https://mailatmars.document360.io/v1/en">Knowledge base</Link></li>
            <li><Link href="https://blog.mailatmars.com/">Blog</Link></li>
            <li><Link href="https://mailatmars.zohodesk.in/portal/en/newticket">Help center</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Company</h4>
          <div className="w-20 h-1 bg-white rounded mb-5 mt-5" />
          <ul className="space-y-2 text-sm text-gray-400">
           
            <li><Link href="/terms-of-service">Terms & service</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/acceptable-use-policy">Acceptable use policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-400">
        ©2025 All Rights Reserved. Mailatmars®
      </div>
    </footer>
  )
}
