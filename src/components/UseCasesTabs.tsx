"use client"

import { useState } from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const tabs = [
  {
    title: "Sales Teams",
    key: "sales",
    highlights: [
      "CEOs/Founders (92% coverage)",
      "VP/Director-level (88% coverage)",
      "Department Heads (95% coverage)",
    ],
    metrics: [
      { value: "40%", label: "faster sales cycles" },
      { value: "30%", label: "more meetings booked" },
      { value: "25%", label: "higher conversion rates" },
    ],
    cta: "Get Sales Team Toolkit",
  },
  {
    title: "Recruiters",
    key: "recruiters",
    highlights: [
      "Find work emails for 85% of Fortune 500 employees",
      "Verify personalized addresses (first.last@company)",
      "Access alternative contacts when roles change",
    ],
    metrics: [
      { value: "3x", label: "more responses than InMail" },
      { value: "50%", label: "reduction in sourcing time" },
      { value: "65%", label: "candidate engagement rate" },
    ],
    cta: "See Recruiting Templates",
  },
  {
    title: "E-commerce & Sellers",
    key: "ecommerce",
    highlights: [
      "Contact 1M+ FBA sellers by category/rating",
      "Identify high-volume wholesale buyers",
      "Track new marketplace entrants weekly",
    ],
    metrics: [
      { value: "120%", label: "more wholesale partnerships" },
      { value: "40%", label: "faster deal cycles" },
      { value: "$250k+", label: "avg. incremental revenue" },
    ],
    cta: "Explore Data",
  },
]

export default function UseCasesTabs() {
  const [activeTab, setActiveTab] = useState("sales")
  const tabData = tabs.find((tab) => tab.key === activeTab)!

  return (
    <section className="w-full bg-[#f5f2fc] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          How Teams Use <span className="text-[#9856F2]">Exellius</span>
        </h2>
        <p className="text-gray-500 italic mt-2">
          Transform Workflows Across Your Organization
        </p>
        <div className="w-24 h-1 bg-[#9856F2] rounded mx-auto mt-4 mb-10" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
  {tabs.map((tab, index) => (
    <button
      key={tab.key}
      onClick={() => setActiveTab(tab.key)}
      className={`px-8 py-6 rounded-md font-bold text-md transition flex items-center gap-2 ${
        activeTab === tab.key
          ? "bg-[#cbf0ff] text-[#000]"
          : "bg-white text-gray-600"
      }`}
    >
      <span className="text-[#9856F2]">{index + 1}.</span> {tab.title}
    </button>
  ))}
</div>

        {/* Content Panel (Full Width & Centered) */}
        <div className="bg-white rounded-xl p-10 shadow-lg w-full max-w-full mx-auto text-center">
          <h3 className="text-lg font-bold text-[#9856F2] mb-1">
            {tabs.findIndex((t) => t.key === activeTab) + 1}. {tabData.title}
          </h3>
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            {activeTab === "sales"
              ? "Close 30% More Deals with Verified Executive Contacts"
              : activeTab === "recruiters"
              ? "Source Candidates 3x Faster with Direct Emails"
              : "Find Wholesale Buyers in Amazon’s Marketplace"}
          </h4>
          <p className="text-sm text-gray-700 mb-6 max-w-3xl mx-auto">
            {activeTab === "sales"
              ? "Exellius eliminates gatekeepers by delivering direct emails and mobile numbers for C-suite leaders. Our accuracy guarantee means your outreach always reaches:"
              : activeTab === "recruiters"
              ? "Skip LinkedIn InMail limits and contact passive candidates directly. Exellius helps talent teams:"
              : "Grow your distribution network with our exclusive Amazon seller data:"}
          </p>

          {/* Highlights */}
          <ul
  className={`${
    activeTab === "sales"
      ? "flex flex-col sm:flex-row flex-wrap justify-center gap-6"
      : "flex flex-col gap-4 items-center"
  } text-sm text-gray-800 mb-6`}
>
  {tabData.highlights.map((item, idx) => (
    <li key={idx} className="flex items-center gap-2">
      <CheckCircle className="text-[#9856F2] w-5 h-5" />
      <span>{item}</span>
    </li>
  ))}
</ul>


          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
            {tabData.metrics.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-[#9856F2]">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Button – Larger & Centered */}
          <Button
            className="bg-[#9856F2] hover:bg-[#813fe0] text-white px-6 py-4 text-base font-semibold rounded-md"
          >
            {tabData.cta} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
