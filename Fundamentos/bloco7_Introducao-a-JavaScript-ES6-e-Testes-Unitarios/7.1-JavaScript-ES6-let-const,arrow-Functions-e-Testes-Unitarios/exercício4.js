const findLongestWord = (string) => {
    const array = string.split(' ');
    
    let maxLength = 0;

    let longestWord = '';

    for ( let index = 0; index < array.length; index += 1 ) {
        if ( array[index].length > maxLength ) {
            maxLength = array[index].length;
            longestWord = array[index];
        }
    }
    return longestWord;
}

console.log(findLongestWord('O que aconteceu com Joussemar'));

const longestWord = (text) => text.split(' ').sort((A, B) => B.length - A.length)[0];

console.log(longestWord('O que aconteceu com Joussemar'));