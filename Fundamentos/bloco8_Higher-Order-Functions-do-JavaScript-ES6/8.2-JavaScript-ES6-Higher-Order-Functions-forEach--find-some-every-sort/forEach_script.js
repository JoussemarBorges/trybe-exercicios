// const arrayOfValues = ["josé", 50, 0.25, { comida: "Chocolate" }];
// arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   //   console.log('Cada elemento do array:', element);
//   //   console.log('Index, posição do elemento:', indexOfTheArray);
//   //   console.log('Array percorrido:', theEntireArray);
//   // console.log(`O elemnto ${element} tem o index ${indexOfTheArray}`);
// });

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multiplefor2 = (element) => {
//     console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multiplefor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   // Adicione seu código aquil

//   console.log(emailListInData.forEach(showEmailList));

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => numbers.find((number) => number % 5 === 0 && number % 2 === 0);

// console.log(findDivisibleBy3And5())

// const isEven2 = numbers.find((number) => number % 3 === 0);

// console.log(isEven2); // 30

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   // Adicione seu código aqui:
//   const name = names.find((nome, index) => nome.length === 5);

//   return name;
// }

// console.log(findNameWithFiveLetters());

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((item) => item.id === id);
    
  }
  
  console.log(findMusic('31031685'))


  const estados = ['Minas', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']

  estados.forEach((not, index) => console.log(index));

  estados.