import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react'
const Homepage = React.lazy(() => import("../pages/Homepage"))
const Navbar = React.lazy(() => import("../components/Navbar"))
const Contact = React.lazy(() => import("../pages/Contact"))
import Product from "../pages/Product"
const Products = React.lazy(() => import("../pages/Products"))
const NotFound = React.lazy(() => import("../pages/Not Found"))
const Footer = React.lazy(() => import("../components/Footer"))
import 'ldrs/ring'
import { treadmill } from 'ldrs'

const routes = () => {
    treadmill.register() //loader
    return (
        <Router>
            {/* Loading Animation */}
            <Suspense fallback={
                <div className="flex items-center justify-center h-screen w-full">
                    <l-treadmill
                        size="70"
                        speed="1.25"
                        color="black"
                    ></l-treadmill>
                </div>
            }>
                <Navbar />
                <Routes>
                    <Route index path="/" element={<Homepage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Suspense >
        </Router >
    )
}

export default routes