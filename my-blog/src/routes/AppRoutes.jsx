// src/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/navbar" element={<Navbar />} />
        </Routes>
    );
};

export default AppRoutes;