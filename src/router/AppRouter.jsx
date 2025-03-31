import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage.jsx";

import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

import ProfilePage from "../pages/ProfilePage.jsx";
import ReportPage from "../pages/ReportPage.jsx";
import CreateNetPage from "../pages/CreateNetPage.jsx";
import NetListPage from "../pages/NetListPage.jsx";


const AppRouter = () => (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/createnet" element={<CreateNetPage />} />
            <Route path="/netlist" element={<NetListPage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
