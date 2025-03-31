import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
