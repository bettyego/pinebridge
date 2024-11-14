import React from 'react'

const Introduction  = () => {
  return (
    <div className=" h-screen  bg-blue-900 w-full  flex p-8">
        <div class="p-4 w-1/2 text-white flex justify-center  flex-col " data-aos="fade-up">
        {/* <img src="" alt="" /> */}
          <h2 class="text-3xl font-bold mb-2">Our Capabilities</h2>
        <p className='w-full font-semibold '>
        Certain asset classes and market segments are less efficient than others, creating particularly fertile ground for active management. We operate in those segments where we believe our high conviction approach can add the most value — helping clients achieve outcomes that go beyond traditional market benchmarks, seeking higher returns, and actively managing risk. Clients can opt to invest through separately managed accounts, mutual funds, and other pooled vehicles.
        </p>
        <button className='bg-blue-600 p-2 m-4 rounded-md mt-11 w-fit' data-aos="fade-right">
            <a href="#contact">Explore Now</a>
        </button>
    </div>

    <div class=" flex-col flex w-full  text-black  items-center">
      
        <div class="w-2/3 flex gap-x-16 " data-aos="fade-up">
        <img src="/hp_Icon_MA.svg" alt="" className='w-24'/>
          <div>
            
          <h3 class="text-2xl font-bold
          text-white mb-2 ">Multi-Asset</h3>
          <p class=" w-full text-white  ">
            Our multi-asset strategies seek total returns by dynamically adjusting to global market conditions, whether risk on or risk-off.
          </p>
          </div>
    </div>
    <div class="p-4 text-white flex gap-x-12 w-2/3 " data-aos="fade-up">
      <img src="/hp_icon_FI.svg" alt="" />
        <div>
        <h3 class="text-2xl font-boldt
        text-white mb-2">Fixed Income</h3>
        <p class=" w-full text-white">
          We actively navigate every shift in cycles and markets to uncover credit opportunities to help clients protect their investments and generate excess returns.
        </p>
        </div>
    </div>
    <div class="p-4 text-white flex gap-x-12 w-2/3" data-aos="fade-up">
      <img src="/hp_icon_Equities.svg" alt="" />
        <div>
        <h3 class="text-2xl font-boldt
        text-white mb-2">Equities</h3>
        <p class=" w-full text-white">
          Our emphasis is on finding those rare companies that can generate consistent returns in any environment - before others recognize their worth.
        </p>
        </div>
    </div>
    <div class="p-4 text-white flex gap-x-12 w-2/3" data-aos="fade-up">
      <img src="/hp_icon_Alts.svg" alt="" />
        <div>
        <h3 class="text-2xl font-boldt
        text-white mb-2">  Alternatives</h3>
        <p class=" w-full text-white">
        We capitalize on middle-market opportunities where we believe unrecognized growth potential resides.
        </p>
        </div>
      </div>
    </div>
</div>



  


  
  )
}

export default Introduction 