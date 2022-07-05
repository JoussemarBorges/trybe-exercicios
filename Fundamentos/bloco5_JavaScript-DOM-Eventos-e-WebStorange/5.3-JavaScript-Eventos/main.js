const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Resposta: Por causa da classe 'tech' que tem um atributo "transform: translateY" que altera a posição
// do objeto em relação as configurações iniciais, ness caso está alterando em "-20%".

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClasstech(event) {
  const elementTech = document.querySelector(".tech");

  elementTech.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
}

firstLi.addEventListener('click', addClasstech);
secondLi.addEventListener('click', addClasstech);
thirdLi.addEventListener('click', addClasstech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

    // Desenvolvido por mim:
// function alteraTextoTech (event){
//     // Encontrar qual elemento está selecionado;
//     const elementTechSelect = document.querySelector('.tech');

//     elementTechSelect.innerText = event.target.value;

// }

// input.addEventListener('change', alteraTextoTech);


    // Opção no Gabarito:

    input.addEventListener('input', function(event) {
        const techElement = document.querySelector('.tech');
        techElement.innerText = event.target.value;
      });

    // Na minha versão o texto só altera após sair da caixa, na versão do Gabarito o texto é inserido
    // à medida que é digitado na caixa de texto.


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

    //   minha solução:

// function redirectWebPage (){

//         // window.location.assing altera (substitui) o local da janela do browser para o endereço
//         // repassado como parâmetro.
//         window.location.assign('https://google.com');
// }
//     // atribuindo o Listener ao elemento:
//         myWebpage.addEventListener('dblclick', redirectWebPage);

    // Opção do Gabarito:

    myWebpage.addEventListener('dblclick', function() {
        window.location.replace('https://blog.betrybe.com/');
      });

    
    // A diferença que eu notei é que com o assing é possível voltar para a página anterior
    //  usando a opção voltar do browser, enqunato com o replace essa opção fica indisponível.
    

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

    //   minha solução:

function colorChange (event){

    event.target.style.color = 'green';
}

myWebpage.addEventListener('mouseover', colorChange);

// solução no gabarito, porém voltando a cor para branco:

myWebpage.addEventListener('mouseleave', function(event){

    event.target.style.color = 'white';
});

      
// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
