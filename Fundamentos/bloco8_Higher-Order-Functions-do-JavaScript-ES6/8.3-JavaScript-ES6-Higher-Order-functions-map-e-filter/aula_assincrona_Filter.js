// // const arr = ['Ana', 'Pedro', 'Giovana' ];

// // // arr.filter((elemento, index, array) => console.log(`Elemento: ${elemento}, Índice: ${index}, Array: ${array}`));

// // const filtered = arr.filter((elemento) => elemento === 'Ana');

// // console.log(filtered);

// const notaEstudadentes = [
//     {
//         nome: 'Joicy',
//         nota: '100'
//     },
//     {
//         nome: 'Ronald',
//         nota: 50
//     },
//     {
//         nome: 'Joel',
//         nota: 80
//     },
//     {
//         nome: 'Ana',
//         nota: 90
//     },
//     {
//         nome: 'Carol',
//         nota: 70
//     }
// ];

// const estudantesComAprovacao = notaEstudadentes.filter((element) => element.nota >= 80);

// console.log(estudantesComAprovacao);

// const estudantesSemAprovacao = notaEstudadentes.filter((element) => !(element.nota >= 80));

// console.log(estudantesSemAprovacao);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter((number) => number % 2 ===0);

// console.log(isEven);

// console.log(verifyEven);

// const isEven2 = numbers.filter(verifyEven);

// const objPeople = [
//     { name: 'José', age: 21 },
//     { name: 'Lucas', age: 19 },
//     { name: 'Maria', age: 16 },
//     { name: 'Gilberto', age: 18 },
//     { name: 'Vitor', age: 15 },
//   ];
  
//   const verifyAgeDrive = (arrayOfPeople) => (arrayOfPeople.filter((people) => !(people.age >= 18)));

//   console.log(verifyAgeDrive(objPeople));

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);

const newListStudents = removeStudentByName('Wilson', arrayMyStudents);

console.log(newListStudents);