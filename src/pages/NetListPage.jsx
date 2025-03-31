import React, {useEffect, useState} from "react";
import "../style.css";
import {getNets} from "../services/nets.js";

const NetListPage = () => {
    // Мокові сітки
    const [nets, setNets] = useState([]);
    useEffect(() => {
        getNets().then(res => {
            console.log(res.data);
            setNets(res.data);
        })
    }, [])
    return (
        <div className="net-list-container">
            <div className="overlay" />
            <div className="net-list-content">
                <h2 className="section-title">Список сіток</h2>

                {/* Список сіток */}
                <div className="net-list">
                    {nets.map((net) => (
                        <div className="net-item" key={net.id}>
                            <p><strong>Палітра:</strong> {net.palette}</p>
                            <p><strong>Розмір:</strong> {net.width} x {net.height} m</p>
                            <p><strong>Тип:</strong> {net.type}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NetListPage;
