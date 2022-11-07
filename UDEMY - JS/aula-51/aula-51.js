// ESCOPO LÉXICO

const nome = 'Carol';

function falaNome() {
    console.log(nome);
}
falaNome();

function usaFalaNome() {
    falaNome();
}
usaFalaNome();