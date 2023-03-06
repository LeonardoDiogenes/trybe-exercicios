/* Manipulação array */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiply = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index < (numbers.length - 1)) {
        multiply.push(numbers[index] * (numbers[index + 1]));
    }
    else {
        multiply.push(numbers[index] * 2);
    }
}
console.log(multiply);


/* Retângulo */

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};

/* Outras figuras */


let size = 5;
let symbol2 = '*';
let inputLine2 = '';

for (let index = 0; index <= size; index += 1) {
    console.log(inputLine2);
    inputLine2 += symbol2;
}

