import React from 'react';
import Meta from "./Meta";
import BreadCrumb from "./BreadCrumb";

const CategoryCard = (props) => {
    return (
        <div className="collection-section">
            <div className="collection-section-inner">
                <div className="breadcrumb-section">
                    <Meta title={"CHOICE MATCH | Women"}/>
                    <BreadCrumb title="Women"/>
                </div>


                <h2 className="topic">Women</h2>
                <p className="collection-name">Choice Match "Women" Collection</p>
                <div className="image-grid">
                    {props.images.map((image, index) => (
                        <div className="image-box" key={index}>
                            <img src="/images/main-categories/women/casual-wear.png" className="img-fluid" alt="..."/>
                            <p>Casual Wear</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-btn-section" style={{borderBottom: '1px solid #e5e5e5'}}>
                <button className="btn btn-filter" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#filterOffcanvas" aria-controls="filterOffcanvas">Filter
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="filterOffcanvas"
                     aria-labelledby="filterOffcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="filterOffcanvasLabel">Filter</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body filter-body">
                        <div className="accordion" id="accordionContainer">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="sizeHeading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#sizeCollapse">
                                        Size
                                    </button>
                                </h2>
                                <div id="sizeCollapse" className="accordion-collapse collapse show" aria-labelledby="sizeHeading"
                                     data-bs-parent="#accordionContainer">
                                <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="sizeCheck1"/>
                                            <label className="form-check-label" htmlFor="sizeCheck1">Size 1</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="colorHeading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#colorCollapse">
                                        Color
                                    </button>
                                </h2>
                                <div id="colorCollapse" className="accordion-collapse collapse" aria-labelledby="colorHeading"
                                     data-bs-parent="#accordionContainer">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="colorCheck1"/>
                                            <label className="form-check-label" htmlFor="colorCheck1">Color 1</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="brandHeading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#brandCollapse">
                                        Brand
                                    </button>
                                </h2>
                                <div id="brandCollapse" className="accordion-collapse collapse" aria-labelledby="brandHeading"
                                     data-bs-parent="#accordionContainer">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="brandCheck1"/>
                                            <label className="form-check-label" htmlFor="brandCheck1">Brand 1</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas-footer">
                            <div className="offcanvas-footer-inner">
                                <button className="btn btn-apply-filter w-50">Apply Filters</button>
                                <button className="btn btn-clear-filter w-50">Clear All Filters</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
        ;
};

export default CategoryCard;
