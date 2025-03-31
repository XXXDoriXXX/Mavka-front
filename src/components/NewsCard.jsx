import React from "react";
import "../style.css";
const NewsCard = ({ title, text, image }) => (
    <div className="news-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
);
export default NewsCard;
