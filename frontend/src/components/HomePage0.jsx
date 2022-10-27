import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../HomePage.css";
import Carousel from 'react-bootstrap/Carousel';

function HomePage0() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="logo-main" >
        <img className="cornerLogo"  alt="" src="https://c.smartrecruiters.com/sr-careersite-image-prod/5524344ce4b09eef8cbabfee/37a86b5b-adb4-4728-910b-6b64aedf8fa8"></img>

        <h2 className="titleBar"> Per Scholas RTT-Shirts </h2>
        <a  className="cartButton" href="www.google.com">View Cart</a>
      </div>

      <div class="topnav" id="myTopnav">
        <a href="#locations"> Find Store </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
        <a href="#join"> Join The Club </a>
        <a href="#home" class="active">
          {" "}
          Home{" "}
        </a>
      </div>

      <div>
      <Carousel variant="light" className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="carouselImage"
            src="https://cdn.discordapp.com/attachments/1034195339739148308/1034914687239860225/22.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="carouselImage"
          src="https://cdn.discordapp.com/attachments/1034195339739148308/1034919968237699152/4.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImage"
          src="https://cdn.discordapp.com/attachments/1034195339739148308/1034914687239860225/22.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
    </div>

      <div class="productContainer">
        <div className="shirtContainer" id = "shirtOne">
          <div className="shirtImage">
            {" "}
            <img src="https://cdn.discordapp.com/attachments/1034195339739148308/1034917084326531092/1.jpg" alt="" className="shirt"></img>
          </div>
          <div className="itemDescrip"> Our original T-shirt design, in a trendy and eye-catching grey </div>
          <button className="addToCart">Add To Cart</button>
        </div>
        <div className="shirtContainer" id="shirtTwo">
          <div className="shirtImage" >
            <img src="https://cdn.discordapp.com/attachments/1034195339739148308/1034917084628525056/2.jpg" alt="" className="shirt"></img>
          </div>
          <div className="itemDescrip"> A modern and professional take on our classic, revamped for the workplace. </div>
          <button className="addToCart">Add To Cart</button>
        </div>
        <div className="shirtContainer" id="shirtThree">
          <div className="shirtImage">
            <img src="https://cdn.discordapp.com/attachments/1034195339739148308/1034917084951482368/3.jpg" className="shirt" alt=""></img>
          </div>
          <div className="itemDescrip"> This one is for girls. Its the same as the one before it, but different. </div>

          <button className="addToCart">Add To Cart</button>
        </div>
      </div>
    </>
  );
}
export default HomePage0;