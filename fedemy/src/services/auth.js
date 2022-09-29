import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/api/";
export default {
    login(username, password) {
        const user = { username, password };
        return axios.post(ENDPOINT_PATH + "token/", user);
    }
};