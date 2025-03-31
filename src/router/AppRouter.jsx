import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import ReportPage from "../pages/ReportPage.jsx";
import CreateNetPage from "../pages/CreateNetPage.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/createnet" element={<CreateNetPage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
