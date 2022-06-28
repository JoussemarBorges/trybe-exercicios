// const angulo1 = 60;
// const angulo2 = 60;
// const angulo3 = 60;

// if (angulo1 <0 || angulo2 <0 || angulo3 <0){
//     console.log("Algum dos ângulos é invalido");
// }
// else if (angulo1 + angulo2 + angulo3 === 180){
//     console.log("true");
// }
// else {
//     console.log("false");
// }

function angulosDeUmTriangulo(angulo1, angulo2, angulo3){
    if (angulo1 <0 || angulo2 < 0 || angulo3 <0){
        return "Um dos ângulos fornecidos é inválido";
    } else if (angulo1 + angulo2 + angulo3 === 180){
        return true;
    } else {
        return false;
    }
}

console.log(angulosDeUmTriangulo(60, 60, 60));

console.log(angulosDeUmTriangulo(60, 60, 80));

console.log(angulosDeUmTriangulo(60, 60, -40));