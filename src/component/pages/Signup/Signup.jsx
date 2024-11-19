import React from 'react';
import Header from '../../Company/Header/Header';
import './Signup.css';  
import Footer from '../../Company/Footer/Footer';

const Signup = () => {
  return (
    <>
      <Header />
      <div className='background'>
      <div className="signup-container">
        <div className="signup-box">
          <h2 className="signup-title">Sign Up</h2>
          <form className="signup-form">
            <input 
              placeholder="First Name" 
              className="input-field" 
              type="text"
            />
            <input 
              placeholder="Last Name" 
              className="input-field" 
              type="text"
            />
            <input 
              placeholder="Email" 
              className="input-field" 
              type="email"
            />
            <input 
              placeholder="Confirm Email" 
              className="input-field" 
              type="email"
            />
            <input 
              placeholder="Password" 
              className="input-field" 
              type="password"
            />
            <input 
              placeholder="Confirm Password" 
              className="input-field" 
              type="password"
            />
            <label className="form-label" htmlFor="gender">Gender</label>
            <select className="input-field" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label className="form-label" htmlFor="age">Age</label>
            <input className="input-field" id="age" type="date" />
            <p className="login-prompt">
              Already have an account? 
              <a className="login-link" href="#">Login</a>
            </p>
            <button className="signup-btn" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
