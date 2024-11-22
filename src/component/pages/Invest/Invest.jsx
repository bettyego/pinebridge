import React from 'react';
import Header from '../../Company/Header/Header';
import Footer from '../../Company/Footer/Footer';
import './Invest.css';

const Invest = () => {
  const plans = [
    {
      name: 'Basic Plan',
      minMax: '$50 / $499',
      duration: '24 Hours',
      return: '1.5% after 24 Hours',
      bonus: '10%',
    },
    {
      name: 'Bronze Plan',
      minMax: '$500 / $999',
      duration: '3 Days',
      return: '2% daily for 3 days',
      bonus: '10%',
    },
    {
      name: 'Silver Plan',
      minMax: '$1,000 / $4,999',
      duration: '4 Days',
      return: '2.5% daily for 4 days',
      bonus: '10%',
    },
    {
      name: 'Gold Plan',
      minMax: '$5,000 / $9,999',
      duration: '7 Days',
      return: '3% daily for 7 days',
      bonus: '10%',
    },
    {
      name: 'Diamond Plan',
      minMax: '$10,000 / $19,999',
      duration: '9 Days',
      return: '3.5% daily for 9 days',
      bonus: '10%',
    },
    {
      name: 'VIP Plan',
      minMax: '$20,000 / $49,999',
      duration: '2 Weeks',
      return: '30% after 2 weeks',
      bonus: '10%',
    },
    {
      name: 'Compound Plan',
      minMax: '$50,000 / Unlimited',
      duration: '1 Month',
      return: '45% after 1 month',
      bonus: '10%',
    },
  ];

  return (
    <>
      <Header />
      <div className="ibg h-full w-full">
        <div className="max-w-7xl mx-auto p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Investment Plans</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-blue-900 shadow-lg rounded-lg p-6 flex flex-col items-start"
              >
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white">
                  <strong>Minimum/Maximum:</strong> {plan.minMax}
                </p>
                <p className="text-white">
                  <strong>Duration:</strong> {plan.duration}
                </p>
                <p className="text-white">
                  <strong>Return:</strong> {plan.return}
                </p>
                <p className="text-white">
                  <strong>Referral Bonus:</strong> {plan.bonus}
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
                
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
      <div className='w-full  flex py-2  md:w-full'>
         {/* Background video */}
      <div className='w-3/4 h-fit pr-2'>
      <video
        autoPlay
        loop
        muted
       
      >
        <source src="/web.mp4" className=' rounded-3xl'/>
      </video>
      </div>

     <div className='w-3/4 h-fit'>
     <video
        autoPlay
        loop
        muted
       
      >
        <source src="/whereable.mp4" className='  rounded-3xl'/>
      </video>
     </div>
     

      </div>
      
      <div className="py-10 px-4 leading-relaxed text-center sm:py-6 sm:px-6 md:px-8 ">
  <p className="text-xl text-green-600 sm:text-lg md:text-xl lg:text-2xl max-w-md mx-auto">
    We're an active fixed income specialist structured to deliver outcomes tailored for investors seeking to enhance the returns of their portfolios.
  </p>
</div>


      <Footer />
    </>
  );
};

export default Invest;
