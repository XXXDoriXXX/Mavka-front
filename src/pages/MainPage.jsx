import React from "react";

import { useEffect, useState } from "react";
import ScheduleTable from "../components/ScheduleTable";
import {Navbar} from "../components/navbar";
import { Link } from "react-router-dom";

const MainPage = () => {
    const [schedule, setSchedule] = useState([]);

    const mockSchedule = [
        { id: 1, date: "2025-04-01", time: "10:00", group: "Група 101", teacher: "Іваненко" },
        { id: 2, date: "2025-04-02", time: "14:00", group: "Група 202", teacher: "Петренко" },
    ];
    useEffect(() => {
        setTimeout(() => setSchedule(mockSchedule), 500);
    }, []);

    return (
        <>
            <Navbar/>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Привіт!</h1>
                <h2 className="text-xl font-semibold mb-2">Розклад сіток</h2>
                <ScheduleTable data={schedule} />
            </div>
        </>
    );
};

export default MainPage;
