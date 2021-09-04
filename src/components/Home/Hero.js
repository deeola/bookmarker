import React from "react";
import illustration from "../../images/illustration-hero.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero_box">
        <div className="hero-text">
          <div className="hero_title">
            <h2>A Simple Bookmark</h2>
            <h2>Manager</h2>
          </div>
          <div className="hero_sub_text">
            <p className="first_paragraph">
              A clean and simple interface to organiye your favourite
            </p>
            <p>Websites.Open a new browser and see your sites load</p>
            <p>instantly. Try it for free</p>
          </div>
          <div className="hero-links">
            <a href="#">Get it on Chrome</a>
            <a href="#">Get it on Firefox</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={illustration} alt="illustration_hero"></img>
          <div className="blue_background"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
