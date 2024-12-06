import React, { useState, useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Navbar from '../Dashboard/Navbar';
import Payment from './payment';

const UserDashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [plan,setPlan] = useState(null)
  const closeModal = ()=>{
    setPlan(null)
  }

  const fetchUserDetails = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5000/getUserDetails', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    });
    const data = await response.json();
    setUserDetails(data.user);
  };


  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
    
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        
        <main className="flex-grow p-8">
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold">
              Welcome back, {userDetails?.firstname || 'User'}!
            </h2>
            <p className="text-lg mt-2">We're glad to have you here.</p>
          </div>

          <div className="price-chartt-section h-screen pt-10">
            <iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" style={{width:"100%",height:"536px",scrolling:"none",marginWidth:"0",marginHeight:"0", frameBorder:"0", border:"0",lineHeight: '14px'}}></iframe>
            </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your Investment Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
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
              
                
              ].map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200 "
                >
                  <h4 className="text-lg font-semibold text-gray-800">{plan.name}</h4>
                  <p className="text-gray-600 mt-2">
                    <strong>Min/Max:</strong> {plan.minMax}
                  </p>
                  <p className="text-gray-600">
                    <strong>Duration:</strong> {plan.duration}
                  </p>
                  <p className="text-gray-600">
                    <strong>Returns:</strong> 
                  </p>
                  <button
                    onClick={() => setPlan(plan)}
                    className=" bg-blue-500 hover:bg-blue-600 text-white font-bold  px-2 rounded py-2 mt-4"
                  >
                    Select Plan
                  </button>
                  
                </div>
              ))}
            </div>
          </div>
        </main>
        
      </div>
      {
          plan && <Payment plan={plan} closeModal={closeModal}/>
      }
    </>
  );
};

export default UserDashboard;
