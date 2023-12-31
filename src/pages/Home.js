import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    BsArrowRightSquareFill,
    BsArrowLeftSquareFill,
    BsFillCreditCardFill,
    BsTruck,
    BsFillTrophyFill,
    BsFillClockFill,
    BsStarFill
} from 'react-icons/bs';
import {Link} from "react-router-dom";
import ProductCard from "../components/ProductCard";

const NextArrow = (props) => {
    const {style, onClick} = props;
    return (
        <div className="slider-arrow"
            style={{
                ...style,
                display: "block",
                right: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                position: 'absolute',
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <BsArrowRightSquareFill size={40}/>
        </div>
    );
};

const PrevArrow = (props) => {
    const {style, onClick} = props;
    return (
        <div  className="slider-arrow"
            style={{
                ...style,
                display: "block",
                left: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                position: 'absolute',
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <BsArrowLeftSquareFill size={40}/>
        </div>
    );
};

const Home = () => {
    const bannerSettings = {
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

    const brandsCount = 5;

    const nextBrand = () => {
        setCurrentBrandIndex((currentBrandIndex + 1) % brandsCount);
    }

    const prevBrand = () => {
        setCurrentBrandIndex((currentBrandIndex - 1 + brandsCount) % brandsCount);
    }

    return (
        <>
            {/*  Main Banner */}
            <section className="main-banner-outer">
                <div className="main-banner-inner" style={{position: 'relative'}}>
                    <Slider {...bannerSettings} className="main-banner-slider">
                    <div className="main-banner">
                            <img src="/images/banners/main-banner-01.png" alt="Banner 1" style={{width: '100%'}}/>
                        </div>
                        <div className="main-banner">
                            <img src="/images/banners/main-banner-02.png" alt="Banner 2" style={{width: '100%'}}/>
                        </div>
                        <div className="main-banner">
                            <img src="/images/banners/main-banner-03.png" alt="Banner 3" style={{width: '100%'}}/>
                        </div>
                    </Slider>
                </div>
            </section>
            {/* Main Banner Ends Here */}

              {/*Icon Container */}
            <section className="services">
                <div className="services-outer">
                    <div className="service">
                        <div className="service-icon-container">
                            <BsTruck className="icons"/>
                            <div className="icon-description">
                                <h6>Island-wide Delivery</h6>
                            </div>
                        </div>
                        <div className="service-icon-container">
                            <BsFillCreditCardFill className="icons"/>
                            <div className="icon-description">
                                <h6>Secure Payment Method</h6>
                            </div>
                        </div>
                        <div className="service-icon-container">
                            <BsFillTrophyFill className="icons"/>
                            <div className="icon-description">
                                <h6>Competitions & Rewards</h6>
                            </div>
                        </div>
                        <div className="service-icon-container">
                            <BsFillClockFill className="icons"/>
                            <div className="icon-description">
                                <h6>Support 24/7</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Icon Container Ends Here*/}

            {/* Main Category Section */}
            <div className="main-categories-section">
                <div className="main-categories-inner">
                    <h2 className="section-topic">Main Categories</h2>
                    <div className="section-row">
                        <div className="category-box">
                            <Link to="/women-category">
                                <img src="/images/category-types/women-category.png" alt="Women"/>
                                <div className="category-info">
                                    <h6>Women Collection</h6>
                                    <p className="shop-now">Shop Now</p>
                                </div>
                            </Link>
                        </div>
                        <div className="category-box">
                            <Link to="/men-category">
                                <img src="/images/category-types/men-category.png" alt="Men"/>
                                <div className="category-info">
                                    <h6>Men Collection</h6>
                                    <p className="shop-now">Shop Now</p>
                                </div>
                            </Link>
                        </div>
                        <div className="category-box">
                            <Link to="/kids-category">
                                <img src="/images/category-types/kids-category.png" alt="Men"/>
                                <div className="category-info">
                                    <h6>Kids Collection</h6>
                                    <p className="shop-now">Shop Now</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Category Section Ends Here */}

            {/* New Arrival Products Section   */}
            <section className="new-arrival-section">
                <div className="new-arrival-inner">
                    <h2 className="section-topic">New Arrivals</h2>
                    <button className="view-all-button">View All</button>
                        <div className="row">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                    </div>
                </div>
            </section>
             {/*New Arrival Products Section Ends Here   */}

            {/*  Advertisement Banner */}
            <div className="fashion-recommender-banner">
                <img src="/images/banners/ai-banner.png" alt="Fashion Recommender banner"/>
                <Link className="choice-match-frs">Try ChoiceMatch</Link>
            </div>
            {/*  Advertisement Banner Ends Here */}

            {/* Feedback Section */}
            <div className="feedback-section">
                <div className="feedback-outer">
                    <h2 className="section-topic">Customer Feedbacks</h2>
                    <div className="section-row">
                        <div className="feedback-box">
                            <div className="feedback-info">
                                <div className="customer-ratings">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                </div>
                                <p className="feedback"> Every purchase feels tailor-made thanks to Choice Match Fashion
                                    Recommender💃 Its is like having a personal stylist at my fingertips👗✨</p>
                                <div className="customer-name">
                                    <p>- Kaushali Wijesinghe</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-box">
                            <div className="feedback-info">
                                <div className="customer-ratings">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                </div>
                                <p className="feedback">Every outfit I've purchased here has become a favorite❤️ Love
                                    the quality and style!😍❤️ Thank you Choice Match!!</p>
                                <div className="customer-name">
                                    <p>- Roshel Fernando</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-box">
                            <div className="feedback-info">
                                <div className="customer-ratings">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                </div>
                                <p className="feedback">From browsing to buying, the experience is seamless. Love the
                                    variety and quality of the outfits! 🛍️✨ Simply brilliant❤</p>
                                <div className="customer-name">
                                    <p>- Piyumi Fonseka</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-box">
                            <div className="feedback-info">
                                <div className="customer-ratings">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                </div>
                                <p className="feedback">The outfits here are not just clothes; they're confidence
                                    boosters❤️❤️ Plus, the AI recommendations are always on point</p>
                                <div className="customer-name">
                                    <p>- Malshi Perera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feedback Section Ends Here */}

            {/* Brands Section */}
            <div className="brand-section">
                <div className="brand-section-inner">
                    <h2 className="section-topic">Our brands</h2>
                    <div className="brand-section-row">
                        {Array.from({ length: brandsCount }).map((_, index) => (
                            <div className={`brand-box ${index === currentBrandIndex ? 'active' : ''}`} key={index}>
                                <a href="#">
                                    <img src={`/images/brands/brand-${index + 1}.png`} alt={`Brand ${index + 1}`} />
                                </a>
                            </div>
                        ))}
                       <div className="prev" onClick={prevBrand}>&#8592;</div>
                    <div className="next" onClick={nextBrand}>&#8594;</div>
                    </div>
                </div>
            </div>
            {/* Brand Section Ends Here */}
        </>
    );
};

export default Home;