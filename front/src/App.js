
import './App.css';
import Home from './pages/home/home';
import SignUp from './pages/SignUp';
import Prices from './pages/priceSection/prices';
import Detail from './pages/detail';
import HeaderLogin from './pages/headerLogin';
import Event from './pages/event/event';
import Contact from './pages/contact/contact';
import Profile from './pages/profilePage/profile';
import Bookings from './pages/myBookings/Bookings';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './pages/header';




function App() {


      const {loggedIn , setLoggedIn} = useState(false);

  return (
    <div className="App">
     
     <BrowserRouter>
      <Routes>
        

      

      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/HeaderLogin" element={<HeaderLogin />}/>
      <Route path="/Prices" element={<Prices />} />
      <Route path="/Detail" element={<Detail />} />
      <Route path="/Event" element={<Event />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Bookings" element={<Bookings/>} />

      
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
