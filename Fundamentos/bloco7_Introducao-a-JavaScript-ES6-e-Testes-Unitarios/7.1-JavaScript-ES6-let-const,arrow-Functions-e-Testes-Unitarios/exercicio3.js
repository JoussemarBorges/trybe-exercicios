// const fatorial = (n) => {
    
//     let resultado = 1;

//     for (let index = 2; index <= n; index += 1) {

//         resultado *= index;
//     }

//     return resultado;
// }

// console.log(fatorial(5));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(5));