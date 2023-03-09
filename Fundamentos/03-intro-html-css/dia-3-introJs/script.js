let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função

function clientVerify(name) {
    let isClient = false;
    if (typeof name !== 'string') {
        return 'Entrada inválida, string obrigatório'
}
else {
    isClient = true;
}
return isClient;
}

function addClient(name) {
    if (clientVerify(name) == true) {
        clientesTrybeBank.push(name);
        return `Cliente >>${name}<< adicionado com sucesso.`

    }
}

function rmvClient(name) {
    if (clientVerify(name) == true) {
        for (index = 0; index < clientesTrybeBank.length; index += 1) {
            if (clientesTrybeBank[index] == name) {
                clientesTrybeBank.splice(index, 1)
                return `Cliente >>${name}<< removido com sucesso.`
            }
        }
    }
}

console.log(addClient('Leo'));
console.log(clientesTrybeBank);
console.log(rmvClient('Leo'));
console.log(clientesTrybeBank);



