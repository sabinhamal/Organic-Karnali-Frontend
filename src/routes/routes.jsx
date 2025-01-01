import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Homepage from "../pages/Homepage";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import NotFound from "../pages/Not Found";
import Footer from "../components/Footer";

const routes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default routes