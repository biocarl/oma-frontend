import axios from "axios";

import {queryParamsToString} from "./helpers.js";

class OmaService {
    getCategories(queryParams) {
        return axios.create({
            baseURL: import.meta.env.VITE_OMA_URL +"/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/categories/"+ this.#determineUserRoute(queryParams.users) + this.#determineDateRangeParams(queryParams));
    }

    getTils(queryParams) {
        return axios.create({
            baseURL: import.meta.env.VITE_OMA_URL +"/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/tils" + queryParamsToString(queryParams));
    }

    #queryParamsToString(queryParams) {
        return '?'
    }

    #determineUserRoute(users) {
        return (users.length) ? users.join("-") :'/';
    }

    #determineDateRangeParams(dateRange) {
        return '?start-date='+dateRange["start-date"]+'&end-date='+dateRange["end-date"];
    }

    getUsers(queryParams) {
        return axios.create({
            baseURL: import.meta.env.VITE_OMA_URL +"/api",
            headers: {
                "Content-type": "application/json"
            }
        }).get("/statistics/users"+this.#determineDateRangeParams(queryParams));
    }
}

export default new OmaService();