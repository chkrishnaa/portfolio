import React from 'react'

export default function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="max-width">
            <div className="heading">
                <h2 className="title">Contact Me</h2>
                <hr class="wide"></hr>
                <span className="alternative">get in touch</span>
            </div>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque omnis veniam. Voluptatum accusantium deserunt ipsum. Numquam, excepturi adipisci. Quibusdam iusto, excepturi eveniet animi alias assumenda reprehenderit doloribus cupiditate soluta!</p>
                    <div className="icons">
                    <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Krishnakumar Chaurashiya</div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Mumbai - 400067, Maharashtra</div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">chkrishna6590@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column right">
                    <div className="text">Message Me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder='Name' required/>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder='Email' required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder='Subject' required/>
                        </div>
                        <div className="field">
                            <textarea placeholder="Describe Project..." required/>
                        </div>
                        <div className="button">
                            <button type="submit">Send Message</button>
                        </div>
                            
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
