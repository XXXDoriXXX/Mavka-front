import instance from "./config.js";
import {getAuth} from "../utils/auth.js";

export async function getNets() {
    return await instance.get("/nets", {
        headers: {
            Authorization: getAuth()
        }
    });
}