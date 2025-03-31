import React from "react";

import { useEffect, useState } from "react";
import ScheduleTable from "../components/ScheduleTable";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/Navbar";
const MainPage = () => {
    const [schedule, setSchedule] = useState([]);
    const mockSchedule = [
        { id: 1, date: "2025-04-01", time: "10:00", group: "Група 101", teacher: "Іваненко" },
        { id: 2, date: "2025-04-02", time: "14:00", group: "Група 202", teacher: "Петренко" },
        { id: 1, date: "2025-04-01", time: "10:00", group: "Група 101", teacher: "Іваненко" },
        { id: 2, date: "2025-04-02", time: "14:00", group: "Група 202", teacher: "Петренко" },
        { id: 1, date: "2025-04-01", time: "10:00", group: "Група 101", teacher: "Іваненко" },
        { id: 2, date: "2025-04-02", time: "14:00", group: "Група 202", teacher: "Петренко" },
        { id: 1, date: "2025-04-01", time: "10:00", group: "Група 101", teacher: "Іваненко" },
        { id: 2, date: "2025-04-02", time: "14:00", group: "Група 202", teacher: "Петренко" }
    ];
    useEffect(() => {
        setTimeout(() => setSchedule(mockSchedule), 500);
    }, []);
    const news = [
        {
            title: "Допомога на передову",
            text: "Зібрали 15 сіток та передали волонтерам.",
            image: "/src/assets/news1.jpeg"
        },
        {
            title: "Новий цех",
            text: "Відкрився ще один пункт плетіння у Львові.",
            image: "/src/assets/news2.jpeg"
        },
        {
            title: "Підтримка",
            text: "Отримали нові матеріали для плетіння.",
            image: "/src/assets/news3.jpegg"
        },
    ];
    return (
        <>
            <Navbar/>
        <div className="main-container">
            <div className="main-overlay" />
            <div className="main-content">
                <h2 className="section-title">Розклад сіток</h2>
                <div className="schedule-wrapper">
                    <ScheduleTable data={schedule} />
                </div>


                <div className="news-list-scroll">
                    <h2 className="section-title">Новини</h2>
                    <div className="news-list">
                        {news.map((n, i) => (
                            <NewsCard key={i} {...n} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MainPage;
