import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="overlay relative h-screen w-full">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ minHeight: '100%', minWidth: '100%' }} // Ensures full coverage on all screens
      >
        <source src="/3248216-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 py-20 sm:px-8 md:px-16 lg:px-28 xl:px-32">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-snug xl:leading-relaxed text-white w-full">
          PineBridge Investments is a private, <br className="hidden md:block" />
          global asset manager focused on active, high-conviction investing.
        </h1>

        <button
          className="mt-6 text-sm sm:text-base md:text-lg xl:text-xl font-bold text-white bg-blue-500 rounded p-2 sm:p-3 md:p-4 hover:bg-blue-600 transition"
          onClick={() => navigate('/about')}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
