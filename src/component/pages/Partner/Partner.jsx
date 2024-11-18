import Header from '../../Company/Header/Header'
import Footer from '../../Company/Footer/Footer'

const Partner= () => {
  return (
    <>
    <Header />
    <div>
        <div className="overlay bg-cover bg-center bg-no-repeat h-screen w-screen" style={{ backgroundImage: 'url(/pexels-fauxels-3184291.jpg)' }}>
        <div className='flex justify-center relative z-10 text-white'>
        <button className='font-bold text-5xl leading-relaxed w-full'>Partner with us <br /> Today</button>
        </div>
             
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Partner