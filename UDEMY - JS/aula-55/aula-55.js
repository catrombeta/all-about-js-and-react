// FUNCÇÕES IMEDIATAS - FUNÇÕES AUTOINVOCADAS (IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// ----------------------------------------------------------------

(function(idade, peso, altura) {
    const nome = "Luiz";
    function criaNome(sobrenome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Miranda'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

const nome = "Qualquer nome";

// OU SEJA, EU CRIO UMA FUNÇÃO SEM NOME PARA PROTEGER DO MEU ESCOPO GLOBAL. COMO PODE PERCEBER, ELA NÃO ESTÁ RECEBENDO A CONST NOME DO ESCOPO GLOCAL E SIM APENAS A CONST NOME ESCRITA DENTRO DO ESCOPO DA FUNÇÃO SEM NOME.

// ESSA FUNÇÃO PRECISA ESTAR ENTRE PARÊNTESES!!!!