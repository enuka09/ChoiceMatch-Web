import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({product}) => {
    const navigate = useNavigate();

    return (
        <div className="checkout-container">
            <div className="checkout-contact-details">
                <h2>Contact Details</h2>
                <form className="checkout-form">
                    <label>
                        Full Name :
                        <input type="text" name="name" required/>
                    </label>
                    <label>
                        Email Address :
                        <input type="email" name="email" required/>
                    </label>
                    <label>
                        Phone Number :
                        <input type="tel" name="phone" required/>
                    </label>
                    <label>
                        Address :
                        <textarea name="address" required></textarea>
                    </label>
                    <label>
                        City :
                        <input type="text" name="city" required/>
                    </label>
                    <label>
                        Postal Code :
                        <input type="text" name="postal" required/>
                    </label>
                </form>
                <div className="checkout-buttons">
                    <div className="checkout-button-back">
                        <button className="btn-return-to-cart" onClick={() => navigate('/detailed-cart')}>Return to Cart</button>
                    </div>
                    <div className="checkout-button-continue">
                        <button className="btn-checkout-proceed">Proceed</button>
                    </div>
                </div>
            </div>
            <div className="checkout-product-info">
                <h2>Purchase Information</h2>
                <div className="checkout-product-card">
                    <img src="/images/new-arrivals/new-arrival-1-a.png" alt="Product"/>
                    <div className="checkout-product-details">
                        <p className="p-name-value">Product Name</p>
                        <p className="size-value">Size : </p>
                        <p className="color-value">Color :</p>
                        <p className="price-value">LKR PriceValue</p>
                    </div>
                </div>
                <div className="purchase-summary">
                    <div className="purchase-summary-top">
                        <div className="summary-item">
                            <p>Gross Total:</p>
                            <span className="purchase-summary-value">LKR GrossValue</span>
                        </div>
                        <div className="summary-item">
                            <p>Delivery charge:</p>
                            <span className="purchase-summary-value">LKR DeliveryValue</span>
                        </div>
                        <div className="summary-item">
                            <p>Total Discount:</p>
                            <span className="purchase-summary-value">LKR DiscountValue</span>
                        </div>
                        <hr/>
                    </div>
                    <div className="summary-item checkout-net-total">
                        <p>Net Total:</p>
                        <span className="purchase-summary-value">LKR NetValue</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
