import React, {useState} from 'react';
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

const Women_Category = () => {
    const imagesArray = [
        {path: '/path-to-image1.jpg', name: 'Image 1'},
        {path: '/path-to-image2.jpg', name: 'Image 2'},
        {path: '/path-to-image3.jpg', name: 'Image 3'},
        {path: '/path-to-image4.jpg', name: 'Image 4'},
        {path: '/path-to-image5.jpg', name: 'Image 5'},
        {path: '/path-to-image6.jpg', name: 'Image 6'},
        {path: '/path-to-image7.jpg', name: 'Image 7'},
    ];

    return (
        <>
            {/* Pass the images prop to the CategoryCard component */}
            <CategoryCard images={imagesArray}/>

            <div className="card-container">
                <div className="row">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </>
    );
};

export default Women_Category;
