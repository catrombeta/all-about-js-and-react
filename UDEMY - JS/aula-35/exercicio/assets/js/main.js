const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let createdTag = document.createElement(tag);
    createdTag.innerHTML = texto; // É possível utilizar innerText porque não há tags de html, apenas textos. MAS quando utilizar tags precisa ser innerHTML
    div.appendChild(createdTag);
}

container.appendChild(div);

