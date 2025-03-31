import React, {useState} from "react";
import {loginRequest} from "../services/auth.js";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        loginRequest(username, password).then(res => {
            console.log(res.data);
            if (res.data.access_token) {
                localStorage.setItem("access_token", `Bearer ${res.data.access_token}`);
                window.location.href = "/";
            } else {
                alert("Invalid credentials");
            }
        })
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}