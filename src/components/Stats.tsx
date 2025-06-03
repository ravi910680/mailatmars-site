"use client"

export default function Stats() {
  const stats = [
    {
      value: "5 Million +",
      label: "Emails delivered every month",
    },
    {
      value: "98%",
      label: "Client retention",
    },
    {
      value: "5K +",
      label: "Monthly campaigns",
    },
    {
      value: "900k +",
      label: "Opens",
    },
  ]

  return (
    <section className="bg-[#fff2c4] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a]">
          Boons of Subscribing to Mailatmars
        </h2>
        <p className="mt-4 text-md sm:text-lg text-[#1f2c49] max-w-2xl mx-auto">
          If your customers aren’t reading your emails, it’s time to check your real metrics.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-[#0a0a0a]">{stat.value}</h3>
            <p className="text-md text-[#1f2c49] mt-2">{stat.label}</p>
            <div className="w-8 h-[1px] bg-black/70 mt-4 mx-auto" />
          </div>
        ))}
      </div>
    </section>
  )
}
