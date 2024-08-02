"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gare_1 = require("../../handlers/gare");
var mockRequest = {
    params: {
        uic: "0087286542",
    },
};
var mockResponse = {
    status: jest.fn(),
    send: jest.fn,
};
describe("getItemsByStation", function () {
    test("Should retrieve all items for a specific uic", function () {
        process.env.CSVFILE = "src/__mock__/objets-trouves-mock.csv";
        (0, gare_1.getItemsByStation)(mockRequest, mockResponse);
        var result = [
            "Carte Vitale",
            "Sacoche pour ordinateur, photo, vidéo",
            "Foulard, écharpe",
        ];
    });
});
