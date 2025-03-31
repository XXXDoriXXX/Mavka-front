import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
