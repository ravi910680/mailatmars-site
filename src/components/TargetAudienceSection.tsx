"use client"

import { BarChart, Eye, Star, Contact2, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TargetAudienceSection() {
  return (
    <section className="bg-[#e4f5c6] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">
            Are you targeting the <br /> right customers?
          </h2>
          <p className="text-[#1f2c49] text-md leading-relaxed">
            For planning the right email marketing strategy, you need to find the right customers. Often, email campaigns end up in the inboxes of uninterested customers.
          </p>
          <p className="text-[#1f2c49] text-md leading-relaxed">
            Mailercloud helps you to target the right set of audience for your product or service.
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <Image
            src="/target-profile-card.svg" // Replace with your actual image
            alt="Customer profile insights"
            width={420}
            height={500}
            className="rounded-lg "
          />
        </div>

        {/* Right Feature Description */}
        <div className="space-y-6">
          <div>
            <p className="flex items-center gap-2 text-sm text-[#6c3cbe] font-semibold">
              <Target size={16} className="text-[#6c3cbe]" />
              Target
            </p>
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mt-2">Aim for the right customer</h3>
            <p className="mt-3 text-[#1f2c49] text-md leading-relaxed">
              You can view and track all the information about your subscribers.
              Manage your lists and deliver more targeted emails through segmentation.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Segmentation", icon: BarChart },
              { label: "Contact monitoring", icon: Eye },
              { label: "Contact rating", icon: Star },
              { label: "Accurate tracking", icon: Contact2 },
            ].map(({ label, icon: Icon }, i) => (
              <Link
                href="#"
                key={i}
                className={`flex items-center justify-between border-b border-dashed border-[#ccc] pb-2  `}
              >
                <div className="flex items-center gap-3 font-medium">
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
