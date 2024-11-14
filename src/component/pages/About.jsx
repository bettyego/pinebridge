import React from 'react'
import Header from '../Company/Header'
const About = () => {
  return (
    <>
    <Header />
    
   <div className='h-full'>
   <div className="overlay h-screen w-full">
    <video 
      autoPlay 
      loop 
      muted 
      className="absolute top-0 left-0 h-screen w-full object-fit object-cover"
    >
      <source src="/8783011-hd_1920_1080_30fps.mp4" type="video/mp4" />
    </video>
    <div className="p-28 items-center  relative z-10">
      <p className='font-bold text-3xl leading-relaxed text-white w-full'>who are we</p>
      <h1 className="font-bold text-5xl leading-relaxed text-white w-full">
      PineBridge Overview
      </h1>
     
    </div>
    </div>
    <section className='h-full w-full flex justify-center items-center px-28 py-28 text-blue-600'>
      <p className='font-bold text-2xl leading-relaxed  w-3/4'>
      PineBridge Investments is a private, global asset manager focused on active, high-conviction investing. We draw on the collective power of our experts in each discipline, market, and region of the world through an open culture of collaboration designed to identify the best ideas. Our mission is to exceed clients’ expectations on every level, every day. As of 30 September 2024, the firm managed US$203.1 billion* across global asset classes for sophisticated investors around the world.
      </p>

    </section>

    <section className=' w-full h-screen p-8 justify-center '>
      <img className='w-3/4 pl-32' src="/AUM Chart Templates 3Q24 COMBINED v4.svg" alt="" />
      <div className='p-12 '>
      <p className='p-4 font-thin w-full'>
      *AUM as of 30 September 2024 includes US$99.6 billion (US$69.6 billion equities, US$23.2 billion fixed income, US$6.7 billion multi-asset and US$24.4 million alternatives) of assets managed by joint ventures or other entities not wholly owned by PineBridge Investments. Includes PineBridge Benson Elliot Real Estate AUM of US$4.2 billion
      </p>
      <p className='p-4 font-thin w-full'>
      Multi-Asset includes US$5.6 billion allocated opportunistically by the Multi-Asset team to PineBridge equity, fixed income and alternative strategies.
      </p>
      </div>
    </section>
    <section>
     <div className="  h-screen p-8 justify-center pl-32 w-3/4">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">What's in a Name? The Origins of 'PineBridge'</h1>
      <p className="text-lg leading-relaxed mb-8">
        Our origin story, in many ways, begins with our name. 'PineBridge' was chosen to reflect the firm's roots, 
        which developed as the former asset management division of AIG, headquartered on 'Pine' Street in New York's 
        financial district, and its aspirations for the future: 'Bridge' was the name of the project to transition 
        AIG's money management business into an independent entity.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        Employees embraced the name and the idea it conveyed of a bridge to the future with roots in the past. 
        Independent since 2010, the firm continues to draw from its decades of investment experience across asset 
        classes, a network of global offices with talented and highly rated investment teams, and a world-class 
        infrastructure.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Global Footprint</h2>
      <p className="text-lg leading-relaxed mb-8">
        Today, our clients include pension plans, insurance companies, official institutions, private banks, 
        advisors and intermediaries, supported by offices and staff in 24 locations. Our footprint enables us to 
        deliver the firm's full capabilities to investors at a local level, working closely to understand investor 
        objectives, meet their needs, and help to solve their challenges.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Ownership and Alignment</h2>
      <p className="text-lg leading-relaxed mb-8">
        PineBridge is majority-owned by a subsidiary of Pacific Century Group (PCG), an Asia-based private 
        investment group. PineBridge employees have a meaningful share in the success of PineBridge through equity 
        ownership and other rights to profits of the business. Asset management is our only line of business, 
        ensuring that our interests are fully aligned with those of our clients.
      </p>
      <div className="flex ">
        <a 
          href="#" 
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PineBridge Fact Sheet
        </a>
      </div>
    </div>
    </section>
   
   </div>
    </>
  )
}

export default About