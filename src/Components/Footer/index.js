import React from "react";
import "./index.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function index() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5 footer-section">
          <div className="col-9 m-auto pt-5">
            <div className="row">
              <div className="col-md-5">
                <p className=" text-uppercase font-montserrat content-color">about us</p>
                <p className="content-color">
                  Rubixe™ is a global technology company specializing in
                  disruptive technologies – Artificial Intelligence (AI),
                  Machine Learning, Robotic Process Automation (RPA), BlockChain
                  and Internet of Things (IoT). Rubixe mission to enable
                  businesses to leverage the full potential of disruptive
                  technologies to stay competitive in the market.
                </p>
              </div>
              <div className="col-md-2">
                <p className=" text-uppercase font-montserrat content-color">Menu</p>
                <ul className="no-style-list content-color">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Products</a>
                  </li>
                  <li>
                    <a>Career</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <p className=" text-uppercase font-montserrat content-color">learn more</p>
                <ul className="no-style-list content-color">
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className=" text-uppercase font-montserrat content-color">address</p>
                <div className="social social-two content-color">
                  Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
                  Karnataka 560068
                  <br />
                  Phone: 0804-717-8999
                  <br />
                  Email: hi@rubixe.com
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/company/rubixe"
                    target="_blank"
                    className="social-media-link"
                    rel="noreferrer"
                  >
                    <AiOutlineFacebook />
                  </a>

                  <a
                    href="https://www.facebook.com/Rubixe.Official/"
                    target="_blank"
                    className="social-media-link"
                    rel="noreferrer"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-section-black">
          <div className="col-9 pt-3 pb-2 m-auto text-align-left">
            <p className="font-weight-bold content-color footer-copyright-text">
              © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD
              INNOVATIONS PVT. LTD. | All Rights Reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
