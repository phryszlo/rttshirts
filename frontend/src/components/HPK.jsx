import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

function HomePageK() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>

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
        <div className="shirtContainer">
          <div className="shirtImage">
            {" "}
            <img src="https://cdn.discordapp.com/attachments/1034195339739148308/1034917084326531092/1.jpg" alt="" className="shirt"></img>
          </div>
          <div className="itemDescrip"> Our original T-shirt design, in a trendy and eye-catching grey </div>
          <button className="addToCart">Add To Cart</button>
        </div>
        <div className="shirtContainer">
          <div className="shirtImage">
            <img src="https://cdn.discordapp.com/attachments/1034195339739148308/1034917084628525056/2.jpg" alt="" className="shirt"></img>
          </div>
          <div className="itemDescrip"> A modern and professional take on our classic, revamped for the workplace. </div>
          <button className="addToCart">Add To Cart</button>
        </div>
        <div className="shirtContainer">
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
export default HomePageK;