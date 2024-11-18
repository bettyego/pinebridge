import React from 'react';
import './Fot.css';  // Import the CSS file

const Fot = () => {
  return (
    <section className="w-full h-auto bg-blue-900 relative flex items-center justify-center py-16">
      {/* Wave SVG */}
      <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="white" d="M0,0L48,5.3C96,11,192,21,288,48C384,75,480,117,576,117.3C672,117,768,75,864,85.3C960,96,1056,160,1152,192C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>

      {/* Content Container */}
      <div className="fot-container mt-9 p-6">
        {/* First Card */}
        <div className="fot-card">
          <h1 className="fot-header">Investment Team</h1>
          <p className="fot-text">One investment team, built around a single investment process.</p>
        </div>

        {/* Second Card */}
        <div className="fot-card">
          <h2 className="fot-header">Unique Heritage</h2>
          <p className="fot-text">Established track-record in managing long-only and alternative strategies.</p>
        </div>

        {/* Third Card */}
        <div className="fot-card">
          <h2 className="fot-header">Portfolio Risk Management</h2>
          <p className="fot-text">Central to our approach and essential to delivering successful outcomes.</p>
        </div>
      </div>
    </section>
  );
};

export default Fot;
