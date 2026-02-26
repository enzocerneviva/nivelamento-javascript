// Exercício 1

let word = "gatinho"

function converterParaMaiusculas (palavra) {
    return palavra.toUpperCase();
}

console.log(`Palavra: ${word} | Em UpperCase: ${converterParaMaiusculas(word)}\n`)

const converterParaMaiusculasArrow = (palavra) => palavra.toUpperCase;

console.log(`Palavra: ${word} | Em UpperCase com Arrow Function: ${converterParaMaiusculasArrow(word)}\n`)

// Exercício 2

function processarDados (x, y, callback) {
    result = x + y;
    console.log(`Resultado: ${result}`);
    callback();
}

processoConcluido = () => console.log("Processo Concluído!"); 

processarDados(10, 20, processoConcluido);

let usuarios = {
    enzo: 1,
    maria: 2
}

async function buscarUsuario (usuario) {
    setTimeout(() => {}, 1000)
    for (user of usuarios) {
        if (String.toString(user) == usuario) {
            return {nome: String.toString(user), id: usuarios[user]}
        }
    }
    return null;
}

buscarUsuario("enzo").then(result => {
    console.log(result);
})

