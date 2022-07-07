// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.

// let soma = 0


// for (let index = 35; index <=105; index +=1){
//     soma += index;
// }

// console.log(soma);


// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.


// let contador = 0;

// for (let index = 15; index <=155; index +=1){
//     if (index % 3 == 0){
//         contador += 1;
//     }
// }
// if (contador >50){
//     console.log("Maior que 50");
// }
// else{
//     console.log("Menor que 50");
// }

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  
//que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.



let opcoes = ['pedra', 'papel', 'tesoura'];



let jogador1 = Math.floor(Math.random () * opcoes.length);


let jogador2 = Math.floor(Math.random () * opcoes.length);

jogador1 = opcoes[jogador1];

jogador2 = opcoes[jogador2];


if (jogador1 === 'pedra' && jogador2 === 'tesoura'){
    console.log("jogador 1 venceu");
}

else if (jogador1 === 'pedra' && jogador2 === 'papel'){
    console.log("jogador 2 venceu");
}
else if (jogador1 === 'papel' && jogador2 === 'tesoura'){
    console.log("jogador 2 venceu");
}
else if (jogador1 === 'papel' && jogador2 === 'pedra'){
    console.log("jogador 1 venceu");
}
else if (jogador1 === 'tesoura' && jogador2 === 'papel'){
    console.log("jogador 1 venceu");
}
else if (jogador1 === 'tesoura' && jogador2 === 'pedra'){
    console.log("jogador 2 venceu");
}

else {
    console.log('Empate');
}




// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.
// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
