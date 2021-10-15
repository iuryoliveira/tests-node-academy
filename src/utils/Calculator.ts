class Calculator {
  static Sum(a: number, b:number): number {
    return a + b;
  }

  static Subtract(a: number, b:number): number {
    return a - b;
  }

  static Multiplication(a: number, b:number): number {
    return a * b;
  }

  static Division(a: number, b:number): number {
    if (b === 0) {
      throw new Error("Cannot divide by 0.");
    }
    return a / b;
  }
}

export { Calculator }