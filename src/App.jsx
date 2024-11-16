import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route,Routes } from "react-router-dom";
import Home from "./component/pages/Home/Home";
import About from "./component/pages/About/About";
import Signup from "./component/pages/Signup/Signup";
import Login from "./component/pages/Login/Login";
import Why from "./component/pages/why/Why"
import Invest from "./component/pages/Invest/Invest";
import Testimonals from "./component/pages/Testimonals/Testimonals";
import Policy from "./component/pages/Policy/Policy";
// import Partner from "./component/pages/Partner/Partner";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 50,
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/why"  element={<Why/>}/>
        <Route path="/invest"  element={<Invest/>}/>
        <Route path="/testimonials"  element={<Testimonals/>}/>
        <Route path="/policy"  element={<Policy/>}/>
        {/* <Route path="/partner"  element={<Partner/>}/> */}
      </Routes>
    
      
    </>
  );
};

export default App;