const User_Login = ({ onClose, onShowSignup, show }) => {
    return (
        <>
            <div className={`offcanvas offcanvas-end ${show ? 'show' : ''}`} tabIndex="-1" id="userLoginOffcanvas" aria-labelledby="userLoginLabel">
                <div className="offcanvas-header">
                    <h5 id="userLoginLabel">Login</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close" onClick={onClose}></button>
                </div>
                <div className="offcanvas-body">
                    <div className="login-body">
                        <div className="login-image-box">
                            <img src="/images/other/login.jpg" alt="Login Illustration"/>
                        </div>
                        <div className="login-form-body">
                            <p className="login-description-1">Good to see you Again!</p>
                            <p className="login-description-2">Let's get you connected and explore what's new. Please
                                Enter your login data.</p>
                            <form className="login-form">
                                <input type="email" className="form-control login-inputs" id="cus_email"
                                       placeholder="Username"/>
                                <input type="password" className="form-control login-inputs" id="cus_password"
                                       placeholder="Password"/>
                                <div className="forget-password">
                                    <a href="#" className="forgot-password-link">Forget Password?</a>
                                </div>
                                <button type="submit" className="login-btn">Login</button>
                                <div className="signup-section">
                                    Don't have an Account?
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        onShowSignup();
                                    }}>Sign up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User_Login;
