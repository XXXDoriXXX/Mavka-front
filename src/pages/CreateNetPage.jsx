import React, { useState } from "react";
import "../style.css";
import {createNet} from "../services/nets.js";

const CreateNetPage = () => {
    const [orderId, setOrderId] = useState("");
    const [type, setType] = useState("ribbon");
    const [paletteId, setPaletteId] = useState("");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [status, setStatus] = useState("planned");
    const [startedAt, setStartedAt] = useState("");
    const [completedAt, setCompletedAt] = useState("");
    const [finalPhotoUrl, setFinalPhotoUrl] = useState("");
    const [clientRating, setClientRating] = useState("");
    const [clientComment, setClientComment] = useState("");
    const [createdAt, setCreatedAt] = useState(new Date().toISOString());

    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleCreateNet = (e) => {
        e.preventDefault();
        const netData = {
            order_id: orderId,
            type,
            pallete_id: paletteId,
            width,
            height,
            status,
            started_at: startedAt || null,
            completed_at: completedAt || null,
            final_photo_url: finalPhotoUrl || null,
            client_rating: clientRating ? parseInt(clientRating) : null,
            client_comment: clientComment || null,
            created_at: createdAt,
        };
        console.log("Creating net:", netData);
        createNet(netData).then(res => {
            console.log(res);
        })
    };

    return (
        <div className="net-list-container">
            <button className="btn-create" onClick={() => setShowCreateForm(!showCreateForm)}>
                {showCreateForm ? "Закрити форму" : "Створити нову сітку"}
            </button>

            {showCreateForm && (
                <form className="create-net-form" onSubmit={handleCreateNet}>
                    <label>Order ID:</label>
                    <input type="number" value={orderId} onChange={(e) => setOrderId(e.target.value)} required />

                    <label>Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="ribbon">Ribbon</option>
                        <option value="bow">Bow</option>
                    </select>

                    <label>Palette ID:</label>
                    <input type="number" value={paletteId} onChange={(e) => setPaletteId(e.target.value)} required />

                    <label>Width:</label>
                    <input type="number" value={width} onChange={(e) => setWidth(parseFloat(e.target.value))} required />

                    <label>Height:</label>
                    <input type="number" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} required />

                    <label>Status:</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="planned">Planned</option>
                        <option value="working">Working</option>
                        <option value="confirmation">Confirmation</option>
                        <option value="completed">Completed</option>
                        <option value="canceled">Canceled</option>
                    </select>

                    <label>Started At:</label>
                    <input type="datetime-local" value={startedAt} onChange={(e) => setStartedAt(e.target.value)} />

                    <label>Completed At:</label>
                    <input type="datetime-local" value={completedAt} onChange={(e) => setCompletedAt(e.target.value)} />

                    <label>Final Photo URL:</label>
                    <input type="text" value={finalPhotoUrl} onChange={(e) => setFinalPhotoUrl(e.target.value)} />

                    <label>Client Rating:</label>
                    <input type="number" value={clientRating} onChange={(e) => setClientRating(e.target.value)} />

                    <label>Client Comment:</label>
                    <textarea value={clientComment} onChange={(e) => setClientComment(e.target.value)} />

                    <button type="submit" className="btn-submit">Створити сітку</button>
                </form>
            )}
        </div>
    );
};

export default CreateNetPage;