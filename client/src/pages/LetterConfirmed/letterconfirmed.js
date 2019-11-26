import React from "react";
import LetterConfirmed from "LetterConfirmed"
// import "./style.css";


function LetterConfirmed() {
  return ( 
    <header class="d-flex masthead" id="letterConfirmedHeader" style={{backgroundColor: (160,0,0),margin: '0px',opacity: '1'}}>
        <div class="container my-auto text-center">
            <h1 id="deliveryConfirmed" class="mb-1" style={{color: rgb(255,255,255);opacity: 1;filter: contrast(68%) grayscale(0%) hue-rotate(0deg);">Your letter has been delivered.</h1>
            <h3 class="text-dark mb-5"><em class="text-center" id="confirmNotifcation" style="color: #81930e;">You will receive a notification if you get a new reply.</em></h3><button class="btn btn-outline-primary btn-xl js-scroll-trigger" id="backToDashButton" type="button" style="background-color: rgb(12,62,29);opacity: 1;filter: grayscale(0%);color: rgb(129,147,14);">Return to Dashboard</button>
            <div
                class="overlay"></div>
        </div>
    </header>
    );
}

export default LetterConfirmed;