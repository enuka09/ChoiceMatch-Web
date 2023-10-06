import React, {useState} from 'react';
import {BsHeart, BsCart3} from 'react-icons/bs';

const ProductCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col-lg-3 col-md-6 col-sm-6" style={{paddingBottom: '30px'}}>

            <div
                className="card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href="#">
                    <img src="/images/new-arrivals/new-arrival-1-a.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Huf & Dee women's t-shirt</p>
                        <p className="item-price">LKR 2,650.00</p>
                    </div>
                </a>

                {isHovered && (
                    <div className="product-icons">
                        <button className="btn-icon"><BsHeart/></button>
                        <button className="btn-icon"><BsCart3/></button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;