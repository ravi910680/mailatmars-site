"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import { Link as LinkIcon, Star, ShieldCheck, Search } from "lucide-react"

export default function CustomDomainPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Custom Domains */}
        <section className="bg-[#fcecdc] py-16 px-6 pt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#b45309]">
                <LinkIcon size={18} /> Custom Domains
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Build a trusted brand with custom domains.
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Use your own domain to improve credibility, boost email deliverability, and create a consistent brand experience.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#b45309] text-white text-base px-6 py-3 rounded-md font-medium">
                Set Up Custom Domain
              </button>
              </Link>
            </div>
            <Image
              src="/custom-domain/img-1.svg"
              alt="Custom Domain Illustration"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Branding */}
        <section className="bg-[#fef3c7] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#92400e]">
                <Star size={18} /> Branding
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strengthen your email branding.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Emails from your domain reinforce your brand identity, helping you stand out and stay memorable in the inbox.
              </p>
               <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#92400e] text-white text-base px-6 py-3 rounded-md font-medium">
                Learn More
              </button>
              </Link>
            </div>
            <Image
              src="/custom-domain/img-2.svg"
              alt="Branding Benefit"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Customer Trust */}
        <section className="bg-[#dcfce7] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
           
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#15803d]">
                <ShieldCheck size={18} /> Customer Trust
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Boost sender reputation and trust.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Recipients trust emails from recognizable domains. Improve engagement and avoid spam folders.
              </p>
              <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#15803d] text-white text-base px-6 py-3 rounded-md font-medium">
                Improve Deliverability
              </button>
              </Link>
            </div>
             <Image
              src="/custom-domain/img-3.svg"
              alt="Customer Trust"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Discoverability */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
           
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0369a1]">
                <Search size={18} /> Discoverability
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get discovered with brand consistency.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Consistent use of your domain in email campaigns improves recognition and visibility in every inbox.
              </p>
             <Link
                      href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#0369a1] text-white text-base px-6 py-3 rounded-md font-medium">
                Explore Discoverability
              </button>
              </Link> 
            </div>
             <Image
              src="/custom-domain/img-4.svg"
              alt="Discoverability"
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
