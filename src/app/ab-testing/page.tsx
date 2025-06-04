"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import { FlaskConical, Text,  Bot, BarChart } from "lucide-react"

export default function ABTestingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white ">
        {/* A/B Testing Section */}
        <section className="bg-[#fce4f4] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
                <FlaskConical size={18} /> A/B Testing
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Optimize every email with A/B testing.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Test subject lines, CTAs, content blocks, and more. See what performs best and boost engagement effortlessly.
              </p>
               <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
                Try A/B Testing Now
              </button>
              </Link>
            </div>
            <Image
              src="/ab-testing/img-1.svg"
              alt="A/B Testing Illustration"
              width={620}
              height={360}
              className="rounded-xl object-cover order-1 lg:order-2"
            />
          </div>
        </section>

        {/* Subject Line Testing */}
        <section className="bg-[#e0f2fe] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
                <Text size={18} /> Subject Line Testing
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Test subject lines that drive opens.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Compare subject lines to discover what resonates most with your audience and improve open rates.
              </p>
              <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
                Start Testing Subjects
              </button>
              </Link>
            </div>
            <Image
              src="/ab-testing/img-1.png"
              alt="Subject Line Testing"
              width={620}
              height={360}
              className="rounded-xl object-cover  order-1 lg:order-2"
            />
          </div>
        </section>

       
        {/* Automatic Decision Making */}
        <section className="bg-[#dcfce7] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
           
            <Image
              src="/ab-testing/img-2.svg"
              alt="Auto Decision AI"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
             <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#15803d]">
                <Bot size={18} /> Auto Optimization
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Decide the winning
campaign automatically</h2>
              <p className="text-gray-700 text-lg mb-6">
                Automatically deliver the winning variant to the majority of your audience based on real-time performance.
              </p>
               <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#15803d] text-white text-base px-6 py-3 rounded-md font-medium">
                Enable Auto Decision
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* A/B Testing Analytics */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
           
            <Image
              src="/ab-testing/img-4.png"
              alt="A/B Test Analytics"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />

             <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#92400e]">
                <BarChart size={18} /> Testing Analytics
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visualize your test performance.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Access real-time dashboards to compare open rates, click-throughs, and conversion metrics from all test versions.
              </p>
               <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#92400e] text-white text-base px-6 py-3 rounded-md font-medium">
                View Analytics
              </button>
              </Link>
            </div>
          </div>
        </section>

           <CallToAction />
                
                        <Footer /> 
      </main>
    </>
  )
}
