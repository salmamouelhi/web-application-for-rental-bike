import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './myBooking.css'
import { Modal } from "bootstrap";
import Profile from "../profilePage/profile";
import { ProfileButton } from "../../features/profileButton/profile";

const customStyles = {
  
  

  content : {
    top                   : '60%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background: '#FAEBD7'
    
    
    
    
   

  }
 

};
function Bookings(){

  var subtitle;
  const[Book , setBookModal2] = React.useState(false);
  
  function openModalBook2() {
      setBookModal2(true);
  }
  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModalBook2(){
      setBookModal2(false);
  }

return <div>
  
<ProfileButton/>

<div className="container tableBooking">

<h5 className="text-primary text-uppercase" style={{letterSpacing: "5px" , float:"left" , color:"black"}}> Your reservations</h5>
    <table className=" table"  style={{backgroundColor : "white"}}>
  <thead className="thead" style={{backgroundColor : "#e65c4c" , color:"white"}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Reservation ID</th>
      <th scope="col">Category</th>
      <th scope="col">Date</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>252426</td>
      <td>V.T.T</td>
      <td>26/08/2022</td>
      <td><button className="btn btn-warning"><i className="fa fa-eye" aria-hidden="true" ></i> Detail</button></td>
      <td><button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Delete</button></td>
    </tr>
    
  </tbody>
</table>

    
    </div>
</div>






}


export default Bookings; 