import React, { useState } from "react";
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import {useDispatch } from  'react-redux';
import {login} from '../features/profileButton/profileSlice';
import {changeName} from '../features/profileName/profileName';
import axios from "axios";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";



const customStyles = {
  
    overlay: {
        position: 'fixed',
        zIndex: '100 !important'
    },

    content : {
      top                   : '55%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background: '#FAEBD7',
      
      
      
     

    }
   

  };

  const customStyles2 = {
  
    overlay: {
        position: 'fixed',
        zIndex: '100 !important'
    },

    content : {
      top                   : '60%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      borderColor : 'red',
      
    
      
      
      
     

    }
   

  };
  
function Header(){

 

    var subtitle;
    const[Login , setLoginModal] = React.useState(false);
    const [Sign ,setSignModal] = React.useState(false);
    const [Welcome ,setwelcomeModal] = React.useState(false);
    function openModalLogin() {
        setLoginModal(true);
    }
    function openModalWelcome() {
        setwelcomeModal(true);
    }

    function openModalSign(){
        setSignModal(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModalSign(){
        setSignModal(false);
    }

    function closeModalLogin(){
        setLoginModal(false);
    }
    function closeModalWelcome(){
        setwelcomeModal(false);
    }


    let navigate = useNavigate();
   
    
    const nameStat = "" ;
    const passwordStat = "" ;
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [birthDate, setbirthDate] = useState('');
    const [gender, setgender] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [image, setimage] = useState('');

    
    
    

    const dispatch = useDispatch();

    // function checkValidation()
    // {
    //     if((name == nameStat)&&(password == passwordStat))
    //     {
        
    //        dispatch(changeName(name));
    //        dispatch(login());
    //        navigate(`/headerLogin`);
    //     }
    //     else
    //     {
    //         alert("bad credential ! ");
    //     }

    //     loginAction();
    // }


    function loginAction(){


       
        var data = JSON.stringify({
          "login": name,
          "password": password
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:3001/login',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          
          
          console.log(response.data.token);
          if(response.data.token){
            dispatch(changeName(name));
            dispatch(login());
            navigate(`/headerLogin`);
          }
          else{
            alert("erreur jyfgyu");
          }
                
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }

    
    function addUser(){

       
        
        //var fs = require('fs');
       
        //data.append('avatar', fs.createReadStream('/C:/Users/Zouza/Desktop/salma.jpg'));
        var data = JSON.stringify({
        "firstName" :  firstName,
        "lastName" :  lastName   ,
        "birthDate" :  birthDate   ,
        "gender" :  gender   ,
        "phone" :  phone   ,
        "email" :  email   ,
        "login" :  name   ,
        "password" :  password   ,
        })
        var config = {
            method: 'post',
            url: 'http://localhost:3001/addUser',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            openModalWelcome();
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

    


    return <div>
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
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <a href="#" className="nav-item nav-link active headerTitle"><Link to="/Home"> Home</Link></a>
                        <a href="#" className="nav-item nav-link headerTitle"><Link to="/Event"> Event </Link></a>
                        <a href="#" className="nav-item nav-link headerTitle"><Link to="/Prices"> Prices </Link></a>
                    </div>
                    <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                        <h1 className="m-0 display-4 text-primary"><span className="text-secondary"></span>VeloLik</h1>
                    </a>
                    <div className="navbar-nav mr-auto py-0">
                       
                        <a href="gallery.html" className="nav-item nav-link headerTitle"><Link to="/Contact"> Contact </Link></a>
                        
                        <button className="btn btn-primary-outline headerTitle"  onClick={openModalSign} >Sign Up</button>
                        <button className="btnLogin"  onClick={openModalLogin} style={{verticalAlign: "middle"}}> <span>Login</span> </button>
                        <Modal
                        isOpen={Sign}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModalSign}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                        <div className="modal-body">
                        <h2 className="text-primary text-uppercase" style={{letterSpacing: "5px" , textAlign:"center" , marginBottom:"20px"}}> sign up</h2>
                        

                        <div className="leftSignUp">
                        <form className="contact-form form-validate3 " novalidate="novalidate"  >
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true"  onChange={(e) => setfirstName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="lastname" id="lastname" placeholder="Last Name" required="" autocomplete="off" aria-required="true" onChange={(e) => setlastName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="date" name="birthDate" id="birthDate" placeholder="BirthDate" required="" autocomplete="off" aria-required="true" onChange={(e) => setbirthDate(e.target.value)}/>
                            </div>
                            <div className="form-group ">
                                <input  type="radio" name="sex" id="sexF" onChange={(e) => setgender(e.target.value)} />
                                <label> Female</label>
                                <input  type="radio" name="sex" id="sexM" onChange={(e) => setgender(e.target.value)}/>
                                <label> Male</label>
                            </div>  
                            <div className="form-group">
                                <input className="form-control" type="number" name="phone" id="phone" placeholder="Phone" required="" autocomplete="off" aria-required="true" onChange={(e) => setphone(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" onChange={(e) => setemail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="login" placeholder="Login" required="" autocomplete="off" aria-required="true" onChange={(e) => setName(e.target.value)}/>
                            </div>
                           
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            {/* <div className="form-group">
                                <input type="file" name="image" className="form-control" placeholder="Image" required="" autocomplete="off" aria-required="true"  />
                            </div>   */}
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" onClick={() => addUser()} />
                            {/* onChange={(e) =>  setimage(e.target.files[0])} */}
                        </form>
                    </div>

                        
                   

                    </div>
                        </Modal>
                        <Modal
                        isOpen={Welcome}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModalWelcome}
                        style={customStyles2}
                        contentLabel="Example Modal"
                        >

                            <h5 style={{textAlign : "center"}}> Welcome {name} among us <i class="fa fa-heart"></i></h5>
                            
                        </Modal>


                    {/* <!-- signUp End -->
                    <!-- login --> */}

                        <Modal
                        isOpen={Login}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModalLogin}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                        <div className="modal-body">
                      
                        <h2 className="text-primary text-uppercase" style={{letterSpacing: "5px" , textAlign:"center" , marginBottom:"20px" , fontSize:"25px"}}>  Login and Get Started</h2>
                        

                       
                        <form className="contact-form form-validate4" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" placeholder="Login" required="" autocomplete="off" aria-required="true" onChange={(e)=>{setName(e.target.value)}} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="password"  placeholder="Password" required="" autocomplete="off" aria-required="true" onChange={(e)=>{setPassword(e.target.value)}} />
                            </div>

                            
                          
                            <div className="form-group">
                            <a href="#">Forgot password ?</a>
                            </div>
                            <button className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" onClick={()=> {loginAction()}} >Login</button>
                        </form>
                       
                    </div>
                    </Modal>

                    </div>
                </div>
            </nav>
        </div>
    </div>
    

    </div>
}

export default Header ;