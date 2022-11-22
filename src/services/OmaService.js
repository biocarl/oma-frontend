import axios from "axios";


class OmaService {
    getAll() {
        return axios.create({
            baseURL: import.meta.env.VITE_OMA_URL +"/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/categories//");
    }
}

export default new OmaService();