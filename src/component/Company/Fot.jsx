import React from 'react'

const Fot = () => {
  return (
    <section className='w-full h-screen bg-blue-900 relative flex items-center justify-center '>
        <svg className='absolute top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,0L48,5.3C96,11,192,21,288,48C384,75,480,117,576,117.3C672,117,768,75,864,85.3C960,96,1056,160,1152,192C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>


        <div className="flex mt-9 gap-x-5 p-20  ">
      <div className="bg-white p-4 rounded-lg mb-6 w-1/2">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Investment Team</h1>
      <p className="text-lg text-gray-600 p-4 ">One investment team, built around a single investment process.</p>
    </div>
      
      <div className="bg-white p-4 rounded-lg mb-6 w-1/2 ">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Unique Heritage</h2>
        <p className="text-lg text-gray-600 ">Established track-record in managing long-only and alternative strategies.</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg mb-6 w-1/2">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Portfolio Risk Management</h2>
        <p className="text-lg text-gray-600 ">Central to our approach and essential to delivering successful outcomes.</p>
      </div>
    </div>

    </section>
  )
}

export default Fot