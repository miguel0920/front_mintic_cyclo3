import axios from "axios";

const ENDPOINT_PATH = "https://backendfedemy.herokuapp.com/api/";

export default {
    login(username, password) {
        const user = { username, password };
        return axios.post(ENDPOINT_PATH + 'token/', user, {
            headers: {
                'Content-type': 'application/json'
            }
        });
    },
    users(token) {
        return axios.get(ENDPOINT_PATH + 'people/', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        });
    },
    getpersonByDocumentNumber(token, documentNumber) {
        return axios.get(ENDPOINT_PATH + `person/?persondocumentnumber=${documentNumber}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                }
            });
    },
    createUser(token, person) {
        return axios.post(ENDPOINT_PATH + 'person/', person,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                }
            });
    },
    updateUser(token, id, person) {
        return axios.patch(ENDPOINT_PATH + `people/${id}`, person,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                }
            });
    },
    getUserById(token, id) {
        return axios.get(ENDPOINT_PATH + `person/?personid=${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                }
            });
    },
    deleteUser(token, id){
        return axios.delete(ENDPOINT_PATH + `people/${id}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        });
    }
};