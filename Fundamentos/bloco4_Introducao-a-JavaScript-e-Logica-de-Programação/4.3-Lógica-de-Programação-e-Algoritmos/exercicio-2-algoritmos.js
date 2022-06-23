let word = 'Joussemar';

let invertword = '';

//Desenvolvi:
// for(let index = word.length - 1; index >= 0; index -=1){
//     invertword += word[index];
// }

// console.log(invertword);

//2ª opção do gabarito

invertword = word.split('').reverse().join('');

console.log(invertword);
