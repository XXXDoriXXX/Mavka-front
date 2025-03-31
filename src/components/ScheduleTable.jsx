import React from "react";

const ScheduleTable = ({ data }) => {
    if (!data.length) return <p>Наразі розклад відсутній</p>;

    return (
        <table className="w-full border text-left">
            <thead>
            <tr>
                <th className="border p-2">Дата</th>
                <th className="border p-2">Час</th>
                <th className="border p-2">Група</th>
                <th className="border p-2">Викладач</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td className="border p-2">{item.date}</td>
                    <td className="border p-2">{item.time}</td>
                    <td className="border p-2">{item.group}</td>
                    <td className="border p-2">{item.teacher}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;
