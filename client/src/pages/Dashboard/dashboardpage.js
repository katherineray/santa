import React from "react";



import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/css/dashboard.css';
import './assets/css/Bold-BS4-Footer-Big-Logo.css';
import './assets/css/Countdown.css';
import './assets/css/Navigation-Clean.css';


// function Navbar(){
//   (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }

function Dashboard(){
  return(
    <div><div id="wrapper" style={{ backgroundColor: 'rgb(160, 0, 0)' }}>
    <div
      className="d-flex flex-column"
      id="content-wrapper"
      style={{ backgroundColor: 'rgb(160, 0, 0)' }}
    >
      <div id="content" style={{ backgroundColor: 'rgb(160, 0, 0)' }}>
        <nav
          className="navbar navbarLight navbar-expand bg-white shadow mb-4 topbar static-top"
          id="navbar"
          style={{ backgroundColor: 'rgb(160, 0, 0)', backgroundImage: 'url("assets/img/plankedwood.jpg")', height: '69px' }}
        >
          <div className="container-fluid">
            <button
              className="btn btn-link d-md-none rounded-circle mr-3"
              id="sidebarToggleTop"
              type="button"
              style={{ backgroundColor: 'rgb(160, 0, 0)'}}
            >
              <i className="fas fa-bars"></i>
            </button>
            <form
              className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
              style={{ backgroundColor: 'rgb(160, 0, 0)' }}
            >
              <div className="input-group" style={{ backgroundColor: 'rgb(160, 0, 0)' }}>
                <input
                  className="bg-light form-control"
                  type="text"
                  href="index.html"
                  style={{ backgroundColor: 'rgb(160, 0, 0)' }}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary py-0"
                    type="button"
                    style={{ backgroundColor: 'rgb(160, 0, 0)' }}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <ul
              className="nav navbar-nav flex-nowrap ml-auto"
              style={{ backgroundColor: 'rgb(160, 0, 0)' }}
            >
              <li className="nav-item dropdown d-sm-none no-arrow">
                <a
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  <i className="fas fa-search"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                  role="menu"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto navbar-search w-100">
                    <div className="input-group">
                      <input
                        className="bg-light form-control border-0 small"
                        type="text"
                        placeholder="Search within Santa's List ..."
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary py-0"
                          type="button"
                        >
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              <li
                className="nav-item dropdown no-arrow mx-1"
                role="presentation"
              ></li>
              <li
                className="nav-item dropdown no-arrow mx-1"
                role="presentation"
              >
                <div className="nav-item dropdown no-arrow">
                  <a
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                    style={{ backgroundColor: 'rgb(160, 0, 0)' }}
                  >
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger badge-counter">
                      7
                  </span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                    role="menu"
                  >
                    <h6 className="dropdown-header">New Notifications</h6>
                    <a
                      className="d-flex align-items-center dropdown-item"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="assets/img/avatars/avatar4.jpeg"
                        />
                        <div className="bg-success status-indicator"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          <span>
                            
                        </span>
                        </div>
                        <p className="small text-gray-500 mb-0">
                          
                      </p>
                      </div>
                    </a>
                    <a
                      className="d-flex align-items-center dropdown-item"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="assets/img/santaicon.png"
                        />
                        <div className="status-indicator"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          <span>
                          New Letter From Santa! 
                        </span>
                        </div>
                        <p className="small text-gray-500 mb-0">
                          
                      </p>
                      </div>
                    </a>
                    <a
                      className="d-flex align-items-center dropdown-item"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="assets/img/avatars/avatar3.jpeg"
                        />
                        <div className="bg-warning status-indicator"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          <span>
                            
                        </span>
                        </div>
                        <p className="small text-gray-500 mb-0">
                         
                      </p>
                      </div>
                    </a>
                    <a
                      className="d-flex align-items-center dropdown-item"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="assets/img/avatars/avatar5.jpeg"
                        />
                        <div className="bg-success status-indicator"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          <span>
                            Am I a good boy? The reason I ask is because
                            someone told me that people say this to all dogs,
                            even if they aren't good...
                        </span>
                        </div>
                        <p className="small text-gray-500 mb-0">
                          Chicken the Dog · 2w
                      </p>
                      </div>
                    </a>
                    <a
                      className="text-center dropdown-item small text-gray-500"
                      href="#"
                    >
                      Show All Notifications
                  </a>
                  </div>
                </div>
                <div
                  className="shadow dropdown-list dropdown-menu dropdown-menu-right"
                  aria-labelledby="alertsDropdown"
                ></div>
              </li>
              <div className="d-none d-sm-block topbar-divider"></div>
              <li className="nav-item dropdown no-arrow" role="presentation">
                <div className="nav-item dropdown no-arrow">
                  <a
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                    style={{ backgroundColor: 'rgb(160, 0, 0)' }}
                  >
                    <span className="d-none d-lg-inline mr-2 text-gray-600 small"></span>
                  </a>
                  <div
                    className="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                    role="menu"
                  >
                    <a className="dropdown-item" role="presentation" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      &nbsp;My Dashboard
                  </a>
                    <a className="dropdown-item" role="presentation" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      &nbsp;My Letters
                  </a>
                    <a className="dropdown-item" role="presentation" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      &nbsp;Santa's List
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      &nbsp;SantaPal Theatre
                  </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" role="presentation" href="#">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      &nbsp;Logout
                  </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
         <h1
          className="d-md-flex justify-content-md-center"
          style={{ color: 'white', fontFamily: "'Finger Paint', 'cursive'", height: '101px', fontSize: '42px' }}
        >
          SantaPal DashBoard
      </h1>
        <div
          className="container-fluid text-center d-inline"
          style={{ backgroundColor: 'rgb(160, 0, 0)', width: '783px' }}
        >
          <div className="d-inline-flex d-sm-flex justify-content-between align-items-center justify-content-md-center align-items-md-end mb-4"></div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mb-4">
              <div
                className="card shadow border-left-success py-2"
                style={{ backgroundImage: 'url("assets/img/plankedwood.jpg")', backgroundSize: 'cover', backgroundColor: 'transparent', padding: '8px', height: '140px' }}
              >
                <div className="cardBody" style={{ height: '105px' }}>
                  <h1
                    className="d-flex d-md-flex justify-content-md-center align-items-md-end"
                    style={{ height: '48px', color: 'rgb(160, 0, 0)', fontSize: '23px', fontFamily: "'Finger Paint', 'cursive'" }}
                  >
                    LETTERS FROM SANTA
                </h1>
                </div>
                <div style={{ height: '0px', margin: '0px', padding: '0px', }}></div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-4">
              <div
                className="card shadow border-left-success py-2"
                style={{ backgroundImage: 'url("assets/img/plankedwood.jpg")', backgroundSize: 'cover', backgroundColor: 'transparent', padding: '8px', height: '140px' }}
              >
                <div className="card-body" style={{ height: '105px' }}>
                  <h1 className="d-flex d-md-flex justify-content-md-center align-items-md-end"
                    style={{ height: '48px', color: 'rgb(13, 0, 163)', fontSize: '23px', fontFamily: "'Finger Paint', 'cursive'" }}>
                    LETTERS TO SANTA
                </h1>
                </div>
              </div>
            </div>
           <div className="col" style={{ height: '195px' }}>
              <div className="card">
                <div
                  className="card-body"
                  style={{ height: '140px', backgroundImage: 'url("assets/img/plankedwood.jpg")', backgroundSize: 'cover' }}
                >
                  <h1
                    className="d-flex d-md-flex justify-content-md-center align-items-md-end"
                    style={{ height: '48px', color: 'rgb(0, 48, 19)', fontSize: '23px', fontFamily: "'Finger Paint', 'cursive'" }}
                  >
                    SANTA'S LIST
                </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div
                  className="card-body"
                  style={{ height: '140px', backgroundImage: 'url("assets/img/plankedwood.jpg")', backgroundSize: 'cover' }}
                >
                  <h1
                    className="d-flex d-md-flex justify-content-md-center align-items-md-end"
                    style={{ height: '48px', color: 'rgb(249, 239, 230)', fontSize: '23px', fontFamily: "'Finger Paint', 'cursive'" }}
                  >
                    SANTAPAL THEATRE
                </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 mb-4"
              style={{ backgroundColor: 'rgb(12, 62, 29)', height: '393px' }}
            >
              <div className="card shadow mb-4">
                <div
                  className="card-header py-3"
                  style={{ backgroundColor: 'rgb(12, 62, 29)' }}
                >
                  <h6 className="text-primary font-weight-bold m-0">
                    Santa's List Suggestions For You
                </h6>
                </div>
                <div className="card-body" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                  <h4 className="small font-weight-bold">
                    Gift1<span className="float-right">100%</span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className="progress-bar bg-success"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '100%' }}
                    >
                      <span className="sr-only">100%</span>
                    </div>
                  </div>
                  <h4 className="small font-weight-bold">
                    Gift2<span className="float-right">80%</span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className="progress-bar bg-info"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '80%' }}
                    >
                      <span className="sr-only">80%</span>
                    </div>
                  </div>
                  <h4 className="small font-weight-bold">
                    Gift3<span className="float-right">60%</span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className="progress-bar bg-primary"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '60%' }}
                    >
                      <span className="sr-only">60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col"
              style={{ backgroundColor: 'rgb(12,62,29)', height: '393px' }}
            >
              <div
                className="card shadow mb-4"
                style={{ backgroundColor: 'rgb(12,62,29)' }}
              >
                <div
                  className="card-header py-3"
                  style={{ backgroundColor: 'rgb(12,62,29)' }}
                >
                  <h6
                    className="text-primary font-weight-bold m-0"
                    style={{ fontFamily: "'Finger Paint', 'cursive'", color: 'rgb(254, 215, 11)' }}
                  >
                    Wish List
                </h6>
                </div>
                <ul
                  className="list-group list-group-flush"
                  style={{ backgroundColor: 'rgb(12,62,29)' }}
                >
                  <li className="list-group-item">
                    <div className="row align-items-center no-gutters">
                      <div className="col mr-2">
                        <h6 className="mb-0">
                          <strong>wantedItem1</strong>
                        </h6>
                      </div>
                      <div className="col-auto">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            type="checkbox"
                            id="formCheck-1"
                          />
                          <label
                            className="custom-control-label"
                            for="formCheck-1"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row align-items-center no-gutters">
                      <div className="col mr-2">
                        <h6 className="mb-0">
                          <strong>wantedItem2</strong>
                        </h6>
                      </div>
                      <div className="col-auto">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            type="checkbox"
                            id="formCheck-2"
                          />
                          <label
                            className="custom-control-label"
                            for="formCheck-2"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                  >
                    <div className="row align-items-center no-gutters">
                      <div
                        className="col mr-2"
                        style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                      >
                        <h6 className="mb-0">
                          <strong>wantedItem3</strong>
                        </h6>
                      </div>
                      <div className="col-auto">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            type="checkbox"
                            id="formCheck-3"
                          />
                          <label
                            className="custom-control-label"
                            for="formCheck-3"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
      </div> 
      <section
        className="countdown-section"
        style={{ backgroundImage: 'url("assets/img/joseph-keil-V9j3e5Dtvso-unsplash.jpg")', backgroundPosition: 'left', backgroundSize: 'cover', filter: "'contrast','102%'" }}
      >
        <h1 style={{ backgroundColor: 'rgb(160, 0, 0)', fontFamily: "'Finger Paint', 'cursive'" }}>
          Santa Arrives In
      </h1>
        <div className="container">
          <div
            className="row big-countdown"
            data-countdown="12/25/2019 00:00:00"
          >
            <div className="col-6 col-sm-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
              <span
                className="number-days"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                00
            </span>
              <span
                className="txt-countdown"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                days{" "}
              </span>
            </div>
            <div
              className="col-6 col-sm-3"
              style={{ opacity: '1', backgroundColor: 'rgb(0, 0, 0)' }}
            >
              <span
                className="number-hours"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                00
            </span>
              <span
                className="txt-countdown"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                hours{" "}
              </span>
            </div>
            <div className="col-6 col-sm-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
              <span
                className="number-minutes"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                00
            </span>
              <span
                className="txt-countdown"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                minutes{" "}
              </span>
            </div>
            <div className="col-6 col-sm-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
              <span
                className="number-seconds"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                00
            </span>
              <span
                className="txt-countdown"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                seconds{" "}
              </span>
            </div>
            <div className="col countdown-header">

            </div>
          </div>
        </div>
      </section>
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
  </div></div>
  )
}

      
export default Dashboard;
