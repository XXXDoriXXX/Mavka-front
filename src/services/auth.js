import instance from "./config.js";

export async function loginRequest(username, password) {

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    return await instance.post("/auth/login", formData, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
}
