"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import {  Shuffle, Bot, BarChart,MailX } from "lucide-react"

export default function ABTestingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white ">
        {/* A/B Testing Section */}
        <section className="bg-[#fce4f4] py-16 px-6 pt-36">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    <div className="max-w-xl">
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
        <Shuffle size={18} /> Drip Campaign
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Automate smarter, personalized follow-ups.</h2>
      <p className="text-gray-700 text-lg mb-6">
        Launch email sequences that send at the right time based on user behavior, actions, and engagement triggers.
      </p>
       <Link
                href="https://account-v2.mailatmars.com/account/create">
      <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
        Build Your Sequence
      </button>
      </Link>
    </div>
    <Image
      src="/drip-campaign/img-1.png" // Replace with your actual image path
      alt="Drip Campaign Email Automation"
      width={420}
      height={360}
      className="rounded-xl object-cover"
    />
  </div>
</section>


        {/* Subject Line Testing */}
       <section className="bg-[#ede9fe] py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

     <Image
      src="/drip-campaign/img-2.png" // Make sure to add this image to /public
      alt="AI Predicted Subject Line"
      width={620}
      height={360}
      className="rounded-xl object-cover"
    />
    <div className="max-w-xl">
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#6c3cbe]">
        <Bot size={18} /> AI Subject Prediction
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-predicted subject lines that increase opens.</h2>
      <p className="text-gray-700 text-lg mb-6">
        Boost open rates with automatically generated subject lines tailored to your audience’s behavior and past engagement.
      </p>
       <Link
                href="https://account-v2.mailatmars.com/account/create">
      <button className="bg-[#6c3cbe] text-white text-base px-6 py-3 rounded-md font-medium">
        Generate with AI
      </button>
      </Link>
    </div>

   
  </div>
</section>


       
        {/* Automatic Decision Making */}
       <section className="bg-[#fef3c7] py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    
   

    <div className="max-w-xl">
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#92400e]">
        <BarChart size={18} /> Advanced Analytics
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Make smarter decisions with campaign analytics.
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        Monitor email performance, identify trends, and track open/click rates over time with rich visual dashboards.
      </p>
       <Link
                href="https://account-v2.mailatmars.com/account/create">
      <button className="bg-[#92400e] text-white text-base px-6 py-3 rounded-md font-medium">
        Explore Insights
      </button>
      </Link>
    </div>
     <Image
      src="/drip-campaign/img-4.svg" // replace with your actual analytics image
      alt="Advanced Email Analytics"
      width={620}
      height={360}
      className="rounded-xl object-cover"
    />
  </div>
</section>


        {/* A/B Testing Analytics */}
      <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        
       

        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#e042f5]">
            <MailX size={18} /> Deliverability Management
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Automatically clean your email list.
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Ensure your campaigns stay healthy by automatically removing hard bounces and unsubscribed contacts in real time.
          </p>
          <Link
                href="https://account-v2.mailatmars.com/account/create">
          <button className="bg-[#e042f5] text-white text-base px-6 py-3 rounded-md font-medium">
            Enable Auto-Cleanup
          </button>
          </Link>
        </div>
         <Image
          src="/drip-campaign/img-5.png" // Update with correct image path
          alt="Bounce and Unsubscribe Handling"
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
