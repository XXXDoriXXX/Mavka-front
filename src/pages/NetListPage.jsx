import React, { useState } from "react";
import "../style.css";

const NetListPage = () => {
    // Мокові сітки
    const [nets, setNets] = useState([
        { id: 1, palette: "Зелена", size: "Маленька", type: "Квадратна" },
        { id: 2, palette: "Червона", size: "Середня", type: "Ромбічна" },
        { id: 3, palette: "Синя", size: "Велика", type: "Квадратна" },
    ]);

    const [palette, setPalette] = useState("Зелена");
    const [size, setSize] = useState("Маленька");
    const [type, setType] = useState("Квадратна");

    const handleCreateNet = (e) => {
        e.preventDefault();
        const newNet = { id: nets.length + 1, palette, size, type };
        setNets([...nets, newNet]); // Додаємо нову сітку до списку
    };

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
                            <p><strong>Розмір:</strong> {net.size}</p>
                            <p><strong>Тип:</strong> {net.type}</p>
                        </div>
                    ))}
                </div>

                <h2 className="section-title">Створити нову сітку</h2>

                {/* Форма створення сітки */}
                <form onSubmit={handleCreateNet}>
                    {/* Кольорова палітра */}
                    <div className="form-group">
                        <label htmlFor="palette">Кольорова палітра:</label>
                        <select
                            id="palette"
                            value={palette}
                            onChange={(e) => setPalette(e.target.value)}
                            required
                        >
                            <option value="Зелена">Зелена</option>
                            <option value="Червона">Червона</option>
                            <option value="Синя">Синя</option>
                        </select>
                    </div>

                    {/* Розмір сітки */}
                    <div className="form-group">
                        <label htmlFor="size">Розмір:</label>
                        <select
                            id="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            required
                        >
                            <option value="Маленька">Маленька</option>
                            <option value="Середня">Середня</option>
                            <option value="Велика">Велика</option>
                        </select>
                    </div>

                    {/* Тип сітки */}
                    <div className="form-group">
                        <label htmlFor="type">Тип сітки:</label>
                        <select
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="Квадратна">Квадратна</option>
                            <option value="Ромбічна">Ромбічна</option>
                        </select>
                    </div>

                    {/* Кнопка створення сітки */}
                    <button type="submit" className="btn-submit">Створити сітку</button>
                </form>
            </div>
        </div>
    );
};

export default NetListPage;
