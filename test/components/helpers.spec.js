import { inflateForest } from  "../../src/components/helpers.js";
import assert from "assert";


describe('Unit test tree helper functions', function () {
    describe('inflateTree', function () {
        it('should return tree structure', function () {
            const inputStructure =
                [
                    {category: "unix", count: 1 },
                    {category: "vim", count: 1 },
                    {category: "windows", count: 1 },
                    {category: "wiremock", count: 1 },
                    {category: "workshop", count: 1 },
                    {category: "workshop,tips", count: 1 },
                    {category: "workshop,retro", count: 1 },
                    {category: "workshop,retro,nested", count: 1 },
                ];

            const expectedStructure =
                [
                    {category: "unix", path: "unix", count: 1 },
                    {category: "vim" , path: "vim", count: 1 },
                    {category: "windows" , path: "windows", count: 1 },
                    {category: "wiremock" , path: "wiremock", count: 1 },
                    {category: "workshop", path: "workshop", count: 4,
                        children: [
                            { category: "tips" ,path: "workshop,tips", count: 1 },
                            { category: "retro",path: "workshop,retro", count: 2,
                                children:
                                    [
                                        {category: "nested" , path: "workshop,retro,nested", count: 1 }]}
                        ]
                    },
                ];
            assert.deepEqual(expectedStructure, inflateForest(inputStructure));
        });
    });
});
