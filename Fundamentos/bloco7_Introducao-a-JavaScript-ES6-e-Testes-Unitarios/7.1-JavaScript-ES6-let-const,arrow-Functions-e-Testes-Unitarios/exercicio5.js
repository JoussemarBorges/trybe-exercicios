
const buttonTest = document.getElementById('button_test');
const text = document.getElementById('text');
let clickCount = 0;

buttonTest.addEventListener('click', () => text.innerHTML = clickCount += 1);

console.log(clickCount);