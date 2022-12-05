import { queryParamsToString } from  "../../src/services/helpers.js";
import assert from "assert";


describe('Unit test helper functions', function () {
    describe('queryParamsToString', function () {
        it('should return expected string', function () {
            const queryParams = {category: "", users: ["biocarl,maryarm"], "start-date": "13.09.2008", "end-date": "12.11.2022"};
            assert.equal(
                "?category=&users=biocarl,maryarm&start-date=13.09.2008&end-date=12.11.2022&",
                queryParamsToString(queryParams));
        });
    });
});