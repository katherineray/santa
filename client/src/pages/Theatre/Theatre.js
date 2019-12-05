import React from "react";
import Navbar from "../Navbar";
// import "../Theatre/assets/bootstrap/css/bootstrap.min.css";
// import "../Theatre/assets/css/styles.min.css";
import "./../Theatre/assets/img/Movie-Theater.png";
import Countdown from "../Countdown";

function Theatre(){
    return(
<div style={{backgroundColor: 'rgb(38,4,4)'}}>
<Countdown></Countdown>
<Navbar></Navbar>

<section className="portfolio-block project" style={{backgroundColor: 'rgb(38,4,4)',height: '1191px'}}>
        <h1 className="d-lg-flex justify-content-lg-center align-items-lg-center" style={{color: 'rgb(255,255,255)',fontFamily: "Finger Paint', 'cursive",height: '65px'}}>SantaPal Theatre</h1>
        <div className="container d-flex d-lg-flex flex-column-reverse justify-content-lg-center align-items-lg-end" style={{backgroundSize: 'cover',height: '530px',backgroundImage: 'url("../assets/img/Movie-Theater.png")',width: '1044px'}}>
            <div className="border rounded-0 d-lg-flex mx-auto image" style={{backgroundColor: 'rgb(0,0,0)',opacity: '0.81',height: '367px',width: '659px',filter: 'contrast(200%) huerotate(0deg) saturate(200%)'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLlYKDqBVDxX2fN3gB_hSuRx4BJzgBj0Q6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div></section>
        
        </div>
        
    )
}

export default Theatre;