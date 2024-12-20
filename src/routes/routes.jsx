import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Homepage from "../pages/Homepage";

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    )
}

export default routes