import React from "react";
import API from "../utils/API";

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
      <div>
        <header className="header-bar mb-3">
          <div className="container d-flex flex-column flex-md-row align-items-center p-3">
            <h4 className="my-0 mr-md-auto font-weight-normal">
              <a href="/" className="text-white">
                SantaPal
              </a>
            </h4>
            <div className="mb-0 pt-2 pt-md-0">
              <div className="row align-items-center">
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                  <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    className="form-control form-control-sm input-dark"
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    className="form-control form-control-sm input-dark"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="col-md-auto">
                  <button
                    onClick={this.handleFormLogin}
                    className="btn btn-primary btn-sm"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container py-md-5">
          <div className="row align-items-center">
            <div className="col-lg-7 py-3 py-md-5">
              <h1 className="display-3">
                Write and Receive Letters From Santa!
              </h1>
              <p className="lead text-muted">
                Write letters to Santa, discover awesome new toys matched for
                you, and watch movies all holiday season!{" "}
              </p>
            </div>
            <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
              <form action="/register" method="POST" id="registration-form">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
