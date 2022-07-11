function clearFields() {
const allInputs = document.querySelectorAll('input');
const textArea = document.querySelector('#textarea-1');
for (let index = 0; index < allInputs.length; index += 1) {
 
    const userInput = allInputs[index];
    userInput.value = '';
    userInput.checked = false;
}
textArea.value = '';
}

function enableButton() {
    const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#checkbox2');

    submitBtn.disabled = !agreement.checked;
}

function textInputValidation () {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;

    const name = documento.querySelector('#nome').value.length;
    const invalidName = name < 10 || name > 40;

    const textArea1 = document.querySelector('#textarea-1').value.length;
    const invalidTextArea = textArea1 > 500;

    if (invalidEmail || invalidName || invalidTextArea) {
        return false;
    }
    else {
        return true;
    }
}


window.onload = function() {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const validation = textInputValidation();
        if (validation === false) {
            alert('Dados inválidos')
        } else {
            alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
        }
    });

    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);

    const agreement = document.querySelector('#checkbox2');
    agreement.addEventListener('change', enableButton);
};