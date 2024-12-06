import React from 'react';
import {useState} from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

const Payment = ({plan, closeModal}) => {
  const [selectedPlan, setSelectedPlan] = useState(plan);
  const navigate = useNavigate();
  
  
  const handlePayment = () => {
    // Implement payment logic (e.g., Stripe or backend API call)
    alert(`Processing payment for ${plan.name}`);
    // After successful payment, redirect to confirmation
    navigate('/confirmation');
  };

  return (
    selectedPlan && (
    <div className="min-h-screen min-w-full flex items-center justify-center bg-gray-100 fixed top-0">
      <div className='text-3xl absolute top-10 right-10 cursor-pointer' onClick={()=>{
       closeModal()
      }}><IoClose /></div>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Payment for {selectedPlan.name}</h2>
        <p className="text-gray-600 mb-4">
          <strong>Amount Range:</strong> {selectedPlan.minMax}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Duration:</strong> {selectedPlan.duration}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Returns:</strong> {selectedPlan.returns}
        </p>
        <Link to="/funds"
          onClick={handlePayment}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Proceed to Payment
        </Link>
      </div>
    </div>)
  );

  }


export default Payment;


    