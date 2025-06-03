"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import { Clock4, Globe2, TrendingUp, ThumbsUp } from "lucide-react"

export default function DeliveryByTimezonePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white ">

        {/* Hero Section: Send by Timezone */}
        <section className="bg-[#ecfdf5] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#047857]">
                <Clock4 size={18} /> Timezone Delivery
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send your emails at the best hour.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Schedule campaigns based on your subscriber’s local time to increase open rates and stay relevant in every inbox.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#047857] text-white text-base px-6 py-3 rounded-md font-medium">
                Enable Smart Timing
              </button>
              </Link>
            </div>
            <Image
              src="/timezone/img-1.png"
              alt="Timezone Based Delivery"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Feature 1: Reach the Right Customer */}
        <section className="bg-[#fefce8] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#ca8a04]">
                <Globe2 size={18} /> Localized Reach
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Reach the right customer at the right time.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Automatically adjust your send time based on recipient timezone to deliver emails when they’re most likely to engage.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#ca8a04] text-white text-base px-6 py-3 rounded-md font-medium">
                Try Local Delivery
              </button>
              </Link>
            </div>
            <Image
              src="/timezone/img-2.svg"
              alt="Localized Delivery"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Feature 2: Higher Engagement */}
        <section className="bg-[#f0f9ff] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
           
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
                <TrendingUp size={18} /> Boost Engagement
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gain high customer engagement.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Emails sent at optimal hours see better open and click rates. Let automation handle it while you focus on strategy.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
                Improve Engagement
              </button>
              </Link>
            </div>
             <Image
              src="/timezone/img-4.svg"
              alt="Higher Engagement"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Feature 3: Good Sending Practice */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#a21caf]">
                <ThumbsUp size={18} /> Deliverability Best Practice
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintain best sending practices.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Time-distributed sending reduces ISP flags and enhances inbox placement—keeping your sender reputation healthy.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#a21caf] text-white text-base px-6 py-3 rounded-md font-medium">
                Learn More
              </button>
              </Link>
            </div>
            <Image
              src="/timezone/img-3.svg"
              alt="Best Practice Sending"
              width={520}
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
