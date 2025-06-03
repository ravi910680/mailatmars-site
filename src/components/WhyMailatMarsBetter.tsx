"use client"

import { Sparkle, ShieldCheck, MailCheck, BarChart3, UserPlus2 } from "lucide-react"

export default function WhyMailatMarsBetter() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Section Title */}
        <div>
          <h2 className="text-4xl font-bold text-[#0a0a0a]">
            What makes MailatMars better than others?
          </h2>
          <p className="text-[#1f2c49] max-w-2xl mx-auto mt-4 text-md leading-relaxed">
            We’re not just another email tool — MailatMars is built for performance, automation, and simplicity. Everything you need to send smarter campaigns, all in one place.
          </p>
        </div>

        {/* Benefits Block */}
        <div className="space-y-6 text-left mx-auto max-w-2xl">
          <div className="text-center">
            <p className="flex items-center justify-center gap-2 text-sm text-[#6c3cbe] font-semibold">
              <Sparkle size={16} className="text-[#6c3cbe]" />
              Why choose MailatMars
            </p>
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mt-2">Better campaigns. Less effort.</h3>
            <p className="mt-3 text-[#1f2c49] text-md leading-relaxed">
              MailatMars automates the heavy lifting — from managing lists to analyzing performance — so you can focus on results.
            </p>
          </div>

          <div className="space-y-4 text-center">
            {[
              { label: "Unique campaign system", icon: Sparkle },
              { label: "Automatic unsubscribe removal", icon: ShieldCheck },
              { label: "Bounce removal & hygiene cleanup", icon: MailCheck },
              { label: "Simplified reporting & dashboards", icon: BarChart3 },
              { label: "Fast & frictionless account setup", icon: UserPlus2 },
            ].map(({ label, icon: Icon }, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 text-center border-[#ccc] pb-2 text-[#1f2c49] font-medium hover:text-[#6c3cbe]"
              >
                <Icon size={18} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
