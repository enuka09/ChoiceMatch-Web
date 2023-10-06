import React, {useState} from 'react';
import {NavLink, Link} from "react-router-dom";
import User_Login from '../pages/User_Login';
import User_Signup from '../pages/User_Signup';
import Cart from '../pages/Cart';
import {BsSearch, BsCart3, BsBagHeart, BsPerson} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <Cart show={showCart} onClose={() => setShowCart(false)}/>

            <User_Login
                show={showLogin}
                onClose={() => setShowLogin(false)}
                onShowSignup={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                }}
            />

            <User_Signup
                show={showSignup}
                onClose={() => setShowSignup(false)}
                onShowLogin={() => {
                    setShowSignup(false);
                    setShowLogin(true);
                }}
            />

            {/* Top Header */}
            <div className="full-header">
                <div className="top-header-outer">
                    <div className="top-header-content left-content">
                        <p>
                            Need Help? Call +94 76 966 1760
                        </p>
                    </div>
                    <div className="top-header-content middle-content">
                        <p>
                            Free Delivery for Orders over LKR 7500/=
                        </p>
                    </div>
                    <div className="top-header-content right-content">
                        <p>
                            One to One Assistance
                        </p>
                    </div>
                </div>
                {/* Top Header Ends Here */}

                {/* MainHeader - Web View */}
                <div className="d-none d-lg-flex main-header-outer justify-content-between py-2"
                     style={{backgroundColor: 'var(--color-0084db)'}}>
                    <div className="main-header-context main-logo">
                        <div className="logo">
                            <img src="/images/banners/main-logo.png" alt="main-logo"/>
                        </div>
                    </div>
                    <div className="main-header-context main-search-bar">
                        <div className="search">
                            <input type="search" placeholder="Type & Give Enter Here"/>
                            <button className="btn-search" type="button" id="btn-search">
                                <BsSearch style={{fontSize: '18px', color: 'white'}}/>
                            </button>
                        </div>
                    </div>
                    <div className="main-header-context right-context">
                        <div className="context-icons">
                            <button style={{marginLeft: '10px', background: 'none', border: 'none'}}
                                    onClick={() => setShowCart(true)} data-bs-toggle="offcanvas"
                                    data-bs-target="#cartOffcanvas">
                                <div style={{position: 'relative', display: 'inline-block'}}>
                                    <BsCart3 className="text-white fs-3"/>
                                    <span className="cart-badge">5</span>
                                </div>
                            </button>


                            <Link>
                                <BsBagHeart className="text-white fs-3"/>
                            </Link>
                            <BsPerson className="text-white fs-3" onClick={() => setShowLogin(true)}/>
                        </div>
                    </div>
                </div>

                {/* Main Header - Mobile View  */}
                <div className="d-flex d-lg-none justify-content-center main-header-outer mobile-view fixed-bottom py-2"
                     style={{backgroundColor: 'var(--color-0084db)'}}>
                    <div className="context-icons">
                        <Link className="mx-2">
                            <BsSearch className="text-white fs-3"/>
                        </Link>
                        <BsPerson className="text-white fs-3" onClick={() => setShowLogin(true)}/>


                        <Link to="/" className="mx-2">
                            <AiFillHome className="text-white fs-3"/>
                        </Link>
                        <Link className="mx-2">
                            <button style={{marginLeft: '10px', background: 'none', border: 'none'}}
                                    onClick={() => setShowCart(true)} data-bs-toggle="offcanvas"
                                    data-bs-target="#cartOffcanvas">
                                <div style={{position: 'relative', display: 'inline-block'}}>
                                    <BsCart3 className="text-white fs-3"/>
                                    <span className="cart-badge">5</span>
                                </div>
                            </button>
                        </Link>
                        <Link className="mx-2">
                            <BsBagHeart className="text-white fs-3"/>
                        </Link>
                    </div>
                </div>

                {/* Navbar */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="navbar-inner container-fluid">
                        <div
                            className="main-header-context main-logo d-lg-none">
                            <div className="logo">
                                <img src="/images/banners/main-logo.png" alt="main-logo"/>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
                             aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown">
                                            Women
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Casual Wear</a></li>
                                            <li><a className="dropdown-item" href="#">Formal Wear</a></li>
                                            <li><a className="dropdown-item" href="#">Ethnic Wear</a></li>
                                            <li><a className="dropdown-item" href="#">Night Wear</a></li>
                                            <li><a className="dropdown-item" href="#">Footwear</a></li>
                                            <li><a className="dropdown-item" href="#">Accessories</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="women-category">See All</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown">
                                            Men
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Casual Wear</a></li>
                                            <li><a className="dropdown-item" href="#">Formal Wear</a></li>
                                            <li><a className="dropdown-item" href="#">Footwear</a></li>
                                            <li><a className="dropdown-item" href="#">Accessories</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="men-category">See All</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown">
                                            Kids
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Boys Apparel</a></li>
                                            <li><a className="dropdown-item" href="#">Girls Apparel</a></li>
                                            <li><a className="dropdown-item" href="#">Footwear</a></li>
                                            <li><a className="dropdown-item" href="#">Accessories</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="kids-category">See All</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="new-arrivals">New-In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="competitions">Outfit Competitions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="discount-items">Deals</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link frs-badge" href="detailed-cart">Fashion Recommender</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Nav Bar Ends Here */}
            </div>
        </>
    );
};

export default Header;
