import React from "react";
import { Navbar } from "../components/navbar";
import logo from "../assets/logo.svg";
import "../style.css";

const ProfilePage = () => {
    const userProfile = {
        name: "Іван Іванов",
        rank: "Капітан",
        unit: "Група 101",
        email: "ivanov@military.nets",
        phone: "+380991234567",
        joinDate: "2020-05-15"
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Профіль користувача</h1>

                <div className="profileCard">
                    <div className="gridContainer">
                        {/* Колонка з фото */}
                        <div className="photoContainer">
                            <img className="photoPlaceholder" alt="Profile" src={logo}/>
                        </div>

                        {/* Колонка з інформацією */}
                        <div className="infoContainer">
                            <h2 className="name">{userProfile.name}</h2>
                            <p className="rank">{userProfile.rank}</p>

                            <div className="infoItem">
                                <span className="label">Підрозділ:</span>
                                <span>{userProfile.unit}</span>
                            </div>
                            <div className="infoItem">
                                <span className="label">Електронна пошта:</span>
                                <span>{userProfile.email}</span>
                            </div>
                            <div className="infoItem">
                                <span className="label">Телефон:</span>
                                <span>{userProfile.phone}</span>
                            </div>
                            <div className="infoItem">
                                <span className="label">Дата приєднання:</span>
                                <span>{userProfile.joinDate}</span>
                            </div>
                        </div>
                    </div>

                    {/* Кнопки */}
                    <div className="buttonsContainer">
                        <button className="button">Змінити фото</button>
                        <button className="button">Редагувати профіль</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;