import Header from '../Company/Header/Header'
import Footer from '../Company/Footer/Footer'

const Partner = () => {
  return (
    <>
    <Header />
    <div>
        <div className="overlay bg-cover bg-center bg-no-repeat h-screen w-screen" style={{ backgroundImage: 'url(/pexels-fauxels-3184291.jpg)' }}>
        <div className='justify-center items-center relative z-10 text-white'>
        <button className='bg-blue-600'>Partner with us </button>
        </div>
             
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Partner