import React, { useState } from "react";
import "../style.css";

const CreateNetPage = () => {
    const [palette, setPalette] = useState("Зимова");
    const [size, setSize] = useState("Літня");
    const [type, setType] = useState("Осіння");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNet = {
            palette,
            size,
            type,
        };
        console.log("Нова сітка створена:", newNet);

    };

    return (
        <div className="create-net-container">
            <div className="overlay" />
            <div className="create-net-content">
                <h2 className="section-title">Створення нової сітки</h2>

                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn-submit">Створити сітку</button>
                </form>
            </div>
        </div>
    );
};

export default CreateNetPage;
