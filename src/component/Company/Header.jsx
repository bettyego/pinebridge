import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex  text-gray-600 w-full pt-2 pb-2 pl-2'>
        <img src="src/assets/pinebridge-old-green-logo.svg" alt="" className='w-52' />
        <ul className='flex justify-around  w-full'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/invest">Earning</Link></li>
            <li><Link to="/testimonials">Testimonals</Link></li>
            <li><Link to="/partner">Partnership</Link></li>
            <li><Link to="/policy">Policy</Link></li>
            <li><Link to="">Help</Link></li>
            <li><Link to="/signup">sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>

        </ul>
    </div>
  )
}

export default Header