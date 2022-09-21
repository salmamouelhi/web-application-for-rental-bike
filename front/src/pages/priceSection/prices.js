import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import img from "../img/velo1.jpg";
import img2 from "../img/velo2.jpg";
import img3 from "../img/velo33.jpg";
import './prices.css'
import axios from "axios";
import HeaderLogin from "../headerLogin";
import { ProfileButton } from "../../features/profileButton/profile";



function Prices(){

   

    return <div className="cards">

        

        <ProfileButton/>
   

<section className="light">
	<div className="container py-2">
        <div className="filterSection">
        <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px", margin :"20px"}}> Price list</h5>
        <form className="searchBox">
        <input type="search" placeholder="Search..." className="inputSearch"/>
        <button type="submit" className="btnSearch" ><i class="fa fa-search"></i></button>
        </form>

        <div className="dropdownPrice">
        <button className="dropbtnPrice">Choose category</button>
        <div className="dropdown-contentPrice">
            <a href="#"> Vélo électrique</a>
            <a href="#"> Vélo enfants</a>
            <a href="#"> Trotinette</a>
            <a href="#"> Vélo tout terain</a>
            <a href="#">Vélo de ville</a>
            
        </div>
        </div>
        </div>
        
       

		
        <article className="postcard light blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={img} alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="#"  className="priceListTitle">V.T.T.</a></h1>
				<div className="postcard__subtitle small">
				<p className="description">Vélo tout terrain pour celles et ceux qui ont le goût de l'aventure.</p>	
				</div>
                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Tarif</th>
                            <th scope="col">Durée</th>
                            <th scope="col">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                            <th scope="row"></th>
                            <td>2 Heures</td>
                            <td>15 Dt</td>
                         
                            </tr>
                            <tr>
                            <th scope="row"></th>
                            <td>4 Heures</td>
                            <td>35 Dt</td>
                            
                            </tr>
                        </tbody>
                        </table>
				<div class="frame"> <button class="custom-btn-reserver btn-5-reserver"><span><Link to="/Detail" style={{color:"white"}}>Réserver</Link></span></button> </div>
			</div>
		</article>



      


      

        <article className="postcard light blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={img3} alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="#"  className="priceListTitle">Les vélos enfants de 20 et 24 ''</a></h1>
				<div className="postcard__subtitle small">
					
					<p className="description">Cadre alu, 6 vitesses permettront d'agréables balades en famille.</p>	
					
				</div>
                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Tarif</th>
                            <th scope="col">Durée</th>
                            <th scope="col">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                            <th scope="row"></th>
                            <td>2 Heures</td>
                            <td>7 Dt</td>
                         
                            </tr>
                            <tr>
                            <th scope="row"></th>
                            <td>4 Heures</td>
                            <td>12 Dt</td>
                            
                            </tr>
                        </tbody>
                        </table>
				<div class="frame"> <button class="custom-btn-reserver btn-5-reserver"><span><Link to="/Detail" style={{color:"white"}}>Réserver</Link></span></button> </div>
			</div>
		</article>
        <article className="postcard light blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={img2} alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="#"  className="priceListTitle">Le vélo électrique</a></h1>
				<div className="postcard__subtitle small">
					
					<p className="description">Easy, est chic, léger, survolté pour des balades sans effort jusque dans l'Ile de Ré.</p>	
					
				</div>
                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Tarif</th>
                            <th scope="col">Durée</th>
                            <th scope="col">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                            <th scope="row"></th>
                            <td>2 Heures</td>
                            <td>15 Dt</td>
                         
                            </tr>
                            <tr>
                            <th scope="row"></th>
                            <td>4 Heures</td>
                            <td>35 Dt</td>
                            
                            </tr>
                        </tbody>
                        </table>
				<div class="frame"> <button class="custom-btn-reserver btn-5-reserver"><span>Réserver</span></button> </div>
			</div>
		</article>
       
		
	</div>
</section>
    

    </div>

}

export default Prices;