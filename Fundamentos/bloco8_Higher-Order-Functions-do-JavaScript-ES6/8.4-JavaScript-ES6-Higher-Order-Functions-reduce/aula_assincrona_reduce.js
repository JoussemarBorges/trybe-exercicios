// const numbers = [1, 32, 44, 2, 3];

// const iteracoesDoReduce = numbers.reduce((acc, curr) => {
//     console.log(`O valor atual de curr é ${curr} e o valor de acc é ${acc}`);

//     // return acc
// });

// console.log(`O resultado final é ${iteracoesDoReduce}`);


// const totalsum = numbers.reduce((acc, curr, currentIndex, array) => {

//     console.log(`acc: ${acc}; curr: ${curr}; currentIndex: ${currentIndex}; array: ${array}`);
//     return acc + curr;
// },30);

// const sumNumbers = (acc, curr) => acc + curr;

// const totalSum = numbers.reduce(sumNumbers, 30);

// console.log(totalSum);

// const numbers = [50, 85, -30, 3, 15];

// // const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// // const bigger = console.log(numbers.reduce(getBigger, 0));

// // console.log(bigger);

// const getBigger = numbers.reduce((bigger, number) => {
    
//     console.log(`${bigger} & ${number}`);

//     const answare = bigger > number ? bigger : number;
    

//     return answare;
// });

// console.log(getBigger);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (acumulador, number) => acumulador + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);

// console.log(sumNumbers(numbers));

const outraForma = numbers.reduce((accumulador, number) => {
    
    const depurador = number % 2 === 0 ? number : 0;

    return accumulador + depurador;

});

console.log(outraForma);
