export function queryParamsToString (queryParams) {
    let queryString = "?";
    for (let [key, value] of Object.entries(queryParams)) {
        queryString += `${key}=${value}&`;
    }
    return queryString;
}