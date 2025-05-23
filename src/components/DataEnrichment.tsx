"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EmailVerifyFeature() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto rounded-xl bg-[#FEF0EC] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-sm">
        
        {/* Left: Image on background grid */}
        <div className="relative ">
          <Image
            src="/left-back.png"
            alt="Background grid"
            fill
            className="object-cover opacity-60"
          />
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <Image
              src="/data-enrichment.png"
              alt="Email verification UI"
              width={400}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="bg-[#fdf4fc] p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-[#9856F2]">04.</span>
             Data Enrichment & Lead Intelligence
          </h2>
          <div className="w-20 h-1 bg-[#9856F2] rounded mb-4 mt-5" />

          {/* Divider */}
          <div className="w-10 h-1  rounded mt-4 mb-6" />

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
          Transform basic contact lists into rich prospect profiles with our AI-driven enrichment engine.
          </p>

          {/* Bullet List */}
          <ul className="space-y-4 text-sm text-gray-800">
  {[
    "B2B Contact Intelligence — Enhance lead profiles with firmographics.",
    "Data Enrichment Platform — Improve lead scoring with verified data.",
    "Ideal Customers — Target high-intent buyers with precision.",
  ].map((item, i) => {
    const [boldPart, rest] = item.split(" — ");
    return (
      <li key={i} className="flex items-start gap-2">
        <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
        <span>
          <strong className="font-semibold">{boldPart}</strong> — {rest}
        </span>
      </li>
    );
  })}
</ul>


          <Button
            className="mt-8 bg-[#9856F2] hover:bg-[#813fe0] text-white w-fit"
            size="lg"
          >
            Find Verified Emails Now
          </Button>
        </div>
      </div>
    </section>
  )
}
