import Header from '../../Company/Header/Header'
import Footer from '../../Company/Footer/Footer'
import './Partner.css'

const Partner= () => {
  return (
    <>
    <Header />
    <div>
        <div className="partner bg-cover bg-center bg-no-repeat h-screen w-full" style={{ backgroundImage: 'url(/pexels-fauxels-3184291.jpg)' }}>
        <div className=' p-8 relative z-10 text-gray-100 pt-8  font-bold text-9xl leading-relaxed w-full'>
        Partner with us <br /> Today
        </div>
        </div>
        
        <div className='bgi w-fll h-full py-10 items-center pl-44 text-white'>
        <p className='w-3/4 pb-12'>As active managers, we always represent and advocate for our clients’ best interests when engaging with company management teams. We take an analytical approach to understand how various material factors may affect company performance. Our approach aims to generate meaningful results for our clients - both in investment returns and risk mitigation - over the medium to long term.</p>
        <div class="w-3/4 h-4/5 pt-8 p-10 bg-blue-900  rounded-3xl shadow-black flex  ">
  <div class="w-2/3">
 
    <h2 class="text-2xl font-bold  text-white  mb-4">10% Referral Commission</h2>
    <p class="text-lg mb-8">We are dedicated to providing user-friendly, profitable investment and passive earning services to you.</p>
    <p class="text-lg mb-4">Instant account credit on direct referrals.</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Refer Now</button>
  </div>
  <div class="w-full h-full">
    
    <img src="/pexels-olly-3781552.jpg" alt="" className='w-full h-full object-fit object-cover rounded-lg'/>
  </div>
</div>



          
       
        </div>
             
        
    </div>
    
    </>
  )
}

export default Partner