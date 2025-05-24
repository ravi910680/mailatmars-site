"use client"

import { CheckCheck } from 'lucide-react';

const BENEFITS = [
  {
    title: "Sales Teams",
    description: "Find and verify B2B leads faster.",
  },
  {
    title: "Marketers",
    description: "Build targeted email lists with high deliverability.",
  },
  {
    title: "Recruiters",
    description: "Source professional email addresses for outreach.",
  },
  {
    title: "Amazon Sellers",
    description: "Access Amazon seller contact data for partnerships.",
  },
  {
    title: "Data Analysts",
    description: "Enrich datasets with verified business leads.",
  },
]

export default function BenefitCards() {
  return (
    <section className="w-full py-100 px-4 pb-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900">
          Who Benefits from <span className="text-[#9856F2]">Exellius</span>?
        </h2>

       


        {/* Divider line */}
        <div className="w-40 h-1 bg-[#9856F2] rounded mx-auto mt-4 mb-10" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {BENEFITS.map((item, i) => (
            <div
              key={i}
              className="bg-[#FFF6F7] rounded-xl p-6 shadow-md text-left"
            >
              <CheckCheck className="text-[#9856F2] w-6 h-6 mt-1 mb-3" />
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-1000">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
