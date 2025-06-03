"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"  
import { Shuffle, Filter, MousePointerClick, Settings2 } from "lucide-react"

export default function SegmentationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white ">

        {/* SECTION 1: Smart Audience Segmentation */}
        <section className="bg-[#f0f9ff] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <Image
              src="/segmentation/img-1.svg"
              alt="Audience Segmentation"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
                <Shuffle size={18} /> Smart Segmentation
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Segment your audience like a pro.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Target the right people with the right message using behavior, engagement, or custom fields.
              </p>
              <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
                Explore Segmentation
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: Dynamic Filters & Tags */}
        <section className="bg-[#fefce8] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <Image
              src="/segmentation/img-2.png"
              alt="Dynamic Filters"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#854d0e]">
                <Filter size={18} /> Dynamic Filters
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Target audiance with dynamic list filters</h2>
              <p className="text-gray-700 text-lg mb-6">
                Use real-time filters to create dynamic segments based on user activity, attributes, or lifecycle stage.
              </p>
              <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#854d0e] text-white text-base px-6 py-3 rounded-md font-medium">
                Create Smart Lists
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: Behavioral Targeting */}
        <section className="bg-[#ecfdf5] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <Image
              src="/segmentation/img-3.png"
              alt="Behavioral Targeting"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0f766e]">
                <MousePointerClick size={18} /> Behavioral Targeting
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Target based on user activity.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Segment contacts based on email clicks, web visits, purchases, and engagement scores.
              </p>
              <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0f766e] text-white text-base px-6 py-3 rounded-md font-medium">
                Activate Targeting
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: Conditional Segmentation */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <Image
              src="/segmentation/img-4.png"
              alt="Conditional Logic Segmentation"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
                <Settings2 size={18} /> Conditional Logic
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Automate with conditional segmentation.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Use IF/ELSE rules to create segments that adapt based on user behavior and properties over time.
              </p>
               <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
                Set Conditions
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
