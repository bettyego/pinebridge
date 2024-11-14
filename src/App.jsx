import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route,Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Signup from "./component/pages/Signup";
import Login from "./component/pages/Login";
import Why from "./component/pages/Why"
import Invest from "./component/pages/Invest";
import Testimonals from "./component/pages/Testimonals";
import Policy from "./component/pages/Policy";
import Partner from "./component/pages/Partner";


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
        <Route path="/testimonals"  element={<Testimonals/>}/>
        <Route path="/policy"  element={<Policy/>}/>
        <Route path="/partner"  element={<Partner/>}/>
      </Routes>
    
      
    </>
  );
};

export default App;