import React from "react";
import "./index.css";
import { FaLaptopCode } from "react-icons/fa";
import { BiMicrochip } from "react-icons/bi";
import { FaBrain } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { MdReduceCapacity } from "react-icons/md";

export default function index() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mb-5 cards-section">
          <div className="col-10 col-md-9 m-auto">
            <p className="font-weight-bold main-heading">
              TECH FOR TEENS A RUBIXE <span>&#174;</span> INITIATIVE
            </p>
            <div className="row cards-flex-container">
              <div className="col-12 col-sm-4 col-md-2 mb-3 mb-md-0">
                <div className="bg-container grad1 d-flex flex-column justify-content-start mt-4">
                  <div className="cards-item-circle circle1">
                    <p className="paratext1">01</p>
                  </div>
                  <div className="tourism-card tocard1 cir1"></div>
                  <p className="card-image-container paratext1">
                    <FaLaptopCode />
                  </p>
                  <div className="text-center">
                    <p className=" innertext">
                      Introducing Al to children in an age appropriate manner
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-2 mb-3 mb-md-0">
                <div className="bg-container grad2 d-flex flex-column justify-content-end mt-4">
                  <div className="cards-item-circle circle2">
                    <p className="paratext2">02</p>
                  </div>
                  <p className="card-image-container paratext2">
                    <BiMicrochip />
                  </p>
                  <div className="text-center">
                    <p className=" innertext">
                      Gain awareness on Al and build an Interactive story around
                      it
                    </p>
                  </div>
                  <div className="tourism-card tocard2  cir2"></div>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-2 mb-3 mb-md-0">
                <div className="bg-container grad1 d-flex flex-column justify-content-start mt-4">
                  <div className="cards-item-circle circle1 ">
                    <p className="paratext3">03</p>
                  </div>
                  <div className="tourism-card tocard1 cir3"></div>
                  <p className="card-image-container paratext3">
                    <FaBrain />
                  </p>
                  <div className="text-center">
                    <p className=" innertext">
                      Acquire programming skills in a user-friendly format
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-2 mb-3 mb-md-0">
                <div className="bg-container grad2 d-flex flex-column justify-content-end mt-4">
                  <div className="cards-item-circle circle2 ">
                    <p className="paratext4">04</p>
                  </div>
                  <p className="card-image-container paratext4">
                    <GrUserSettings />
                  </p>
                  <div className="text-center">
                    <p className=" innertext">
                      Exposure to mini projects on diverse topics
                    </p>
                  </div>
                  <div className="tourism-card tocard2 cir4"></div>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-2">
                <div className="bg-container grad1 d-flex flex-column justify-content-start mt-4">
                  <div className="cards-item-circle circle1 ">
                    <p className="paratext5">05</p>
                  </div>
                  <div className="tourism-card tocard1 cir5"></div>
                  <p className="card-image-container paratext5">
                    <MdReduceCapacity />
                  </p>
                  <div className="text-center">
                    <p className=" innertext">Train the teachers programme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
