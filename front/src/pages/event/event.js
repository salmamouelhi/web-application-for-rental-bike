import React from "react";
import Header from "../header";
import './event.css';




function Event(){

    return <div>

        <Header/>
        <div className="container">
  <div class="text-center title">
    <h5 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}> Discover VeloLik's Events</h5>
    
  </div>
  <div class="container">
    <div class="card-columns">
      <div class="card">
        <a href="#">
        <img class="card-img-top" src="assets/img/ev1.png" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Rent a premium road bike for Shades of Speed</h5>
          <p class="card-text">
          The Shades of Speed will take place in Rosenheim and with five different distances. The routes lead participants through the beautiful Chiemgau region in Upper Bavaria, past the "Bavarian Sea", Lake Chiemsee, as well as over breathtaking mountain passes in the Bavarian foothills of the Alps
          </p>
          <p class="card-text"><small class="text-muted"><i class="fas fa-eye"></i>950<i class="fas fa-calendar-alt"></i>Jan 20, 2018</small><span><button style={{backgroundColor : "#E73725" , borderRadius:"30px" , color:"white" , border:"none" , padding:"4px" , marginLeft:"10px"}}> Participate</button></span> </p>
      </div>
        </a>
      </div>
      <div class="card">
        <a href="#">
        <img class="card-img-top" src="assets/img/ev2.png" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Rent a high-end road bike for the HAMBURG WASSER World Triathlon!</h5>
          <p class="card-text"> Logistics, logistics, logistics. Unless you’re already living in Germany, carrying your bike to Hamburg will be quite the logistical challenge. So why don’t you simply rent a bike? Save yourself time, trouble, and money by simply renting a bike. Group bookings available here!</p>
          <p class="card-text"><small class="text-muted"><i class="fas fa-eye"></i>1500<i class="fas fa-calendar-alt"></i>Jan 20, 2018</small><span><button style={{backgroundColor : "#E73725" , borderRadius:"30px" , color:"white" , border:"none" , padding:"4px" , marginLeft:"10px"}}> Participate</button></span></p>
        </div>
        </a>
      </div>
      <div class="card">
        <a href="#">
        <img class="card-img-top" src="assets/img/ev3.png" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Rent a vintage road bike for L’Eroica Montalcino</h5>
          <p class="card-text">L'Eroica - Montalcino: where breathtaking landscapes and Tuscan culture meet. Celebrate your love for cycling while riding a vintage bike through Tuscany!</p>
          <p class="card-text"><small class="text-muted"><i class="fas fa-eye"></i>1000<i class="fas fa-calendar-alt"></i>Jan 20, 2018</small><span><button style={{backgroundColor : "#E73725" , borderRadius:"30px" , color:"white" , border:"none" , padding:"4px" , marginLeft:"10px"}}> Participate</button></span></p>
        </div>
        </a>
      </div>
      <div class="card">
        <a href="#">
        <img class="card-img-top" src="assets/img/ev4.jpg" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Test ride the newest bikes with listnride!</h5>
          <p class="card-text">With Test and Ride, we bring you a new and safe way to test-ride bicycles in 2021 We challenged ourselves and have put together the latest models of great and innovative bike brands for you to test-ride! Join Test and Ride in Berlin, Munich, Düsseldorf and Hamburg: socially distanced as well as decentralised</p>
          <p class="card-text"><small class="text-muted"><i class="fas fa-eye"></i>678<i class="fas fa-calendar-alt"></i>Jan 20, 2018</small><span><button style={{backgroundColor : "#E73725" , borderRadius:"30px" , color:"white" , border:"none" , padding:"4px" , marginLeft:"10px"}}> Participate</button></span></p>
        </div>
        </a>
      </div>
      <div class="card">
        <a href="#">
        <img class="card-img-top" src="assets/img/ev5.png" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Rent a road bike for the Granfondo Via del Sale!</h5>
          <p class="card-text">The Granfondo Via del Sale is a cycling event for all levels in Cervia, Ravenna.
Four routes for each level.
Four climbs.
A programme of events for everyone</p>
          <p class="card-text"><small class="text-muted"><i class="fas fa-eye"></i>355<i class="fas fa-calendar-alt"></i>Jan 20, 2018</small><span><button style={{backgroundColor : "#E73725" , borderRadius:"30px" , color:"white" , border:"none" , padding:"4px" , marginLeft:"10px"}}> Participate</button></span></p>
        </div>
        </a>
      </div>
      <div class="card">
        <a href="#">
        <img class="card-img-top" src="assets/img/ev6.jpg" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Rent a road bike for the Vätternrundan.</h5>
          <p class="card-text">The Vätternrundan is a 315km sportive around the Vättern lake in Sweden, starting and finishing in the town of Motala. During the two weekends, when the sunlight is at its longest, approximately 20.000 participants from all over the world take part in this fun and challenging event.</p>
          <p class="card-text"><small class="text-muted"><i class="fas fa-eye"></i>1000<i class="fas fa-calendar-alt"></i>Jan 20, 2018</small><span><button style={{backgroundColor : "#E73725" , borderRadius:"30px" , color:"white" , border:"none" , padding:"4px" , marginLeft:"10px"}}> Participate</button></span></p>
        </div>
        </a>
      </div>
    </div>
  </div>
</div>
    </div>
}


export default Event;