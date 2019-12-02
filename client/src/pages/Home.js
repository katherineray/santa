import React from "react";
import API from "../utils/API";
import Countdown from "./Countdown";

class Home extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormLogin = event => {
    event.preventDefault();
    API.login({
      username: this.state.username,
      password: this.state.password
    }).then(result => {
      console.log(result);
      localStorage.setItem("userId", result.data._id);
      window.location.replace("/dashboard");
    });
  };

  handleFormSignUp = event => {
    event.preventDefault();
    API.signUp({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }).then(result => {
      console.log(result);
      localStorage.setItem("userId", result.data._id);
      window.location.replace("/dashboard");
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "rgb(160,0,0" }}>
        <Countdown date="12/25"></Countdown>
        <header
          class="header-bar mb-3"
          id="navheader"
          style={{
            backgroundColor: "rgb(160, 0, 0)",
            backgroundImage: 'url("assets/img/plankedwood.jpg")',
            height: "69px"
          }}
        >
          <div class="container d-flex flex-column flex-md-row align-items-center p-3">
            <h4 class="my-0 mr-md-auto font-weight-normal">
              <a href="/" class="text-white">
                SantaPal
              </a>
            </h4>
            <form class="mb-0 pt-2 pt-md-0">
              <div class="row align-items-center">
                <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                  <input
                    name="username"
                    onChange={this.handleInputChange}
                    value={this.state.username}
                    class="form-control form-control-sm input-dark"
                    type="text"
                    placeholder="Username"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                  <input
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    class="form-control form-control-sm input-dark"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div class="col-md-auto">
                  <button
                    onClick={this.handleFormLogin}
                    class="btn btn-primary btn-sm"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </header>

        <div class="row align-items-center">
          <div class="col-lg-7 py-3 py-md-5">
            <h1 id="left-cont-main" class="display-3">
              Write and Receive Letters From Santa!
            </h1>
            <p class="lead text-muted">
              Write letters to Santa, discover awesome new toys matched for you,
              and watch movies all holiday season!{" "}
            </p>
          </div>
          <div class="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form id="registration-form">
              <div>
                <div className="form-group">
                  <label
                    htmlFor="username-register"
                    className="text-muted mb-1"
                  >
                    <small>Username</small>
                  </label>
                  <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    id="username-register"
                    className="form-control"
                    type="text"
                    placeholder="Pick a username"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email-register" className="text-muted mb-1">
                    <small>Email</small>
                  </label>
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    id="email-register"
                    className="form-control"
                    type="text"
                    placeholder="you@example.com"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="password-register"
                    className="text-muted mb-1"
                  >
                    <small>Password</small>
                  </label>
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    id="password-register"
                    className="form-control"
                    type="password"
                    placeholder="Create a password"
                  />
                </div>

                <button
                  onClick={this.handleFormSignUp}
                  type="submit"
                  className="py-3 mt-4 btn btn-lg btn-success btn-block"
                >
                  Sign up for SantaPal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
