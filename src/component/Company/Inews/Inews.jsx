import React from 'react';
import './Inews.css'


const Inews = () => {
  return (
    <div className="max-w-7xl mx-auto p-12 bg-slate-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Recent Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Insight Box 1 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/Article_Cover_Image_JPG-How-Capital-Efficiency-Drives-Relative-Value-in-Global-Fixed-Income-2.webp" alt="" className="responsive-img" />
          <h2 className="text-lg font-bold text-gray-700 mb-2">How Capital Efficiency Drives Relative Value in Global Fixed Income</h2>
          <p className="text-sm text-gray-600 mb-2">6 November 2024 | Fixed Income</p>
          <p className="text-sm text-gray-600">By Vladimir Zdorovenin, PhD</p>
        </div>
        
        {/* Insight Box 2 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/isi-nov-2024-v2.webp" alt="" className="responsive-img" />
          <h2 className="text-lg font-bold text-gray-700 mb-2">Investment Strategy Insights: How Trump 2.0’s Tariff Policy Could Reshape the Corporate Landscape</h2>
          <p className="text-sm text-gray-600 mb-2">1 November 2024 | Multi-Asset</p>
          <p className="text-sm text-gray-600">By Hani Redha, CAIA</p>
        </div>
        
        {/* Insight Box 3 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/Article_Cover_Image_JPG-Interest-Rates-May-Be-Falling.webp" alt="" className="responsive-img" />
          <h2 className="text-lg font-bold text-gray-700 mb-2">Interest Rates May Be Falling, But Insurers’ Demand for CLOs Holds Firm</h2>
          <p className="text-sm text-gray-600 mb-2">30 October 2024 | Fixed Income</p>
          <p className="text-sm text-gray-600">By Helen Zhou Remeza, PhD, Laila Kollmorgen, CFA</p>
        </div>
        
        {/* Insight Box 4 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/Why-EM-Bonds-Could-Address-the-Challenges-Posed-by-a-Lower-Yield-Environment-2.webp" alt="" className="responsive-img" />
          <h2 className="text-lg font-bold text-gray-700 mb-2">Why EM Bonds Could Address the Challenges Posed by a Lower Yield Environment</h2>
          <p className="text-sm text-gray-600 mb-2">23 October 2024 | Fixed Income</p>
          <p className="text-sm text-gray-600">Featuring Luke Codrington, Jonathan Davis, Karina Graf</p>
        </div>
        
        {/* Insight Box 5 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/FIAAT-Sept-2024.webp" alt="" className="responsive-img" />
          <h2 className="text-lg font-bold text-gray-700 mb-2">Fixed Income Asset Allocation Insights: Selectively Risk-On, Eyeing a Soft Landing</h2>
          <p className="text-sm text-gray-600 mb-2">21 October 2024 | Fixed Income</p>
          <p className="text-sm text-gray-600">By Robert Vanden Assem, CFA</p>
        </div>
        
        {/* Insight Box 6 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/Article_Cover_Image_JPG-2024ElectionScenariosPoitioning_Oct2024.webp" alt="" className="responsive-img" />
          <h2 className="text-lg font-bold text-gray-700 mb-2">US Election Insights: How Five Key Policy Differences May Drive Asset Class Positioning</h2>
          <p className="text-sm text-gray-600 mb-2">18 October 2024 | Equities, Fixed Income, Multi-Asset</p>
          <p className="text-sm text-gray-600">By Jeremy H. Burton, CFA, Hani Redha, CAIA, Kenneth Ruskin, CFA</p>
        </div>
      </div>
    </div>
  );
};

export default Inews;
