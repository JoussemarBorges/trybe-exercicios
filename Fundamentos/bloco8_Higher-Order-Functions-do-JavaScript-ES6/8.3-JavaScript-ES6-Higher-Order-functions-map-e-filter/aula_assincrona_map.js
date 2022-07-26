// const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

// // const novasPessoas = pessoas.map((element) => element.toUpperCase());
// // console.log(novasPessoas);

// const novasPessoas = pessoas.map((element) => {
//     const registro = {};

//     registro.nome = element;
//     registro.empresa = 'Trybe';
//     return registro;
// });

// console.log(novasPessoas);

// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((element) => element > 0 ? element * -1 : element);

// console.log(negativeNumbers);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const productsAndPrices = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
));

const listProducts = productsAndPrices(products, prices);

console.log(listProducts);

