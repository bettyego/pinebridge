import React, { useState, useEffect } from 'react';

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState('');

  const fetchPaymentMethods = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/getPaymentMethods'); // Update API URL as needed
      const data = await response.json();
      setPaymentMethods(data.methods || []);
    } catch (error) {
      console.error('Error fetching payment methods:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(address);
    setTimeout(() => setCopied(''), 3000); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose a Payment Method</h2>

        {loading ? (
          <p>Loading payment methods...</p>
        ) : (
          <div className="space-y-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md p-6 rounded-lg flex items-start space-x-4"
              >
                <div className="text-3xl">{method.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{method.name}</h3>
                  <p className="text-gray-600 mt-2">{method.description}</p>
                  {method.address && (
                    <div className="mt-4">
                      <p className="bg-gray-100 text-gray-700 p-2 rounded">{method.address}</p>
                      {method.copyable && (
                        <button
                          onClick={() => handleCopy(method.address)}
                          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
                        >
                          {copied === method.address ? 'Copied!' : 'Copy Address'}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
