"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"  
import { Clock8, CalendarClock, Lightbulb } from "lucide-react"

export default function PeaktimestampPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white ">

        {/* Section 1: Best Send Time Discovery */}
        <section className="bg-[#f0fdf4] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#166534]">
                <Clock8 size={18} /> Smart time-stamp
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover your audience best open time.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Analyze engagement patterns across your email campaigns and find the perfect send window for maximum opens.
              </p>
               <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#166534] text-white text-base px-6 py-3 rounded-md font-medium">
                Analyze My Audience
              </button>
              </Link>
            </div>
            <Image
              src="/time-stamp/img-1.svg"
              alt="Email time-stamp AI"
              width={620}
              height={360}
              className="rounded-xl object-cover order-1 lg:order-2"
            />
          </div>
        </section>

        {/* Section 2: Peak Time Heatmap */}
        <section className="bg-[#f0f9ff] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
                <CalendarClock size={18} /> Peak Hour Insights
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visualize peak email engagement hours.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Get detailed heatmaps showing which hours and days your emails are most likely to be opened.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
                View time-stamp Report
              </button>
              </Link>
            </div>
            <Image
              src="/time-stamp/img-2.svg"
              alt="Peak Open Time"
              width={620}
              height={360}
              className="rounded-xl object-cover order-1 lg:order-2"
            />
          </div>
        </section>

        {/* Section 3: Campaign Planning */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#a21caf]">
                <Lightbulb size={18} /> Campaign Strategy
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Plan campaigns with data-driven precision.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Use your time-stamp insights to schedule high-impact campaigns that hit inboxes at exactly the right moment.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#a21caf] text-white text-base px-6 py-3 rounded-md font-medium">
                Plan My Campaign
              </button>
              </Link>
            </div>
            <Image
              src="/time-stamp/img-3.svg"
              alt="Campaign Planner"
              width={620}
              height={360}
              className="rounded-xl object-cover order-1 lg:order-2"
            />
          </div>
        </section>

        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
