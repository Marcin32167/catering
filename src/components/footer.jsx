import React from 'react';
import facebookIcon from "../assets/facebook-b.svg";
import instagramIcon from "../assets/instagram-b.svg";
import linkedinIcon from "../assets/linkedin-b.svg";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className={"footer-wrapper"}>
                <div className={"footer-holder"}>
                    <div className={"footer-col"}>
                        <div className={"footer-card"}>
                            <h4 className={"footer-title"}>Lorem ipsum</h4>
                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className={"footer-3-col"}>
                        <div className={"footer-card footer-card_end"}>
                            <h4 className={"footer-title"}>Lorem ipsum</h4>
                            <a className={"footer-link-nav"}>Link 1</a>
                            <a className={"footer-link-nav"}>Link 2</a>
                            <a className={"footer-link-nav"}>Link 3</a>
                            <a className={"footer-link-nav"}>Link 4</a>
                        </div>
                        <div className={"footer-card footer-card_end"}>
                            <h4 className={"footer-title"}>Kalkulatory</h4>
                            <Link to="/kalkulator-bmi" className={"footer-link-nav"}>Kalkulator BMI</Link>
                            <a className={"footer-link-nav"}>Link 2</a>
                            <a className={"footer-link-nav"}>Link 3</a>
                            <a className={"footer-link-nav"}>Link 4</a>
                        </div>
                        <div className={"footer-card footer-card_end"}>
                            <h4 className={"footer-title"}>Kontakt</h4>
                            <a className={"footer-link-nav"}>Link 1</a>
                            <a className={"footer-link-nav"}>Link 2</a>
                            <a className={"footer-link-nav"}>Link 3</a>
                            <a className={"footer-link-nav"}>Link 4</a>
                        </div>
                    </div>
                </div>
                <div className={"footer-copy__box"}>
                    <p className={"p-footer__copy"}> &copy; 2023 Catering</p>
                    <div className={"social-media-wrapper-footer"}>
                        <div className={"social-dec"}>Śledź nas na:</div>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
                           className={"social-media-link"}>
                        <span className={"social-media-icon"}>
                            <img src={linkedinIcon} alt="ikona facbook" className={"social-icon"}/>
                        </span>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                           className={"social-media-link"}>
                        <span className={"social-media-icon"}>
                            <img src={facebookIcon} alt="ikona facbook" className={"social-icon"}/>
                        </span>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                           className={"social-media-link"}>
                        <span className={"social-media-icon"}>
                            <img src={instagramIcon} alt="ikona facbook" className={"social-icon"}/>
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
