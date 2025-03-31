import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage.jsx";

import Login from "../pages/Login.jsx";

import ProfilePage from "../pages/ProfilePage.jsx";


const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/login" element={<Login />} />

            <Route path="/profile" element={<ProfilePage />} />

        </Routes>
    </BrowserRouter>
);

export default AppRouter;
