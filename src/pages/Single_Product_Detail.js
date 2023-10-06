import React, { useState } from 'react';
import SizeGuide from "../components/SizeGuide";

const Single_Product_Detail = ({ PriceValue, BrandName, Color, Code, productCount }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        e.target.style.transformOrigin = `${x}% ${y}%`;
    };

    return (
        <div className="single-product-view-container">
            <div className="single-product-image" onMouseMove={handleMouseMove}>
                <img src="/images/new-arrivals/new-arrival-1-a.png" alt="Product Name"/>
            </div>
            <div className="single-product-details">
                <h2 className="single-product-title">Product Name</h2>
                <p className="single-product-price">LKR {PriceValue}.00</p>
                <p className="single-product-availability">
                    Availability: <span className={productCount === 0 ? 'out-of-stock' : 'in-stock'}>
                        {productCount === 0 ? 'Out of Stock' : 'In Stock'}
                    </span>
                </p>
                <p className="single-product-brand">Brand: {BrandName}</p>
                <p className="single-product-color">Color: {Color}</p>
                <p className="single-product-code">Code: {Code}</p>
                <div className="single-product-size-label">Size:</div>
                <div className="single-product-sizes">
                    {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map(size => (
                        <button
                            key={size}
                            className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                <div className="single-product-actions">
                    <div className="quantity-control">
                        <button onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                    <button className="buy-now-btn">Buy Now</button>
                </div>
                <div className="size-guide">
                    <SizeGuide />
                </div>
            </div>
        </div>
    );
};

export default Single_Product_Detail;
