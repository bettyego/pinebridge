import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="overlay h-screen w-full relative">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source src="/3248216-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      
      {/* Content container */}
      <div className="px-4 py-20 md:px-28 md:py-28 items-center text-center relative z-10">
        <h1 className="font-bold text-3xl md:text-5xl leading-snug md:leading-relaxed text-white w-full">
          PineBridge Investments is a private, <br className="hidden md:block" /> 
          global asset manager focused on active, high-conviction investing.
        </h1>
        
        <button 
          className="mt-6 text-base md:text-lg font-bold text-white bg-blue-500 rounded p-2 md:m-4 md:p-3 hover:bg-blue-600 transition"
          onClick={() => navigate('/about')}
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Hero;
