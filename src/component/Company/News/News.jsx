import React from 'react';
import './News.css';


const News = () => {
  return (
    <>
      <div className='bg-blue-900'>
        <div className="max-w-7xl mx-auto p-12">
          <h1 className="text-4xl font-bold text-white mb-4">PineBridge News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* News Box 1 */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <img src="/Press-Release-Cover_News-Media.webp" alt="" className="responsive-img" />
              <h2 className="text-lg font-bold text-gray-700 mb-2">Bloomberg: Anders Faergemann shares his outlook for Emerging Markets</h2>
              <p className="text-sm text-gray-600 mb-2">21 October 2024 | Fixed Income</p>
            </div>
            {/* News Box 2 */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <img src="/Print-Cover-Image_In-the-News-3.webp" alt="" className="responsive-img" />
              <h2 className="text-lg font-bold text-gray-700 mb-2">Bloomberg UK: Anders Faergemann discusses Indian Sovereign bonds</h2>
              <p className="text-sm text-gray-600 mb-2">16 October 2024 | Fixed Income</p>
            </div>
            {/* News Box 3 */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <img src="/Yahoo-Finance-Hani-Redha-shares-insights-on-Q3-earnings.webp" alt="" className="responsive-img" />
              <h2 className="text-lg font-bold text-gray-700 mb-2">Yahoo Finance: Hani Redha shares insights on Q3 earnings</h2>
              <p className="text-sm text-gray-600 mb-2">14 October 2024 | Equities, Multi-Asset</p>
            </div>
            {/* News Box 4 */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <img src="/Print-Cover-Image_In-the-News-6.webp" alt="" className="responsive-img" />
              <h2 className="text-lg font-bold text-gray-700 mb-2">Bloomberg: Anders Faergemann on Emerging Market Debt</h2>
              <p className="text-sm text-gray-600 mb-2">9 October 2024 | Fixed Income</p>
            </div>
            {/* News Box 5 */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <img src="/Print-Cover-Image_In-the-News.webp" alt="" className="responsive-img" />
              <h2 className="text-lg font-bold text-gray-700 mb-2">Bloomberg: Tadashi Matsukawa discusses Japanese fixed income</h2>
              <p className="text-sm text-gray-600 mb-2">9 October 2024 | Fixed Income</p>
            </div>
            {/* News Box 6 */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <img src="/CNBC-TV-Tadashi-Matsukawa-shares-his-insight-on-Japanese-bonds.webp" alt="" className="responsive-img" />
              <h2 className="text-lg font-bold text-gray-700 mb-2">CNBC TV: Tadashi Matsukawa shares his insight on Japanese bonds</h2>
              <p className="text-sm text-gray-600 mb-2">7 October 2024 | Fixed Income</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
