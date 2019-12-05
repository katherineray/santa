import React from "react";
import Navbar from '../Navbar';
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/styles.min.css";
// import "./assets/js/script.min.js";   


function Letters(){
    return(
        <div>
            <body id="page-top" style={{backgroundColor: 'rgb(126,16,16)',opacity: '1'}}>
            <Navbar></Navbar>
    <header className="border rounded-0 border-white shadow-lg d-lg-flex justify-content-lg-center align-items-lg-end" id="letterToSantaHeader" style={{height: '258px',backgroundColor: 'rgb(126,16,16)'}}>
        <h1 className="border rounded-0 shadow-lg d-lg-flex justify-content-lg-center align-items-lg-center" id="letterToSantaHeaderBar" style={{color: 'rgb(255,255,255)',margin: '26px',fontSize: '59px',fontFamily: "'Finger Paint', 'cursive'",height: '204px',width: '710px',backgroundImage: 'url("./assets/img/plankedwood.jpg")',backgroundSize: 'cover',backgroundRepeat: 'round'}}>Letter To Santa<img src="./../public/santapal/SantaPalVector.PNG" style={{width: '263px',margin: '-81px'}}></img></h1>
    </header>
    <div className="container border rounded-0 border-dark shadow d-flex align-items-lg-center" style={{backgroundColor: 'rgb(8,8,8)',height: '679px',backgroundImage: 'url("./assets/img/markus-spiske-zv8MHAI2dTY-unsplash.jpg")',backgroundSize: 'auto',padding: '42px',backgroundRepeat: 'no-repeat'}}>
        <div className="d-lg-flex" style={{height: '157px',padding: '24px'}}></div>
        <div className="row">
            <div className="col d-lg-flex justify-content-lg-center">
               
                <form className="d-lg-flex justify-content-lg-center" style={{margin: '-119px',width: '1185px'}}>
                    <div className="form-row align-content-center p-0 m-0" style={{backgroundColor: 'rgb(115,0,0)',height: '593px',width: '888px'}}>
                        <div className="col-lg-6 col-xl-6 p-0 m-0 p-3" id="formPersonal" style={{backgroundColor: 'rgb(122,0,0)'}}>
                            <h2 className="text-center d-flex d-lg-flex justify-content-lg-center align-items-lg-end p-0 m-0 pb-3" style={{margin: '91px',color: 'rgb(255,255,255)',fontFamily: "'Finger Paint', 'cursive'"}}>ABOUT YOU</h2>
                            <div className="form-group"><input className="border rounded-0 border-white form-control" type="text" id="nameInput" placeholder="First Name" style={{backgroundColor: 'rgb(12,62,29)',fontFamily: "'Finger Paint', 'cursive'",color: 'rgb(254,215,11)',name:"First Name", value:"First Name"}}></input></div>
                            <div className="form-group"><input className="border rounded-0 border-white form-control" type="text" id="usernameInput" placeholder="UserName" name="UserName" style={{fontFamily: "'Finger Paint', 'cursive'",backgroundColor: 'rgb(12,62,29)'}}></input></div>
                        <div className="form-group"><input className="border rounded-0 form-control" type="email" id="emailInput" placeholder="email" style={{fontFamily: "'Finger Paint', 'cursive'",backgroundColor: 'rgb(12,62,29)',backgroundColor: 'rgb(255,255,255)',fontFamily: "'Finger Paint', 'cursive'",
                                name:"First Name"}}></input></div>
                        <div className="form-group"><input className="border rounded-0 form-control d-lg-flex flex-fill" type="tel" id="ageInput" placeholder="Age" style={{fontFamily: "'Finger Paint', 'cursive'",backgroundColor: 'rgb(12,62,29)',backgroundColor: 'rgb(255,255,255)',fontFamily: "'Finger Paint', 'cursive'",
                                name:"Age"}}></input></div>
                        <select className="border rounded-0 custom-select pb-2" required="" style={{backgroundColor: 'rgb(12,62,29)',color: 'rgb(254,215,11)',fontFamily: "'Finger Paint', 'cursive'"}}><option value="11" selected="">Gender</option><option value="">Male</option><option value="">Female</option></select></div>
                    <div className="col-lg-6 col-xl-6 p-0 m-0 p-3" id="formConocimientos" style={{fontFamily: "'Finger Paint', 'cursive'"}}>
                        <h2 className="d-lg-flex justify-content-lg-center align-items-lg-center p-0 m-0 pb-3" style={{margin: '-11px',color: 'rgb(255,255,255)',fontFamily: "'Finger Paint', 'cursive'"}}>FINISH THE SENTENCE</h2>
                        <div className="form-group"><select className="border rounded-0 custom-select custom-select-lg pb-2" required="" style={{fontFamily: "'Finger Paint', 'cursive'",backgroundColor: 'rgb(12,62,29)',color: 'rgb(254,215,11)'}}><option value="11" selected="">Describe Your Behavior This Year</option><option value="">Angelic</option><option value="12">Nice</option><option value="13">I Tried My Best</option><option value="14">Naughty</option><option value="">Bah Humbug</option></select></div>
                        <div
                            className="form-group"><select className="border rounded-0 custom-select custom-select-lg pb-2" required="" style={{fontFamily: "'Finger Paint', 'cursive'",backgroundColor: 'rgb(12,62,29)',color: 'rgb(254,215,11)'}}><option value="11" selected="">My Family...</option><option value="12">Always Has A Big Gathering with lots of food and toys!</option><option value="13">Doesn't have much but we are happy spending time together.</option><option value="14">Goes to the movies or shopping at the mall for Christmas.</option><option value="15">Goes Christmas Carrolling.</option><option value="16">Fights A lot and it Makes Me Sad</option></select></div>
            <div
                className="form-group"><select className="border rounded-0 custom-select custom-select-lg pb-2" required="" name="thisYearLetterLine" style={{backgroundColor: 'rgb(12,62,29)',color: 'rgb(254,215,11)'}}><option value="11" selected="">This Year I Hope You Bring Me...</option><option value="12">Elsa's Ice Palace by Little People</option><option value="13">Blume Dolls</option><option value="14">GO Glam Nail Stamper</option><option value="">Carpool Karaoke: The Mic</option><option value="">Bath Bombs Gift Set</option><option value="">Instax Mini 9 Instant Camera</option><option value="">Zero Gravity Laser Race Car</option><option value="">Nerf x Fortnite</option><option value="">LEGO Hidden Side Graveyard Mystery</option><option value="">Ultimate Walking Buzz Lightyear</option><option value="">Ninetendo Switch</option><option value="">The Mind Card Game</option></select></div>
        <div
            className="form-group"><select className="border rounded-0 custom-select custom-select-lg pb-2" required="" style={{backgroundColor: 'rgb(12,62,29)',color: 'rgb(254,215,11)'}}><option value="11" selected="">Next Year I Am Going To...</option><option value="12">Try Being Nicer to Others</option><option value="13">Read Lots of New Books</option><option value="14">Join a New Sport or Activity</option><option value=""></option></select></div>
    </div>
    <div className="col p-0 m-0 p-3"><button className="btn btn-primary btn-block border rounded-0" data-bs-hover-animate="pulse" id="sendLetterBtn" placeholder="Age" name="Age" style={{backgroundColor: 'rgb(12,62,29)',backgroundImage: 'url("./assets/img/bg-masthead.jpg")',height: '47px',fontFamily: "'Finger Paint', 'cursive'",color: 'rgb(255,255,255)'}}>SEND LETTER TO SANTA</button></div>
    </div>
    </form>
    
    </div>
    </div>
    </div>
    <header className="border rounded-0 border-white shadow-lg d-lg-flex justify-content-lg-center align-items-xl-end" id="lettersFromHeader" style={{height: '258px',backgroundColor: 'rgb(126,16,16)'}}>
        <h1 className="border rounded-0 shadow-lg d-lg-flex justify-content-lg-center align-items-lg-center" id="letterFromSantaHeaderBar" style={{color: 'rgb(255,255,255)',margin: '26px',fontSize: '59px',fontFamily: "'Finger Paint', 'cursive'",height: '204px',width: '761px',backgroundImage: 'url("./assets/img/plankedwood.jpg")',backgroundSize: 'cover',backgroundRepeat: 'round'}}>Letters From Santa<img src="./assets/img/SantaPalVector.PNG" style={{width: '263px',margin: '-81px'}}></img></h1>
    </header>
    <div className="container border rounded-0 border-dark shadow d-flex align-items-lg-center" style={{backgroundColor: 'rgb(45,13,247)',height: '622px',backgroundImage: 'url("./assets/img/kelly-sikkema-4JxV3Gs42Ks-unsplash2.jpg")',backgroundSize: 'cover',padding: '42px'}}></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <script src="/assets/js/script.min.js"></script>
</body>
       
        </div>
    );
};

export default Letters;