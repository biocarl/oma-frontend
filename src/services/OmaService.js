import axios from "axios";



class OmaService {
    getCategories(queryParams) {
        return axios.create({
            baseURL: import.meta.env.VITE_OMA_URL +"/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/categories/"+ this.#determineUserRoute(queryParams.users) + this.#determineDateRangeParams(queryParams.dateRange));
    }

    #determineUserRoute(users) {
        return (users.length) ? users.join("-") :'/';
    }

    #determineDateRangeParams(dateRange) {
        return '?start-date='+dateRange.startDate+'&end-date='+dateRange.endDate;
    }

    getUsers(queryParams) {
        return axios.create({
            baseURL: import.meta.env.VITE_OMA_URL +"/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/statistics/users"+this.#determineDateRangeParams(queryParams.dateRange));
    }
}

export default new OmaService();