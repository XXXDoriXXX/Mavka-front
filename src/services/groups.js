import instance from "./config.js";
import {getAuth} from "../utils/auth.js";

export async function createGroupRequest(name, speciality_id) {
    return await instance.post("/groups", {
        name: name,
        speciality_id: speciality_id,
    }, {
        headers: {
            Authorization: getAuth()
        }
    })
}

export async function getGroupsRequest(){
    return await instance.get("/groups", {
        headers: {
            Authorization: getAuth()
        }
    });
}