import React from "react";


function Footer(){
    return(
        <div>
<footer class="d-flex d-lg-flex flex-wrap justify-content-lg-center" id="myFooter" style={{backgroundImage: 'url(assets/img/plankedwood.jpg)',backgroundSize: 'cover'}}>
        <div class="container-fluid flex-fill justify-content-center">
            <div class="row d-flex d-lg-flex mx-auto justify-content-lg-center text-center" style={{width: '1148px'}}>
                <div class="col-12 col-sm-6 col-md-3" style={{backgroundColor: 'rgb(12, 62, 29)' }}>
                    <h1 class="logo" style={{marginTop:'30px'}}><a href="#">&nbsp;SantaPal</a></h1>
                </div>
            <div
              className="col-12 col-sm-6 col-md-2"
              style={{backgroundColor: 'rgb(12, 62, 29)' }}
            >
              <h5>About Us</h5>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li></li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </div>
            <div
              className="col-sm-6 col-md-2"
              style={{ backgroundColor: 'rgb(12, 62, 29)' }}
            >
              <h5>Support</h5>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">
                    Help Desk
                  <br />
                  </a>
                </li>
                <li></li>
                <li>
                  <a href="#">T.O.S.</a>
                </li>
              </ul>
            </div>
            <div
              className="col-md-3 social-networks"
              style={{ backgroundColor: 'rgb(12, 62, 29)' }}
            >
              <div></div>
              <a className="facebook" href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="twitter" href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <button
                className="btn btn-primary"
                style={{ marginTop: '20px', backgroundColor: 'rgb(160, 0, 0)' }}
                type="button"
              >
                Contact us
            </button>
            </div>
          </div>
          <div
            className="row footer-copyright"
            style={{ backgroundColor: 'rgb(12, 62, 29)' }}
          >
            <div className="col">
              <p>
                © 2019 Copyright SantaPal ~ Designed By&nbsp;
              <a href="#">MateosDev</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

        </div>
    )
}
export default Footer