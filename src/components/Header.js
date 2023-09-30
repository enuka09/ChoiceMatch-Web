import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {BsSearch, BsCart3, BsBagHeart, BsPerson} from "react-icons/bs";

const Header = () => {
    return (
        <>
            {/* Top Header */}
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
                        English | USD $
                    </p>
                </div>
            </div>
            {/* Top Header Ends Here */}

            {/*  Main Header */}
            <div className="main-header-outer">
                <div className="main-header-context main-logo">
                    <div className="logo">
                        <img src="/images/banners/main-logo.png" alt="main-logo"/>
                    </div>
                </div>
                <div className="main-header-context main-search-bar">
                    <div className="search">
                        <input type="search" placeholder="Type & Give Enter Here"/>
                        <button className="btn-search" type="button" id="btn-search"><BsSearch
                            style={{fontSize: '18px'}}/></button>
                    </div>
                </div>
                <div className="main-header-context right-context">
                    <div className="context-icons">
                        <Link style={{marginLeft: '10px'}} className="cart-icon">
                            <BsCart3 className="text-white fs-3"/>
                            <span className="cart-badge">5</span>
                        </Link>
                        <Link>
                            <BsBagHeart className="text-white fs-3"/>
                        </Link>
                        <Link>
                            <BsPerson className="text-white fs-3"/>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Main Header Ends Here */}

            {/* Nav bar */}
            <div className="nav-bar-outer">
                <div className="nav-bar-inner">
                    <div className="navs">
                        <NavLink>Home</NavLink>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle bg-transparent border-0" href="#"
                               role="button" aria-expanded="false">
                                Women
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Casual Wear</a></li>
                                <li><a className="dropdown-item" href="#">Formal Wear</a></li>
                                <li><a className="dropdown-item" href="#">Ethnic Wear</a></li>
                                <li><a className="dropdown-item" href="#">Night Wear</a></li>
                                <li><a className="dropdown-item" href="#">Footwear</a></li>
                                <li><a className="dropdown-item" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle bg-transparent border-0" href="#"
                               role="button" aria-expanded="false">
                                Men
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Casual Wear</a></li>
                                <li><a className="dropdown-item" href="#">Formal Wear</a></li>
                                <li><a className="dropdown-item" href="#">Footwear</a></li>
                                <li><a className="dropdown-item" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle bg-transparent border-0" href="#"
                               role="button" aria-expanded="false">
                                Kids
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Boys Apparel</a></li>
                                <li><a className="dropdown-item" href="#">Girls Apparel</a></li>
                                <li><a className="dropdown-item" href="#">Footwear</a></li>
                                <li><a className="dropdown-item" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <NavLink>New-In</NavLink>
                        <NavLink>Competitions</NavLink>
                        <NavLink>Deals</NavLink>
                        <div className="FRS-Badge">
                            <NavLink>AI Fashion Recommender</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* Nav Bar Ends here  */}
        </>
    );
};

export default Header;
