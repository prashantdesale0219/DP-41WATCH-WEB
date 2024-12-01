import React from "react";
import { TfiTruck } from "react-icons/tfi";
import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { VscCalendar } from "react-icons/vsc";
import { BsPiggyBank } from "react-icons/bs";
import Login from "../page/Login";
import Signup from "../page/Signup";
import Footer from "./Footer";


const Loginpage = () => {

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>AUTHENTICATION</h1>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <Signup />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <Login />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        
       
      </div>
      <div className="container">
      <div className="row ">
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 fs-2 text-center p-0">
        <TfiTruck />
        <p style={{fontSize:"18px"}}>Secure delivery <br />
        1 to 6 days</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 fs-2 text-center p-0">
        <IoEarthOutline />
        <p style={{fontSize:"18px"}}>Guaranteed origin</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 fs-2 text-center p-0">
        <CiLock />
                        <p style={{fontSize:"18px"}}>Secure payment</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 fs-2 text-center p-0">
        <VscCalendar />
                        <p style={{fontSize:"18px"}}>1 year warranty</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 fs-2 text-center p-0">
        <BsPiggyBank />
        <p style={{fontSize:"18px"}}>Tailor-made financing</p>
        </div>
      </div>
    </div>
      <div style={{ textAlign: "center" }}>
        <hr />
        <span>
          41 Watch: the guarantee of a professional service with complete
          transparency
        </span>
        <hr />

        <h2>WANT TO BE INFORMED ABOUT THE LATEST OFFERS?</h2>
      </div>
      <br />

      <Footer />
    </div>
  );
};

export default Loginpage;
