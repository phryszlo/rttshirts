// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";

// CREATE COMPONENT
const Navbar = () => {

  return (
    <nav>

<div className="logo-main" >
        <img className="cornerLogo"  alt="" src="https://c.smartrecruiters.com/sr-careersite-image-prod/5524344ce4b09eef8cbabfee/37a86b5b-adb4-4728-910b-6b64aedf8fa8"></img>

        <h2 className="titleBar"> Per Scholas Apparel Shop </h2>

        <p className="cartButton">View Cart</p>
      </div>

<div class="topnav" id="myTopnav">
        <a href="#locations"> Find Store </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
        <a href="#join"> Join The Club </a> 
        <Link to="/Testimonials">TEST ONLY </Link>
        <a href="./Testimonials"> Testimonials </a>
        <a href="#home" class="active"> 
          {" "}
          Home{" "}
        </a>
      </div>
      
      
      
      
      
      
      
      
      
      
      {/* <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new/:id">New Order</Link> */}
    </nav>
  );
};

// EXPORT COMPONENT
export default Navbar;