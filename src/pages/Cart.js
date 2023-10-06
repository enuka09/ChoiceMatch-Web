import React from 'react';
import {BsTrash3Fill} from 'react-icons/bs';

const Cart = () => {
    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas"
                 aria-labelledby="cartOffcanvasLabel" style={{paddingLeft: '30px', paddingRight: '30px'}}>
                <div className="offcanvas-header">
                    <h5 id="cartOffcanvasLabel">Your Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div className="offcanvas-body cart-body">
                    <div className="product-list">
                        <div className="row mb-3 cart-item-row">
                            <div className="col-4 product-image-container">
                                <img src="/images/new-arrivals/new-arrival-1-a.png" alt="Product Name"
                                     className="img-fluid"/>
                            </div>
                            <div className="col-6 cart-item-list">
                                <h6 className="product-name">Product Name</h6>
                                <p>Color: Product Color</p>
                                <p className="product-price">$ Product Price</p>
                            </div>
                            <div className="col-2 d-flex align-items-center justify-content-center trash-icon-container">
                                <BsTrash3Fill className="trash-icon"/>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between subtotal-section">
                            <p className="subtotal-text">Sub Total :</p>
                            <p className="price-text">$100.00</p>
                        </div>

                        {/* Fixed buttons at the bottom */}
                        <div className="d-flex justify-content-between mt-4 cart-buttons">
                            <button className="btn btn-cart-checkout">Checkout</button>
                            <button className="btn btn-cart-detailed">Detailed Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
