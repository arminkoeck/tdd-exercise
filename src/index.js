import "./style.css";

export function capitalize(string) {
  return string
    .split("")
    .map((char) => char.toUpperCase())
    .join("");
}

export function reverseString(string) {
  let arr = string.split("");
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join("");
}

export let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export function caesarCipher(string, shift) {
  return string
    .split("")
    .map((char) => {
      let charCode = char.charCodeAt();
      let newCode = charCode + shift;
      if (charCode >= 65 && charCode <= 90) {
        return newCode > 90
          ? String.fromCharCode(newCode - 26)
          : String.fromCharCode(newCode);
      } else if (charCode >= 97 && charCode <= 122) {
        return newCode > 122
          ? String.fromCharCode(newCode - 26)
          : String.fromCharCode(newCode);
      } else {
        return char;
      }
    })
    .join("");
}

export function analyzeArray(arr) {
  let obj = {};
  obj.average = arr.reduce((a, b) => a + b, 0) / arr.length;
  obj.min = arr.reduce((a, b) => (a > b ? b : a), arr[0]);
  obj.max = arr.reduce((a, b) => (a > b ? a : b), arr[0]);
  obj.length = arr.length;
  return obj;
}
