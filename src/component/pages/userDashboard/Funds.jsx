import React, { useState, useEffect,useRef } from 'react';

const Funds = ({route}) => {
  const [btcAddress, setBtcAddress] = useState('');
  const [depositHistory, setDepositHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyRef = useRef(null);
  const handleCopy = () => {
    navigator.clipboard.writeText(copyRef.current.value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const fetchBtcAddress = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${route}/getBTCAddress`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,
        },
      });
      const data = await response.json();
      setBtcAddress(data.btcAddress);
      setDepositHistory(data.history || []);
    } catch (error) {
      console.error('Error fetching BTC address:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBtcAddress();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">credit Your Account</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Your Deposit Address:</h3>
              <input type="text" value='btcyuwesjhgwsdhfsdajhfsgddgug' ref={copyRef} readOnly className="text-gray-600 mt-2 bg-gray-100 p-2 rounded"/>
              <button
                onClick={() => handleCopy()}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
              >
                Copy Address
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Investment History:</h3>
              {depositHistory.length > 0 ? (
                <ul className="mt-2 space-y-2">
                  {depositHistory.map((deposit, index) => (
                    <li key={index} className="text-gray-600">
                      {new Date(deposit.timestamp).toLocaleString()} - {deposit.amount} BTC
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mt-2">You have no investment yet.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Funds;
