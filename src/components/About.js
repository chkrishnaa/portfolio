import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <div className="heading">
          <h2 className="title">About Me</h2>
          <hr class="wide"></hr>
          <span className="alternative">who i am</span>
        </div>
        <div className="about-content">
          <div className="column left">
            <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/001.webp" alt='Me'></img>
          </div>
          <div className="column right">
            <div className="text">
              I'm Krishnakumar and I'm a{" "}
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
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />.
              </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quo ducimus blanditiis aut accusantium dignissimos et velit, eius voluptatibus similique. Blanditiis error quod totam aspernatur nulla voluptatum nam earum consequatur!
            Optio perferendis fuga cupiditate consequuntur cum atque aliquid quam explicabo, eum et numquam. Dicta accusantium amet iure sequi ea sed fugit recusandae aliquid, neque nostrum harum est, deleniti quibusdam veritatis?
            Dolore molestiae nihil totam reiciendis tempore error doloremque beatae labore repudiandae. Hic ad ut cupiditate enim nesciunt illo architecto maxime accusantium nemo impedit voluptatum totam repudiandae, repellendus veritatis velit harum?
            Soluta vel tempore nam alias asperiores non odio, est illum dolorum quaerat labore hic minus quod voluptatibus voluptatem! At enim rem obcaecati repellat a nemo, voluptatibus illum cupiditate quam nostrum.
            Laudantium voluptatibus dolorum aut! Sed eum, quis a dolor explicabo cumque recusandae deserunt incidunt fugit soluta necessitatibus nisi blanditiis quos eveniet minus sint asperiores distinctio tenetur? Placeat repudiandae corrupti quasi?</p>
            <a href="#download">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
