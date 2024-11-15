import './Feature.css'

const Features = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="rgb(30 58 138)" fillOpacity="1" d="M0,0L48,5.3C96,11,192,21,288,48C384,75,480,117,576,117.3C672,117,768,75,864,85.3C960,96,1056,160,1152,192C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>

      <div className='min-h-screen text-black flex flex-col justify-center items-center w-full p-4 md:p-8'>
        <div className='flex flex-col gap-8 w-full md:flex-row md:gap-x-12'>
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row gap-4 p-4 md:p-8 items-center md:items-start">
            <img src="/icon-pinebridge-overvie-1.svg" alt="" className='h-20 w-20 bg-green-500 rounded-full feature-img' />
            <div>
              <h3 className="text-xl w-full md:w-80 mb-2 font-bold feature-heading">A Heritage of Active, High-Conviction Investing</h3>
              <p className="w-full md:w-80 feature-paragraph">
                We use an active approach across our platform, building portfolios with a high level of conviction while carefully managing risk.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row gap-4 p-4 md:p-8 items-center md:items-start">
            <img src="/icon (1).svg" alt="" className='h-20 w-20 bg-green-500 rounded-full feature-img' />
            <div>
              <h3 className="text-xl w-full md:w-80 mb-2 font-bold feature-heading">Delivering Results Across the Investment Spectrum</h3>
              <p className="w-full md:w-80 feature-paragraph">
                We offer a suite of actively managed strategies, each focused on investing in exceptional opportunities before fundamentals and valuations converge.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row gap-4 p-4 md:p-8 items-center md:items-start">
            <img src="/CollaborativeSpirit_Icon (1).svg" alt="" className='h-20 w-20 bg-green-500 rounded-full feature-img' />
            <div>
              <h3 className="text-xl w-full md:w-80 mb-2 font-bold feature-heading">A Collaborative Spirit</h3>
              <p className="w-full md:w-80 feature-paragraph">
                We empower our experts in each discipline, market, and region of the world to act on their insights and encourage active sharing and debate of ideas between team members across the globe.
              </p>
            </div>
          </div>
        </div>

        {/* "Who We Are" Section */}
        <div className="mt-8 md:mt-12">
          <h3 className="text-xl md:text-2xl mb-2 font-bold text-center md:text-left">Who We Are</h3>
          <p className="w-full md:w-3/4 text-center md:text-left">
            PineBridge combines the structure and reach of a global investment manager with the client-focused culture of a private company.
          </p>
        </div>
      </div>
    </>
  );
}

export default Features;
