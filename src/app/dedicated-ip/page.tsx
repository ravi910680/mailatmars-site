"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import { Server, ShieldCheck, Globe2, CheckCheck } from "lucide-react"

export default function DedicatedIPPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Dedicated IP */}
        <section className="bg-[#ede9fe] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#6c3cbe]">
                <Server size={18} /> Dedicated IPs
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Grow your sender reputation with a dedicated IP.
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Take full control of your email deliverability by using a dedicated IP address built just for your sending needs.
              </p>
               <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#6c3cbe] text-white text-base px-6 py-3 rounded-md font-medium">
                Get Your Dedicated IP
              </button>
              </Link>
            </div>
            <Image
              src="/dedicated-ip/img-1.svg"
              alt="Dedicated IP Illustration"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* What is a Dedicated IP? */}
        <section className="bg-[#fce4f4] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
           
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
                <ShieldCheck size={18} /> What’s a Dedicated IP?
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">An IP just for you.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Unlike shared IPs, a dedicated IP is reserved exclusively for your emails—giving you full control over your reputation and delivery rates.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
                Learn More
              </button>
              </Link>
            </div>
             <Image
              src="/dedicated-ip/img-2.svg"
              alt="What is a Dedicated IP?"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Control Over Deliverability */}
        <section className="bg-[#dcfce7] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#15803d]">
                <Globe2 size={18} /> Delivery Control
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Control how your emails are received.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Get predictable and consistent performance without being impacted by other users’ behavior on shared servers.
              </p>
               <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#15803d] text-white text-base px-6 py-3 rounded-md font-medium">
                Take Control
              </button>
              </Link>
            </div>
            <Image
              src="/dedicated-ip/img-3.svg"
              alt="Deliverability Control"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Whitelisting & Compliance */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#92400e]">
                <CheckCheck size={18} /> Trusted Sending
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gain whitelisting advantages.</h2>
              <p className="text-gray-700 text-lg mb-6">
                With consistent usage and clean sending practices, your dedicated IP can be whitelisted by inbox providers, ensuring higher inbox rates.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#92400e] text-white text-base px-6 py-3 rounded-md font-medium">
                Build Trust
              </button>
              </Link>
            </div>
            <Image
              src="/dedicated-ip/img-4.svg"
              alt="Whitelisting IPs"
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
