const substituirNome = (nome) => {
    const frase = 'Tryber x aqui!';

    return frase.replace('x', nome)
};

const newString = (func) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];

    let result = `${func}
    Minhas três habilidades são: `;

    skills.forEach((skill) => {
        result = `${result}
        - ${skill}`;
    });
    return result;
}

console.log(newString(substituirNome('Joussemar')));