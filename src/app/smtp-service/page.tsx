"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import {
  MailX,
  Send,
  Code2,Globe2
} from "lucide-react"

export default function SmtpServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section: SMTP Relay */}
        <section className="bg-[#fce4f4] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
                <MailX size={18} /> SMTP Relay Service
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Reliable SMTP delivery, made simple.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Send marketing, transactional, or bulk emails using your own domain with our high-speed SMTP servers.
              </p>
               <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
                Start Sending via SMTP
              </button>
              </Link>
            </div>
            <Image
              src="/smtp-service/img-1.png"
              alt="SMTP Service Illustration"
              width={620}
              height={360}
              className="rounded-xl object-cover order-1 lg:order-2"
            />
          </div>
        </section>


         <section className="bg-[#8cedf9] py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* 👇 Video instead of image */}
    <video
      src="/smtp-service/video-1.mp4" // Place your video in public/smtp/
      autoPlay
      loop
      muted
      playsInline
      className="rounded-xl object-cover w-[620px] h-[360px]"
    />

    <div className="max-w-xl">
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#6c3cbe]">
        <Code2 size={18} /> Developer Integration
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Easy SMTP integration for developers.</h2>
      <p className="text-gray-700 text-lg mb-6">
        Connect using standard SMTP ports or APIs. Compatible with any client or backend system.
      </p>
       <Link
                href="https://account-v2.mailatmars.com/account/create">
      <button className="bg-[#6c3cbe] text-white text-base px-6 py-3 rounded-md font-medium">
        Try relay now
      </button>
      </Link>
    </div>
  </div>
</section>


        {/* Section 4: Security & Scalability */}
       <section className="bg-[#cbee94] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left image */}
       

        {/* Right content */}
        <div className="max-w-xl order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
            <Globe2 size={18} /> Multi-Domain Sending
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Manage multiple domains with ease.</h2>
          <p className="text-gray-700 text-lg mb-6">
            Send emails from different domains using a single account. Perfect for agencies, franchises, and multi-brand teams.
          </p>
           <Link
                href="https://account-v2.mailatmars.com/account/create">
          <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
            Add Your Domain
          </button>
          </Link>
        </div>
         <Image
          src="/smtp-service/img-3.png" // Replace with your image path
          alt="Multiple Domains"
          width={620}
          height={360}
          className="rounded-xl object-cover order-1 lg:order-2"
        />
      </div>
    </section>

      
        {/* Section 2: High Deliverability */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-xl order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
                <Send size={18} /> High Deliverability
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Maximize inbox placement.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Enjoy high deliverability with dedicated IPs, SPF/DKIM configuration, and automatic bounce handling.
              </p>
               <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
                Improve Deliverability
              </button>
              </Link>
            </div>
            <Image
              src="/smtp-service/img-2.png"
              alt="Deliverability"
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
