import { Request, Response } from "express";
import { getItemsByStation } from "../../handlers/gare";

const mockRequest = {
  params: {
    uic: "0087286542",
  },
} as unknown as Request;

const mockResponse = {
  status: jest.fn(),
  send: jest.fn,
} as unknown as Response;

describe("getItemsByStation", () => {
  test("Should retrieve all items for a specific uic", () => {
    process.env.CSVFILE = "src/__mock__/objets-trouves-mock.csv";
    getItemsByStation(mockRequest, mockResponse);
    const result = [
      "Carte Vitale",
      "Sacoche pour ordinateur, photo, vidéo",
      "Foulard, écharpe",
    ];
  });
});
