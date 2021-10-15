import { Calculator } from "../utils/Calculator";

describe("Calculator operations tests", () => {
  it("should be able to create instance of Calculator", () => {
    const calculator = new Calculator();
    expect(calculator).toBeInstanceOf(Calculator);
  });

  describe("Sum operation tests", () => {
    it("should sum 1 + 2 equal 3", () => {
      //arrange
      const a = 1, b = 2;
      const expectedResult = 3;

      //act
      const result = Calculator.Sum(a, b);

      //assert
      expect(result).toBe(expectedResult);
    });

    it("should sum 1 + (-3) equal -2", () => {
      const a = 1, b = -3;
      const expectedResult = -2;

      const result = Calculator.Sum(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("Subtract operation tests", () => {
    it("should subtract 4 - 3 equal 1", () => {
      const a = 4, b = 3;
      const expectedResult = 1;

      const result = Calculator.Subtract(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("Multiplication operation tests", () => {
    it("should multiplicate 5 * (-4) equal -20", () => {
      const a = 5, b = -4;
      const expectedResult = -20;

      const result = Calculator.Multiplication(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("Division operation tests", () => {
    it("should divide 24 / 4 equal 6", () => {
      const a = 24, b = 4;
      const expectedResult = 6;

      const result = Calculator.Division(a, b);

      expect(result).toBe(expectedResult);
    });

    it("should not divide by 0", () => {
      const a = 2, b = 0;
      const expectedResult = 0;

      expect(() => {
        Calculator.Division(a, b);
      }).toThrowError();
    });
  });
});