import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="overlay h-screen w-full">
    <video 
      autoPlay 
      loop 
      muted 
      className="absolute top-0 left-0 h-screen w-full object-fit object-cover"
    >
      <source src="/3248216-uhd_3840_2160_25fps.mp4" type="video/mp4" />
    </video>
    <div className="p-28 items-center text-center relative z-10">
      <h1 className="font-bold text-5xl leading-relaxed text-white w-full">
        PineBridge Investments is a private, <br /> 
        global asset manager focused on active, high-conviction investing.
      </h1>
      <button className="text-lg font-bold text-white bg-blue-500 rounded m-4 p-2" onClick={()=> navigate('/about')}>
        Learn More
      </button>
    </div>
  </div>
  
  )
}

export default Hero