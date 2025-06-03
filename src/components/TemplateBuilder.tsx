"use client"

import { LayoutTemplate, Paintbrush2, ShieldCheck, Code,Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeatureSection() {
  return (
    <section className="bg-[#bfe0f0] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">
            Are you finding it <br /> difficult to use HTML codes?
          </h2>
          <p className="text-[#1f2c49] text-md leading-relaxed">
            Typing in long codes to create an attractive email template can be exhausting and painful.
          </p>
          <p className="text-[#1f2c49] text-md leading-relaxed">
            Our simple and easy-to-use online email design builder takes away all that pain and helps you create artistic templates with ease.
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <Image
            src="/editor-mockup.svg" // replace this with your actual image path
            alt="Drag and drop email editor"
            width={400}
            height={500}
            className="rounded-lg "
          />
        </div>

        {/* Right Feature Description */}
        <div className="space-y-6">
          <div>
            <p className="flex items-center gap-2 text-md text-[#6c3cbe] font-semibold pb-2">
              <Palette size={20} className="text-[#6c3cbe]" />Design
            </p>
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mt-2">Create artistic templates</h3>
            <p className="mt-3 text-[#1f2c49] text-md leading-relaxed">
              With our mobile-ready and tested newsletter templates, you can create and send professional email newsletters.
            </p>
            <p className="mt-2 text-[#1f2c49] text-md leading-relaxed">
              Use any of our email templates to create your next email marketing campaign within seconds.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Drag and drop builder", icon: LayoutTemplate },
              { label: "In-Built text editor", icon: Paintbrush2 },
              { label: "HTML template editor", icon: ShieldCheck },
              { label: "Easy template testing", icon: Code },
            ].map(({ label, icon: Icon }, i) => (
              <Link
                href="#"
                key={i}
                className="flex items-center justify-between border-b border-dashed border-[#ccc] pb-2 hover:text-[#6c3cbe]"
              >
                <div className="flex items-center gap-3 text-[#1f2c49] font-medium">
                  <Icon size={18} /> {label}
                </div>
                
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
