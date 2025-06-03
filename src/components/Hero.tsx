"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full bg-[#ffe7ff] pt-64 pb-40 px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
        {/* Left Content */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-1000 text-center">
            Create, Send and Track Your
            Email Campaigns <br /> with <span className="text-[#6c3cbe]">AI-powered</span> Software
          </h1>

          <p className="mt-6 text-lg text-gray-1000 text-center">
            Smarter Email Campaigns Start Here — Real-Time Tracking, Deep Insights, and Clear Reporting That Drive Results.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-4 items-center justify-center">
            <Link href="https://calendly.com/sanket-mailatmars/30min" passHref>
            <Button  className="bg-[#6c3cbe] hover:bg-[#5a30aa] text-white text-lg">
              Book a Demo
            </Button>
            </Link>

           <Link href="/pricing" passHref>
  <Button variant="ghost" className="text-[#6c3cbe] text-lg">
    Compare Plans <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</Link>
          </div>

          {/* Centered Image */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/hero.png"
              alt="Hero Illustration"
              width={900}
              height={400}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
