import Header from '../../Company/Header/Header';
import './Signup.css';  
import Footer from '../../Company/Footer/Footer';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = ({route}) => {
  const navigate = useNavigate()
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')



  const handleSubmit = async() =>{
    try {
      if(password !== confirmPassword){
        alert('password do not match')
        return
      }

      const data = {
        firstname,
        lastname,
        email,
        password
      }

      const request =  await fetch(`${route}/api/auth/register`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })

      const response = request.status
      console.log(response)

      if(response === 201){
        alert('user created successfully')
        navigate('/login')
      }else{
        alert('invalid email')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (

   
    <>
      <Header />
      <div className=''>
      <div className="signup-container bg-blue-900">
        <div className="signup-box">
          <h2 className="signup-title">Sign Up</h2>
          <form className="signup-form" onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()
          }}>
            <input 
              placeholder="First Name" 
              className="input-field" 
              type="text"
              onChange={(e)=>setFirstname(e.target.value)}
            />
            <input 
              placeholder="Last Name" 
              className="input-field" 
              type="text"
              onChange={(e)=>setLastname(e.target.value)}
            />
            <input 
              placeholder="Email" 
              className="input-field" 
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
              placeholder="Password" 
              className="input-field" 
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <input 
              placeholder="Confirm Password" 
              className="input-field" 
              type="password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            
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
