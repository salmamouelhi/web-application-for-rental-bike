import React ,{ useState,useEffect }from "react";
import { Link } from "react-router-dom";
import { ProfileButton } from '../features/profileButton/profile';
import Home from "./home/home";
import Profile from "./profilePage/profile";



function HeaderLogin(){

    return <div>
        <ProfileButton />
        <Profile/>
     
        
        
    </div>


    
}


export default HeaderLogin;