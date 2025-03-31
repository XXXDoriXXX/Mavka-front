import React, { useState } from "react";
import "../style.css";

const NetListPage = () => {
    // Мокові сітки
    const [nets, setNets] = useState([
        { id: 1, palette: "Зимова", size: "3x3", type: "Квадратна" },
        { id: 2, palette: "Літня", size: "6x6", type: "Ромбічна" },
        { id: 3, palette: "Осіння", size: "9x9", type: "Квадратна" },
    ]);

    const [palette, setPalette] = useState("Зимова");
    const [size, setSize] = useState("3x3");
    const [type, setType] = useState("Квадратна");

    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleCreateNet = (e) => {
        e.preventDefault();
        const newNet = { id: nets.length + 1, palette, size, type };
        setNets([...nets, newNet]); // Додаємо нову сітку до списку
        setShowCreateForm(false); // Закриваємо форму після створення
    };

    return (
        <div className="net-list-container">
            <div className="overlay" />
            <div className="net-list-content">
                {/* Кнопка для створення нової сітки */}
                <button
                    className="btn-create"
                    onClick={() => setShowCreateForm(!showCreateForm)}
                >
                    {showCreateForm ? "Закрити форму" : "Створити нову сітку"}
                </button>

                {/* Форма для створення нової сітки */}
                {showCreateForm && (
                    <div className="create-net-form">
                        <h2 className="section-title">Створити нову сітку</h2>
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
                                    <option value="Зимова">Зимова</option>
                                    <option value="Літня">Літня</option>
                                    <option value="Осіння">Осіння</option>
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
                                    <option value="3x3">3x3</option>
                                    <option value="6x6">6x6</option>
                                    <option value="9x9">9x9</option>
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
                            <button type="submit" className="btn-submit">
                                Створити сітку
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NetListPage;
