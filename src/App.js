import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Women_Category from "./pages/Women_Category";
import Men_Category from "./pages/Men_Category";
import Kids_Category from "./pages/Kids_Category";
import Latest_Products from "./pages/Latest_Products";
import Competitions from "./pages/Competitions";
import Discount_Products from "./pages/Discount_Products";
import CompetitionSubmission from './pages/CompetitionSubmission';
import Single_Product_Detail from "./pages/Single_Product_Detail";
import Detailed_Cart from "./pages/Detailed_Cart";
import Checkout from "./pages/Checkout";
import FashionRecommendation from "./pages/FashionRecommendation";




function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="women-category" element={<Women_Category/>}/>
                        <Route path="men-category" element={<Men_Category/>}/>
                        <Route path="kids-category" element={<Kids_Category/>}/>
                        <Route path="new-arrivals" element={<Latest_Products/>}/>
                        <Route path="competitions" element={<Competitions/>}/>
                        <Route path="discount-items" element={<Discount_Products/>}/>
                        <Route path="CompetitionSubmission" element={<CompetitionSubmission />} />
                        <Route path="single-product-detail" element={<Single_Product_Detail/>} />
                        <Route path="detailed-cart" element={<Detailed_Cart/>} />
                        <Route path="checkout" element={<Checkout/>} />
                        <Route path="fashion-recommender" element={<FashionRecommendation/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
);
}

export default App;
