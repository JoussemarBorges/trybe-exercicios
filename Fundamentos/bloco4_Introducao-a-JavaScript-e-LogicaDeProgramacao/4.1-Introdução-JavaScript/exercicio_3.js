const a = 35;
const b = 13;
const c = 25;

if (a > b && a > c){

    console.log(a);
}

else if (b > a && b > c){
    console.log(b);
}
else if (c > a && c > b){
    console.log(c);
}

function maiorDeTres (num1, num2, num3){
    if (num1> num2 && num1 > num3){
        return "O maior número é: " + num1;
    } else if (num2> num1 && num2 > num3){
        return "O maior número é: " + num2;
} else{
    return "O maior número é: " + num3;
}

}

console.log(maiorDeTres(2, 4, 6));

console.log(maiorDeTres(2, 10, 4));

console.log(maiorDeTres(1598, 4, 2));