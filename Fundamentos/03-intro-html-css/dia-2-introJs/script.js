let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
let maior = 0;
let impares = 0;
let menor = 999999;
let lista = [];

for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sum += numbers[index];
    media = sum/numbers.length;
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
    if (numbers[index] % 2 != 0) {
        impares += 1;
    }
    if (numbers[index] < menor) {
        menor = numbers[index]
    }
    }

for (index = 0; index < 25; index += 1) {
    lista.push(index + 1)
    console.log(lista[index]);
    console.log(`Dividido por 2: ${lista[index]/2}`);

}


if (sum > 20) {
    console.log('Valor maior que 20.');
}
else {
    console.log('Valor menor que 20.');
}

console.log(`Soma: ${sum}`);
console.log(`Média: ${media}`);
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);

if (impares == 0) {
    console.log('Sem números ímpares.');
}
else {
    console.log(`${impares} números ímpares.`);
}

