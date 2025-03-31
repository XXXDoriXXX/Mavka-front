import React from "react";
import "../style.css";

const ScheduleTable = ({ data }) => {
    if (!data.length) return <p>Наразі розклад відсутній</p>;

    return (
        <table className="schedule-table">
            <thead>
            <tr>
                <th>Дата</th>
                <th>Час</th>
                <th>Група</th>
                <th>Викладач</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.group}</td>
                    <td>{item.teacher}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;
