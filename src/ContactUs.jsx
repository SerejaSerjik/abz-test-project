import React, { Component } from 'react'
import './ContactUs.css'
import ContactForm from './ContactForm';

export default class ContactUs extends Component {

    render() {
        return (
            <div className="app-wrapper contact">
            <header>
                <div className="contact-header">
                    <div className="contact-header-logo"></div>
                    <button className="contact-header-button">Log In Now</button>
                </div>
                <section className="contact-title">
                    <h1>The Home of Dentistry</h1>
                    <p>Denteez was created by dentists for dentistry in order to<br/>
                    make the life of everyone involved in dentistry easier.</p>
                </section>
            </header>
            <section className="contact-form-wrapper">
                <ContactForm/>
            </section>
            <section className="contact-about">
                <h1>About Denteez</h1>
                <div className="contact-about-text">
                    <p className="contact-about-text-left">Why is it always so difficult to find what you are looking for in dentistry? Whether it is
                        the latest advancement in technology or techniques or simply a review or
                        understanding of the vast amount of products? Perhaps finding someone to just fix
                        your broken equipment or simply hiring new staff or looking for that new job?
                    </p>
                    <p className="contact-about-text-right">Our mission is to give every dental professional the possibility to discuss and share all
                        aspects of their profession, their practice and their business. We aim to make the world
                        of dentistry easy and accessible, so every dental professional can find what they are
                        looking for quickly and easily all in one place.
                    </p>
                </div>
            </section>
            <hr/>
            <footer className="contact-footer">
                <div className="contact-footer-left">Denteez Copyright 2015</div>
                <div className="contact-footer-right">
                    <ul>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                    </ul>
                </div>
            </footer>
            </div>
        )
    }
}
