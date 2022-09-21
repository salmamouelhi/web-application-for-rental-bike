import React from "react";
import Header from "../header";
import './profile.css' ;
import HeaderLogin from "../headerLogin";
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'



const customStylesEdit = {
  
    overlay: {
        position: 'fixed',
    },

    content : {
      top                   : '60%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background: '#f5d3ce'
      
      
     

    }
   

  };

function Profile(){

    var subtitle;
  
    const [Sign ,setSignModal] = React.useState(false);
   
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

    
    const profileName = useSelector((state) => state.profileName.value);
  

    
    return <div>

         <div className="container">
<div className="row gutters">
	<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div className="cardP">
			<div className="card-body">
				<div className="account-settings">
					<div className="user-profile">
						<div className="user-avatar">
							
							<img src="assets/img/avatar.png" alt="Maxwell Admin"/>
						</div>
						<h5 className="user-name">{profileName}</h5>
						
					</div>
				
				</div>
			</div>
		</div>
	</div>
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="cardP">
			<div className="card-body">
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px" , marginBottom:"40px"}}> Personal details</h5>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="fullName" className="labelP w-100">Full Name</label>
							<input type="text" className="form-control" id="fullName" placeholder="Salma mouelhi"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="birthdate" className="labelP w-100">Birth Date</label>
							<input type="text" className="form-control" id="birthdate" placeholder="22/03/2022"  onfocus="(this.type='date')"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="phone" className="labelP w-100">Phone</label>
							<input type="text" className="form-control" id="phone" placeholder="22 791 931"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="eMail" className="labelP w-100">Email</label>
							<input type="email" className="form-control" id="eMail" placeholder="mouelhisalma049@gmail.com"/>
						</div>
					</div>
                  
					
				</div>
				<div className="row gutters">
					
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="Login" className="labelP w-100">Login</label>
							<input type="text" className="form-control" id="Login" placeholder="salma2705"/>
						</div>
					</div>
                  
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="password" className="labelP w-100">Password</label>
							<input type="password" className="form-control" id="password" placeholder="****" />
						</div>
					</div>
					
				</div>
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							
							<button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
      </div>
}


export default Profile;