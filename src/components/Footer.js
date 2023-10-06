import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="row footer-row">
                        <div className="col-md-3">
                            <img src="/images/banners/main-logo.png" alt="Logo" className="footer-logo mb-3"/>
                            <p>Discover the latest in fashion with CHOICE MATCH! Our online store features AI-powered
                                recommendations, personalizing your shopping experience and helping you find the perfect
                                style. Elevate your wardrobe with us</p>
                        </div>
                        <div className="col-md-3">
                            <h6>Information</h6>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms and Condition</a></li>
                                <li><a href="#">Delivery Details</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Find it fast</h6>
                            <ul className="footer-links">
                                <li><a href="#">Women Series</a></li>
                                <li><a href="#">Men Series</a></li>
                                <li><a href="#">Kids Collection</a></li>
                                <li><a href="#">New-In</a></li>
                                <li><a href="#">Competitions</a></li>
                                <li><a href="#">Deals</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Get in Touch</h6>
                            <ul className="footer-contact">
                                <li>Hotline: (+94) 76 966 1760</li>
                                <li>Email: online@choicematch.com</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-3"/>
                    <div className="row">
                        <div className="col text-center">
                            &copy; 2023 CHOICE MATCH. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
