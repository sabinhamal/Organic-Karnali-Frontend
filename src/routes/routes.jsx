import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Homepage from "../pages/Homepage";
import Navbar from "../components/Navbar";

const routes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    )
}

export default routes