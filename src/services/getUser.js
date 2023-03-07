import axios from "axios";

export function getUser() {
    return axios.get("https://api.escuelajs.co/api/v1/users");
}
