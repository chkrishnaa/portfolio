import React, { useState } from 'react';
import team_members from "../assets/team-members.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamMembers() {
  const [selectedMember, setSelectedMember] = useState(null); // Corrected state name
  const [isTruncated, setIsTruncated] = useState(true);

  const readMore = (member) => {
    setSelectedMember(member); // Corrected state setter
    setIsTruncated(true);
  };

  const closeModal = () => {
    setSelectedMember(null); // Corrected state setter
    setIsTruncated(true);
  };

  const getTruncatedDescription = (description) => {
    if (description.length > 200 && isTruncated) {
      return `${description.slice(0, 200)} .....`;
    }
    return description;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="team-members" id="team-members">
      <div className="max-width">
        <div className="heading">
          <h2 className="title">My Team Members</h2>
          <hr className="wide" />
          <span className="alternative">Who with me</span>
        </div>
        <div className="carousel slider-container">
          <Slider {...settings}>
            {team_members.map((member, index) => (
              <div className="card" key={index} onClick={() => readMore(member)}>
                <div className="box">
                  <img src={member.img_src} alt="user-image" />
                  <div className="text">{member.name}</div>
                  <div className="profession">{member.profession}</div>
                  <p>{getTruncatedDescription(member.description)}</p>        
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {selectedMember && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>
              <i className="fa-solid fa-rectangle-xmark"></i>
            </button>
            <div className="modal-content">
              <i className={selectedMember.icon}></i>
              <h3>{selectedMember.name}</h3>
              <div className="min-height"></div>
              <p className="review">{selectedMember.description}</p>
            </div>
            <div className="apply">
              <a id="#apply" href="#apply">Apply Now</a>
            </div>
            <pre className="intro">
              Created by Krishnakumar <i className="fa-solid fa-pen-to-square"></i>
            </pre>
            <span className="visit">
              Visit through:
              <div className="icons">
                <i className="fa-brands fa-youtube" data-name="Youtube"></i>
                <i className="fa-brands fa-facebook" data-name="Facebook"></i>
                <i className="fa-brands fa-instagram" data-name="Instagram"></i>
                <i className="fa-brands fa-x-twitter" data-name="Twitter"></i>
                <i className="fa-brands fa-linkedin" data-name="LinkedIn"></i>
                <i className="fa-brands fa-discord" data-name="Discord"></i>
              </div>
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
