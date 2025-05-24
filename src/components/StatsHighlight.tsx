export default function StatsHighlight() {
    return (
      <section className="w-full bg-[#f9f6ff] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Industry-Leading <span className="text-[#9856F2]">Data Accuracy</span> &<br />
            <span className="text-[#9856F2]">Intuitive Platform</span>
          </h2>
  
          {/* Subtitle */}
          <p className="text-gray-600 text-xl italic font-bold mt-4">Why Professionals Choose Exellius</p>
          <div className="w-36 h-1 bg-[#9856F2] rounded mx-auto mt-4 mb-20" />
  
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-6xl font-bold text-[#9856F2]">4.9/5</p>
              <p className="text-md text-gray-900 mt-4">Across review platforms</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-[#9856F2]">98%</p>
              <p className="text-md text-gray-900 mt-4">Data Accuracy Guarantee</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-[#9856F2]">10,000+</p>
              <p className="text-md text-gray-900 mt-4">Businesses accelerating growth</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  