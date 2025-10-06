// Bug 1: função de soma retorna string
function soma(a, b) {
    return a + b + ""; // Bug 1
}

// Bug 2: função que busca usuário retorna erro
function buscarUsuario(id) {
    const usuarios = [{id: 1, nome: "Maria"}, {id:2, nome: "João"}];
    return usuarios[id]; // Bug 2
}

// Bug 3: função de divisão não trata divisão por zero
function dividir(a, b) {
    return a / b; // Bug 3
}

console.log(soma(2,3)); 
console.log(buscarUsuario(1)); 
console.log(dividir(5,0)); 
