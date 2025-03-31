import React, { useState } from "react";
import "../style.css";
import logo from "../assets/logo.svg";

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        firstName: "Іван",
        lastName: "Іваненко",
        group: "Група 101",
        accountCreated: "2023-01-15",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Дані оновлено:", userData);
        setIsEditing(false);
    };

    return (
        <div className="profile-page">
            {}
            <div className="overlay" />

            <div className="profile-container">

                <div className="profile-logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="profile-details">
                    <h2 className="profile-title">Профіль студента</h2>
                    <div className="profile-info">
                        <p><strong>Ім'я:</strong> {userData.firstName}</p>
                        <p><strong>Прізвище:</strong> {userData.lastName}</p>
                        <p><strong>Група:</strong> {userData.group}</p>
                        <p><strong>Дата створення акаунту:</strong> {userData.accountCreated}</p>
                    </div>
                    <button
                        className="btn-edit"
                        onClick={() => setIsEditing(true)}
                    >
                        Редагувати
                    </button>
                </div>
            </div>

            {}
            {isEditing && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Редагувати дані</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">Ім'я:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Прізвище:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="group">Група:</label>
                                <input
                                    type="text"
                                    id="group"
                                    name="group"
                                    value={userData.group}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="accountCreated">Дата створення акаунту:</label>
                                <input
                                    type="text"
                                    id="accountCreated"
                                    name="accountCreated"
                                    value={userData.accountCreated}
                                    onChange={handleInputChange}
                                    disabled
                                />
                            </div>
                            <button type="submit" className="btn-submit">Зберегти</button>
                            <button
                                type="button"
                                className="btn-cancel"
                                onClick={() => setIsEditing(false)}
                            >
                                Скасувати
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
