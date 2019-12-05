import React, { Component } from "react";
import Countdown from "../Countdown";
import Navbar from "../Navbar.js";
import Letters from "../LettersPage/Letters";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/dashboard.css";
import "./assets/css/Bold-BS4-Footer-Big-Logo.css";
import "./assets/css/Countdown.css";
import "./assets/css/Navigation-Clean.css";
import Navbar from "../Navbar.js";
import ClickList from "../../components/ClickList";

// function Navbar(){
//   (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }
// changed function to class for logout

class Dashboard extends Component {
  state = {
    santasList: [
      { name: "test1" },
      { name: "test2" },
      { name: "test3" },
      { name: "test4" },
      { name: "test5" },
      { name: "test6" },
      { name: "test7" },
      { name: "test8" },
      { name: "test9" }
    ],
    wishList: []
  };

  toyClicked_WishList = (name, i) => {
    var test = this.state.wishList.splice(i, 1);
    console.log(test);
    this.state.santasList.push({ name: name });
    console.log(name);
    console.log("wishList!");

    this.setState(this.state.wishList);

    this.setState(this.state.santasList);
  };

  toyClicked_SantaList = (name, i) => {
    var test = this.state.santasList.splice(i, 1);
    console.log(test);
    this.state.wishList.push({ name: name });

    console.log(name);
    console.log("santaList!");

    this.setState(this.state.wishList);

    this.setState(this.state.santasList);
  };

  render() {
    return (
      <div>
        <div id="wrapper" style={{ backgroundColor: "rgb(160, 0, 0)" }}>
          <div
            className="d-flex flex-column"
            id="content-wrapper"
            style={{ backgroundColor: "rgb(160, 0, 0)" }}
          >
            <div id="content" style={{ backgroundColor: "rgb(160, 0, 0)" }}>
              <Navbar></Navbar>

              <h1
                className="d-md-flex justify-content-md-center"
                style={{
                  color: "white",
                  fontFamily: "'Finger Paint', 'cursive'",
                  height: "101px",
                  fontSize: "42px"
                }}
              >
                SantaPal DashBoard
              </h1>
              <div
                className="d-flex flex-column"
                id="content-wrapper"
                style={{ backgroundColor: "rgb(160, 0, 0)" }}
              >
                <div id="content" style={{ backgroundColor: "rgb(160, 0, 0)" }}>
                  <Navbar></Navbar>
                  <h1
                    className="d-md-flex justify-content-md-center"
                    style={{
                      color: "white",
                      fontFamily: "'Finger Paint', 'cursive'",
                      height: "101px",
                      fontSize: "42px"
                    }}
                  >
                    SantaPal DashBoard
                  </h1>
                  {/* Logout Button */}
                  <button onClick={this.handleLogout}>Logout</button>
                  <div
                    className="container-fluid text-center d-inline"
                    style={{
                      backgroundColor: "rgb(160, 0, 0)",
                      width: "783px"
                    }}
                  >
                    <div className="d-inline-flex d-sm-flex justify-content-between align-items-center justify-content-md-center align-items-md-end mb-4"></div>
                    <div className="row">
                      <div className="col-md-6 col-xl-3 mb-4">
                        <div
                          className="card shadow border-left-success py-2"
                          style={{
                            backgroundImage:
                              'url("assets/img/plankedwood.jpg")',
                            backgroundSize: "cover",
                            backgroundColor: "transparent",
                            padding: "8px",
                            height: "140px"
                          }}
                        >
                          <div className="cardBody" style={{ height: "105px" }}>
                            <h1
                              className="d-flex d-md-flex justify-content-md-center align-items-md-end"
                              style={{
                                height: "48px",
                                color: "rgb(160, 0, 0)",
                                fontSize: "23px",
                                fontFamily: "'Finger Paint', 'cursive'"
                              }}
                            >
                              LETTERS FROM SANTA
                            </h1>
                          </div>
                          <div
                            style={{
                              height: "0px",
                              margin: "0px",
                              padding: "0px"
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-3 mb-4">
                        <div
                          className="card shadow border-left-success py-2"
                          style={{
                            backgroundImage:
                              'url("assets/img/plankedwood.jpg")',
                            backgroundSize: "cover",
                            backgroundColor: "transparent",
                            padding: "8px",
                            height: "140px"
                          }}
                        >
                          <div
                            className="card-body"
                            style={{ height: "105px" }}
                          >
                            <h1
                              className="d-flex d-md-flex justify-content-md-center align-items-md-end"
                              style={{
                                height: "48px",
                                color: "rgb(13, 0, 163)",
                                fontSize: "23px",
                                fontFamily: "'Finger Paint', 'cursive'"
                              }}
                            >
                              LETTERS TO SANTA
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-lg-6 mb-4"
                        style={{
                          backgroundColor: "rgb(12, 62, 29)",
                          height: "393px"
                        }}
                      >
                        <div className="card shadow mb-4">
                          <div
                            className="card-header py-3"
                            style={{ backgroundColor: "rgb(12, 62, 29)" }}
                          >
                            <h6 className="text-primary font-weight-bold m-0">
                              Santa's List Suggestions For You
                            </h6>
                          </div>
                          <div
                            className="card-body"
                            style={{ backgroundColor: "rgb(255, 255, 255)" }}
                          >
                            <ClickList
                              list={this.state.santasList}
                              onClick={this.toyClicked_SantaList}
                            ></ClickList>
                          </div>
                        </div>
                      </div>
                      <div className="col" style={{ height: "195px" }}>
                        <div className="card">
                          <div
                            className="card-body"
                            style={{
                              height: "140px",
                              backgroundImage:
                                'url("assets/img/plankedwood.jpg")',
                              backgroundSize: "cover"
                            }}
                          >
                            <h1
                              className="d-flex d-md-flex justify-content-md-center align-items-md-end"
                              style={{
                                height: "48px",
                                color: "rgb(0, 48, 19)",
                                fontSize: "23px",
                                fontFamily: "'Finger Paint', 'cursive'"
                              }}
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
                            style={{
                              height: "140px",
                              backgroundImage:
                                'url("assets/img/plankedwood.jpg")',
                              backgroundSize: "cover"
                            }}
                          >
                            <h1
                              className="d-flex d-md-flex justify-content-md-center align-items-md-end"
                              style={{
                                height: "48px",
                                color: "rgb(249, 239, 230)",
                                fontSize: "23px",
                                fontFamily: "'Finger Paint', 'cursive'"
                              }}
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
                        style={{
                          backgroundColor: "rgb(12, 62, 29)",
                          height: "393px"
                        }}
                      >
                        <div className="card shadow mb-4">
                          <div
                            className="card-header py-3"
                            style={{ backgroundColor: "rgb(12, 62, 29)" }}
                          >
                            <h6 className="text-primary font-weight-bold m-0">
                              Santa's List Suggestions For You
                            </h6>
                          </div>
                          <ClickList
                            list={this.state.wishList}
                            onClick={this.toyClicked_WishList}
                          ></ClickList>
                        </div>
                        <div
                          className="card-body"
                          style={{ backgroundColor: "rgb(255, 255, 255)" }}
                        >
                          <h4 className="small font-weight-bold">
                            Gift1<span className="float-right">100%</span>
                          </h4>
                          <div className="progress mb-4">
                            <div
                              className="progress-bar bg-success"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "100%" }}
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
                              style={{ width: "80%" }}
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
                              style={{ width: "60%" }}
                            >
                              <span className="sr-only">60%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{
                        backgroundColor: "rgb(12,62,29)",
                        height: "393px"
                      }}
                    >
                      <div
                        className="card shadow mb-4"
                        style={{ backgroundColor: "rgb(12,62,29)" }}
                      >
                        <div
                          className="card-header py-3"
                          style={{ backgroundColor: "rgb(12,62,29)" }}
                        >
                          <h6
                            className="text-primary font-weight-bold m-0"
                            style={{
                              fontFamily: "'Finger Paint', 'cursive'",
                              color: "rgb(254, 215, 11)"
                            }}
                          >
                            Wish List
                          </h6>
                        </div>
                        <ul
                          className="list-group list-group-flush"
                          style={{ backgroundColor: "rgb(12,62,29)" }}
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
                            style={{ backgroundColor: "rgb(255, 255, 255)" }}
                          >
                            <div className="row align-items-center no-gutters">
                              <div
                                className="col mr-2"
                                style={{
                                  backgroundColor: "rgb(255, 255, 255)"
                                }}
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
            </div>
          </div>
          <Countdown date="12/25"></Countdown>
        </div>
      </div>
    );
  }
}

export default Dashboard;
