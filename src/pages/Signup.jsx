import React, {useState} from 'react'
import {loginRequest, signupRequest} from "../services/auth.js";
import {useNavigate} from "react-router-dom";
export default function Signup() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [group_id, setGroupId] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        signupRequest(username, password, first_name, last_name, group_id).then(res => {
            loginRequest(username, password).then(res => {
                console.log(res.data);
                if (res.data.token) {
                    localStorage.setItem("access_token", `Bearer ${res.data.token}`);
                    window.location.href = "/";
                } else {
                    alert("Invalid credentials");
                }
            })
        })
    }
    return(
        <>
            <h1>Signup</h1>
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
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="group_id">Group ID</label>
                    <input
                        type="text"
                        id="group_id"
                        value={group_id}
                        onChange={(e) => setGroupId(e.target.value)}
                    />
                </div>
                <button type="submit">Signup</button>
            </form>
        </>
    )
}