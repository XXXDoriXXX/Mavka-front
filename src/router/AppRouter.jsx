import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage.jsx";
import Login from "../pages/Login.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
