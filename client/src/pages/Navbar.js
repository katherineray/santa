import React from "react";
import './Navbar/assets/bootstrap/css/bootstrap.min.css';
import './Navbar/assets/bootstrap/css/dashboard.css';
import './Navbar/assets/css/Navigation-Clean.css';

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbarLight navbar-expand bg-white shadow mb-4 topbar static-top"
        id="navbar"
        style={{
          backgroundColor: "rgb(160, 0, 0)",
          backgroundImage: 'url("assets/img/plankedwood.jpg")',
          height: "69px"
        }}>
        <div className="container-fluid">
          <button
            className="btn btn-link d-md-none rounded-circle mr-3"
            id="sidebarToggleTop"
            type="button"
            style={{ backgroundColor: "rgb(160, 0, 0)" }}
          >
            <i className="fas fa-bars"></i>
          </button>
          <form
            className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
            style={{ backgroundColor: "rgb(160, 0, 0)" }}
          >
            <div
              className="input-group"
              style={{ backgroundColor: "rgb(160, 0, 0)" }}
            >
              <input
                className="bg-light form-control"
                type="text"
                href="index.html"
                style={{ backgroundColor: "rgb(160, 0, 0)" }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary py-0"
                  type="button"
                  style={{ backgroundColor: "rgb(160, 0, 0)" }}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <ul
            className="nav navbar-nav flex-nowrap ml-auto"
            style={{ backgroundColor: "rgb(160, 0, 0)" }}
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
                      <button className="btn btn-primary py-0" type="button">
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
            <li className="nav-item dropdown no-arrow mx-1" role="presentation">
              <div className="nav-item dropdown no-arrow">
                <a
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                  style={{ backgroundColor: "rgb(160, 0, 0)" }}
                >
                  <i className="fas fa-envelope fa-fw"></i>
                  <span className="badge badge-danger badge-counter">7</span>
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
                        <span></span>
                      </div>
                      <p className="small text-gray-500 mb-0"></p>
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
                        <span>New Letter From Santa!</span>
                      </div>
                      <p className="small text-gray-500 mb-0"></p>
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
                        <span></span>
                      </div>
                      <p className="small text-gray-500 mb-0"></p>
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
                          Am I a good boy? The reason I ask is because someone
                          told me that people say this to all dogs, even if they
                          aren't good...
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
                  style={{ backgroundColor: "rgb(160, 0, 0)" }}
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
    </div>
  );
}
