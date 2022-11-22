import axios from "axios";


class OmaService {
    getAll() {
        return axios.create({
            baseURL: "http://localhost:3000/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/categories//");
    }
}

export default new OmaService();