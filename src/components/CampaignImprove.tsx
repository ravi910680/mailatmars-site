"use client"

import { Globe, Server,  TrendingUp,Repeat,  UserCog,  } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CampaignImproveSection() {
  return (
    <section className="bg-[#d9f1ff] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
        {/* Left Text Block */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">
            Are your email <br /> campaigns getting lost <br /> in your subscriber’s inbox?
          </h2>
          <p className="text-[#1f2c49] text-md leading-relaxed">
            Subscribers will always ignore emails that come from unreliable sources.
          </p>
          <p className="text-[#1f2c49] text-md leading-relaxed">
            You can improve your email campaigns with Mailercloud and significantly increase your open and click rates.
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <Image
            src="/campaign-scheduler.svg" // Replace with your image path
            alt="Campaign Scheduler"
            width={400}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Right Feature Column */}
        <div className="space-y-6">
          <div>
            <p className="flex items-center gap-2 text-sm text-[#6c3cbe] font-semibold">
              <TrendingUp size={16} className="text-[#6c3cbe]" />
              Improve
            </p>
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mt-2">Level up your campaigns</h3>
            <p className="mt-3 text-[#1f2c49] text-md leading-relaxed">
              Having a rational and genuine strategy in place, together with an all-inclusive campaign design will make your campaign delivery far easier.
            </p>
          </div>

          <div className="space-y-4">
            {[
  { label: "Automatic Warmup", icon: Repeat },
  { label: "Dedicated IPs", icon: Server },
  { label: "Personalisation", icon: UserCog },
  { label: "Custom domain", icon: Globe },
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
