const piece = "TORRE_forte"

//const piece = text.toLowerCase

switch (piece.toLowerCase()){
    
    case "rei":
    console.log("Uma casa por vez em todas as direções");
    break;

    case  "rainha":
    console.log("Ao longo da horizontal, vertical ou diagonais, quantas casas quiser mas não pode pular outra peça");
    break;

    case "bispo":
    console.log("Move-se quantas casas quiser nas diagonais. Se iniciar em uma casa branca, só poderá se mover pelas brancas e o mesmo vale para o que começar em uma casa preta");
    break;

    case "peão":
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode se mover duas casas");
    break;

    case "torre":
    console.log("Em linha reta para a horizontal ou vertical, quantas casas quiser");
    break;

    case "cavalo":
    console.log("Movimento em L ou 'um-dois'. O único que pode saltar sobre as demais peças, inimigas ou amigas");
    break;

    default:
    console.log("Não foi identificado uma peça de xadrez válida");
    break;
}
