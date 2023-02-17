import React from "react";
import "./index.css";
import rightBannerImage from "../../Assests/rubex2.jpg";
import bannerImage from "../../Assests/tech-removebg-preview.png";

export default function index() {
  return (
    <div>
      <div className="container-fluid banner-container">
        <div className="row banner-section">
          <div className="banner-text-container">
            <img
              src={bannerImage}
              alt="bannerImage"
              className="banner-image-left"
            />
            <p className="text-uppercase banner-text banner-heading">
              carving future <br />
              technology professionals <br />
              out of young minds
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-9 col-10 m-auto about-us-section">
            <div>
              <p className="font-weight-bold main-heading">WHO WE ARE</p>
              <p className="font-montserrat content-color">
                Rubixe™ is a global technology company specializing in
                disruptive technologies – Artificial Intelligence (AI), Machine
                Learning, Robotic Process Automation (RPA), BlockChain and
                Internet of Things (IoT).
              </p>
              <p className="font-montserrat content-color">
                Rubice mission is to enable businesses to leverage the full
                potential of disruptive technologies and stay competitive in the
                market, turning complex challenges into solutions, providing a
                strategic compestive advantage that are more efficient,
                effective and predictable.
              </p>
            </div>
            <div>
              <div className="rightBannerTopLine"></div>
              <img
                src={rightBannerImage}
                className="rightBannerImage"
                alt="rightBannerImage"
              />
              <div className="rightBannerBottomBox"></div>
            </div>
          </div>
        </div>
        <div className="row mt-3 about-us-section-below-section">
          <div className="col-md-9 col-10 m-auto pt-3 pb-3">
            <p className="font-weight-bold main-heading">WHEN WE STARTED</p>
            <p className="font-montserrat">
              We started in 2015. With a passionate team who want to bring
              game-changing solutions through disrupting technologies. We
              expertise in delivering enterprise-level solutions in the field of
              Artificial Inteligence (AI), Cyber Security, Robotic Process
              Automation (RPA), Intemet of Things (IoT), and BlockChain
              technology
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}
