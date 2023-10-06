import React, {useState} from 'react';
import {BsTrash3Fill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Detailed_Cart = () => {
    const [quantity, setQuantity] = useState(1);
    // Sample data for demonstration purposes
    const product = {
        image: "/images/new-arrivals/new-arrival-1-a.png",
        name: "Product Name",
        size: "M",
        color: "Red",
        price: 1000.00,
        quantity: 1,
        total: 1000.00
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const navigate = useNavigate();

    return (
        <div className="detailed-cart-container">
            <div className="detailed-cart-details">
                <div className="cart-detail-row">
                    <div className="detailed-product-image">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="detailed-product-details">
                        <p className="p-name">{product.name}</p>
                        <p className="p-size">Size: {product.size}</p>
                        <p className="p-color">Color: {product.color}</p>
                    </div>
                    <div className="detailed-product-price">
                        LKR {product.price.toFixed(2)}
                    </div>
                    <div className="product-quantity">
                        <div className="quantity-control btn-stock-add">
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                    <div className="detailed-product-total">
                        LKR {product.total.toFixed(2)}
                    </div>
                    <div className="detailed-cart-item-delete">
                        <BsTrash3Fill className="trash-icon"/>
                    </div>
                </div>
            </div>
            <div className="order-detail-section">
                <div className="order-details-box">
                    <h5 className="order-box-topic">Order Details</h5>
                    <div className="divider-order"></div>
                    <div className="order-item">
                        <span className="order-item-name">{product.name}</span>
                        <span className="order-item-price">LKR {product.price.toFixed(2)}</span>
                    </div>
                    <div className="order-summary">
                        <div className="sub-total">
                            <span>Sub Total</span>
                            <span>LKR {product.total.toFixed(2)}</span>
                        </div>
                        <div className="sale-discount">
                            <span>Sale Discount</span>
                            <span>LKR 0.00</span>
                        </div>
                        <div className="net-total">
                            <span>Net Total</span>
                            <span>LKR {product.total.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="order-actions">
                        <button className="continue-shopping-btn" onClick={() => navigate('/')}>Continue Shopping</button>
                        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detailed_Cart;
