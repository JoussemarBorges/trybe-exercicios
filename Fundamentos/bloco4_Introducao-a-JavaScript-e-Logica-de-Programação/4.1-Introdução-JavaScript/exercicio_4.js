const a = 0;


if (a > 0){
    console.log("Positivo");
}
else if (a < 0){
    console.log("Negativo");
}
else {
    console.log("zero");
}

function positiveNegative (numero){
    if (numero >0){
        return "positive";
    } else if (numero < 0) {
        return "negative";
    } else { 
        return 0}
}

console.log(positiveNegative(10));

console.log(positiveNegative(-10));

console.log(positiveNegative(0));