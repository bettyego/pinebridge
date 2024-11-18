import React from 'react'
import './Introduction.css'



const Introduction = () => {
  return (
    <div className="introduction h-full bg-blue-900 w-full flex flex-col md:flex-col p-4 md:p-8 sm:flex-col lg:flex-row">
      {/* Left section */}
      <div className="p-4 w-full md:w-3/4 lg:w-1/2 text-white flex justify-center flex-col" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Our Capabilities</h2>
        <p className="w-full font-semibold">
          Certain asset classes and market segments are less efficient than others, creating particularly fertile ground for active management. We operate in those segments where we believe our high conviction approach can add the most value — helping clients achieve outcomes that go beyond traditional market benchmarks, seeking higher returns, and actively managing risk. Clients can opt to invest through separately managed accounts, mutual funds, and other pooled vehicles.
        </p>
        <button className="bg-blue-600 p-2 m-4 rounded-md mt-4 md:mt-11 w-fit" data-aos="fade-right">
          <a href="#contact">Explore Now</a>
        </button>
      </div>

      {/* Right section */}
      <div className="flex flex-col w-full lg:w-1/2 md:w-full text-black items-center mt-8 md:mt-0 md:px-0">
        {/* Multi-Asset */}
        <div className="w-full md:w-2/3 flex gap-x-8 md:gap-x-16 md:p-0 md:mr-auto lg:m-auto p-4" data-aos="fade-up">
          <img src="/hp_Icon_MA.svg" alt="" className="w-16 md:w-24" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Multi-Asset</h3>
            <p className="text-white">
              Our multi-asset strategies seek total returns by dynamically adjusting to global market conditions, whether risk on or risk-off.
            </p>
          </div>
        </div>

        {/* Fixed Income */}
        <div className="p-4 flex gap-x-8 md:gap-x-12 w-full md:w-2/3 md:mr-auto lg:m-auto" data-aos="fade-up">
          <img src="/hp_icon_FI.svg" alt="" className="w-16 md:w-24" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Fixed Income</h3>
            <p className="text-white">
              We actively navigate every shift in cycles and markets to uncover credit opportunities to help clients protect their investments and generate excess returns.
            </p>
          </div>
        </div>

        {/* Equities */}
        <div className="p-4 flex gap-x-8 md:gap-x-12 w-full md:w-2/3 md:mr-auto lg:m-auto" data-aos="fade-up">
          <img src="/hp_icon_Equities.svg" alt="" className="w-16 md:w-24" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Equities</h3>
            <p className="text-white">
              Our emphasis is on finding those rare companies that can generate consistent returns in any environment - before others recognize their worth.
            </p>
          </div>
        </div>

        {/* Alternatives */}
        <div className="p-4 flex gap-x-8 md:gap-x-12 w-full md:w-2/3 md:mr-auto lg:m-auto" data-aos="fade-up">
          <img src="/hp_icon_Alts.svg" alt="" className="w-16 md:w-24" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Alternatives</h3>
            <p className="text-white">
              We capitalize on middle-market opportunities where we believe unrecognized growth potential resides.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
