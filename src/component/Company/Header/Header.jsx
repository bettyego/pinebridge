import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
import './Header.css'



const Header = () => {

 




  const [open, setOpen] = useState(false);
  return (
    <header className='flex  text-gray-600 w-full pt-2 pb-2 pl-2 justify-between items-center  sticky top-0 z-20 bg-white'>
        <img src="/pinebridge-old-green-logo.svg" alt="" className='w-52' />
        <div id="google_translate_element" className="w-20 h-auto">
          <div id=":0.targetLanguage"></div>
        </div>
        <div className='menu-container text-4xl' onClick={()=>{
          setOpen(!open)
        }}>
            <CiMenuFries />
           
        </div>
        <div className={`menu ${open ? 'slide-out' : 'slide-in'}`}>
                <ul className='flex flex-col gap-4 text-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/why">Why Us</Link></li>
                    <li><Link to="/invest">Earning</Link></li>
                    <li><Link to="/testimonials">Testimonals</Link></li>
                    <li><Link to="/Mem">Partnership</Link></li>
                    <li><Link to="/policy">Policy</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/signup">sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        <ul className='ul flex justify-around  w-full '>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/invest">Earning</Link></li>
            <li><Link to="/testimonials">Testimonals</Link></li>
            <li><Link to="/partner">Partnership</Link></li>
            <li><Link to="/policy">Policy</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/signup">sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>

        </ul>
    </header>
  )
}

export default Header