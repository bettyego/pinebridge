import React from 'react'
import Header from '../../Company/Header/Header'
import Footer from '../../Company/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Pagination,Navigation} from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
const Why = () => {
  return (
    <>
    <Header />

    <div className=''>
    <div className='w-full'>
    <div className="overlay bg-cover bg-center bg-no-repeat h-screen w-full" style={{ backgroundImage: 'url(/pexels-justus-menke-3490295-5213528.jpg)' }}>
      <div className='p-28 items-center  relative z-10 text-white'>
        <h3 className='font-bold text-3xl leading-relaxed w-full'>Corporate Responsibility</h3>
        <h1  className='font-bold text-5xl leading-relaxed w-full'>Company Responsibility</h1>
      </div>
    </div>
      
        <div className='flex justify-center font-thin text-gray-500 pt-24 pb-10 text-3xl w-full'>
          <p className='w-3/4 '>
          At PineBridge, our company responsibility efforts aim to drive our social responsibility strategy and company best practices as an employer, corporate citizen, industry player, and community member.
          </p>
          
        </div>

        <div className='h-auto w-full flex flex-col lg:flex-row bg-slate-300 justify-center items-center px-4 lg:px-12'>
  <div className='text-center lg:text-left mb-4 lg:mb-0'>
    <h1 className='font-bold text-3xl lg:text-5xl leading-snug lg:leading-relaxed text-white w-full'>
      Advancing on Our Commitments
    </h1>
    <p className='w-full lg:w-3/4 p-2 lg:p-4 leading-relaxed text-sm lg:text-base'>
      In our third annual assessment of PineBridge’s corporate responsibility efforts, we take stock of the progress we’ve made as a firm and the work that lies ahead as we advance on our commitments.
    </p>
    <p className='w-full lg:w-3/4 p-2 lg:p-4 leading-relaxed text-sm lg:text-base'>
      Our goals for the year ahead are robust, and we plan to build on the progress made in 2023 to further advance our activities as a responsible investor and global stakeholder – including advocating for our views on long-term value creation through active stewardship and engagement.
    </p>
  </div>
  <img src="/webimage-CR-2024-Thumbnail.webp" alt="" className='w-full lg:w-auto max-w-xs lg:max-w-none h-auto' />
</div>
        <div className='h-screen w-full  justify-center items-center px-36 p-20'>
          <h1 className='font-bold text-5xl leading-relaxed text-black  w-full'>Partnering With Community Programs</h1>
          <p className='w-full'>PineBridge employees are empowered to make a difference in their own communities through donating their time, money, and expertise to support various community initiatives.</p>
          <Swiper
      spaceBetween={50}
      slidesPerView={3}
      className=' h-screen '
      navigation={true} modules={[Navigation]}
     
    >
      <SwiperSlide><img src="/pexels-martine-savard-158139-34543.jpg" alt="style=" className='w-full h-2/4 p-4 0bject-cover  rounded-2xl mx-auto' /></SwiperSlide>
      <SwiperSlide><img src="/pexels-a-darmel-8134100.jpg" alt="style=" className='w-full h-2/4 p-4 0bject-cover  rounded-2xl mx-auto' /></SwiperSlide>
      <SwiperSlide><img src="/pexels-dwanghong-29354033.jpg" alt="style=" className='w-full h-2/4 p-4 0bject-cover  rounded-2xl mx-auto' /></SwiperSlide>
      <SwiperSlide><img src="/pexels-elles-bielitschi-2097331614-29340786.jpg" alt="style=" className='w-full h-2/4 p-4 0bject-cover  rounded-2xl mx-auto' /></SwiperSlide>
      <SwiperSlide><img src="/pexels-erika-andrade-1358382831-28347064.jpg" alt="style=" className='w-full h-2/4 p-4 0bject-cover  rounded-2xl mx-auto' /></SwiperSlide>
      <SwiperSlide><img src="/pexels-ihsanaditya-28196491.jpg" alt="style=" className='w-full h-2/4 p-4 0bject-cover  rounded-2xl mx-auto' /></SwiperSlide>
      <SwiperSlide><img src="/pexels-hyundaimotorgroup-19317897.jpg" alt="style=" className='w-full h-2/4 p-4 0bject-cover  rounded-2xl mx-auto' /></SwiperSlide>
      <SwiperSlide><img src="/pexels-passengerslover-27036751.jpg" alt="style=" className='w-full h-2/4 p-4 0bject-cover  rounded-2xl mx-auto' /></SwiperSlide>
      
    </Swiper>
        </div>
      
        <div className='h-screen w-full  text-black '>
           <div className='pt-20 pl-4'>
           <h1 className='font-bold text-3xl leading-relaxed w-full'>Investing in a Diverse Future Workforce</h1>
           <p>We partner with leading organizations to offer internships opportunities for a diverse range of future workforce participants</p>
           </div>
            <div className='h-screen w-full flex justify-center items-center pl-4'>
              <div className=''>
              <img src="/oppnet-logo.svg" alt="" className='w-3/5 pb-10' />
              <h3 className='text-3x1 font-bold pl-12'>New York</h3>
              <p className='w-3/4'>The Opportunity Network seeks to ensure that young people from historically underrepresented backgrounds have equal access to educational and professional opportunities.</p>
              </div>
              <div className=''>
              <img src="/thul-ali-forney-center-logo.webp" alt="" className='w-3/5 pb-10' />
              <h3 className='text-3x1 font-bold pl-12'>New York</h3>
              <p className='w-3/4'>The Ali Forney Center is committed to saving the lives of LGBTQ+ young people, protecting them from the harms of homelessness and empowering them with tools to live independently.</p>
              </div>
              <div className=''>
              <img src="/gain-logo.webp" alt="" className='w-3/5 pb-10' />
              <h3 className='text-3x1 font-bold pl-12'>London</h3>
              <p className='w-3/4'>Girls Are INvestors is an organization dedicated to improving gender diversity in the asset management industry.</p>
              </div>
              
            </div>
            <div className='w-full  place-items-center pb-6 '>
              <img src="/wampilotprogramme.webp" alt="" className='h-fit w-1/4 pb-4 pr-8 ' />
              <h1 className='font-bold'>Hong Kong</h1>
              <p className='w-1/3'>The Hong Kong Government Subsidized Summer Internship Program (“SIP”) is an intercity initiative to provide undergraduate students exposure to career opportunities in the finance industry.</p>
              </div>
              <div className='w-full bg-slate-200 flex justify-between items-center leading-relaxed'>
                <div className='p-8 w-1/2 pb-8'>
                  <h1 className='text-3xl '>Employee Action: #pinebridgepledge</h1>
                  <p>#pinebridgepledge brings employees together to take positive action in their local communities, with a focus on youth-oriented and educational programs. Learn more about recent financial literacy initiatives and other volunteer efforts across the globe</p>
                <button className='bg-green-600 rounded-1xl w-1/4 h-10 text-white  '>learn More</button>
                </div>
                <img src="/webimage-1536300065.webp" alt="" className='w-1/4 h-60 object-cover' />
              </div>
        </div>
    </div>
    </div>
    < Footer/>
    </>
    
  );
};

export default Why;


