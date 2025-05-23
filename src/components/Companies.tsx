"use client"

import Image from "next/image"

export default function Companies() {
  return (
    <section className="bg-[#9856F2] py-8 px-4">
      <div className="max-w-6xl mx-auto flex justify-center">
        <Image
          src="/company.png"
          alt="Trusted by companies"
          width={1000}
          height={200}
          className="w-full max-w-4xl object-contain"
        />
      </div>
    </section>
  )
}
