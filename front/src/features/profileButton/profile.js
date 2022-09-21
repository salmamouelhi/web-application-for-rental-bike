import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { logout } from './profileSlice'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './profile.css'
import Home from '../../pages/home/home';


export function ProfileButton(props) {

  const profile = useSelector((state) => state.profile.value);
  const profileName = useSelector((state) => state.profileName.value);

 



  
  return (

    
    
     <div>
     
       
    <div className="container-fluid bg-primary py-3 d-none d-md-block">
    <div className="container">
        <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white pr-3" href="">FAQs</a>
                    <span className="text-white">|</span>
                    <a className="text-white px-3" href="">Help</a>
                    <span className="text-white">|</span>
                    <a className="text-white pl-3" href="">Support</a>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white px-3" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-white px-3" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-white px-3" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-white px-3" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-white pl-3" href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container-fluid position-relative nav-bar p-0">
    <div className="container-lg position-relative p-0 px-lg-3">
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0" style={{zIndex: "9"}}>
            <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary"><span className="text-secondary"></span>VeloLik</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
                 <div className="navbar-nav ml-auto py-0">
                    <a href="index.html" className="nav-item nav-link active"><Link to="/Home"> Home</Link></a>
                    <a href="about.html" className="nav-item nav-link">Event</a>
                    <a href="#" className="nav-item nav-link"><Link to="/Prices"> Prices </Link></a>
                </div>
                <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary"></span>VeloLik</h1>
                </a>
                <div className="navbar-nav mr-auto py-0 ">
                    
                    <a href="gallery.html" className="nav-item nav-link"  > <Link to="/Contact"> Contact </Link></a>
                    
                    {/* <a href="#" className="nav-item nav-link">
                    <select style={{border :"none"}}>
                        <option value="salma">{profileName}</option>
                        <option value="salma">salma</option>
                    </select>
                    </a> */}


                        <div className="dropdown ">
                        <button className="dropbtn">{profileName}      <i class="fa fa-bars"></i></button>
                        <div className="dropdown-content">
                            <a href="/Profile"><i style={{marginRight:"10px"}} class='fas'>&#xf406;</i>Profile</a>
                            <a href="/Bookings"> <i style={{marginRight:"10px"}} class='fas'>&#xf274;</i> My Bookings</a>
                            <a href="/Home"><i style={{marginRight:"10px"}} class='fas'>&#xf2f5;</i>Log Out</a>
                        </div>
                        </div>

               
            </div>
        </nav>
    </div>
</div>


</div>
)}