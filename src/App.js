import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Women_Category from "./pages/Women_Category";
import Men_Category from "./pages/Men_Category";
import Kids_Category from "./pages/Kids_Category";
import Latest_Products from "./pages/Latest_Products";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="women-category" element={<Women_Category />}/>
                        <Route path="men-category" element={<Men_Category />}/>
                        <Route path="kids-category" element={<Kids_Category />}/>
                        <Route path="latest-items" element={<Latest_Products />}/>
                    </Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
