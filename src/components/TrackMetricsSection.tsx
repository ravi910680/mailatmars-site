"use client"

import { BarChart3, Clock, Globe, Target,Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TrackMetricsSection() {
  return (
    <section className="bg-[#d4edff] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
        {/* Left Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">
            Are you missing any of <br /> the email metrics?
          </h2>
          <p className="text-[#1f2c49] text-md leading-relaxed">
            Good email marketing metrics are always trackable, important, and explainable. You can now track engagements, conversions, website traffic, and your business sales with ease.
          </p>
          <p className="text-[#1f2c49] text-md leading-relaxed">
            Our data-driven detailed metric analysis features give you the perfect metric values, to boost the performance of your email campaigns.
          </p>
        </div>

        {/* Center Mockup Image */}
        <div className="flex justify-center relative">
          <Image
            src="/email-metrics-mockup.svg" // Replace with your dashboard + graph visual
            alt="Email dashboard"
            width={420}
            height={500}
            className="rounded-md "
          />
        </div>

        {/* Right Feature Description */}
        <div className="space-y-6">
          <div>
            <p className="flex items-center gap-2 text-sm text-[#6c3cbe] font-semibold">
              <Target size={16} className="text-[#6c3cbe]" />
              Track
            </p>
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mt-2">Monitor your performance</h3>
            <p className="mt-3 text-[#1f2c49] text-md leading-relaxed font-semibold">
              Stop wasting time compiling spreadsheets to track your email marketing campaigns.
            </p>
            <p className="mt-1 text-[#1f2c49] text-md leading-relaxed">
              We can make it simple for you. We help you know what’s working and what isn’t with real-time results that can be downloaded.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Advanced reports", icon: BarChart3 },
              { label: "Timestamp", icon: Clock },
               { label: "Custom tracking domain", icon: Link2 },
              { label: "Deliver by time zone", icon: Globe },
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
