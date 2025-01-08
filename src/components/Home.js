import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={require('../assets/blue_coloured_world_connection.mp4')} type="video/mp4" />
        </video>
        {/* <img src={require("../assets/red-black.png")} alt='red-black'></img>
        <img src={require("../assets/man.png")} alt='red-black'></img> */}
      </div>
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello 👋, My name is</div>
          <div className="text-2">Krishnakumar Chaurashiya</div>
          <div className="text-3">
            And I'm a{" "}
            <TypeAnimation
              sequence={[
                "Designer", 1000,
                "Gamer", 1000,
                "Tech Enthusiast", 1000,
                "Web Designer", 1000,
                "Designer", 1000,
              ]}
              wrapper="span"
              speed={10}
              style={{ fontSize: '', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <a href="https://www.linkedin.com/in/krishnakumar-chaurashiya-07021a286/">View Profile</a>
        </div>
      </div>
    </section>
  );
}
