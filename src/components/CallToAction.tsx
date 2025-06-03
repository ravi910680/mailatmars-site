import Link from "next/link"

export default function CallToAction() {
  return (
    <div className="w-full bg-[url('/cta-back.png')] bg-cover bg-center px-4 sm:px-6">
      <div className="w-full max-w-[100%] sm:max-w-2xl md:max-w-7xl bg-gradient-to-r from-[#9856F2] to-[#58328C] text-white px-6 sm:px-10 py-14 rounded-2xl flex flex-col md:flex-row justify-between items-center mx-auto shadow-lg">
        <div className="text-center md:text-left w-full md:w-2/3">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Start campaigning with best email marketing platform
          </h2>
          <p className="text-sm text-white/90">
            Build, launch, and track your first AI-powered email campaign today.
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-center w-full md:w-auto">
          <Link
            href="https://account-v2.mailatmars.com/account/create"
            className="inline-block bg-white text-[#9856F2] px-6 py-3 font-semibold rounded-lg text-sm shadow-sm hover:opacity-90 transition"
          >
            Try Mailatmars Free Now
          </Link>
        </div>
      </div>
    </div>
  )
}
