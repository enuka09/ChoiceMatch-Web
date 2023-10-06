import React from 'react';

const User_Signup = ({ onClose, show, onShowLogin }) => {
    return (
        <div className={`offcanvas offcanvas-end ${show ? 'show' : ''}`} tabIndex="-1" id="userSignupOffcanvas" aria-labelledby="userSignupLabel">
            <div className="offcanvas-header">
                <h5 id="userSignupLabel">Signup</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="offcanvas-body">
                <div className="login-body">
                    <div className="login-image-box">
                        <img src="/images/other/signup.jpg" alt="Signup Illustration"/>
                    </div>
                    <div className="login-form-body">
                        <p className="login-description-1">Hello Stranger!</p>
                        <p className="login-description-2">Glad to see you joining with us. Please fill up the following fields to set your account up.</p>
                        <form className="login-form">
                            <input type="text" className="form-control login-inputs" id="signup_username" placeholder="Username"/>
                            <input type="email" className="form-control login-inputs" id="signup_email" placeholder="Email"/>
                            <input type="tel" className="form-control login-inputs" id="signup_phone" placeholder="Phone Number"/>
                            <input type="password" className="form-control login-inputs" id="signup_password" placeholder="Password"/>
                            <input type="password" className="form-control login-inputs" id="signup_confirm_password" placeholder="Confirm Password"/>
                            <button type="submit" className="login-btn">Signup</button>
                            <p className="signup-section">Already have an Account?
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    onShowLogin();
                                }}>Login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default User_Signup;
