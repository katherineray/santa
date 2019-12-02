import React from "react";
import moment from "moment";

function Home() {
    return(
        <div>
      {-moment().diff("12/25/" + moment().year(), "days")}
      <header class="header-bar mb-3">
        <div class="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 class="my-0 mr-md-auto font-weight-normal"><a href="/" class="text-white">SantaPal</a></h4>
          <form action="/login" method="POST" class="mb-0 pt-2 pt-md-0">
            <div class="row align-items-center">
              <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                <input name="username" class="form-control form-control-sm input-dark" type="text" placeholder="Username" autocomplete="off" />
              </div>
              <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                <input name="password" class="form-control form-control-sm input-dark" type="password" placeholder="Password" />
              </div>
              <div class="col-md-auto">
                <button class="btn btn-primary btn-sm">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </header>


      <div class="container py-md-5">

        <div class="row align-items-center">
          <div class="col-lg-7 py-3 py-md-5">
            <h1 id="left-cont-main" class="display-3">Write and Receive Letters From Santa!</h1>
            <p class="lead text-muted">Write letters to Santa, discover awesome new toys matched for you, and watch movies all holiday season! </p>
          </div>
          <div class="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form action="/register" method="POST" id="registration-form">

              <div class="form-group">
                <label for="username-register" class="text-muted mb-1"><small>Username</small></label>
                <input name="username" id="username-register" class="form-control" type="text" placeholder="Pick a username" autocomplete="off" />
              </div>

              <div class="form-group">
                <label for="email-register" class="text-muted mb-1"><small>Email</small></label>
                <input name="email" id="email-register" class="form-control" type="text" placeholder="you@example.com" autocomplete="off" />
              </div>

              <div class="form-group">
                <label for="password-register" class="text-muted mb-1"><small>Password</small></label>
                <input name="password" id="password-register" class="form-control" type="password" placeholder="Create a password" />
              </div>

             <button type="submit" class="py-3 mt-4 btn btn-lg btn-success btn-block">Sign up for SantaPal</button>

            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Home;