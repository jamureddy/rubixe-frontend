import React from "react";
import logo from "../../Assests/white-rubixe-logo.png";
import "./index.css";

export default function index() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-background">
        <a className="navbar-brand" href="#">
          <img src={logo} width="130" height="40" alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link nav-item-color" href="#">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-item-color" href="#">
                Services
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-item-color" href="#">
                Products
              </a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link nav-item-color" href="#">
                ai internship
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-item-color" href="#">
                career
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-item-color" href="#">
                blog
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-item-color" href="#">
                about
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link nav-item-color" href="#">
                contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
