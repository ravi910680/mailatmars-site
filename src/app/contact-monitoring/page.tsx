"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import { UserPlus, Table2, Filter, Layers3 } from "lucide-react"

export default function ContactMonitoringPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white ">

        {/* Contact Import */}

         <section className="bg-[#fef3c7] py-16 px-6 pt-36">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    <div className="max-w-xl">
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#92400e]">
        <UserPlus size={18} /> Contact Intelligence
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Gain clarity with advanced contact insights.</h2>
      <p className="text-gray-700 text-lg mb-6">
        Monitor contact behavior in real-time—track engagement trends, segment based on activity, and uncover what drives clicks and conversions. Make smarter campaign decisions with data-backed insights from your contact list.
      </p>
       <Link
                      href="https://account-v2.mailatmars.com/account/create">
      <button className="bg-[#92400e] text-white text-base px-6 py-3 rounded-md font-medium">
        See Contact Insights
      </button>
      </Link>
    </div>
    <Image
      src="/contact-monitor/img-1.png"
      alt="Contact Monitoring"
      width={620}
      height={360}
      className="rounded-xl object-cover"
    />
  </div>
</section>

        <section className="bg-[#e6c5ea] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
             <Image
              src="/contact-monitor/img-2.png"
              alt="Import Contacts"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#47074f]">
                <UserPlus size={18} /> Contact Import
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Import your contacts effortlessly.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Upload your contact lists from CSV or integrations in just a few clicks—fast, clean, and ready to use.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#47074f] text-white text-base px-6 py-3 rounded-md font-medium">
                Start Importing
              </button>
              </Link>
            </div>
           
          </div>
        </section>

        {/* Dynamic Table Schema */}
        <section className="bg-[#ede9fe] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
             <Image
              src="/contact-monitor/img-3.png"
              alt="Dynamic Schema"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#6c3cbe]">
                <Table2 size={18} /> Dynamic Schema
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible structure for contact data.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Automatically adapt to different fields and data formats without needing manual mapping.
              </p>
               <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#6c3cbe] text-white text-base px-6 py-3 rounded-md font-medium">
                Explore Schema Features
              </button>
              </Link>
            </div>
           
          </div>
        </section>

        {/* Contact Filtering */}
        <section className="bg-[#ecfdf5] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
             <Image
              src="/contact-monitor/img-4.svg"
              alt="Contact Filtering"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#047857]">
                <Filter size={18} /> Smart Filtering
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find the right contacts instantly.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Filter your contacts by custom fields, behavior, engagement, tags, or data attributes.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#047857] text-white text-base px-6 py-3 rounded-md font-medium">
                Use Filters
              </button>
              </Link>
            </div>
           
          </div>
        </section>

        {/* Segmentation */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
             <Image
              src="/contact-monitor/img-5.png"
              alt="Audience Segmentation"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
                <Layers3 size={18} /> Audience Segmentation
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Target better with segmentation.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Group contacts by behavior, preferences, signup source, or any field to send personalized campaigns.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
                Start Segmenting
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
