import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { plan } = location.state || {}; // Access plan details passed via state

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Payment Found</h2>
          <p className="text-gray-600 mb-4">
            It seems you haven't completed a payment yet. Please return and try again.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }else

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Your payment for this investment plan was successful.</p>
        <div className="bg-gray-100 rounded-lg p-4 text-left mb-6">
          <h3 className="text-lg font-bold text-gray-800">Plan Details:</h3>
          <p className="text-gray-600">
            <strong>Plan Name:</strong> {plan.name}
          </p>
          <p className="text-gray-600">
            <strong>Amount Range:</strong> {plan.minMax}
          </p>
          <p className="text-gray-600">
            <strong>Duration:</strong> {plan.duration}
          </p>
          <p className="text-gray-600">
            <strong>Returns:</strong> {plan.returns}
          </p>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Back to Dashboard
        </button>
        <button
          onClick={() => navigate('/investments')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          View Investment Plans
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
