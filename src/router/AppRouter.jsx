import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";
import MainPage from "../pages/MainPage.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
