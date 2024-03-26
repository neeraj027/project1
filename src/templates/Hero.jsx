import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="bg"></div>
      <div className="hero-container">
        <div className="hero-l-content">
          <h2>Powerful AI Tools</h2>
          <div class="content">
            <div class="content-container">
              <p class="content-text">Your</p>

              <ul class="content-ul">
                <li class="content-li">Youtube Shorts</li>
                <li class="content-li">How are you</li>
                <li class="content-li">Hello</li>
                <li class="content-li">Hi</li>
              </ul>
            </div>
          </div>

          <h1>Powered by AI Videos</h1>
          <p className="content-para">
            Shinefy is a complete collection of powerful AI tools that lets you
            generate binge-worthy AI videos that drive income with just one
            click! Powered by
          </p>
          <button className="btn get-started">Get Started</button>
        </div>
        <div className="hero-r-content">
          <img src="./bot.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
