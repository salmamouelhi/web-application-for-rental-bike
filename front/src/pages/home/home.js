import React from "react";
import Header from "../header";
import img from "../img/whoweare.jpg";
import Modal from 'react-modal';
import './home.css'

import { useSelector, useDispatch } from 'react-redux';

import { ProfileButton } from "../../features/profileButton/profile";




function Home(){

    const profile = useSelector((state) => state.profile.value);
    console.log(profile);

    return <div>

        {
            profile == true ?   <ProfileButton/>  : <Header/> 
        } 

 

    
    
    <div className="container-fluid p-0 mb-5 pb-5">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="assets/img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h4 className="text-white text-uppercase mb-md-3">Bikes adapted to your needs</h4>
                            <h1 className="display-3 text-white mb-md-4">Bike rental for your daily journey </h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now !</a>
                        </div>
                    </div>
                </div>
                {/* <div className="carousel-item">
                    <img className="w-100" src="assets/img/couv1.jpeg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h4 className="text-white text-uppercase mb-md-3">Who we are ?</h4>
                            <h1 className="display-3 text-white mb-md-4">Made From Our Own Organic Milk</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                        </div>
                    </div>
                </div> */}
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-secondary px-0" style={{width: "45px" ,  height: "45px"}}>
                    <span className="carousel-control-prev-icon mb-n1"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-secondary px-0" style={{width: "45px" ,  height: "45px"}}>
                    <span className="carousel-control-next-icon mb-n1"></span>
                </div>
            </a>
        </div>
    </div>


    <div className="container-fluid  ">
        <div className="container  ">
       
                
               
{/*          
            <div className="row">
                <div className="col-lg-5 aboutUsBloc">
                    <h4 className="font-weight-bold mb-3">About Us</h4>
                    <h5 className="text-muted mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                    <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                    <a href="" className="btn btn-secondary mt-2">join Community</a>
                </div>
                <div className="col-lg-5" style={{minHeight: "400px"}}>
                    <div >
                        <img className="  whoWeAreImg" src={img} />
                    </div>
                </div>
               
            </div>  */}


<section className="about-section">
    	<div className="container">
        	<div className="row clearfix">
            	
               
                <div className="content-column col-md-6 col-sm-12 col-xs-12 aboutus" >
                	<div className="inner-column">
                    	<div className="sec-title">
                    		<div className="title"> <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}> Discover OUR STORY</h5></div>
                        	<h2>What is VELOLIK ?</h2>
                        </div>
                        <div className="text">Ultimately, only one thing counts for us: the perfect ride. With our online booking platform, you have access to more than 50,000 bikes across Europe and around the world. We want you to be able to rent the right bike for any terrain — from city cruisers to high-end mountain bikes — anytime, anywhere. And if you have a cool bike that you want to share, you can simply list it on our online platform. We bring bike owners and renters together in a way that benefits both sides. Whether you’re a private or a commercial renter, an ambitious sportsman or a recreational cruiser, we all have one thing in common — the love for bicycles! </div>
                      
                        <a href="about.html" className="theme-btn btn-style-three   btnJoin">Join Community</a>
                    </div>
                </div>
                
                <div className="image-column col-md-6 col-sm-12 col-xs-12" >
                	<div className="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    	<div className="image">
                        	<img src="assets/img/aboutus.jpg" alt=""/>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>


      
        </div>
    </div>



    {/* <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px" }}>Services</h5>
                
                
            </div>
            <div className="row  serviceCard">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4 serviceBox">
                        <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                        <h5 className="mb-2">Travel Guide</h5>
                        <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4 serviceBox">
                        <i className="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
                        <h5 className="mb-2">Ticket Booking</h5>
                        <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4 serviceBox">
                        <i className="fa fa-2x fa-hotel mx-auto mb-4"></i>
                        <h5 className="mb-2">Hotel Booking</h5>
                        <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    <div className="container">
  <div className="text-container">
  <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}> OUR SERVICES</h5>
    
  </div>

  <div className="services-container">
    <div className="service-card service-margin">
      <div className="circule-img-container">
        <img src="assets/img/service1.png" />
      </div>
      <div className="flex-column">
        <span>Bike rental, made easy</span>
        <p>Find and rent your dream bike from 50,000+ bikes at more than 1,000 locations. Become a Lister yourself today!</p>
        <a href="#" class="button-info-container button-margin-top">More info</a>
      </div>
    </div>
    <div className="service-card service-margin">
      <div className="circule-img-container">
        <img src="assets/img/service2.png" />
      </div>
      <div className="flex-column">
        <span>Any time, any place</span>
        <p>With ListNRide you have the fastest and easiest access to your dream bike. Secure and convenient, in just a few taps.</p>
        <a href="#" class="button-info-container button-margin-top">More info</a>
      </div>
    </div>
    <div className="service-card service-margin">
      <div className="circule-img-container">
        <img src="assets/img/service3.png" />
      </div>
      <div className="flex-column">
        <span>Join Events</span>
        <p>We are supporting fantastic events all around Europe so that you can enjoy the ride, without worrying about transporting your bike to the starting line!</p>
        <a href="#" className="button-info-container button-margin-top">More info</a>
      </div>
    </div>
  </div>
</div>



{/*    
    <div className="container-fluid my-5 py-5 px-0">
        <div className="row bg-primary m-0">
            <div className="col-md-6 px-0" style={{minHeight: "500px"}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100" src="assets/img/promotion.jpg" style={{objectFit: "cover"}}/>
                    <button type="button" className="btn-play" data-toggle="modal"
                        data-src="assets/https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            <div className="col-md-6 py-5 py-md-0 px-0">
                <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                    <div className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                        style={{width: "100px", height: "100px"}}>
                        <h3 className="font-weight-bold text-secondary mb-0">$199</h3>
                    </div>
                    <h3 className="font-weight-bold text-white mt-3 mb-4">Chocolate Ice Cream</h3>
                    <p className="text-white mb-4">Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
                        justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                    <a href="" className="btn btn-secondary py-3 px-5 mt-2">Order Now</a>
                </div>
            </div>
        </div>
    </div> */}
    
    <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>        
                   
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="assets/" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="container-fluid my-5 py-5 px-0">
        <div className="row justify-content-center m-0">
            <div className="col-lg-5">
            <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px" , marginBottom:"60px"}}> Our Events pictures</h5>
            </div>
        </div>
        <div className="row m-0 portfolio-container">
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="assets/img/event1.jpg" alt=""/>
                    <a className="portfolio-btn" href="img/event1.jpg" data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="assets/img/event2.jpg" alt=""/>
                    <a className="portfolio-btn" href="img/event2.jpg" data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="assets/img/event3.jpg" alt=""/>
                    <a className="portfolio-btn" href="img/event4.jpg" data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="assets/img/event5.jpg" alt=""/>
                    <a className="portfolio-btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="assets/img/event6.jpg" alt=""/>
                    <a className="portfolio-btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="assets/img/event7.jpg" alt=""/>
                    <a className="portfolio-btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">
                        <i className="fa fa-plus text-primary" style={{fontSize: "60px"}}></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    

    <div className="container-fluid footer bg-light py-5" style={{marginTop: "90px"}}>
        <div className="container text-center py-5">
            <div className="row">
                <div className="col-12 mb-4">
                    <a href="index.html" className="navbar-brand m-0">
                        <h1 className="m-0 mt-n2 display-4 text-primary"><span className="text-secondary"></span>Velolik</h1>
                    </a>
                </div>
                <div className="col-12 mb-4">
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-secondary btn-social" href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="col-12 mt-2 mb-4">
                    <div className="row">
                        <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                            <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                            <p className="mb-2">123 Street, New York, USA</p>
                            <p className="mb-0">+012 345 67890</p>
                        </div>
                        <div className="col-sm-6 text-center text-sm-left">
                            <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                            <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                            <p className="mb-0">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <p className="m-0">&copy; <a href="#">Domain</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
            </div>
        </div>
    </div> 
</div>
  

  
 



	
}

export default Home; 