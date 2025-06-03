"use client"
import React from "react" 
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import { useState } from "react"
import { Slider } from "@/components/ui/Slider"
import Link from "next/link"    

import {
  CheckCircle,
  XCircle
} from "lucide-react"

const pricingTiers = {
  lite: {
    10000: 8,
    20000: 14,
    50000: 30,       // ✅ Added 50K to Lite
    100000: 60,
  },
  premium: {
    10000: 9,
    20000: 16,
    50000: 35,       // ✅ Added 50K to Premium
    100000: 69,
    200000: 130,
    300000: 190,
    400000: 250,
    500000: 310,
    600000: 350,
    700000: 400,
  }
}
const FeatureIcon = ({ available }: { available: boolean }) => (
  available ? <CheckCircle className="text-green-600 w-4 h-4 mx-auto" /> : <XCircle className="text-gray-400 w-4 h-4 mx-auto" />
)

const featureGroups = [
  {
    category: "Campaigns",
    features: [
      { label: "Rich Text Editor", free: true, lite: true, premium: true },
      { label: "Regular Campaigns", free: true, lite: true, premium: true },
      { label: "A/B Testing", free: false, lite: true, premium: true },
      { label: "Drip Campaign", free: false, lite: true, premium: true },
      { label: "Batch Campaign", free: false, lite: true, premium: true },
      { label: "HTML Editor", free: false, lite: true, premium: true },
      { label: "Drag and Drop Editor", free: false, lite: true, premium: true },
      { label: "Delivery by Timezone", free: false, lite: true, premium: true },
      { label: "Personalisation", free: false, lite: true, premium: true }
    ]
  },
  {
    category: "Contact Management",
    features: [
      { label: "Unsubscribe Management", free: true, lite: true, premium: true },
      { label: "Bounce Management", free: false, lite: true, premium: true },
      { label: "Contact Management", free: true, lite: true, premium: true },
      { label: "Segmentation", free: false, lite: true, premium: true },
      { label: "Tag Management", free: false, lite: true, premium: true }
    ]
  },
  {
    category: "Reports & Analytics",
    features: [
      { label: "Real-Time Analytics", free: false, lite: true, premium: true },
      { label: "Open/Click Tracking", free: false, lite: true, premium: true },
      { label: "Click Report", free: false, lite: true, premium: true },
      { label: "Link Report", free: false, lite: true, premium: true },
      { label: "Location Report", free: false, lite: true, premium: true },
      { label: "Download Reports", free: false, lite: true, premium: true }
    ]
  },
  {
    category: "Deliverability & Authentication",
    features: [
      { label: "Custom Domain", free: false, lite: true, premium: true },
      { label: "Dedicated Domain", free: false, lite: false, premium: true },
      { label: "Dedicated IPs", free: false, lite: false, premium: true },
      { label: "Domain Warmup Tool", free: false, lite: false, premium: true },
      { label: "Custom Tracking Domain", free: false, lite: false, premium: true },
      { label: "Domain Authentication", free: false, lite: true, premium: true }
    ]
  },
  {
    category: "Support",
    features: [
      { label: "Email & Chat Support", free: true, lite: true, premium: true },
      { label: "WhatsApp Support", free: false, lite: false, premium: true },
      { label: "Call Support", free: false, lite: false, premium: true }
    ]
  }
]


const emailOptions = Object.keys(pricingTiers.premium).map(Number).sort((a, b) => a - b)

export default function PricingPage() {
  const [selectedEmails, setSelectedEmails] = useState(10000)
  const isLite = selectedEmails <= 100000
  const litePrice = pricingTiers.lite[selectedEmails.toString() as unknown as keyof typeof pricingTiers.lite] || "-"
  const premiumPrice = pricingTiers.premium[selectedEmails.toString() as unknown as keyof typeof pricingTiers.premium] || "Custom"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32">

        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Choose your plan</h1>
          <p className="text-gray-600 mt-4">Slide to select monthly email volume</p>
        </section>

        {/* Slider */}
        <section className="max-w-xl mx-auto mb-20">
          <Slider
            defaultValue={[selectedEmails]}
            value={[selectedEmails]}
            onValueChange={([val]) => {
              // Snap to closest allowed value
              const closest = emailOptions.reduce((prev, curr) =>
                Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
              )
              setSelectedEmails(closest)
            }}
            marks={emailOptions}
          />
          <p className="text-center mt-4 text-sm text-gray-600">
            {selectedEmails.toLocaleString()} Emails / month
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-28">
          {/* Free */}
          <div className="bg-[#fef9c3] p-8 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold mb-2">Free</h2>
            <p className="text-gray-700 mb-4">Perfect to get started</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">6,000</p>
            <p className="text-gray-600 mb-4">Emails/month</p>
            <p className="text-sm text-gray-700">You pay <strong>$0</strong></p>
          </div>

          {/* Lite */}
          {/* Lite */}
<div className="bg-[#ccfbf1] p-8 rounded-xl shadow text-center border-2 border-[#0f766e]">
  <h2 className="text-xl font-semibold mb-2">Lite Plan</h2>
  <p className="text-gray-700 mb-4">Up to 100K emails</p>
  <p className="text-2xl font-bold text-gray-900 mb-2">
    ${isLite ? litePrice : "-"}
  </p>
  <p className="text-gray-600 mb-4">{selectedEmails.toLocaleString()} Emails/month</p>
  <Link
                      href="https://account-v2.mailatmars.com/account/create">
  <button
    className={`px-5 py-2 rounded-md text-sm ${
      isLite
        ? "bg-[#0f766e] text-white"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
    disabled={!isLite}
  >
    
    {isLite ? "Get Lite Plan" : "Choose Premium"}
  </button>
  </Link>
</div>


          {/* Premium */}
          <div className="bg-[#ede9fe] p-8 rounded-xl shadow text-center border-2 border-[#6c3cbe]">
            <h2 className="text-xl font-semibold mb-2">Premium Plan</h2>
            <p className="text-gray-700 mb-4">Best for high-volume senders</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">
              {premiumPrice === "Custom" ? (
                <span>Custom</span>
              ) : (
                <>${premiumPrice}</>
              )}
            </p>
            <p className="text-gray-600 mb-4">{selectedEmails.toLocaleString()} Emails/month</p>
            <Link
                      href="https://account-v2.mailatmars.com/account/create">
            <button className="bg-[#6c3cbe] text-white px-5 py-2 rounded-md text-sm">
              {premiumPrice === "Custom" ? "Schedule Demo" : "Get Premium Plan"}
            </button>
            </Link>
          </div>
        </section>

   <section className="max-w-7xl mx-auto mb-20 px-4">
  <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Feature Comparison</h2>
  <div className="overflow-x-auto border rounded-xl shadow-sm">
    <table className="min-w-full bg-white text-sm text-gray-700">
      <thead className="bg-gray-100 border-b">
        <tr>
          <th className="p-4 text-left font-semibold">Features</th>
          <th className="p-4 text-center font-semibold">Free</th>
          <th className="p-4 text-center font-semibold">Lite</th>
          <th className="p-4 text-center font-semibold">Premium</th>
        </tr>
      </thead>
      <tbody>
        {featureGroups.map((group, groupIdx) => (
          <React.Fragment key={group.category} >
            {/* Category Header Row */}
            <tr className="bg-violet-50" id={groupIdx.toString()}>
              <td colSpan={4} className="p-4 font-bold text-violet-800">
                {group.category}
              </td>
            </tr>

            {/* Features in Category */}
            {group.features.map((feature, idx) => (
              <tr
                key={feature.label}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-4">{feature.label}</td>
                <td className="p-4 text-center">
                  <FeatureIcon available={feature.free} />
                </td>
                <td className="p-4 text-center">
                  <FeatureIcon available={feature.lite} />
                </td>
                <td className="p-4 text-center">
                  <FeatureIcon available={feature.premium} />
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
</section>


        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
