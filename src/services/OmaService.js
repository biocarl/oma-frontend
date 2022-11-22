import axios from "axios";


class OmaService {
    getCategories() {
        return axios.create({
            baseURL: import.meta.env.VITE_OMA_URL +"/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/categories//");
    }

    getUsers() {
        return axios.create({
            baseURL: import.meta.env.VITE_OMA_URL +"/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/statistics/users");
    }
}

export default new OmaService();