import request from "supertest";
import { app } from "../";

describe("[POST] /calculator/subtract", () => {
  it("should subtract 5 - 10 equal -5", async () => {
    const response = await request(app)
      .post("/calculator/subtract")
      .send({
        a: 5,
        b: 10
      })
      .expect(200);

    expect(response.body).toMatchObject({
      result: -5
    });
  });
});

describe("[POST] /calculator/sum", () => {
  it("should sum 3 + 4 equal 7", async () => {
    //arrange
    const a = 3, b = 4;
    const expectedResult = 7;

    //act
    const response = await request(app)
      .post("/calculator/sum")
      .send({
        a,
        b
      })
      .expect(200);

    //assert
    expect(response.body).toMatchObject({
      result: expectedResult
    });
  });
});