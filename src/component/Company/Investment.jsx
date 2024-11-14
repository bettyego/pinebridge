
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Investment = () => {
  const navigate = useNavigate();
  return (
    <div className=''>
      <div className="max-w-7xl mx-auto p-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Investment Plans</h2>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Minimum/Maximum</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referral Bonus</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Basic Plan</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$50 / $499</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24 Hours</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.5% after 24 Hours</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate('/signup')}>Sign Up</button></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bronze Plan</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$500 / $999</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 Days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2% daily for 3 days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate('/signup')}>Sign Up</button></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Silver Plan</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,000 / $4,999</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 Days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.5% daily for 4 days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate('/signup')}>Sign Up</button></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Gold Plan</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$5,000 / $9,999</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7 Days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3% daily for 7 days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate('/signup')}>Sign Up</button></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Diamond Plan</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$10,000 / $19,999</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9 Days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.5% daily for 9 days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate('/signup')}>Sign Up</button></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">VIP Plan</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$20,000 / $49,999</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 Weeks</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30% after 2 weeks</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate('/signup')}>Sign Up</button></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compound Plan</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$50,000 / Unlimited</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 Month</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45% after 1 month</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate('/signup')}>Sign Up</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;



