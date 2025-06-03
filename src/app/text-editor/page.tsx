"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Image from "next/image"
import Link from "next/link"
import {
  MousePointerClick,
  MonitorSmartphone,
  UserCog,
  MailX
} from "lucide-react"

export default function DragNDropPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white ">

        {/* COMPONENT 1: Drag-n-Drop Email Builder */}
        <section className="bg-[#ccfbf1] py-16 px-6 pt-36">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    <div className="max-w-xl">
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#0f766e]">
        <MousePointerClick size={18} /> In-built Text Editor
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Edit content with precision.</h2>
      <p className="text-gray-700 text-lg mb-6">
        Create, format, and fine-tune your email content directly inside our editor. No switching tabs, just seamless editing.
      </p>
       <Link
                href="https://account-v2.mailatmars.com/account/create">
      <button className="bg-[#0f172a] text-white text-base px-6 py-3 rounded-md font-medium">
        Start Editing
      </button>
      </Link>
    </div>
    <Image
      src="/text-editor/img-1.png"
      alt="In-Built Text Editor"
      width={620}
      height={360}
      className="rounded-xl object-cover"
    />
  </div>
</section>


        {/* COMPONENT 2: Responsive Email Design */}
        <section className="bg-[#ede9fe] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#6c3cbe]">
                <MonitorSmartphone size={18} /> Responsive Design
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Looks perfect on every screen.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Your emails will render beautifully on mobile, tablet and desktop—automatically.
              </p>
               <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#40129b] text-white text-base px-6 py-3 rounded-md font-medium">
                Preview now
              </button>
              </Link>
            </div>
            <Image
              src="/drag-n-drop/img-2.png"
              alt="Responsive Email Design"
              width={620}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* COMPONENT 3: Personalization in Email Templates */}
        <section className="bg-[#fce4f4] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#be185d]">
                <UserCog size={18} /> Personalization
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Make every message feel personal.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Increase conversions by tailoring content to your contacts using merge tags and smart blocks.
              </p>
              <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#be185d] text-white text-base px-6 py-3 rounded-md font-medium">
                Try personalization
              </button>
              </Link>
            </div>
            <Image
              src="/drag-n-drop/img-3.png"
              alt="Email Personalization"
              width={520}
              height={360}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* COMPONENT 4: In-Content Unsubscribe Links */}
        <section className=" py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#92400e]">
                <MailX size={18} /> Unsubscribe Handling
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let subscribers opt out easily.</h2>
              <p className="text-gray-700 text-lg mb-6">
                Add customizable unsubscribe links right inside your email content to stay compliant and respectful.
              </p>
              <Link
                href="https://account-v2.mailatmars.com/account/create">
              <button className="bg-[#92400e] text-white text-base px-6 py-3 rounded-md font-medium">
                Learn how
              </button>
              </Link>
            </div>
            <Image
              src="/drag-n-drop/img-4.png"
              alt="Unsubscribe Links"
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
