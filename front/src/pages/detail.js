import React, {useState} from "react";
import Header from "./header";
import img1 from "./img/velo1.jpg";
import img2 from "./img/velo2.jpg";
import Modal from 'react-modal';
import axios from "axios";
import { ProfileButton } from "../features/profileButton/profile";



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

function Detail(){

  var subtitle;
  const[BookNow , setBookModal] = React.useState(false);
  
  function openModalBook() {
      setBookModal(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModalBook(){
      setBookModal(false);
  }


  const [category, setCategory] = useState('')
  const [rentalDateFrom, setrentalDateFrom] = useState('')
  const [rentalDateTo, setrentalDateTo] = useState('')
  const [pickUpTime, setpickUpTime] = useState('')
  const [returnTime, setreturnTime] = useState('')
  const [qunatity, setqunatity] = useState('')

  function addReservation(){
      var data = JSON.stringify({
          "category": category,
          "rentalDateFrom": rentalDateFrom,
          "rentalDateTo": rentalDateTo,
          "pickUpTime": pickUpTime,
          "returnTime": returnTime,
          "qunatity": qunatity
        });
        
        var config = {
          method: 'get',
          url: 'http://localhost:3001/getAllReservation',
          headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InNhbG1hIiwiaWF0IjoxNjYxNDc1OTAyLCJleHAiOjE2NjE0Nzk1MDJ9.PnF7oiOiMk4HLeM7vRIZtrCVAjqodt8fWALme9XDxmc', 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log("you did well");
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
        
  }


    return <div classNameName="detailPage">

        <ProfileButton/>

        <div className = "card-wrapper">
      <div className = "card">
       
        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img className="imgDetail" src = {img1} alt = "shoe image"/>
             
            </div>
          </div>
          
        </div>
        
        <div className = "product-content">
          <h2 className = "product-title">Vélo électirque</h2>
          <a href = "#" className = "product-link">Rating</a>
          <div className = "product-rating">
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
           <p></p>
          </div>

          {/* <div className = "product-price">
            <p className = "last-price">Old Price: <span>$257.00</span></p>
            <p className = "new-price">New Price: <span>$249.00 (5%)</span></p>
          </div> */}

          <div className = "product-detail">
            <h2>Price per hour : 7.5dt/H</h2>
         
            
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>V.T.T</span></li>
              <li>Accessorie <span> 
              adult helmet</span></li>
            
            </ul>
          </div>

          <div className = "purchase-info">
          <button type = "button" className = "btn"  onClick={openModalBook}>Book Now</button>
          <Modal
                        isOpen={BookNow}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModalBook}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                        <div className="modal-bodyBooking">
                    
                        

                        <div style={{textAlign: "center"}}>
                        <h2>Your booking details</h2>
                        <form className="contact-form form-validate3 " novalidate="novalidate">
                            <div className="form-group">
                            <select   className="form-control" onChange={(e) => setCategory(e.target.value)}>
                              <option value="rigatoni">What kind of bike</option>
                              <option value="dave">Electirical</option>
                              <option value="pumpernickel">Kids</option>
                              <option value="reeses">Double Size</option>
                            </select>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="date" name="RentalDateFrom" id="RentalDateFrom" placeholder="RentalDateFrom" required="" autocomplete="off" aria-required="true"  onChange={(e) => setrentalDateFrom(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="date" name="RentalDateTo" id="RentalDateTo" placeholder="RentalDateTo" required="" autocomplete="off" aria-required="true" onChange={(e) => setrentalDateTo(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="time" name="PickUpTime" id="PickUpTime" placeholder="PickUpTime" required="" autocomplete="off" aria-required="true" onChange={(e) => setpickUpTime(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="time" name="PickUpTime" id="PickUpTime" placeholder="PickUpTime" required="" autocomplete="off" aria-required="true"onChange={(e) => setreturnTime(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="number" name="nbrBikes" id="nbrBikes" placeholder="How many bikes?" required="" autocomplete="off" aria-required="true" onChange={(e) => setqunatity(e.target.value)}/>
                            </div>


                         
                        </form>
                        </div>

                        
{/* 
                        <div className="rightBooking">
                        <h2>Your contact details</h2>
                        <form className="contact-form form-validate3 " novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="Your Name" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="lastname" id="lastname" placeholder="your Email address" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                            <input className="form-control" type="tel" id="phone" name="phone" maxLength={8} required placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="paragraph_text" placeholder="Comments" cols="30" rows="6"></textarea>
                                
                            </div>
                           
                        </form>
                        </div> */}
                        
                        
              </div>
              <div style={{textAlign: "center"}}>
              <input className="btn btn-md btn-primary" style={{width: "200px"}} id="sign_up" type="button" value="Validate" onClick={()=> closeModalBook()}/>
              </div>
          </Modal>
          </div>

          
        </div>
      </div>
      <h1 style={{color:"#E73725"}} className="titleReview">Review</h1>
    </div>


    

    <div className="review">
    <div className="review__header">
    
    </div>
    <div className="review__list">
    <div className="review__card">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <div className="review__cardFooter">
        <img src="https://gateway.jerkmate.com/cmscloud/dA/5eb84107-7367-46bd-a8c5-4bd19e85156e/authorImg/Fernando.png" alt="Fernando 41" class="review__cardImg"/>
        <div className="review__cardInfo">
          <h2>Fernando 41</h2>
          <p>New York</p>
          <span> 12/03/2022 </span>
        </div>
      </div>
    </div>
    </div>

    <div className="review__list">
    <div className="review__card">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <div className="review__cardFooter">
        <img src="https://gateway.jerkmate.com/cmscloud/dA/5eb84107-7367-46bd-a8c5-4bd19e85156e/authorImg/Fernando.png" alt="Fernando 41" class="review__cardImg"/>
        <div className="review__cardInfo">
          <h2>Fernando 41</h2>
          <p>New York</p>
          <span> 12/03/2022 </span>
        </div>
      </div>
    </div>
    </div>

    


</div>
</div>

}


export default Detail;