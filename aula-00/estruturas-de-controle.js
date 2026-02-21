// Exercício 1

function gerarNumeroAleatorio (min, max) {
    return Math.floor((Math.random() * (max - min + 1))) + min;
}

let numeroAleatorio = gerarNumeroAleatorio(-100, 100)

if(numeroAleatorio > 0) {
    console.log(`O número ${numeroAleatorio} é positivo`);
} else if (numeroAleatorio < 0) {
    console.log(`O número ${numeroAleatorio} é negativo`);
} else {
    console.log(`O número ${numeroAleatorio} é zero`);
}

console.log("\n");

for (let i = 0; i < 10; i++) {
    console.log(i+1);
}

console.log("\n");

let num = 1;
let acumulador = 0;

while (num != 6) {
    acumulador += num;
    num += 1;
    console.log(`Valor atual: ${acumulador}`);
}

// Exercício 2

let opcaoDoUsuario = "A";
let sair = "S";

do {
    switch(opcaoDoUsuario){
        case "A":
            console.log("O usuário escolheu a opção A");
            break;
        case "B":
            console.log("O usuário escolheu a opção B");
            break;
        default:
            console.log("Opção inválida");
    }
} while(sair != "S");