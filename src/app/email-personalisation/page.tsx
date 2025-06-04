"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import { Smile, Settings2, Users2, Bot } from "lucide-react"

export default function PersonalisationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero - Personalization Intro */}
        <section className="bg-[#fce4e4] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
                <Smile size={18} /> Personalization
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Personalize your emails to create deeper bonds with your customers.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Make every email feel one-on-one with dynamic content tailored to your audience’s preferences and behavior.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
                Start Personalizing
              </button>
              </Link>
            </div>
            <Image
              src="/personalisation/img-2.svg"
              alt="Email Personalization"
              width={520}
              height={360}
              className="rounded-xl object-cover order-1 lg:order-2"
            />
          </div>
        </section>

        {/* Section - How to personalize */}
        <section className="bg-[#fef3c7] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#92400e]">
                <Settings2 size={18} /> How to Personalize
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">It starts with the right data.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Use names, locations, preferences, and behavior to dynamically populate content fields and deliver tailored messages.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#92400e] text-white text-base px-6 py-3 rounded-md font-medium">
                Learn How
              </button>
              </Link>
            </div>
            <Image
              src="/personalisation/img-1.png"
              alt="How to Personalize"
              width={520}
              height={360}
              className="rounded-xl object-cover order-1 lg:order-2"
            />
          </div>
        </section>

        {/* Section - Create Segmentation List */}
        <section className="bg-[#e0f2fe] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
           
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
                <Users2 size={18} /> Smart Segments
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Create segmentation lists that match your emails.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Group users by interests, purchase history, activity, and demographics to craft messages that matter.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
                Start Segmenting
              </button>
              </Link>
            </div>
             <Image
              src="/personalisation/img-3.png"
              alt="Segmentation Lists"
              width={520}
              height={360}
              className="rounded-xl object-cover order-1 lg:order-2"
            />
          </div>
        </section>

        {/* Section - Automate Personalised Emails */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#15803d]">
                <Bot size={18} /> Automation
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Automate your personalized emails with ease.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Set triggers and flows that deliver the right message at the perfect moment—without manual effort.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#15803d] text-white text-base px-6 py-3 rounded-md font-medium">
                Explore Automation
              </button>
              </Link>
            </div>
            <Image
              src="/personalisation/img-4.svg"
              alt="Automate Personalized Emails"
              width={520}
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
