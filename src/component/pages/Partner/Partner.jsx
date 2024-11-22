import Header from '../../Company/Header/Header';
import Footer from '../../Company/Footer/Footer';
import './Partner.css';

const Partner = () => {
  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div
          className="partner bg-cover bg-center bg-no-repeat h-screen w-full"
          style={{ backgroundImage: 'url(/pexels-fauxels-3184291.jpg)' }}
        >
          <div className="text-9xl p-8 relative z-10 text-gray-100 pt-8 font-bold leading-relaxed w-full">
            Partner with us <br /> Today
          </div>
        </div>

        {/* Content Section */}
        <div className="bgi w-full h-full py-6 items-center  text-white flex-col flex justify-center md:px-10 px-5">
          <p className="w-3/4 pb-12">
            As active managers, we always represent and advocate for our clients’ best interests when engaging with company management teams. We take an analytical approach to understand how various material factors may affect company performance. Our approach aims to generate meaningful results for our clients - both in investment returns and risk mitigation - over the medium to long term.
          </p>

          {/* Referral Section */}
          <div className="partner-section w-full md:w-3/4 h-4/5  pt-8 p-10 bg-blue-900 rounded-3xl shadow-black flex gap-4">
            {/* Text Content */}
            <div className="w-full md:w-full referral-section md:h-1/2 ">
  <h2 className="text-2xl font-bold text-white mb-4">10% Referral Commission</h2>
  <p className="text-lg mb-8">
    We are dedicated to providing user-friendly, profitable investment and passive earning services to you.
  </p>
  <p className="text-lg mb-4">Instant account credit on direct referrals.</p>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Refer Now
  </button>
</div>


            {/* Image */}
            <div className="w-full md:w-1/3">
              <img
                src="/pexels-olly-3781552.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="price-chartt-section">
            <iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" style={{width:"100%",height:"536px",scrolling:"none",marginWidth:"0",marginHeight:"0", frameBorder:"0", border:"0",lineHeight: '14px'}}></iframe>
            </div>
      <Footer />
    </>
  );
};

export default Partner;
