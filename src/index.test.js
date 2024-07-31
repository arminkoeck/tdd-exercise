import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index.js";

// capitalize
test("capitalize a string", () => {
  expect(capitalize("hello")).toBe("HELLO");
});

// reverse
test("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

// calculator
test("add two numbers", () => {
  expect(calculator.add(5, 11)).toBe(16);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(34, 26)).toBe(8);
});

test("multiplay two numbers", () => {
  expect(calculator.multiply(4, 7)).toBe(28);
});

test("divide two numbers", () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

// ceasarCipher
test("basic shift", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

test("end of alphabet starts from beginning", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("test case sensitivity", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation and spaces do not count", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// analyzeArray
test("analyze an array", () => {
  let testObject = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(testObject);
});
