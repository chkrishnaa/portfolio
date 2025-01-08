import React, { useState } from "react";
import services from "../assets/services.json";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isTruncated, setIsTruncated] = useState(true); // New state for truncation

  const readMore = (service) => {
    setSelectedService(service);
    setIsTruncated(true); // Reset truncation when opening a new service
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsTruncated(true); // Reset truncation when closing the modal
  };


  // Function to truncate description
  const getTruncatedDescription = (description) => {
    if (description.length > 250 && isTruncated) {
      return `${description.slice(0, 250)} .....`; // Truncate and add ellipsis
    }
    return description;
  };

  return (
    <section className="services" id="services">
      <div className="max-width">
        <div className="heading">
          <h2 className="title">Services</h2>
          <hr className="wide" />
          <span className="alternative">what i provide</span>
        </div>
        <div className="services-content">
          {services.map((service, index) => (
            <div className="main-card" key={index}>
              <div className="card">
                <div className="box">
                  <i className={service.icon}></i>
                  <div className="text">{service.title}</div>
                  <pre>{getTruncatedDescription(service.description)}</pre>
                </div>
              </div>
              <hr className="min-height" />
              <button
                className="read-more"
                id="read-more-services"
                onClick={() => readMore(service)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>
            <i className="fa-solid fa-rectangle-xmark"></i>            </button>
            <div className="modal-content">
              <i className={selectedService.icon}></i>
              <h3>{selectedService.title}</h3>
              <div class="min-height"></div>
              <p class="review">{selectedService.description}</p>
            </div>
            
            
            <div className="apply">
            <a id="#apply" href="#apply">Apply Now</a>
            </div>
            <pre className="intro">Created by Krishnakumar <i class="fa-solid fa-pen-to-square"></i></pre>
            <span className="visit">Visit through : 
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
