import React, {useState} from "react";


// function LetterForm(props){
//     const [input, setForm] = useState({
//         firstName: ''
//         userName: ''
//     })

//     function handleChange(event){
//         event.target.value
//     }




//     return(
//         <div>
//             <form class="d-lg-flex justify-content-lg-center" style="margin: -119px;width: 1185px;">
//                 <input
//                     name='firstName'
//                     onChange={handleChange}
//                     value={input.firstName}
//                     placeholder
//                  />
//                     <div class="form-row align-content-center p-0 m-0" style="background-color: rgba(115,0,0,0.85);height: 593px;width: 888px;">
//                         <div class="col-lg-6 col-xl-6 p-0 m-0 p-3" id="formPersonal" style="background-color: rgba(122,0,0,0.54);">
//                             <h2 class="text-center d-flex d-lg-flex justify-content-lg-center align-items-lg-end p-0 m-0 pb-3" style="margin: 91px;color: #ffffff;font-family: 'Finger Paint', cursive;">ABOUT YOU</h2>
//                             <div class="form-group"><input class="border rounded-0 border-white form-control" type="text" id="nameInput" placeholder="First Name" style="background-color: #0c3e1d;font-family: 'Finger Paint', cursive;color: #fed70b;" name="First Name" value="First Name"></div>
//                             <div
//                                 class="form-group"><input class="border rounded-0 border-white form-control" type="text" id="usernameInput" placeholder="UserName" name="UserName" style="font-family: 'Finger Paint', cursive;background-color: #0c3e1d;"></div>
//                         <div class="form-group"><input class="border rounded-0 form-control" type="email" id="emailInput" placeholder="email" style="font-family: 'Finger Paint', cursive;background-color: #0c3e1d;/*background-color: rgb(255,255,255);*/font-family: 'Finger Paint', cursive;"
//                                 name="First Name"></div>
//                         <div class="form-group">
//                             <!-- Start: Age --><input class="border rounded-0 form-control d-lg-flex flex-fill" type="tel" id="ageInput" placeholder="Age" style="font-family: 'Finger Paint', cursive;background-color: #0c3e1d;/*background-color: rgb(255,255,255);*/font-family: 'Finger Paint', cursive;"
//                                 name="Age">
//                             <!-- End: Age -->
//                         </div><select class="border rounded-0 custom-select pb-2" required="" style="background-color: #0c3e1d;color: #fed70b;font-family: 'Finger Paint', cursive;"><option value="11" selected="">Gender</option><option value="">Male</option><option value="">Female</option></select></div>
//                     <div
//                         class="col-lg-6 col-xl-6 p-0 m-0 p-3" id="formConocimientos" style="font-family: 'Finger Paint', cursive;">
//                         <h2 class="d-lg-flex justify-content-lg-center align-items-lg-center p-0 m-0 pb-3" style="margin: -11px;color: #ffffff;font-family: 'Finger Paint', cursive;">FINISH THE SENTENCE</h2>
//                         <div class="form-group"><select class="border rounded-0 custom-select custom-select-lg pb-2" required="" style="font-family: 'Finger Paint', cursive;background-color: #0c3e1d;color: #fed70b;"><option value="11" selected="">Describe Your Behavior This Year</option><option value="">Angelic</option><option value="12">Nice</option><option value="13">I Tried My Best</option><option value="14">Naughty</option><option value="">Bah Humbug</option></select></div>
//                         <div
//                             class="form-group"><select class="border rounded-0 custom-select custom-select-lg pb-2" required="" style="font-family: 'Finger Paint', cursive;background-color: #0c3e1d;color: #fed70b;"><option value="11" selected="">My Family...</option><option value="12">Always Has A Big Gathering with lots of food and toys!</option><option value="13">Doesn't have much but we are happy spending time together.</option><option value="14">Goes to the movies or shopping at the mall for Christmas.</option><option value="15">Goes Christmas Carrolling.</option><option value="16">Fights A lot and it Makes Me Sad</option></select></div>
//             <div
//                 class="form-group"><select class="border rounded-0 custom-select custom-select-lg pb-2" required="" name="thisYearLetterLine" style="background-color: #0c3e1d;color: #fed70b;"><option value="11" selected="">This Year I Hope You Bring Me...</option><option value="12">Elsa's Ice Palace by Little People</option><option value="13">Blume Dolls</option><option value="14">GO Glam Nail Stamper</option><option value="">Carpool Karaoke: The Mic</option><option value="">Bath Bombs Gift Set</option><option value="">Instax Mini 9 Instant Camera</option><option value="">Zero Gravity Laser Race Car</option><option value="">Nerf x Fortnite</option><option value="">LEGO Hidden Side Graveyard Mystery</option><option value="">Ultimate Walking Buzz Lightyear</option><option value="">Ninetendo Switch</option><option value="">The Mind Card Game</option></select></div>
//         <div
//             class="form-group"><select class="border rounded-0 custom-select custom-select-lg pb-2" required="" style="background-color: #0c3e1d;color: #fed70b;"><option value="11" selected="">Next Year I Am Going To...</option><option value="12">Try Being Nicer to Others</option><option value="13">Read Lots of New Books</option><option value="14">Join a New Sport or Activity</option><option value=""></option></select></div>
//     </div>
//     <div class="col p-0 m-0 p-3"><button class="btn btn-primary btn-block border rounded-0" data-bs-hover-animate="pulse" id="sendLetterBtn" placeholder="Age" name="Age" style="background-color: rgb(12,62,29);background-image: url(./assets/img/bg-masthead.jpg);height: 47px;font-family: 'Finger Paint', cursive;color: #ffffff;">SEND LETTER TO SANTA</button></div>
//     </div>
//     </form>

//         </div>
//     )
// }