import React, { useState } from "react";
import "../style.css";

const ReportPage = () => {
    // Мокові сітки для вибору
    const [nets, setNets] = useState([
        { id: 1, size: "Маленька", color: "Зелена" },
        { id: 2, size: "Середня", color: "Блакитна" },
        { id: 3, size: "Велика", color: "Червона" },
    ]);

    const [selectedNet, setSelectedNet] = useState(null);
    const [startTime, setStartTime] = useState(""); // Початковий час
    const [endTime, setEndTime] = useState(""); // Кінцевий час
    const [notes, setNotes] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const report = {
            net: selectedNet,
            startTime,
            endTime,
            notes,
            photo,
        };
        console.log("Звіт збережено:", report);
        // Тут можна додати функцію для збереження звіту через API
    };

    const handlePhotoChange = (e) => {
        setPhoto(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="report-container">
            <div className="overlay" />
            <div className="report-content">
                <h2 className="section-title">Формування звіту</h2>

                <form onSubmit={handleSubmit}>
                    {/* Вибір сітки */}
                    <div className="form-group">
                        <label htmlFor="net">Вибір сітки:</label>
                        <select
                            id="net"
                            value={selectedNet?.id || ""}
                            onChange={(e) =>
                                setSelectedNet(nets.find((net) => net.id === +e.target.value))
                            }
                            required
                        >
                            <option value="">Оберіть сітку</option>
                            {nets.map((net) => (
                                <option key={net.id} value={net.id}>
                                    {net.size} - {net.color}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Час роботи */}
                    <div className="form-group">
                        <label htmlFor="startTime">Початковий час:</label>
                        <input
                            type="time"
                            id="startTime"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endTime">Кінцевий час:</label>
                        <input
                            type="time"
                            id="endTime"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            required
                        />
                    </div>

                    {/* Нотатки */}
                    <div className="form-group">
                        <label htmlFor="notes">Нотатки:</label>
                        <textarea
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows="4"
                        />
                    </div>

                    {/* Фотозвіт */}
                    <div className="form-group">
                        <label htmlFor="photo">Фотозвіт (необов'язково):</label>
                        <label htmlFor="photo" className="custom-file-upload">
                            Вибрати фото
                            <input
                                type="file"
                                id="photo"
                                accept="image/*"
                                onChange={handlePhotoChange}
                            />
                        </label>
                    </div>

                    {photo && (
                        <div className="photo-preview">
                            <img src={photo} alt="Фото звіту" />
                        </div>
                    )}

                    <button type="submit" className="btn-submit">Зберегти звіт</button>
                </form>
            </div>
        </div>
    );
};

export default ReportPage;
