const valorCusto = 5;
const valorVenda = 12;

const valorCustoTotal = valorCusto * 1.20;

const lucroUnitario = valorVenda - valorCustoTotal;


if (valorCusto < 0 || valorVenda < 0){
    console.log("Valores de entrada incorretos");
}

else{
    console.log('O lucro na venda de 1000 unidades é: R$',lucroUnitario * 1000);
}


