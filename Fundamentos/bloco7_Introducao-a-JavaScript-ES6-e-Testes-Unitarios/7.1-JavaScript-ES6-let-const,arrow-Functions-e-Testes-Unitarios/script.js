// function userInfo() {
//     var userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail

//   }
  
//   userInfo();

//   console.log(userEmail);

// if (true) {
//     // inicio do escopo do if
//     const userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// const userName = 'Isabella';
// const userName = 'Lucas';
// console.log(userName); // Resultado: Lucas

// const technologies = ['Javascript', 'CSS', 'HTML'];
// // technologies.push('React');
// // console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// const myName = 'Joussemar';
// console.log(`Welcome ${myName}!`); 
// // Welcome Joussemar

// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

//Arrow Functions:

// Função normal:

// function soma(num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(2, 2));

// // Função em uma variável:

// const soma = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(2, 2));

// Função em uma variável com arrow function:

// const soma = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(soma(2, 2));

// arrow function em uma linha - Dispensa o a nomeação da função, as chaves
// e o return:

// const soma = (num1, num2) => num1 + num2;

// console.log(soma(2, 2));

// function contaPalavras(frase) {
//     return frase.split(' ').length;
// }

// console.log(contaPalavras('Fala Trubo, Beleza?'));

// const contaPalavras = frase => frase.split(' ').length;

// console.log(contaPalavras('Fala Trubo, Beleza?'));

// function objetoPessoa (nome, idade) {
//     return {
//         nome: nome,
//         idade: idade
//     }
// }

// console.log(objetoPessoa('Joussemar', 38));

// const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});

// console.log(objetoPessoa('Joussemar', 38));

// const printName = () => { 
//     const myName = 'Joussemar';
//     return myName;
// };

// console.log(printName());

// const printName = () => 'Joussemar';

// console.log(printName());

// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));

// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

//// Ternary operator:

//operação normal:

// const checkIfelse = (age) => {
//     if (age >=18) {
//         return 'Você tem idade para dirigir';
//     } else {
//         return 'Você não tem idade para dirigir';
//     }
// }

// console.log(checkIfelse(16));

// const checkTernary = (age) => (age >= 18 ? 'Você tem idade para dirigir' : 'Você não tem idade para dirigir');

// console.log(checkTernary(18));

// const age = 17;

// console.log(age >= 18 && "Você já pode dirigir");
