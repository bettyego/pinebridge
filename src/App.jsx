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
import Partner from "./component/pages/Partner/Partner";
import Help from "./component/pages/Help/Help";
import Dashboard from "./component/pages/Dashboard/Dashboard";
import UserDashboard from "./component/pages/userDashboard/UserDashboard";
import Profile from "./component/pages/Dashboard/Profile";
import Payment from "./component/pages/userDashboard/payment";
import Funds from "./component/pages/userDashboard/Funds";
import PaymentM from "./component/pages/userDashboard/PaymentM";
import Confirmation from "./component/pages/userDashboard/Confirmation";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 50,
    })
  }, [])

  const route = 'https://pineback.vercel.app'
  return (
    <>
    
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/signup"  element={<Signup route={route}/>}/>
        <Route path="/login"  element={<Login route={route}/>}/>
        <Route path="/why"  element={<Why/>}/>
        <Route path="/invest"  element={<Invest route={route}/>}/>
        <Route path="/testimonials"  element={<Testimonals/>}/>
        <Route path="/policy"  element={<Policy/>}/>
        <Route path="/partner"  element={<Partner/>}/>
        <Route path="/help"  element={<Help/>}/>
        <Route path="/dashboard"  element={<UserDashboard route={route}/>}/>
        <Route path="/profile"  element={<Profile route={route}/>}/>
        <Route path="/admin"  element={<Dashboard route={route}/>}/>
        <Route path="/payment"  element={<Payment route={route}/>}/>
        <Route path="/funds"  element={<Funds route={route}/>}/>
        <Route path="/paymentM"  element={<PaymentM route={route}/>}/>
        <Route path="/confirmation"  element={<Confirmation route={route}/>}/>

      </Routes>
      <div className="fixed bottom-0 w-full">
      <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=" width="100%" height="36" scrolling="auto" marginWidth="0" marginHeight="0" frameborder="0" border="0" style={{border:0,margin:0,padding:0,}}>
      </iframe>
      </div>
    
      
    </>
  );
};

export default App;