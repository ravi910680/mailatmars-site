"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"  
import { BarChart3, Clock4, FileDown, TrendingUp, CalendarClock } from "lucide-react"

export default function AdvancedadvancedreportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white ">

        {/* Hero: Advanced advanced-report */}
        <section className="bg-[#ede9fe] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#6c3cbe]">
                <BarChart3 size={18} /> Advanced Reporting
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Make decisions backed by powerful advanced-report.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Go beyond basic metrics. Get deep insights into campaign performance, audience behavior, and engagement trends—all in one unified dashboard.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#6c3cbe] text-white text-base px-6 py-3 rounded-md font-medium">
                Explore advanced-report
              </button>
              </Link>
            </div>
            <Image
              src="/advanced-report/img-1.svg"
              alt="Advanced Report"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Campaign Analysis */}
        <section className="bg-[#fef3c7] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#92400e]">
                <TrendingUp size={18} /> Campaign Analysis
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Analyze every detail of your campaigns.</h2>
              <p className="text-gray-700 text-lg mb-6">
                View breakdowns by delivery rate, bounce rate, click-through, heatmaps and user flows. Know what’s working and what’s not.
              </p>
               <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#92400e] text-white text-base px-6 py-3 rounded-md font-medium">
                Dive Into Analytics
              </button>
              </Link>
            </div>
             <Image
              src="/advanced-report/img-2.svg"
              alt="Campaign Analytics"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
           
          </div>
        </section>

        {/* Real-Time Results */}
        <section className="bg-[#ecfccb] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
           
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#4d7c0f]">
                <Clock4 size={18} /> Real-Time Insights
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Monitor campaigns as they happen.</h2>
              <p className="text-gray-700 text-lg mb-6">
                See opens, clicks, conversions, and other KPIs update in real-time—no need to refresh or wait for advanced-report.
              </p>
                <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#4d7c0f] text-white text-base px-6 py-3 rounded-md font-medium">
                Monitor Live
              </button>
              </Link>
            </div>
             <Image
              src="/advanced-report/img-3.png"
              alt="Real-Time Results"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Best Send Time */}
        <section className="bg-[#e0f2fe] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
                <CalendarClock size={18} /> Timing Optimization
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find the best time to launch your emails.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Let our AI detect peak open and click hours across segments, helping you reach users when they’re most active.
              </p>
               <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
                Optimize Timing
              </button>
              </Link>
            </div>
            <Image
              src="/advanced-report/img-4.svg"
              alt="Best Send Time"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* CSV Export */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
                <FileDown size={18} /> Report Export
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Export detailed advanced-report in one click.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Generate and download CSV files for in-depth analysis, external dashboards, or compliance purposes.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
                Export to CSV
              </button>
              </Link>
            </div>
            <Image
              src="/advanced-report/img-5.svg"
              alt="Export CSV"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
