/* Verificador de tamanho de array */


let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = array[0];
let smaller = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > bigger.length) {
        bigger = array[index];
    }
}
console.log(bigger);

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < smaller.length) {
        smaller = array[index];
    }
}
console.log(smaller);