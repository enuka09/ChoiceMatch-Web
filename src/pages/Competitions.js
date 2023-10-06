import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Competitions = () => {

    const navigate = useNavigate();

    function handleParticipateClick(event) {
        const themeCard = event.currentTarget.closest('.theme-card');
        const imageUrl = themeCard.querySelector('.theme-image').style.backgroundImage.slice(5, -2); // Extracting URL from the backgroundImage style
        const title = themeCard.querySelector('.theme-title').textContent;
        const description = themeCard.querySelector('.theme-description > p:not(.theme-title)').textContent;

        navigate('/CompetitionSubmission', {
            state: { imageUrl, title, description }
        });
    }






    return (
        <div className="competition-section">
            <img src="/images/banners/competition-banner.png" alt="Competition Banner"/>
            <div className="theme-section">
                <div className="theme-section-outer">
                    <h1>Unleash your Creativity!</h1>
                    <p style={{fontSize: '1.2em'}}>Dive into our competitions, a celebration of style and imagination.
                        It's not just about fashion; it's about the joy of expression and the thrill of creativity</p>
                </div>
                <div className="theme-section-inner">
                    <h3>This Month's Themes</h3>
                    <p>Explore our curated themes for the month and take on a challenge that speaks to you. Remember,
                        it's not just about winning, but the journey of creation.
                        And for those who rise to the top? A special treat awaits: our <b>top 3 winners</b> will enjoy
                        a <b>50%
                            discount</b> on their next purchase.</p>
                </div>
            </div>
            <div className="theme-card-section">
                <div className="theme-card">
                    <div className="theme-image"
                         style={{backgroundImage: 'url(/images/category-types/theme-halloween.jpg)'}}></div>
                    <div className="theme-description">
                        <p className="theme-title">Spooky Halloweens</p>
                        <p>Join our Halloween theme competition and showcase your most hauntingly stylish outfits.
                            Whether it's a classic ghostly appearance or a modern monstrous look, we're excited to see
                            your creativity!</p>
                        <div className="accordion">
                            <div className="accordion-item border">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        More Tips
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <b>Suggested outfits:</b> Costumes of witches, ghosts, monsters, popular horror
                                        movie characters, and more.
                                        <br/><br/>
                                        <b>Accessories:</b> Masks, fake blood, broomsticks, and themed jewelry.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-filter"
                            type="button"
                            style={{marginTop: '20px'}}
                            onClick={handleParticipateClick}
                        >
                            Participate
                        </button>
                    </div>
                </div>
                <div className="theme-card">
                    <div className="theme-image"
                         style={{backgroundImage: 'url(/images/category-types/theme-christmas.jpg)'}}></div>
                    <div className="theme-description">
                        <p className="theme-title">Christmas Cheer</p>
                        <p>Dive into the spirit of the holiday season with our Christmas Cheer theme. Whether you're attending a family gathering or a festive party, let your outfit reflect the joy and warmth of Christmas.</p>
                        <div className="accordion">
                            <div className="accordion-item border">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        More Tips
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <b>Suggested outfits:</b> Classic red and green dresses or sweaters, Santa Claus, elf, or reindeer costumes, Velvet dresses with gold or silver accents, Ugly Christmas sweaters for a fun twist.
                                        <br/><br/>
                                        <b>Accessories:</b> Santa hats or reindeer antlers, Mistletoe or holly brooches, Christmas-themed jewelry like snowflake earrings or candy cane necklaces, Festive scarves and socks
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-filter"
                            type="button"
                            style={{marginTop: '20px'}}
                            onClick={handleParticipateClick}
                        >
                            Participate
                        </button>
                    </div>
                </div>
                <div className="theme-card">
                    <div className="theme-image"
                         style={{backgroundImage: 'url(/images/category-types/theme-street.jpg)'}}></div>
                    <div className="theme-description">
                        <p className="theme-title">Street Wear Fusion</p>
                        <p>Unleash your inner city vibe with our Streetwear Fusion theme. Blend the raw energy of street style with a touch of sophistication, and make a statement wherever you go.</p>
                        <div className="accordion">
                            <div className="accordion-item border">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        More Tips
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <b>Suggested outfits:</b> Oversized hoodies paired with skinny jeans or cargo pants, Graphic tees layered under blazers or denim jackets, High-waist joggers with crop tops, Retro sneakers paired with modern dresses
                                        <br/><br/>
                                        <b>Accessories:</b> Chunky sneakers or combat boots, Baseball caps or bucket hats, Layered chain necklaces or bold statement earrings, Crossbody bags or fanny packs
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-filter"
                            type="button"
                            style={{marginTop: '20px'}}
                            onClick={handleParticipateClick}
                        >
                            Participate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Competitions;
